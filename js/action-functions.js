/**
 * General functions used across the different "action item" pages (e.g. adding locations, submitting forms)
 */
var functionsMap = {
    "company": submitCompany,
    "job": submitJob
};

$(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var item = urlParams.get("item");
    $("#formContainer").on("click", "#addLocationBtn", function () {
        console.log("Add location button clicked");
        if ($("#autocomplete").val().length < 1) {
            $("#autocomplete").addClass("incomplete-field");
        }
        else {
            var selector = "#" + item + "LocationsTags";
            $(selector).append("<div class='location-tag'" +
                "'><p>" + $("#autocomplete").val() + "</p><button type='button' class='remove-location'>&times;</button></div>");
            $(selector).css("display", "block");
            $('[data-toggle="tooltip"]').tooltip();
        }
    });

    $("#formContainer").on("change", "#autocomplete", function () {
        if ($("#autocomplete").hasClass("incomplete-field")) {
            $("#autocomplete").removeClass("incomplete-field");
        }
        // If autocomplete field is blank but the city and state fields were filled in, clear them
        if ($("#autocomplete").val().length < 1) {
            $("#locality").val("");
            $("#administrative_area_level_1").val("");
        }
    });

    $("#formContainer").on("click", "#submitBtn", function () {
        functionsMap[item]();
    });

    $("body").on("click", ".remove-location", function () {
        $(this).parent().remove();
        var item = urlParams.get("item");
        var selector = "#" + item + "LocationsTags";
        if ($(selector).find(".location-tag").length < 1) {
            $(selector).css("display", "none");
        }
    });
});

function submitCompany() {
    var companyWebsite = $("input[name='company_website']").val();
    var companyName = $("input[name='company_name']").val();
    var companyGlassdoor = $("input[name='company_glassdoor']").val();
    var currentlyHiring = $("input[name='currently_hiring']").prop("checked") ? 1 : 0;
    var numberEmployees = $("#numberEmployees").val().length > 0 ? $("#numberEmployees").val() : null;
    var remoteWork = $("input[name='remote_work']").prop("checked") ? 1 : 0;
    $.ajax({
        url: "ajax/saveCompany.php",
        method: "post",
        data: {
            company_website: companyWebsite,
            company_name: companyName,
            company_glassdoor: companyGlassdoor,
            currently_hiring: currentlyHiring,
            number_of_employees: numberEmployees,
            remote_work: remoteWork
        },
        dataType: "json",
        success: function (response) {
            /* Upon successful insertion of new company, show the status message modal and also add
            locations to "located_in" table */
            console.log(response);
            console.log("Successfully inserted company with new ID: " + response["id"]);
            if (response["status"] === 0) {
                var locationsArray = $(".location-tag").toArray();
                locationsArray = $.map(locationsArray, function (value, index) {
                    return $(value).find("p").text();
                });
                console.log(locationsArray);
                $.ajax({
                    url: "ajax/locatedIn.php",
                    method: "post",
                    data: {
                        company_id: response["id"],
                        company_locations: locationsArray
                    },
                    success: function (data) {
                        console.log(data);
                        $("#statusModal").find(".modal-title").text("Success");
                        $("#statusModal").find(".modal-body").find("p").text("Successfully inserted company: " + response["company_id"]);
                        $("#statusModal").find(".modal-footer").find("button").eq(0).text("Add Another Company");
                        $("#statusModal").find(".modal-footer").find("button").eq(0).addClass("action-item");
                        $("#statusModal").find(".modal-footer").find("button").eq(0).attr("data-action", "addCompany");
                        $("#statusModal").find(".modal-footer").find("button").eq(1).text("Go to Company Page");
                        $("#statusModal").find(".modal-footer").find("button").eq(1).addClass("view-item");
                        $("#statusModal").find(".modal-footer").find("button").eq(1).attr("data-action", "viewCompany");
                        $("#statusModal").find(".modal-footer").find("button").eq(1).attr("data-id", response["company_id"]);
                        $("#statusModal").modal("show");
                    }
                });
            }
        }
    });
};

function submitJob() {
    console.log("submitJob function called");
    var jobWebsite = $("input[name='job_url']").val();
    var jobTitle = $("input[name='job_title']").val();
    var companyID = $("input[name='company_id']").val().length > 0 ? $("input[name='company_id']").val() : -1;
    var hiringCompany = $("input[name='hiring_company']").val();
    var remoteWork = $("input[name='remote_work']").prop("checked") ? 1 : 0;
    $.ajax({
        url: "ajax/saveJob.php",
        method: "post",
        data: {
            hiring_company: hiringCompany,
            remote_work: remoteWork,
            company_id: companyID,
            job_url: jobWebsite,
            job_title: jobTitle
        },
        dataType: "json",
        success: function (response) {
            /* Upon successful insertion of new company, insert this new job, associating it with the company */
            console.log(response);
            if (response["status"] === 0) {
                console.log("Successfully inserted job with new ID: " + response["id"]);
                // var locationsArray = $(".location-tag").toArray();
                // locationsArray = $.map(locationsArray, function (value, index) {
                //     return $(value).find("p").text();
                // });
                // console.log(locationsArray);
                // $.ajax({
                //     url: "ajax/locatedIn.php",
                //     method: "post",
                //     data: {
                //         company_id: response["id"],
                //         company_locations: locationsArray
                //     },
                //     success: function (data) {
                //         console.log(data);
                //         $("#statusModal").find(".modal-title").text("Success");
                //         $("#statusModal").find(".modal-body").find("p").text("Successfully inserted company: " + response["company_id"]);
                //         $("#statusModal").find(".modal-footer").find("button").eq(0).text("Add Another Company");
                //         $("#statusModal").find(".modal-footer").find("button").eq(0).addClass("action-item");
                //         $("#statusModal").find(".modal-footer").find("button").eq(0).attr("data-action", "addCompany");
                //         $("#statusModal").find(".modal-footer").find("button").eq(1).text("Go to Company Page");
                //         $("#statusModal").find(".modal-footer").find("button").eq(1).addClass("view-item");
                //         $("#statusModal").find(".modal-footer").find("button").eq(1).attr("data-action", "viewCompany");
                //         $("#statusModal").find(".modal-footer").find("button").eq(1).attr("data-id", response["company_id"]);
                //         $("#statusModal").modal("show");
                //     }
                // });
            }
        }
    });
}




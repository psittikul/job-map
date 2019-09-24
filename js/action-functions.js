/**
 * General functions used across the different "action item" pages (e.g. adding locations, submitting forms)
 */
var functionsMap = {
    "company": submitCompany,
    "job": submitJob,
    "location": submitLocation
};

$(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var item = urlParams.get("item");
    $("#formContainer").on("click", "#addLocationBtn", function () {
        if ($("#autocomplete").val().length < 1) {
            $("#autocomplete").addClass("incomplete-field");
        }
        else {
            var selector = "#" + item + "LocationsTags";
            $(selector).append("<div class='location-tag'><p>" + $("#autocomplete").val() + "</p><button type='button' class='remove-location'>&times;</button></div>");
            $(selector).css("display", "block");
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
        var selector = "#" + item + "LocationsTags";
        if ($(selector).find(".location-tag").length < 1) {
            $(selector).css("display", "none");
        }
    });

    $("body").on("keyup", "input[name='hiring_company']", function () {
        var query = $(this).val();
        if (query.length < 1) {
            $("#companySuggestions").html("");
            $("input[name='company_id']").val("");
        }
        else {
            searchCompanies(query);
        }
    });
    $("form").on("click", "#companySuggestionsList .dropdown-option", function () {
        console.log($(this).text() + ", ID: " + $(this).attr("data-id"));
        $("input[name='hiring_company']").val($(this).text());
        $("#companySuggestions").html("");
        $("input[name='company_id']").val($(this).attr("data-id"));
    });
});

function submitCompany() {
    var companyWebsite = $("input[name='company_website']").val().length > 0 ? $("input[name='company_website']").val() : null;
    var companyName = $("input[name='company_name']").val();
    var companyGlassdoor = $("input[name='company_glassdoor']").val().length > 0 ? $("input[name='company_glassdoor']").val() : null;
    var currentlyHiring = $("input[name='currently_hiring']").prop("checked") ? 't' : 'f';
    var numberEmployees = $("#numberEmployees").val();
    var remoteWork = $("input[name='remote_work']").prop("checked") ? 't' : 'f';
    var companyID = $("input[name='company_id']").val();
    $.ajax({
        url: "ajax/saveCompany.php",
        method: "post",
        data: {
            company_website: companyWebsite,
            company_name: companyName,
            company_glassdoor: companyGlassdoor,
            currently_hiring: currentlyHiring,
            number_of_employees: numberEmployees,
            remote_work: remoteWork,
            company_id: companyID
        },
        dataType: "json",
        success: function (response) {
            /* Upon successful insertion of new company, show the status message modal and also add
            locations to "company_located_in" table */
            console.log(response);
            if (response["status"] === 0) {
                var locationsArray = $(".location-tag").toArray();
                locationsArray = $.map(locationsArray, function (value, index) {
                    return $(value).find("p").text();
                });
                console.log(locationsArray);
                $("#statusModal").find(".modal-title").text("Success");
                $("#statusModal").find(".modal-body p").text("Successfully saved company information.");
                $("#statusModal").find(".modal-footer .action-btn").eq(0).text("View/Edit This Company");
                $("#statusModal").find(".modal-footer .action-btn").eq(1).text("Add Another Company");
                // TO-DO: clear form
                $("#statusModal").modal("show");
                // $.ajax({
                //     url: "ajax/locatedIn.php",
                //     method: "post",
                //     data: {
                //         object_type: "company",
                //         object_id: response["company_id"],
                //         object_locations: locationsArray
                //     },
                //     success: function (data) {
                //         console.log(data);
                //         $("#statusModal").find(".modal-title").text("Success");
                //         $("#statusModal").find(".modal-body p").text("Successfully saved information for this company");
                //         $("#statusModal").find(".modal-footer .action-btn").eq(0).text("View/Edit This Company");
                //         $("#statusModal").find(".modal-footer .action-btn").eq(1).text("Add Another Company");
                //         // TO-DO: clear form
                //         $("#statusModal").modal("show");
                //     }
                // });
            }
        }
    });
};

function submitJob() {
    var jobWebsite = $("input[name='job_url']").val();
    var jobTitle = $("input[name='job_title']").val();
    var companyID = $("input[name='company_id']").val();
    var hiringCompany = $("input[name='hiring_company']").val();
    var remoteWork = $("input[name='remote_work']").prop("checked") ? 1 : 0;
    var postingDate = $("input[name='posting_date'").val();
    var deadline = $("input[name='deadline']").val();
    var dateApplied = $("input[name='date_applied']").val();
    // Insert/update company first
    $.ajax({
        url: "ajax/saveCompany.php",
        method: "post",
        data: {
            company_name: hiringCompany,
            remote_work: remoteWork,
            currently_hiring: 1,
            company_id: companyID,
        },
        dataType: "json",
        success: function (response) {
            /* Upon successful insertion/updating of new company, insert this new job, associating it with the company */
            console.log(response);
            $.ajax({
                url: "ajax/saveJob.php",
                method: "post",
                data: {
                    company_id: parseInt(response["company_id"]),
                    job_title: jobTitle,
                    job_url: jobWebsite,
                    remote: remoteWork,
                    posting_date: postingDate,
                    deadline: deadline,
                    date_applied: dateApplied
                },
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if (data["status"] === 0) {
                        // Now save the locations associated with this job/company ONLY IF locations have been selected
                        var locationsArray = $(".location-tag").toArray();
                        if (locationsArray.length > 0) {
                            locationsArray = $.map(locationsArray, function (value, index) {
                                return $(value).find("p").text();
                            });
                            console.log(locationsArray);
                            $.ajax({
                                url: "ajax/locatedIn.php",
                                method: "post",
                                data: {
                                    object_id: data["job_id"],
                                    object_locations: locationsArray
                                },
                                success: function (data) {

                                }
                            });
                        }
                        console.log(data);
                        $("#statusModal").find(".modal-title").text("Success");
                        $("#statusModal").find(".modal-body p").text("Successfully saved information for this job");
                        $("#statusModal").find(".modal-footer .action-btn").eq(0).text("View/Edit This Job");
                        $("#statusModal").find(".modal-footer .action-btn").eq(1).text("Add Another Job");
                        // TO-DO: clear form
                        $("#statusModal").modal("show");
                    }
                }
            });
        }
    });
};

function submitLocation() {

}

/**
 * Function to search existing companies as user updates the company name field on the add job page
 * @param {String} query: string to search for amongst existing company names
 */
function searchCompanies(query) {
    $.ajax({
        url: "ajax/searchCompanies.php",
        method: "get",
        data: {
            search: query
        },
        dataType: "json",
        success: function (data) {
            var html;
            if (data["data"].length === 0) {
                html = "";
            }
            else {
                var html = "<ul id='companySuggestionsList' class='dropdown-list'>";
                var companies = data["data"];
                $(companies).each(function (index, value) {
                    html += "<li class='dropdown-option' data-id='" + companies[index]["company_id"] + "'>" + value["company_name"] + "</li>";
                });
                html += "</ul>";
            }
            $("#companySuggestions").html(html);
        }
    });
}




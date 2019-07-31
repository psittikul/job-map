$(function () {
    $("#formContainer").on("click", "#addLocationBtn", function () {
        console.log("Add location button clicked");
        if ($("#autocomplete").val().length < 1) {
            $("#autocomplete").addClass("incomplete-field");
        }
        else {
            $("#companyLocationsTags").append("<div class='location-tag'" +
                "'><p>" + $("#autocomplete").val() + "</p><button type='button' class='remove-location'>&times;</button></div>");
            $("#companyLocationsTags").css("display", "block");
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
        var companyWebsite = $("input[name='company_website']").val();
        var companyName = $("input[name='company_name']").val();
        var companyGlassdoor = $("input[name='company_glassdoor']").val();
        var currentlyHiring = $("input[name='currently_hiring']").prop("checked") ? 1 : 0;
        var numberEmployees = $("#numberEmployees").val().length > 0 ? $("#numberEmployees").val() : null;
        $.ajax({
            url: "ajax/saveCompany.php",
            method: "post",
            data: {
                company_website: companyWebsite,
                company_name: companyName,
                company_glassdoor: companyGlassdoor,
                currently_hiring: currentlyHiring,
                number_of_employees: numberEmployees
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
                            $("#statusModal").find(".modal-body").find("p").text("Successfully inserted company: " + data["company_id"]);
                            $("#statusModal").find(".modal-footer").find("button").eq(0).text("Add Another Company");
                            $("#statusModal").find(".modal-footer").find("button").eq(0).addClass("action-item");
                            $("#statusModal").find(".modal-footer").find("button").eq(0).attr("data-action", "addCompany");
                            $("#statusModal").find(".modal-footer").find("button").eq(1).text("Go to Company Page");
                            $("#statusModal").find(".modal-footer").find("button").eq(1).addClass("view-item");
                            $("#statusModal").find(".modal-footer").find("button").eq(1).attr("data-action", "viewCompany");
                            $("#statusModal").find(".modal-footer").find("button").eq(1).attr("data-id", data["company_id"]);
                            $("#statusModal").modal("show");
                        }
                    });
                }
            }
        });
    });

    $("body").on("click", ".remove-location", function () {
        $(this).parent().remove();
        if ($("#companyLocationsTags").find(".location-tag").length < 1) {
            $("#companyLocationsTags").css("display", "none");
        }
    });

});




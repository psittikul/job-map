var btnMap = new Map();

$(function () {
    $("#formContainer").on("click", "#addLocationBtn", function () {
        console.log("Add location button clicked");
        if ($("#autocomplete").val().length < 1) {
            $("#autocomplete").addClass("incomplete-field");
        }
        else {
            console.log($("#autocomplete"));
            $("#companyLocationsTags").append("<div class='location-tag'></div>")
            .text($("#autocomplete").val());
        }
    });

    $("#formContainer").on("change", "#autocomplete", function () {
        if ($("#autocomplete").hasClass("incomplete-field")) {
            $("#autocomplete").removeClass("incomplete-field");
        }
    });
});




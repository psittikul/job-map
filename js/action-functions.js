var actionMap = new Map();
actionMap.set(["add", "location"], "<div class='location'tag'><p></div>");

$(function() {
    $("body").on("click", ".action-btn", function() {
        console.log("Adding location");
        $("#companyLocationLabels").append(
            actionMap.get([$(this).attr("data-action"), $(this).attr("data-item")])
            .text($("#autocomplete").val())
        );
    });
})
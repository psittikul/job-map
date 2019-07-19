$(function() {
    // Event handlers
    $("#addJobBtn").on("click", function() {
        $("#sidebarSec h2").text("Add Job");
        var formHTML = "<div class='form-group'>";
        formHTML += "<button type='button' id='importFromURLBtn'>Import Job Information from URL</button>";
        formHTML += ""
        $("#sidebarSec form").html(formHTML);
        $("#sidebarSec").css("display", "block");
    });
})
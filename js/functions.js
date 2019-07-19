$(function () {
    $("#addJob").on("click", function () {
        console.log("Add job button clicked");
        $("#sidebarSec").css("display", "block");
        $("#sidebarSec h2").text("Add Job");
        $("#sidebarSec form").attr("id", "addJobForm");
        var formHTML = "<div class='form-row'>";
        formHTML += "<div class='col'><button type='button' id='importBtn'>Import Job Information from URL</button></div>";
        formHTML += "<div class='col'><button type='button' id='manualBtn'>Manually Enter Job Information</button></div>";
        $("#addJobForm").html(formHTML);
    });
});
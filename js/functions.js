$(function () {
    // Initialize tooltips
    $("[data-toggle='tooltip']").tooltip();
    // Event handler to update dropdown/dropup arrow depending on whether dropdown is open or not
    $(".dropdown").on("show.bs.dropdown", function (event) {
        var eventBtn = event.relatedTarget;
        $(eventBtn).removeClass("dropdown-toggle");
        $(eventBtn).addClass("dropup-toggle");
    });
    $(".dropdown").on("hide.bs.dropdown", function (event) {
        var eventBtn = event.relatedTarget;
        $(eventBtn).removeClass("dropup-toggle");
        $(eventBtn).addClass("dropdown-toggle");
    });

    // Event handlers for the various sidebar functions

    // Set up menu for add job function
    $("#addJob").on("click", function () {
        $("#sidebarHeader h2").text("Add Job");
        $("#sidebarSec form").attr("id", "addJobForm");
        var formHTML = "<div class='form-row'>";
        formHTML += "<div class='col'><button class='action-btn' type='button' id='importBtn'>Import Job Information from URL</button></div>";
        formHTML += "<div class='col'><button class='action-btn' type='button' id='manualBtn'>Manually Enter Job Information</button></div>";
        $("#addJobForm").html(formHTML);
        $("#sidebarSec").css("display", "block");
    });
    // Set up menu for importing job information from URL
    $("#sidebarSec").on("click", "#importBtn", function() {
        $("#sidebarHeader h2").text("Import Job Information from URL");
        $("#formSec").html(forms["importJob"]);
    });
    // Clear and exit sidebar after clicking close icon
    $("#exitSidebarBtn").on("click", function () {
        $("#sidebarSec").css("display", "none");
        $("#sidebarHeader h2").text("");
        $("#sidebarSec #formSec form").html("");
    });
});
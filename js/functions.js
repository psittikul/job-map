// // Map to store actions and their corresponding functions, content, etc.
// var actionMap = new Map();
// // var addJobObj = new Action("addJob", "#addJob.on(click)", "actionModal set", "Add New Job", "#actionModal",
// // null, "Save Information", "Manually Enter Job Information", "Import Job Information from URL");
// var addJobObj = new Action("addJob", "#addJob.on(click)", null, "Add New Job", "#actionModal");
// addJobObj.formHTML = "<form id='addJobForm'><div class='form-row'><div class='col'><button type='button' id='manualBtn' " +
// "data-action='manualAddJob' class='btn action-btn'>Manually Enter Job Information</button></div>" +
// "<div class='col'><button type='button' data-action='importJob' id='importBtn' class='btn action-btn'>Import Job Information from URL</button></div></div></form>";
// addJobObj.footerHTML = "<button type='button' class='btn' data-dismiss='modal' data-target='#actionModal' id='closeBtn'>Close</button>";
// var manualAddJobObj = new Action("manualAddJob", "#manualBtn.on(click)", null, "Manually Enter Job Information", "#actionModal");
// manualAddJobObj.formHTML = manualAddJobHTML;
// manualAddJobObj.footerHTML = manualAddJobFooter;
// var companyFields = [
//     {
//         "label": "Company Name",
//         "type": "text",
//         "span": "row",
//         "name": "company_name",
//         "id": "companyName"
//     },
//     {
//         "label": "Company Website",
//         "type": "text",
//         "span": "row",
//         "name": "company_website",
//         "id": "companyWebsite"
//     },
//     {
//         "label": "Company Glassdoor Page",
//         "type": "text",
//         "span": "row",
//         "name": "company_glassdoor",
//         "id": "companyGlassdoor"
//     },
//     {
//         "label": "Number of Employees",
//         "type": "number",
//         "span": "row",
//         "name": "number_of_employees",
//         "id": "numberEmployees"
//     }
// ];
// var closeFooter = "<button type='button' class='btn' id='closeBtn' data-dismiss='modal' data-target='#actionModal'>Close</button>";
// var company = new DataType("Company", companyFields, "addCompany");
// var addCompanyObj = new Action("addCompany", "#addCompany", null, "Add New Company", "#actionModal", generateButtons(company), closeFooter);
// var addCompanyManualObj = new Action("addCompanyManual", "#manualBtn", null, "Manually Enter Company Information", generateForm(company), generateFooter(company));
// actionMap.set("addJob", addJobObj);
// actionMap.set("addJobManual", manualAddJobObj);
// actionMap.set("addCompany", addCompanyObj);
// actionMap.set("addCompanyManual", addCompanyManualObj);
var actionMap = new Map();
actionMap.set("addJob", addJobOverview);
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
    // Event handler for when action items are clicked
    $("a.dropdown-item").on("click", function() {
        var id = $(this).attr("id");
        var actionItem = actionMap.get(id);
        actionItem.generateFormHtml();
    });
 
});

/**
 * Function to reset (clear) a modal as it is being closed
 * @param {string} id: ID of closing modal to be reset
 */
function resetModal(id) {
    $(id).find(".modal-title").text("");
    $(id).find(".modal-body").find("form").html("");
    $(id).find(".modal-footer").html("");
}
    // Event handlers for the various sidebar functions

    // Set up menu for add job function
/*
$("#addJob").on("click", function () {
    initAddJobForm();
    $("#sidebarSec").css("display", "block");
});
// Set up menu for add company functions
$("#addCompany").on("click", function () {
    initAddCompanyForm();
    $("#sidebarSec").css("display", "block");
})
// Set up menu for importing job, location, or company information from URL
$("#sidebarSec").on("click", "#importBtn", function () {
    switch ($(this).attr("data-subject")) {
        case "job":
            $("#sidebarTitle").text("Import Job Information from URL");
            $("#formSec form").html(forms["importJob"]);
            $("#submitBtnRow").css("display", "flex");
            break;
    }
});
$("#sidebarSec").on("click", "#manualBtn", function () {
    switch ($(this).attr("data-subject")) {
        case "job":
            $("#sidebarTitle").text("Manually Enter Job Information");
            $("#entryMethodBtnRow").remove();
            $("#submitBtnRow").before(forms["manualAddJob"]);
            $("#submitBtnRow").css("display", "flex");
            break;
        case "company":
            $("#sidebarTitle").text("Manually Enter Company Information");
            $("#entryMethodBtnRow").remove();
            $("#submitBtnRow").before(forms["manualAddCompany"]);
            $("#submitBtnRow").css("display", "flex");
            break;
    }
});
// Clear and exit sidebar after clicking close icon
$("#exitSidebarBtn").on("click", function () {
    $("#sidebarSec").css("display", "none");
    resetSidebar();
});
// Send AJAX request to DB after clicking submit button
$("#sidebarSec").on("click", "#submitBtn", function () {
    console.log("Submit button clicked for: " + $(this).attr("data-subject"));
    switch ($(this).attr("data-subject")) {
        case "company":
            saveCompanyAJAX();
            break;
    }
});

});

function resetSidebar() {
$("#sidebarTitle").text("");
$("#sidebarSec form").removeAttr("id");
$("#sidebarSec #formSec form").html(forms["blankForm"]);
}

function initAddJobForm() {
resetSidebar();
$("#sidebarTitle").text("Add Job");
$("#sidebarSec form").attr("id", "addJobForm");
$("#addJobForm .action-btn").attr("data-subject", "job");
$("#importBtn").text("Import Job Information from URL");
$("#manualBtn").text("Manually Enter Job Information");
$("#submitBtn").text("Save Information");
$("#submitBtn").attr("data-subject", "job");
};

function initAddCompanyForm() {
resetSidebar();
$("#sidebarTitle").text("Add Company");
$("#sidebarSec form").attr("id", "addCompanyForm");
$("#addCompanyForm .action-btn").attr("data-subject", "company");
$("#importBtn").text("Import Company Information from URL");
$("#manualBtn").text("Manually Enter Company Information");
$("#submitBtn").text("Save Information");
$("#submitBtn").attr("data-subject", "company");
}

function saveCompanyAJAX() {
var company_name = $("input[name='company_name']").val();
var company_website = $("input[name='company_website']").val();
var company_glassdoor = $("input[name='company_glassdoor']").val();
var formData = {
    "company_name": $("input[name='company_name']").val(), "company_website": $("input[name='company_website']").val(),
    "company_glassdoor": $("input[name='company_glassdoor'").val()
};
console.log("Time to make AJAX call");
$.ajax({
    url: "ajax/saveCompany.php",
    type: "POST",
    data: {
        company_name: company_name,
        company_website: company_website,
        company_glassdoor: company_glassdoor
    },
    success: function (response) {
        console.log(response)
    }
});
} */




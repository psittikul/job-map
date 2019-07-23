var importJobHTML = "<div class='form-row'><div class='form-group'>" +
    "<label for='importURLInput'>Import from URL: </label>" +
    "<input type='text' class='form-control' id='importURLInput' name='import_url' placeholder='Job posting URL to import from'>" +
    "<button type='button' class='btn action-btn btn-align-right' id='importThisURLBtn'>Import</div>" +
    "</div>" +
    "<div class='form-row'><div class='form-group'><label for='companyName' >Company Name</label>" +
    "<input type='text' class='form-control' id='companyName' name='company_name'placeholder='Company name'></div></div>" +
    "<div class='form-row'><div class='form-group'><label for='jobTitle'>Job Title</label>" +
    "<input type='text' class='form-control' id='jobTitle' name='job_title' placeholder='Job title'></div></div>";

var blankFormHTML = "<div class='form-row' id='entryMethodBtnRow'><div class='col'><button type='button' class='action-btn' id='importBtn'></button></div>" +
    "<div class='col'><button type='button' class='action-btn' id='manualBtn'></button></div></div>" +
    "<div class='form-row' id='submitBtnRow'><button type='button' id='submitBtn' class='btn action-btn btn-align-right'></button></div>";




var manualAddJobHTML = "<form id='manualAddJobForm'><div class='form-row'><div class='form-group'><label for='companyName' >Company Name</label>" +
"<input type='text' class='form-control' id='companyName' name='company_name'placeholder='Company name'></div></div>" +
"<div class='form-row'><div class='form-group'><label for='jobTitle'>Job Title</label>" +
"<input type='text' class='form-control' id='jobTitle' name='job_title' placeholder='Job Title'></div></div>" + 
"<div class='form-row'><div class='form-group'<label for='jobUrl'>Job Posting URL</label>" + 
"<input type='text' class='form-control' id='jobUrl' name='job_url' placeholder='Link to job posting'></div></div>" +
"<div class='form-row' id='submitRow'><button type='button' class='btn action-btn' id='submitBtn' data-action='manualAddJob'>" +
"Save Information</button></div></form>";
var manualAddJobFooter = "<button type='button' class='btn action-btn' data-action='addJob' id='backBtn'>Back</button>" + 
"<button type='button' class='btn' id='closeBtn' data-dismiss='modal' data-target='#actionModal'>Close</button>";

var manualAddCompanyHTML = "<div class='form-row'><div class='form-group'><label for='companyName'>Company Name</label>" +
    "<input type='text' class='form-control' id='companyName' name='company_name' placeholder='Company name'></div></div>" +
    "<div class='form-row'><div class='form-group'><label for='companyWebsite'>Company Website</label>" +
    "<input type='text' class='form-control' id='companyWebsite' name='company_website' placeholder='Company website'></div></div>" +
    "<div class='form-row'><div class='form-group'><label for='companyGlassdoor'>Company's Glassdoor Page</label>" +
    "<input type='text' class='form-control' name='company_glassdoor' id='companyGlassdoor' placeholder='Link to company Glassdoor page'></div></div>";
var forms = {
    "importJob": importJobHTML,
    "manualAddJob": manualAddJobHTML,
    "manualAddCompany": manualAddCompanyHTML,
    "blankForm": blankFormHTML
};
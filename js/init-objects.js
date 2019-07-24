var addFormButtons = [
    {
        "id": "clearBtn",
        "class": "btn action-btn",
        "text": "Clear"
    },
    {
        "id": "submitBtn",
        "class": "btn action-btn",
        "text": "Save Information"
    }
];

var addJobContents = {
    "title": "Add New Job",
    "buttons": addFormButtons,
    "fields": [{
        "object": "input",
        "parent": "form-group",
        "label": "Job Posting URL",
        "attributes": { "type": "text", "name": "job_posting_url", "id": "jobPostingUrl", "placeholder": "Link to Job Posting", "class": "form-control url-input" }
    },
    {
        "object": "input",
        "parent": "form-group",
        "label": "Job Title",
        "attributes": { "type": "text", "name": "job_title", "id": "jobTitle", "placeholder": "Job Title", "class": "form-control" }
    },
    {
        "object": "input",
        "parent": "form-group",
        "label": "Company",
        "attributes": { "type": "text", "name": "job_company", "id": "jobCompany", "placeholder": "Hiring Company", "class": "form-control" }
    },
    {
        "object":"input",
        "parent":"form-group",
        "label":"Remote Job",
        "attributes":{"type":"checkbox","name":"remote_job", "id":"remoteJob", "class":"check-input"}
    },
    {
        "object": "input",
        "parent": "form-group",
        "label": "Location",
        "attributes": { "type": "text", "name": "job_location", "id": "jobLocation", "placeholder": "Search location", "class": "form-control" }
    },
    {
        "object": "input",
        "parent": "form-group",
        "label": "Date Applied",
        "attributes": { "type": "date", "name": "date_applied", "id": "dateApplied", "class": "form-control" }
    }]
};
var addJob = new Form("addJob", "#addJob", addJobContents, "#actionModal");

var addCompanyContents = {
    "title": "Add New Company",
    "buttons": addFormButtons,
    "fields": [
        {
            "object": "input",
            "parent": "form-group",
            "label": "Company Website",
            "attributes": { "type": "text", "name": "company_website", "id": "companyWebsite", "placeholder": "Link to Company Careers Website", "class": "form-control url-input" }
        },
        {
            "object": "input",
            "parent": "form-group",
            "label": "Company Name",
            "attributes": { "type": "text", "name": "company_name", "id": "companyName", "placeholder": "Company Name", "class": "form-control" }
        },
        {
            "object": "input",
            "parent": "form-group",
            "label": "Company Glassdoor",
            "attributes": { "type": "text", "name": "company_glassdoor", "id": "companyGlassdoor", "placeholder": "Link to Company Glassdoor", "class": "form-control" }
        },
        {
            "object": "input",
            "parent": "form-group",
            "label": "Number of Employees",
            "attributes": { "type": "number", "name": "number_of_employees", "id": "numberEmployees", "class": "form-control" }
        },
        // {
        //     "object": "input",
        //     "parent": "form-group",
        //     "label": "Location(s)",
        //     "attributes": { "type": "text", "name": "company_location_input", "id": "locationLookup", "placeholder": "Search for a location to add", "class": "form-control" }
        // },
        {
            "object":"input",
            "parent":"form-group",
            "label":"Currently Hiring",
            "attributes":{"type":"checkbox", "name":"currently_hiring", "id":"currentlyHiring", "class":"check-input"}
        }
    ]
};

var addCompany = new Form("addCompany", "#addCompany", addCompanyContents, "#actionModal");
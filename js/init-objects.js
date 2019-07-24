/**
 * Fields common to multiple forms
 */
var jobFields = [
    {
        "object": "input",
        "label": "Job Title",
        "attributes": { "type": "text", "name": "job_title", "id": "jobTitle", "placeholder": "Job Title" }
    },
    {
        "object": "input",
        "label": "Company",
        "attributes": { "type": "text", "name": "company", "id": "jobCompany", "placeholder": "Company" }
    },
    {
        "object": "input",
        "label": "Job Posting URL",
        "attributes": { "type": "text", "name": "job_posting_url", "id": "jobPostingUrl", "placeholder": "Link to Job Posting" }
    },
    {
        "object": "input",
        "label": "Applied",
        "attributes": { "type": "checkbox", "name": "job_applied", "id": "jobApplied" }
    }
];


var addJobOverviewContents = {
    "title": "Add New Job",
    "buttons": [
        {
            "id": "manualAddJobBtn",
            "class": "btn action-btn",
            "text": "Manually Enter Job Information"
        },
        {
            "id": "ipmortJobBtn",
            "class": "btn action-btn",
            "text": "Import Job Information from URL"
        }
    ],
    "fields": null
};
var addJobOverview = new Form("addJobOverviewForm", "#addJob", addJobOverviewContents, "#actionModal", null);

var manualAddJobContents = {
    "title": "Manually Enter Job Information",
    "buttons": [
        {
            "id": "addJobOverviewBtn",
            "class": "btn action-btn",
            "text": "Back"
        },
        {
            "id": "submitBtn",
            "class": "btn action-btn",
            "text": "Save Information"
        }
    ],
    "fields": jobFields
};
var manualAddJob = new Form("manualAddJobForm", "#manualAddJobBtn", manualAddJobContents, "#actionModal", saveInfo);

var importJobContents = {
    "title": "Import Job Information from URL",
    "buttons": [
        {
            "id": "addJobOverviewBtn",
            "class": "btn action-btn",
            "text": "Back"
        },
        {
            "id": "startImportBtn",
            "class": "btn action-btn",
            "text": "Import Information"
        }
    ],
    "fields": [
        {
            "object": "input",
            "label": "Import URL",
            "attributes": {
                "type": "text",
                "name": "import_job_url",
                "id": "importJobUrl",
                "placeholder": "URL to Import Job Information From"
            }
        }
    ]
}
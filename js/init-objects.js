var addJobOverviewContents = {
    "title": "Add New Job",
    "action-buttons": null,
    "fields": [
        {
            "object": "button",
            "span": "col",
            "attributes": { "id": "manualAddJobBtn", "type": "button", "class": "btn action-btn" },
            "text": "Manually Enter Job Information"
        },
        {
            "object": "button",
            "span": "col",
            "attributes": { "id": "importJobBtn", "type": "button", "class": "btn action-btn" },
            "text": "Import Job Information from URL"
        }
    ]
};
var addJobOverview = new Form("addJobOverview", "#addJob", addJobOverviewContents, "#actionModal", null);

var manualAddJobContents = {
    "title": "Manually Enter Job Information",
    "action-buttons": [
        {
            "id": "submitBtn",
            "class": "btn action-btn",
            "text": "Save Information"
        },
        {
            "id": "backBtn",
            "class": "btn action-btn",
            "text": "Back"
        }
    ],
    "fields": [
        {
            "object": "input",
            "label": "Job Title",
            "attributes":
            {
                "type": "text",
                "name": "job_title",
                "id": "jobTitle",
                "placeholder": "Job Title"
            }
        },
        {
            "object": "input",
            "label": "Company",
            "attributes":
            {
                "type": "text",
                "name": "job_title",
                "id": "jobCompany",
                "placeholder": "Company"
            }
        }
    ]
}
var manualAddJob = new Form("manualAddJob", "#manualAddJobBtn", manualAddJobContents, "#actionModal", saveInfo);
var addJobOverviewContents = {
    "title": "Add New Job",
    "action-button": null,
    "fields": [
        {
            "object": "button",
            "span": "col",
            "attributes": {"id": "manualAddJobBtn", "type": "button", "class": "btn action-btn"},
            "text": "Manually Enter Job Information"
        },
        {
            "object": "button",
            "span": "col",
            "attributes": {"id": "importJobBtn", "type": "button", "class": "btn action-btn"},
            "text": "Import Job Information from URL"
        }
    ]
};
var addJobOverview = new Form("addJobOverview", "#addJob", addJobOverviewContents, "#actionModal", null);

var manualAddJobContents = [
    { "title": "Manually Enter Job Information" },
    {
        "action-buttons": [
            {
                "object": "button",
                "id": "submitBtn",
                "class": "action-btn",
                "text": "Save Information",
            }
        ]
    },
    {
        "fields": [
            {
                "object": "input",
                "label": "Job Title",
                "span": "row",
                "attributes": [
                    {
                        "type": "text",
                        "name": "job_title",
                        "id": "jobTitle",
                        "placeholder": "Job Title"
                    }
                ],
            },
            {
                "object": "input",
                "label": "Company",
                "span": "row",
                "attributes": [
                    {
                        "type": "text",
                        "name": "company",
                        "id": "jobCompany",
                        "placeholder": "Hiring Company"
                    }
                ],
            }
        ]
    }
];
var manualAddJob = new Form("manualAddJob", "#manualAddJobBtn", manualAddJobContents, "#actionModal", saveInfo);
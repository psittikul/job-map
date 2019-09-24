var ajaxCallMap = new Map();
ajaxCallMap.set("company", "ajax/getCompanyInfo.php");
ajaxCallMap.set("job", "ajax/getJobInfo.php");
ajaxCallMap.set("location", "ajax/getLocationInfo.php");
var actionBtnMap = new Map();
actionBtnMap.set("company", "ajax/updateCompanyInfo.php");
actionBtnMap.set("job", "ajax/updateJobInfo.php");
var companyStatesMap = new Map();
$(function () {
    // AJAX call to get this item's information from the database and populate the page accordingly
    var urlParams = new URLSearchParams(window.location.search);
    var item = urlParams.get("item");
    var id = urlParams.get("id") ? urlParams.get("id") : 0;

    $.ajax({
        url: ajaxCallMap.get(item),
        method: "GET",
        data: {
            id: id
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            // If information for all companies, jobs, or locations is being returned, display accordingly
            // if (data["range"] === "all") {
            //     var dataHtml = "";
            //     $.each(data["data"], function (index, value) {
            //         // Get locations of each company
            //         $.ajax({
            //             url: "ajax/getCompanyLocations.php",
            //             method: "GET",
            //             data: {
            //                 id: data["data"][index]["company_id"]
            //             },
            //             dataType: "json",
            //             success: function (locationData) {
            //                 companyStatesMap.set(data["data"][index]["company_id"], locationData["states"]);
            //                 // websiteButton = "<td><a href='" + data["data"][index]["company_website"] + "' target='_blank'>" +
            //                 //     "<button type='button' data-goto='company_website'>Website</button></a></td>";
            //                 var websiteLink = "<td><a href= '" + data["data"][index]["company_website"] + "' target=_'blank'>Website</a></td>";
            //                 // glassdoorButton = "<td><a href='" + data["data"][index]["company_glassdoor"] + "' target='_blank'>" +
            //                 //     "<button type='button' data-goto='company_glassdoor'>Glassdoor</button></a></td>";
            //                 var glassdoorLink = "<td><a href='" + data["data"][index]["company_glassdoor"] + "' target='_blank'>Glassdoor</a></td>";
            //                 var currentlyHiring = "<td class='currently-hiring-cell'>" + (data["data"][index]["currently_hiring"] == 1 ? "<i class='far fa-check-circle'></i>" : "") + "</td>";
            //                 var numberJobs = "<td class='num-jobs-saved-cell'>" + (data["data"][index]["num_jobs"]) + "</td>";
            //                 var numberEmployees = "<td>" + data["data"][index]["number_of_employees"] + "</td>";
            //                 var locations = "<td>" + locationData["string"] + "</td>";
            //                 var remoteWork = "<td class='remote-work-cell'>" + (data["data"][index]["remote_work"] == 1 ? "<i class='far fa-check-circle'></i>" : "");
            //                 dataHtml = "<tr data-id='" + data["data"][index]["company_id"] + "'><td class='company-name-cell'><button type='button' " + 
            //                 "class='company-name'>" + data["data"][index]["company_name"] + "</button></td>" + websiteLink + glassdoorLink + 
            //                 currentlyHiring + numberJobs + numberEmployees + locations + remoteWork + "</tr>";
            //                 $("#companyListTable").find("tbody").append(dataHtml);
            //             }
            //         });
            //     });
            // }
            // if (data["range"] === "single") {
            //     // Get this company's locations as well as jobs
            //     $.ajax({
            //         method: "get",
            //         url: "ajax/getCompanyLocations.php",
            //         data: {
            //             id: id
            //         },
            //         dataType: "json",
            //         success: function (data) {
            //             reconstruct_pip_map(data["states"]);
            //         }
            //     });
            //     // Get jobs 
            //     $.ajax({
            //         url: "ajax/getCompanyJobs.php",
            //         method: "GET",
            //         data: {
            //             id: id
            //         },
            //         dataType: "json",
            //         success: function(data) {
            //             console.log(data);
            //             if (data["status"] == 0) {
            //                 $("#companyJobs").find("tbody").html(data["data"]);
            //             }
            //         }
            //     });
            //     $("#formTitle").text(data["data"]["company_name"]);
            //     // Go through each of the data fields returned from the database and fill them in on the form
            //     $.each(data["data"], function (index, value) {
            //         var selector = "[name='" + index + "']";
            //         // var displayField = "[data-field='" + index + "']";
            //         if (index == "currently_hiring") {
            //             $("input[name='currently_hiring']").prop("checked", function () {
            //                 return value == 1 ? true : false;
            //             });
            //         }
            //         else {
            //             $(selector).val(value);
            //         }
            //     });
            // }
        }
    });
    // Hovering over a company's row should highlight their locations on the map
    $("#companyListTable").on("mouseover", "tbody > tr", function () {
        var theseStates = companyStatesMap.get($(this).attr("data-id"));
        reconstruct_pip_map(theseStates);
    });
    $("#companyListTable").on("mouseout", "tbody > tr", function () {
        init_pip_map();
    });
    // Clicking on a company's name should go to that company's detail page
    $("body").on("click", ".company-name-cell", function (event) {
        window.location.href = window.location.href + "&id=" + $(this).parent().attr("data-id");
    });
    // Clicking the edit button on a form should reveal the update button/fields
    $(".form-container").on("click", ".edit-btn", function() {
        $(".form-container").find(".buttons-row").css("display", "block");
    });
    // Clicking on the update button on a form should send an AJAX call to update that company/job's information
    $("body").on("click", ".update-btn", function() {
        $.ajax({
            url: actionBtnMap.get($(this).attr("data-item")),
            method: "POST",
            data: {

            },
            dataType: "json",
            success: function(data) {

            }
        });
    });

});
function get_locations(id) {
    console.log("Getting locations for company: " + id);
    $.ajax({
        method: "get",
        url: "ajax/getCompanyLocations.php",
        data: id,
        dataType: "json",
        success: function (data) {
            console.log(data);
            return data["states"];
        }
    });
}
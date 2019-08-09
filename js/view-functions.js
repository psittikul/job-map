var ajaxCallMap = new Map();
ajaxCallMap.set("company", "ajax/getCompanyInfo.php");
ajaxCallMap.set("job", "ajax/getJobInfo.php");
ajaxCallMap.set("location", "ajax/getLocationInfo.php");
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
            // If information for all companies, jobs, or locations is being returned, display accordingly
            if (data["range"] === "all") {
                var dataHtml = "";
                $.each(data["data"], function (index, value) {
                    // Get locations of each company
                    $.ajax({
                        url: "ajax/getCompanyLocations.php",
                        method: "GET",
                        data: {
                            id: data["data"][index]["company_id"]
                        },
                        dataType: "json",
                        success: function (locationData) {
                            companyStatesMap.set(data["data"][index]["company_id"], locationData["states"]);
                            websiteButton = "<td><a href='" + data["data"][index]["company_website"] + "' target='_blank'>" +
                                "<button type='button' data-goto='company_website'>Website</button></a></td>";
                            glassdoorButton = "<td><a href='" + data["data"][index]["company_glassdoor"] + "' target='_blank'>" +
                                "<button type='button' data-goto='company_glassdoor'>Glassdoor</button></a></td>";
                            var currentlyHiring = "<td class='currently-hiring-cell'>" + (data["data"][index]["currently_hiring"] == 1 ? "<i class='far fa-check-circle'></i>" : "") + "</td>";
                            var numberEmployees = "<td>" + data["data"][index]["number_of_employees"] + "</td>";
                            var locations = "<td>" + locationData["string"] + "</td>";
                            dataHtml = "<tr data-id='" + data["data"][index]["company_id"] + "'><td class='company-name-cell'><button type='button' class='company-name'>" + data["data"][index]["company_name"] + "</button></td>" + websiteButton + glassdoorButton + currentlyHiring + numberEmployees + locations + "</tr>";
                            $("#companyListTable").find("tbody").append(dataHtml);
                        }
                    });
                });
            }
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

});
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
                                "<button type='button' data-goto='company_website'>Company Website</button></a></td>";
                            glassdoorButton = "<td><a href='" + data["data"][index]["company_glassdoor"] + "' target='_blank'>" +
                                "<button type='button' data-goto='company_glassdoor'>Company Glassdoor Page</button></a></td>";
                            var currentlyHiring = "<td>" + (data["data"][index]["currently_hiring"] == 1 ? "<i class='far fa-check-circle'></i>" : "") + "</td>";
                            var numberEmployees = "<td>" + data["data"][index]["number_of_employees"] + "</td>";
                            var locations = "<td>" + locationData["string"] + "</td>";
                            dataHtml = "<tr data-id='" + data["data"][index]["company_id"] + "'><td data-toggle='tooltip' title='Go to company detail page'>" + data["data"][index]["company_name"] + "</td>" + websiteButton + glassdoorButton + currentlyHiring + numberEmployees + locations + "</tr>";
                            $("#companyListTable").find("tbody").append(dataHtml);
                            $("[data-toggle='tooltip']").tooltip();
                        }
                    });
                });
            }
        }
    });
    // Hovering over a company's row should highlight their locations on the map
    $("#companyListTable").on("mouseover", "tbody > tr", function() {
        var theseStates = companyStatesMap.get($(this).attr("data-id"));
        console.log(theseStates);
        jQuery("#pipmap").vectorMap("set", "selectedRegions", theseStates);
    });
});
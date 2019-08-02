var ajaxCallMap = new Map();
ajaxCallMap.set("company", "ajax/getCompanyInfo.php");
ajaxCallMap.set("job", "ajax/getJobInfo.php");
ajaxCallMap.set("location", "ajax/getLocationInfo.php");
$(function() {
    // AJAX call to get this item's information from the database and populate the page accordingly
    var urlParams = new URLSearchParams(window.location.search);
    var item = urlParams.get("item");
    var id = urlParams.get("id") ? urlParams.get("id") : 0;
    console.log("Sending ID: " + id);
    $.ajax({
        url: ajaxCallMap.get(item),
        method: "GET",
        data: {
            id: id
        },
        success: function(data) {
            $("form").html(data);
        }
    });
});
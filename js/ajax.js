/**
 * TO-DO: Function to issue appropriate AJAX call to save whatever information
 */
function saveInfo(formName) {
    console.log("Save info called");
    var selector = "form[name='" + formName + "']";
    var table = selector.replace("add", "").replace("edit","").toLowerCase();
    var inputArray = $.makeArray($(selector).find("input"));
    // var dataArray = $.map(inputArray,function(input, index) {
    // //    return  
    // });
    $.each(inputArray, function(index, value) {
        console.log(value);
        console.log($(this).attr("name") + ": " + $(this).val());
    });
    // $.ajax({
    //     url: "../saveInfo.php",
    //     data: {
    //         ""
    //     }
    // })
}
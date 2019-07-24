var actionMap = new Map();
actionMap.set("addJob", addJob);
actionMap.set("addCompany", addCompany);

$(function () {
    // Initialize tooltips
    $("[data-toggle='tooltip']").tooltip();
    // Event handler to update dropdown/dropup arrow depending on whether dropdown is open or not
    $(".dropdown").on("show.bs.dropdown", function (event) {
        var eventBtn = event.relatedTarget;
        $(eventBtn).removeClass("dropdown-toggle");
        $(eventBtn).addClass("dropup-toggle");
    });
    $(".dropdown").on("hide.bs.dropdown", function (event) {
        var eventBtn = event.relatedTarget;
        $(eventBtn).removeClass("dropup-toggle");
        $(eventBtn).addClass("dropdown-toggle");
    });
    // Event handler for when action items are clicked
    $("a.dropdown-item").on("click", function () {
        var id = $(this).attr("id");
        var actionItem = actionMap.get(id);
        resetModal("#actionModal");
        actionItem.generateFormHtml();
    });
    // $(".modal").on("click", "button.action-btn", function() {
    //     var id = $(this).attr("id");
    //     var actionItem = actionMap.get(id);
    //     resetModal("#actionModal");
    //     actionItem.generateFormHtml();
    // });

    $(".modal").on("click", "#submitBtn", function () {
        var formName = $(this).parent().parent().prev().attr("name");
        console.log("Submit button clicked for: " + formName);
        var actionItem = actionMap.get(formName);
        actionItem.saveInfo();
    });
    // TO-DO: Any time a URL field is updated (and it's not empty), show import information button
    // $(".modal").on("change paste keyup", "input[type='text'].url-input", function() {
    //     var string = $(this).val();
    //     if (string.length > 0) {
    //         if ($("#importInfoBtn").length === 0) {
    //             $(this).after("<button type='button' style='margin-top: .5rem;' class='btn action-btn' id='importInfoBtn'>Import Information from URL</button>");
    //         }
    //     }
    //     else {
    //         $("#importInfoBtn").remove();
    //     }
    // });

    // Reset contents of modal any time it is closed
    $(".modal").on("hide.bs.modal", function () {
        var id = "#" + $(this).attr("id");
        resetModal(id);
    });
});

/**
 * Function to reset (clear) a modal as it is being closed
 * @param {string} id: ID of closing modal to be reset
 */
function resetModal(id) {
    $(id).find(".modal-title").text("");
    $(id).find(".modal-body").find("form").html("");
    $(id).find(".modal-button-sec").html("");
}


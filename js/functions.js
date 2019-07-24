var actionMap = new Map();
actionMap.set("addJob", addJob);
actionMap.set("addCompany", addCompany);


$(function () {
    // Set up Google places lookup object but don't assign to an element just yet
    var placeSearch, autocomplete;
    var componentForm = {
        locality: 'long_name',
        administrative_area_level_1: 'short_name'
    };
    /**
        * Google Places API function to create autocomplete object
        */
    function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById("autocomplete")), {
                // Limit search to geographical location types
                type: ["geocode"]
            });
        console.log("initAutocomplete() called");
        // When user selects a location from the dropdown, populate the field in the form
        autocomplete.addListener('place_changed', fillInLocation);
        console.log("Event listener added to autocomplete object");
    };

    function fillInLocation() {
        console.log("place is being changed");
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        console.log(place);

        for (var component in componentForm) {
            document.getElementById(component).value = "";
            document.getElementById(component).disabled = false;
        }

        // // Get each component of the address from the place details
        // // and fill the corresponding field on the form.
        // for (var i = 0; i < place.address_components.length; i++) {
        //     var addressType = place.address_components[i].types[0];
        //     if (componentForm[addressType]) {
        //         var val = place.address_components[i][componentForm[addressType]];
        //         console.log("This value is: " + val);
        //         document.getElementById(addressType).value = val;
        //     }
        // }
    };
    console.log("Autocomplete field is: " + $("#autocomplete"));
    // initAutocomplete();
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
        var action = $(this).attr("data-action");
        var actionItem = actionMap.get(action);
        resetModal("#actionModal");
        actionItem.generateFormHtml();
    });
    $(".modal").on("click", "button.action-btn:not(#submitBtn):not(#clearBtn)", function () {
        var action = $(this).attr("data-action");
        var actionItem = actionMap.get(action);
        resetModal("#actionModal");
        actionItem.generateFormHtml();
    });

    $(".modal").on("click", "#submitBtn", function () {
        var formName = $(this).parent().parent().prev().attr("name");
        console.log("Submit button clicked for: " + formName);
        var actionItem = actionMap.get(formName);
        actionItem.saveInfo();
    });
    $("#actionModal").on("show.bs.modal", function () {
        console.log("action modal being shown");
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById("autocomplete")), {
                // Limit search to geographical location types
                type: ["geocode"]
            });
        console.log("initAutocomplete() called");
        $("#autocomplete").on("input", function(e) {
            console.log("autocomplete being changed");
            console.log(componentForm);
            fillInLocation();
        });
        // When user selects a location from the dropdown, populate the field in the form
        // autocomplete.addListener('place_changed', fillInLocation);
        // console.log("Event listener added to autocomplete object");
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

function clearBody() {
    $(".container-fluid").html("");
}

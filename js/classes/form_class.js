class Form {
    constructor(name, caller, contents, target) {
        this._name = name;
        this._caller = caller;
        this._contents = contents;
        this._title = contents.title;
        this._buttons = contents.buttons;
        this._fields = contents.fields;
        this._target = target;
    }


    /**
     * Function to generate HTML for this form based on its fields
     * @param {Form} Form 
     */
    generateFormHtml() {
        $(this._target).find(".modal-title").text(this._title);
        $(this._target).find(".modal-body").find("form").attr("name", this._name);
        var buttonArray = $.makeArray(this._buttons);
        // Only process fields if the form object actually has fields (i.e. it's not just a buttons form)
        if (this._fields) {
            var fieldArray = $.makeArray(this._fields);
            var attributeArray = [];
            var formHtml = "";
            var fieldHtml = "";
            var fieldHtmlArray = $.map(fieldArray, function (field, index) {
                fieldHtml = "<div class='" + field.parent + "'><label>" + field.label + "</label><" + field.object;
                attributeArray = field.attributes;
                $.each(attributeArray, function (key, value) {
                    fieldHtml += " " + key + "='" + value + "' ";
                });
                fieldHtml += "></" + field.object + "></div>";
                return fieldHtml;
            });
            $.each(fieldHtmlArray, function (index, value) {
                formHtml += value;
            });
            // $(this._target).find("form").html(formHtml);
            $(".container-fluid").find(".row").eq(0).html();
        }
        var buttonHtml = "";
        $.each(buttonArray, function (index, btn) {
            buttonHtml += "<div class='col'><button type='button' id='" + btn.id + "' class='" + btn.class + "'>" + btn.text + "</button></div>";
        });
        // $(this._target).find(".modal-button-sec").html(buttonHtml);

        $("#locality").parent().before($("#autocomplete"));
        $("#autocomplete").css("display", "block");
        $(this._target).modal("show");
    }

    saveInfo() {
        console.log("Save info called for: " + this._)
        var formName = this._name;
        var selector = "form[name='" + this._name + "']";
        var table = formName.replace("add", "").replace("edit", "").toLowerCase();
        var inputArray = $.makeArray($(selector).find("input"));
        var dataArray = {};
        $.each(inputArray, function (index, value) {
            var key = $(this).attr("name");
            var val = "";
            if ($(this).attr("type") === "checkbox") {
                val = $(this).prop("checked") ? 1 : 0;
            }
            if ($(this).attr("type") === "number" && $(this).val().length < 1) {
                val = 0;
            }
            if ($(this).val().length < 1 && $(this).attr("type") != "number") {
                val = null;
            }
            if ($(this).attr("type") != "checkbox" && $(this).val().length > 0) {
                val = $(this).val();
            }
            dataArray[key] = val;
        });
        $.ajax({
            url: "./ajax/saveInfo.php",
            data: {
                "fields": dataArray,
                "table": table
            },
            type: "POST",
            success: function (response) {
                $(this._target).find(".modal-body").html(response);
            },
            error: function (e) {
                console.log(e.message);
            }
        });
    }
}
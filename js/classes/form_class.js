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
            $(this._target).find("form").html(formHtml);
        }
        var buttonHtml = "";
        $.each(buttonArray, function (index, btn) {
            buttonHtml += "<div class='col'><button type='button' id='" + btn.id + "' class='" + btn.class + "'>" + btn.text + "</button></div>";
        });
        $(this._target).find(".modal-button-sec").html(buttonHtml);
        $(this._target).modal("show");
    }

    saveInfo() {
        var formName = this._name;
        var selector = "form[name='" + this._name + "']";
        var table = formName.replace("add", "").replace("edit", "").toLowerCase();
        var inputArray = $.makeArray($(selector).find("input"));
        var dataArray = {};
        $.each(inputArray, function (index, value) {
            var key = $(this).attr("name");
            var val = $(this).val();
            dataArray[key] = val;
        });
        $.ajax({
            url: "./ajax/saveInfo.php",
            data: {
                "data": dataArray,
                "table": table
            },
            method: "POST",
            dataType: "json",
            success: function(data) {
                console.log(data);
            }
        });
    }
}
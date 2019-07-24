class Form {
    constructor(name, caller, contents, target, callback = null) {
        this._name = name;
        this._caller = caller;
        this._contents = contents;
        this._title = contents.title;
        this._buttons = contents.buttons;
        this._fields = contents.fields;
        this._target = target;
        this._callback = callback;
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
                fieldHtml = "<div class='form-group'><label>" + field.label + "</label><" + field.object;
                attributeArray = field.attributes;
                $.each(attributeArray, function (key, value) {
                    fieldHtml += " " + key + "='" + value + "' ";
                });
                fieldHtml += " class='form-control'></" + field.object + "></div>";
                return fieldHtml;
            });
            $.each(fieldHtmlArray, function (index, value) {
                formHtml += "<div class='form-row'>" + value + "</div>";
            });
            $(this._target).find("form").html(formHtml);
        }
        var buttonHtml = "";
        $.each(buttonArray, function(index, btn) {
            buttonHtml += "<div class='col'><button type='button' id='" + btn.id + "' class='" + btn.class + "'>" + btn.text + "</button></div>";
        });
        $(this._target).find(".modal-button-sec").html(buttonHtml);
        $(this._target).modal("show");
    }
}
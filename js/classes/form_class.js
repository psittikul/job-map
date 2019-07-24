class Form {
    constructor(name, caller, contents, target, callback = null) {
        this._name = name;
        this._caller = caller;
        this._contents = contents;
        this._title = contents.title;
        this._fields = contents.fields;
        this._target = target;
        this._callback = callback;
    }

    /**
     * Function to generate HTML for this form based on its fields
     * @param {Form} Form 
     */
    generateFormHtml() {
        console.log("This form's contents: " + this._contents);
        $(this._target).find(".modal-title").text(this._title);
        $(this._target).find(".modal-body").find("form").attr("name", this._name);
        var fieldArray = $.makeArray(this._fields);
        var attributeArray = [];
        var formHtml = "";
        var fieldHtml = "";
        var fieldHtmlArray = $.map(fieldArray, function(value, index) {
            fieldHtml = "<" + value.object;
            attributeArray = value.attributes;
            $.each(attributeArray, function(key, value) {
                fieldHtml += " " + key + "='" + value +"' ";
            });
            fieldHtml += ">" + value.text + "</" + value.object + ">";
            return fieldHtml;
        });
        $.each(fieldHtmlArray, function(index, value) {
            formHtml +="<div class='form-row'>" + value + "</div>";
        });
        $(this._target).find("form").html(formHtml);
        $(this._target).modal("show");
    }
}
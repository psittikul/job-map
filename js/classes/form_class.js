/**
 * 
 * @param {string} name : name of form
 * @param {string} caller : id of element that calls this form
 * @param {Array} contents : array of this form's contents (title, fields, buttons, etc.)
 * @param {string} target : id of modal the form will populate
 * @param {string} html : HTML contents of the form
 * @param {Function} callback : function/action to carry out when form is submitted
 */
// function Form(name, caller, contents, target, callback) {
//     this.name = name;
//     this.caller = caller;
//     this.contents = contents;
//     this.title = contents["title"];
//     this.target = target;
//     this.html = generateFormHtml(this);
//     this.callback = callback;

//     /**
//      * Set up event handler for caller and this form
//      */
//     $(function() {
//         $(caller).on("click", function() {
//             console.log(caller + " clicked, " + name + " form being called with title: " + this.title);
//             // this.html = generateFormHtml(name);
//             // initModal(this, target);
//         });
//     })
// }

// /**
//  * 
//  * @param {Form} form : form object we are generating the HTML for
//  */
// function generateFormHtml(Form) {

// }

// /**
//  * 
//  * @param {Form} Form : form object the modal is for
//  * @param {string} target : id of modal to populate
//  */
// function initModal(Form, target) {

// }
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
     * TO-DO: Write function to generate HTML for this form based on its fields
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
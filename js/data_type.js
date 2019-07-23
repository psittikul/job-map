function DataType(name, fields, dataAction) {
    this.name = name;
    this.fields = fields;
    this.action = dataAction;
}

function generateForm(type) {
    var fieldArray = type.fields;
    var formArray = $(fieldArray).map(function (index, value) {
        var fieldLabel = fieldArray[index]["label"];
        var fieldType = fieldArray[index]["type"];
        var fieldSpan = fieldArray[index]["span"];
        var fieldName = fieldArray[index]["name"];
        var fieldID = fieldArray[index]["id"];
        var fieldHtml = "<div class='form-row'><div class='form-group'><label for='" + fieldID + "'>" + fieldLabel + "</label>" +
            "<input type='" + fieldType + "' id='" + fieldID + "' name='" + fieldName + "' class='form-control'></div></div>";
        return fieldHtml;
    });
}

function generateFooter(type) {
}

function generateButtons(type) {
    var buttonHtml = "<div class='form-row'><div class='col'>";
    var manualBtnText = "Manually Enter " + type.name + " Information";
    var importBtnText = "Import " + type.name + " Information from URL";
    buttonHtml += "<button type='button' class='btn action-btn' id='manualBtn' data-action='" + type.action + "Manual'>" +
        manualBtnText + "</button></div><div class='col'><button type='button' class='btn action-btn' id='importBtn' data-action='" +
        type.action + "Import'>" + importBtnText + "</button></div></div>";
    return buttonHtml;
}
// function Action(name, formHTML, caller, callback, title, button) {
//     this.name = name;
//     this.formHTML = formHTML;
//     this.caller = caller;
//     this.callback = callback;
//     this.title = title;
//     this.button = button;
//     var action = {
//         name: "",
//         formHTML: "",
//         caller: "",
//         callback: "",
//         title: "",
//         button: "",
//         initModal: function () {
//             $("#actionModal").find(".modal-body").html(this.formHTML);
//         },
//         get title() {
//             this.title;
//         },
//         get formHTML() {
//             return this.formHTML;
//         },
//         get btn() {
//             return this.button;
//         },
//         set title(value) {
//             this.title = value;
//         },
//         set btn(value) {
//             this.button = value;
//         }
//     }
// }
function Action(name, caller, callback, title, target, form = null, footer=null) {
    this.name = name;
    this.formHTML = form;
    this.footerHTML = footer;
    this.caller = caller;
    this.callback = callback;
    this.title = title;
    this.target = target;
    // this.submit = submit;
    // this.close = close;
    // this.btn1 = btn1;
    // this.btn2 = btn2;
}

function initModal(Action, target) {
    $(target).find(".modal-body").html(Action.formHTML);
    $(target).find(".modal-title").text(Action.title);
    $(target).find(".modal-footer").html(Action.footerHTML);
    // $(target).find("#submitBtn").text(Action.submit);
    $(target).modal("show");
}

// var action = {
//     name: "",
//     formHTML: "",
//     caller: "", 
//     callback: "",
//     title: "",
//     button: "",
//     initModal: function() {
//         $("#actionModal").find(".modal-body").html(this.formHTML);
//         $("#actionModal").find(".modal-title").text(this.title);
//         $("#actionModal").find("#submitBtn").text(this.button);
//         $("#actionModal").modal("show");
//     },
// }
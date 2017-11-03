var view = require("ui/core/view");
var model = require("../../view-models/person-view-model");

exports.onPageLoad = function(args) {
    var page = args.object;
    page.bindingContext = model;
}
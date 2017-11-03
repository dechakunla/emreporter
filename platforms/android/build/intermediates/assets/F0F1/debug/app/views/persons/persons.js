var frame = require('ui/frame')
var beerviewModel = require('../../view-models/beers-view-model')
var beerviewModel = new beerviewModel.default()

var pageLoaded = function (args) {
    var page = args.object
    page.bindingContext = beerviewModel
    beerviewModel.getBeers()

    if (page.ios) {
        var controller = frame.topmost().ios.controller
        var navigationBar = controller.navigationBar
        navigationBar.barStyle = 1
    }
}

exports.pageLoaded = pageLoaded
var itemLoading = function (args) {
    var cell = args.ios
    if (cell) {
        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectStyleNone
    }
}

exports.itemLoading = itemLoading
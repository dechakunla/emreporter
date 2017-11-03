var observable_1 = require('data/observable')
var observable_array_1 = require('data/observable-array')
var http = require('http')
var beer_1 = require('../models/beer')

var BeersViewModel = (function (_super) {
    __extends(BeersViewModel, _super)
    function BeersViewModel() {
        _super.call(this)
        this.beerList = new observable_array_1.ObservableArray()
    }

    BeersViewModel.prototype.getBeers = function () {
        var _this = this
        http.getJSON('http://www.beer-tutorials.org/beers/beers.json').then(function (result) {
            result.forEach(function (beer) {
                try {
                    _this.beerList.push(new beer_1.default(beer.name, beer.description, beer.alcohol, beer.img))
                }
                catch (err) {
                    console.log(err)
                }
            })
        })
    }
    return BeersViewModel
})(observable_1.Observable)

Object.defineProperty(exports, "__esModule", { value: true })
exports.default = BeersViewModel
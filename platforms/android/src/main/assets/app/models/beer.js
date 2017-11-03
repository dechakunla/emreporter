var Beer = (function () {
    function Beer(name, description, alcohol, image) {
        this.name = name
        this.description = description
        this.alcohol = alcohol
        this.image = "http://beertutorials.github.io/website/" + image
    }
    return Beer
})();

Object.defineProperty(exports, "__esModule", { value: true })
exports.default = Beer
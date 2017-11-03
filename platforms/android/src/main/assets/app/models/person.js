var Person = (function () {
    function Person(pname, email, phone, address) {
        this.pname = pname
        this.email = email
        this.phone = phone
        this.address = address
    }
    return Person
})();

Object.defineProperty(exports, "__esModule", { value: true })
exports.default = Person
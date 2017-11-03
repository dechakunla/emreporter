var frameModule = require("ui/frame")
var dialogsModule = require("ui/dialogs")
var UserViewModel = require("../../shared/view-models/user-view-model")

var page
var user = new UserViewModel()

exports.onLoaded = function(args) {
    page=args.object
    page.bindingContext=user
    console.log("hi on page loaded...")    
}

exports.signinClick = function() {
    user.login()
    .catch(function(error) {
        console.log(error)
        dialogsModule.alert({
            message: "Unfortunately we could not find your account.",
            okButtonText: "OK"
        });
        return Promise.reject()
    })
    .then(function() {
        frameModule.topmost().navigate("views/register/register")
    })
}

exports.registerClick = function() {
    //alert("Registering");
    var topmost=frameModule.topmost()
    topmost.navigate("views/persons/persons")
}

exports.registerClick = function() {
    //alert("Registering");
    var topmost=frameModule.topmost()
    topmost.navigate("views/lists/lists")
}
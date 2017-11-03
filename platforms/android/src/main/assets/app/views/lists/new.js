var Sqlite = require("nativescript-sqlite");  
var view = require("ui/core/view");
var FrameModule = require("ui/frame");  
var createViewModel = require("./persons-view-model").createViewModel;

function onLoad(args) {
    var page = args.object;

    var pname = view.getViewById(page, "pname");
    var email = view.getViewById(page, "email");
    var phone = view.getViewById(page, "phone");
    var address = view.getViewById(page, "address");
    var saveButton = view.getViewById(page, "saveButton");
    var resultLabel = view.getViewById(page, "result");

    saveButton.on("tap", function () {

        var result = "";

        if(pname.text === "")
            result = "Error: All fields required";
        else{
            (new Sqlite("my.db")).then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, pname TEXT, email TEXT, phone TEXT, address TEXT)").then(id => {
                    console.log("CONNECTION TO DB OK!!")
                    result = "Success!!!\nName: " + pname.text + "\nEmail:" + email.text + "\nPhone: " + phone.text + "\nAddr: " + address.text;
                    
                    db.execSQL("INSERT INTO persons (pname,email,phone,address) VALUES (?,?,?,?)", [pname.text,email.text,phone.text,address.text]).then(id => {
                        //this.lists.push({id: id, list_name: result.text});
                    }, error => {
                        console.log("INSERT ERROR", error);
                    });
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });            
        }            

        resultLabel.text = result;
    });
}
exports.onPageLoad = onLoad;

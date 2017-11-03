var Sqlite = require("nativescript-sqlite");  

var FrameModule = require("ui/frame");  
var createViewModel = require("./persons-view-model").createViewModel;

function onNavigatingTo(args) {  
    var page = args.object;
    (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, pname TEXT, email TEXT, phone TEXT, address TEXT)").then(id => {
            console.log("CONNECTION TO DB OK!!")
            page.bindingContext = createViewModel(db);
        }, error => {
            console.log("CREATE TABLE ERROR", error);
        });
    }, error => {
        console.log("OPEN DB ERROR", error);
    });
}

function navigateToView(args) {  
    FrameModule.topmost().navigate({moduleName: "views/lists/view", context: {listId: args.object.bindingContext.lists.getItem(args.index).id}});
}

function newClick(){
    console.log("new click")
    FrameModule.topmost().navigate({moduleName:"views/lists/new"})
}

exports.onNavigatingTo = onNavigatingTo;  
exports.newClick = newClick;  
exports.navigateToView = navigateToView;  

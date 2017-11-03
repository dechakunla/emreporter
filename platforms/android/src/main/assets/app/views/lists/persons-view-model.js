var Observable = require("data/observable").Observable;  
var ObservableArray = require("data/observable-array").ObservableArray;  
var Sqlite = require("nativescript-sqlite");  
var Dialogs = require("ui/dialogs");
//var person = require("../../models/person")

function createViewModel(database) {
    var viewModel = new Observable();
    viewModel.lists = new ObservableArray([]);
    /*
    viewModel.insert = function() {
        Dialogs.prompt("Todo List Name", "").then(result => {
            database.execSQL("INSERT INTO lists (list_name) VALUES (?)", [result.text]).then(id => {
                this.lists.push({id: id, list_name: result.text});
            }, error => {
                console.log("INSERT ERROR", error);
            });
        });
    }
    */
    viewModel.insert = function() {
        //console.log("INSERT HERE!!:"+"TEST")
        console.dir(viewModel.lists.pname)
    }

    viewModel.select = function() {
        this.lists = new ObservableArray([]);
        database.all("SELECT id,pname,email,phone,address FROM persons").then(rows => {
            for(var row in rows) {
                this.lists.push({
                    id: rows[row][0],
                    pname: rows[row][1],
                    email: rows[row][2],
                    phone: rows[row][3],
                    address: rows[row][4]
                });
            }
            console.dir(this.lists)
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    viewModel.select();

    return viewModel;
}

exports.createViewModel = createViewModel;  
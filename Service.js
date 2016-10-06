var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./models/mongo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users")
    .get(function(req,res){
        ----------------------------------------
    })
    .post(function(req,res){
        ----------------------------------------
    });

router.route("/users/:id")
    .get(function(req,res){
        ----------------------------------------
    })
    .put(function(req,res){
        ----------------------------------------
    })
    .delete(function(req,res){
		---------------------------------------
    });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");

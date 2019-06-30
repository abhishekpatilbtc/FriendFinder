
var friendsArray = require("../data/friends");

// Routes
// =============================================================
module.exports = function(app) {

app.get("/api/friends", function(req,res){
 
    return res.json(friendsArray)
})

app.post("/api/friends", function(req,res){
    friendsArray.push(req.body)
    res.json(false)
})

};
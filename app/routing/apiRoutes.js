
var friendsArray = require("../data/friends");

// Routes
// =============================================================
module.exports = function(app) {

app.get("/api/friends", function(req,res){
 
    return res.json(friendsArray)
})


app.post("/api/friends",function(req,res){
    friendsArray.push(req.body);
    // send match as a response
    res.json(searchForAllFriends(friendsArray));

});


//sum of differences
function sumOfDiffBetweenArrays(arrayOfUser,arrayExist){
    var sum=0;
    for(let i=0;i<arrayOfUser.length;i++){
        sum += Math.abs(parseInt(arrayOfUser[i])-parseInt(arrayExist[i]));
    }
    return sum;
}

// Find the match
function searchForAllFriends(arrayOfFriends){
    var customArray =[];
    var indexOfLastElement = arrayOfFriends.length - 1;
    for(let j = 0;j<indexOfLastElement;j++){
        var object = {
            name:arrayOfFriends[j].name,
            photo:arrayOfFriends[j].photo,
            score: sumOfDiffBetweenArrays(arrayOfFriends[indexOfLastElement].scores,arrayOfFriends[j].scores)
        };
        customArray.push(object);
    }

    // referencing the below protoype logic
    var matchedFriend = customArray.hasMin('score');
    return matchedFriend;
}

// Search through the array of objects and find minimum attributes
Array.prototype.hasMin = function(attrib) {
    return this.reduce(function(prev, curr){ 
        return prev[attrib] < curr[attrib] ? prev : curr; 
    });
 }

};
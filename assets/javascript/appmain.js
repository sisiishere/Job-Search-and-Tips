
var firebaseConfig = {
    apiKey: "AIzaSyBrVihpxCSnZEAR8gWi2T7kgMJXjEPTy8M",
    authDomain: "caskjobdb.firebaseapp.com",
    databaseURL: "https://caskjobdb.firebaseio.com",
    projectId: "caskjobdb",
    storageBucket: "",
    messagingSenderId: "679758582398",
    appId: "1:679758582398:web:39be9599762523d9"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


//grabbing the users first and last names
$("#submit").on("click", function (event) {

    var firstname = $("#first_name").val().trim();
    var lastname = $("#last_name").val().trim();
    //ladida

})












// var queryURL = "https://api.indeedassessments.com/v1/";
var youtubeURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails& mine=true"

$.ajax({
    url: queryURL,
    method: "GET"

})
    .then(function (response) {

    })





// var firebaseConfig = {
//     apiKey: "AIzaSyBrVihpxCSnZEAR8gWi2T7kgMJXjEPTy8M",
//     authDomain: "caskjobdb.firebaseapp.com",
//     databaseURL: "https://caskjobdb.firebaseio.com",
//     projectId: "caskjobdb",
//     storageBucket: "",
//     messagingSenderId: "679758582398",
//     appId: "1:679758582398:web:39be9599762523d9"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();


// //grabbing the users first and last names
// $("#submit").on("click", function (event) {

//     var firstname = $("#first_name").val().trim();
//     var lastname = $("#last_name").val().trim();
//     //ladida

// });











var wikiURL = "http://http://en.wikipedia.org/w/api.php?action=query&format=json";
//?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"
// var queryURL = "https://api.indeedassessments.com/v1/";
var youtubeURL = "https://www.googleapis.com/youtube/v3/channels?api_key=AIzaSyAJqO0e_xPV3v6dOOSCl7U2OUNGXiSvSo0";
//var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

$.ajax({
    url: wikiURL,
    method: "GET"

})
    .then(function (response) {
        // 
        console.log(response);
    });




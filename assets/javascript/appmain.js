
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



var queryURL = "https://api.indeedassessments.com/v1/";

$.ajax({
    url: queryURL,
    method: "GET"

})
    .then(function (response) {

    })




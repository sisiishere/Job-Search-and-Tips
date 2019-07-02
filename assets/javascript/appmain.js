
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

var email;
var password;
var query;//the query
var queryhistory = [];//where we can keep a track of all the things they've ever searched upon visiting this website
var organization_ids_comma_seperated;
var hl;//highlight searched terms for the user
var size;//how many results are returned, so like limit
var from;//specifies the starting record
var tags;
var lat_lon;//latitude longitude
var favorites = [];//local favorites array, this will be added to every time the user
//if we can get the json in here that could solve our issues with uploading data to the favorites page



$("#submit").on("click", function (event) {
    event.preventDefault();

    var email = $("#email").val().trim();
    console.log(email);
    var password = $("#password").val().trim();
    console.log(password);
    var keyword = $("#keyword").val().trim();
    console.log(query);
    favorites.push(keyword);

    //if user doesn't exist, create new user 
    //otherwise,
    //log them in and pull all their keywords and display them
    //will need function called load favorites

    //each user will be represented by an object in the firebase database
    //
    //     local email variable--
    //                          |
    //we could...               v   
    //database.ref().push("/"+email)
    //this would create a new directory to represent each object i think? maybe useful.
    //
    //               ^- this could be used in the else of below code to create a new dir
    //                               for a user, if we want to make unique divs per user
    //                      and if below if statement can make use of the divs which is currently
    //                       is using the object route which is dissimilarly all in one div
    //
    //
    //
    //
    //
    //
    //
    //below code woudld be a way to update the favorites page
    //this means results would have to have this script running
    //and reference the firebase
    //
    //way to run through users and check their email and password
    //aka validation, account creation
    //
    //
    //
    //
    //
    //
    //
    //so database.ref().on("child_added"  will have to also add any favorited item to the
    //database and also populate favorites with that favorite item, whether it was a link or
    //a video
    //
    //
    //
    //
    //


    //will have an email, password strinng attribute, that must be 

    //here make sure you don't create a new user if that user already exists

    //for each object in database, check object.email, if that email already exists, don't create new user
    // database.ref().forEach(child){

    //     //better method to just run through each object in a for loop, and check each objects
    //     // .email attribute
    //     if (this.email === email && this.password === password) {
    //         console.log("this user already exists");
    //         //log that user in
    //         email = this.email;
    //         password = this.password;
    //         favorites = this.favorites;//setting our local variables to match this users variables
    //         //break
    //     }
    //     else {//make a new user
    //         var newUser = {
    //             email: email,
    //             password: password,
    //             favorites: favorites//array
    //             //there needs to be an event listener on all hearts/checkboxes that adds the corresponding
    //             //link or video to favorites[]
    //         };
    //         database.ref().push(newUser);//we need to have a system in place that actually USES pasword
    //     }
    //     //                                                                
    //     //                      
    //     //                
    //     //  populate favorites page with object[i].favorites

    // }



    //this should be reconsidered most likely. We don't necessarily want to query things as soon as
    //submit is clicked on this supposed "email, password, search" homepage".  yes we do want a system in
    //place for username and password because that security is necessary for this type of activity - job
    //searching. 

    //adding template for all possible parameters to add to URL https://search.gov/developer/jobs.html#using-the-api

    // var queryURL = "https://jobs.search.gov/jobs/search.json?query=" + query;

    // // + "&" +
    // // organization_ids_comma_seperated + "&" + h1 + "&" + size + "&" + from + + "&" + tags + "&" + lat_lon;
    // //code to dictate what happens based off what input the user decides to put in to URL, which parameters
    // //build url here!

    // $.ajax({
    //     url: queryURL,
    //     // dataType: 'json',
    //     method: "GET"
    // })
    //     .then(function (response) {
    //         console.log(response);

    //     });


})

//and time database is updated, let's go through all the objects
firebase.database().ref().on('value', function (snap) {

    snap.forEach(function (childNodes) {

        //This loop iterates over children of user_id
        //childNodes.key is key of the children of userid such as (20170710)
        console.log(childNodes.val().email);
        console.log(childNodes.val().password);
        console.log(childNodes.val().favorites);
        // childNodes.val().
    });
});


//add their keywords to their keywords array?
database.ref().on("child_added", function (childSnapshot) {
})
// database.ref().on("value", function (snapshot) {
// })



// database.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });
// database.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });

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


//grabbing the users first and last names
$("#submit").on("click", function(event) {
    event.preventDefault();


    var keyword = $("#first_name").val().trim();
    
    var queryURL = "https://en.wikipedia.org/w/api.php?action=query" + "&prop=info&inprop=url" + "&format=json" + "&prop=images" + "&gsrlimit=15&generator=search&origin=*&gsrsearch=" + keyword;
    
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    // After the data from the AJAX request comes back
    .then(function(response) {
        console.log(response)
        console.log(response.query.pages[20597989].title);

        sessionStorage.setItem("name", response.query.pages[20597989].title);

        location.href = "index2.html";
        

    });
});

$("#elephant").text(sessionStorage.getItem("name"));

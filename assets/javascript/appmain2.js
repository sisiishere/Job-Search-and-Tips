
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


    var keyword = $("#keyword").val().trim();
    
    // var queryURL = "https://en.wikipedia.org/w/api.php?action=query" + "&format=json" + "&prop=info&inprop=url" + "&gsrlimit=10" + "&generator=search" + "&origin=*" + "&gsrsearch=" + "elephant";
    // var queryURL = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + "elephant" + "&callback=?" + "&format=json" + "&origin=*";
    var queryURL = "https://en.wikipedia.org/w/api.php?action=query" + "&list=search" + "&srsearch=" + keyword + "&srlimit=5" + "&format=json" + "&origin=*";   

    if (!keyword) {
        // alert("Please fill out the form");
        $(".modal").modal();
        $(".modal").modal("open");
        return false;
    }

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    // After the data from the AJAX request comes back
    .then(function(response) {
        console.log(response)
        
        var results = response.query.search[0];
        console.log(results);

        // Looping through results to create and store variables for all retrieved Wikipedia data
        // for (var i = 0; i < results.length; i++) {
            var title = results.title;
            var snippet = results.snippet;
            var link = "https://en.wikipedia.org/?curid=" + results.pageid;


            sessionStorage.setItem("title", title);
            sessionStorage.setItem("snippet", snippet);
            sessionStorage.setItem("link", link);
            console.log(sessionStorage.setItem("title", title));
        // }

        location.href = "index2.html";
    });

});


// Important links:
// https://stackoverflow.com/questions/36985111/using-wikipedias-api-to-fetch-results-from-search-query

// If can't get URL, use https://en.wikipedia.org/?curid=9279 (so url + id)

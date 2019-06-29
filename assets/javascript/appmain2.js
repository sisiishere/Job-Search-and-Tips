
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

        // var wikiDiv = $("<div>");
        // wikiDiv.addClass("wiki-container");
        // var title = results.title;
        // var p1 = $("<h1>").html(title)
        // var snippet = results.snippet;
        // var p2 = $("<p>").html(snippet);
        // wikiDiv.append(p1);
        // wikiDiv.append(p2);

        // $("#test").append(wikiDiv);

        // var a = $("#wikipedia-link")
        // a.href = "https://en.wikipedia.org/?curid=" + results.pageid;
        var link = "https://en.wikipedia.org/?curid=" + results.pageid;
        // var link = $("#wikipedia-link").attr("href", test);
        // var link = a.href;
        console.log(link);


        sessionStorage.setItem("title", results.title);
        sessionStorage.setItem("snippet", results.snippet);
        sessionStorage.setItem("link", link);


        location.href = "index2.html";
        
        // var link = a.href;
    });
});

$("#wikipedia-title").append(sessionStorage.getItem("title"));
$("#wikipedia-snippet").append(sessionStorage.getItem("snippet"));
// $("a.href").html(sessionStorage.getItem("link"));



// Important links:
// https://stackoverflow.com/questions/36985111/using-wikipedias-api-to-fetch-results-from-search-query

// If can't get URL, use https://en.wikipedia.org/?curid=9279 (so url + id)

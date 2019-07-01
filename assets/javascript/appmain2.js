
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


// When the user hits submit
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Variables for API call
    var keyword = $("#keyword").val().trim();
    
    // URL #1 -- Gives us the full Wikipedia page (but doesn't always return a result, depending on the keyword used)
    var queryURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json" + "&page=" + keyword + "&origin=*"; // + "&prop=text"
    // URL #2 -- Gives us just a snippet (but performs a regular search and always returns a result)
    var queryURL2 = "https://en.wikipedia.org/w/api.php?action=query" + "&list=search" + "&srsearch=" + keyword + "&srlimit=5" + "&format=json" + "&origin=*";    
    // URL #3 -- Gives us a few sentences (but doesn't always return a result)
    // var queryURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + keyword + "?redirect=true";

    // If the user doesn't input a keyword, a modal will pop up telling them to fill out all fields
    if (!keyword) {
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
        console.log(response);
        
        // If an error response comes back (i.e. search results don't return a Wikipedia page), then we do the AJAX call again but with queryURL2
        if (response.error) {
            $.ajax({
                url: queryURL2,
                method: "GET"
            })

            .then(function(response) {
                console.log(response);

                var results = response.query.search[0];
                console.log(results);

                var title = results.title;
                var snippet = results.snippet;
                var link = "https://en.wikipedia.org/?curid=" + results.pageid;

                sessionStorage.setItem("title", title);
                sessionStorage.setItem("snippet", snippet);
                sessionStorage.setItem("link", link);

                location.href = "index2.html";
            })
        }

        // Otherwise, we continue with the first queryURL
        else {

            // For URL #3
            // var title = response.title;
            // var snippet = response.extract_html;
            // var link = "https://en.wikipedia.org/?curid=" + response.pageid;

            // For URL #1
            var title = response.parse.title;
            var snippet = response.parse.text["*"];
            var link = "https://en.wikipedia.org/?curid=" + response.parse.pageid;

            sessionStorage.setItem("title", title);
            sessionStorage.setItem("snippet", snippet);
            sessionStorage.setItem("link", link);
            console.log(sessionStorage.setItem("title", title));

            location.href = "index2.html";
        }
    });

    // // Variables for job search API
    // var queryURLJ = "https://jobs.search.gov/jobs/search.json?query=" + keyword;

    //  // Perfoming an AJAX GET request to our queryURL
    // $.ajax({
    //     url: queryURLJ,
    //     method: "GET"
    // })
    
    // // After the data from the AJAX request comes back
    // .then(function(response) {
    //     console.log(response); 
    //     // Creating an array to push the object to (created below)
    //     var jobArray = [];

    //     // For each i, creating a new object to hold the information we want about each job
    //     response.forEach(i => {
    //         let newObj = {};
    //         newObj.jobTitle = i.position_title;
    //         newObj.jobOrg = i.organization_name;
    //         newObj.jobLocation = i.locations[0];
    //         newObj.jobLink = i.url;
    //         // Pushing the new object to the jobArray
    //         jobArray.push(newObj)
    //     })

    //     console.log(jobArray)
    //     // Storing the object in session storage
    //     sessionStorage.setItem("jobs", JSON.stringify(jobArray));


    // });


    var host = "data.usajobs.gov";
    var userAgent = "kevin.spies@gmail.com";
    var authKey = "EmwCZ7moRDelyy+wVWLkYGAmao1OjvebTpbQEQd5BxY=";

    var queryURLJ2 = "https://data.usajobs.gov/api/search?Keyword=" + keyword;

   $.ajax({
     url: queryURLJ2,
     method: "GET",
     headers: {
       "Host": host,
       "User-Agent": userAgent,
       "Authorization-Key": authKey
     }
   })
   
   .then(function(response) {
        console.log(response); 

        var results = response.SearchResult.SearchResultItems;
        console.log(results);

        var jobArray = [];

        results.forEach(i => {
            let newObj = {};
            newObj.jobTitle = i.MatchedObjectDescriptor.PositionTitle;
            newObj.jobOrg = i.MatchedObjectDescriptor.OrganizationName;
            newObj.jobLocation = i.MatchedObjectDescriptor.PositionLocationDisplay
            newObj.jobLink = i.MatchedObjectDescriptor.PositionURI;
            // Pushing the new object to the jobArray
            jobArray.push(newObj)
    })

    console.log(jobArray)
    // Storing the object in session storage
    sessionStorage.setItem("jobs", JSON.stringify(jobArray));

   });

});

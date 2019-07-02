
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

var job = false;
var wiki = false;
var youtube = false;

// When the user hits submit
$("#submit").on("click", function(event) {
    event.preventDefault();


    // Variables for API call
    var keyword = $("#keyword").val().trim();
    
    // URL #1 -- Gives us the full Wikipedia page (but doesn't always return a result, depending on the keyword used)
    var queryURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json" + "&page=" + keyword + "&origin=*"; // + "&prop=text"
    // URL #2 -- Gives us just a snippet (but performs a regular search and always returns a result)
    var queryURL2 = "https://en.wikipedia.org/w/api.php?action=query" + "&list=search" + "&srsearch=" + keyword + "&srlimit=5" + "&format=json" + "&origin=*";    

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

                // location.href = "index2.html";
            })
        }

        // Otherwise, we continue with the first queryURL
        else {

            // For URL #1
            var title = response.parse.title;
            var snippet = response.parse.text["*"];
            var link = "https://en.wikipedia.org/?curid=" + response.parse.pageid;

            sessionStorage.setItem("title", title);
            sessionStorage.setItem("snippet", snippet);
            sessionStorage.setItem("link", link);
            console.log(sessionStorage.setItem("title", title));

            // location.href = "index2.html";
        }
        wiki = true;
    });


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

    // location.href = "index2.html";

    job = true;
   });



   // *** YouTube API
    var videoID;
    var videoID_2;

    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",

        //search parameter that takes in the users input about a job and gives back videos related to tips on to become a softare engieer.

        q: encodeURIComponent("tips to become a "+$("#keyword").val()).replace(/%20/g, "+"),
        maxResults: 2,
        order: "viewCount"
    });
    request.execute(function(response){
        // log the response 
        console.log(response);
        
        //gets the the video ids from the response request that refer to the two most viewed videos.

        videoID = response.items[0].id.videoId;
        videoID_2 = response.items[1].id.videoId;
        console.log(videoID);
        console.log(videoID_2);

        //storing variables in the session so they can be referenced later.
        sessionStorage.setItem("VideoID",videoID);
        sessionStorage.setItem("VideoID_2",videoID_2);

        console.log(sessionStorage);
        console.log(typeof(sessionStorage));
            embed();
            // location.href = "index2.html";

    youtube = true;
    });

    // Timeout function so we wait a few seconds before running the conditional
    setTimeout (test, 2000)
    // Conditional statement to test whether or not all of the API calls have been made successfully before redirecting to the results page
    function test() {
        if (wiki == true && job == true && youtube == true) {
            location.href = "index2.html";
            console.log("hello");
        }
        else {
            console.log("whoops");
        }
    }


});



function init(){
    gapi.client.setApiKey("AIzaSyCa6Ax79dsyv4aSME_i7u3VKv7ApWTbAe4");
    gapi.client.load("youtube", "v3", function(){
        //Youtube API is ready
    });
};

/*function to embed the videos in our 2nd html page. 
Gets the variable VideoID that was declared in the function call for the YoutubeDataAPI call. 
The video id is the id used to reference a video from the data api related to the users search.
*/
function embed(){
    videoID = sessionStorage.getItem("VideoID");
    videoID_2 = sessionStorage.getItem("VideoID_2");
    console.log(videoID);
    console.log(videoID_2);
    $("#youtube").empty();
    var YT = $("<iframe>");
    /*var YT = $('<iframe>',{
        width: 200,
        height: 200,
        frameborder: 1,
        src: "https://www.youtube.com/embed/"+videoID,
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;    ",
        allowfullscreen: "true"
    }).appendTo($("#youtube"));
    location.href ="index2.html";
    */
    YT.attr("width","200");
    YT.attr("height","200");
    YT.attr("frameborder","1");
    YT.attr("src", "https://www.youtube.com/embed/"+videoID);
    YT.attr("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    YT.attr("allowfullscreen", true);
    YT.addClass("yt1")
    var YT2 = $("<iframe>");
    YT2.attr("width","200");
    YT2.attr("height","200");
    YT2.attr("frameborder","1");
    YT2.attr("src", "https://www.youtube.com/embed/"+videoID_2);
    YT2.attr("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    YT2.attr("allowfullscreen",true);
    YT2.addClass("yt2");
    
    console.log(YT);
    $("#youtube").append(YT);
    $("#youtube").append(YT2);
};


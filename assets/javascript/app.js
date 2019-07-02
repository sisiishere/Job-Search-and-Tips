// Allows our navbar to collapse into a hamburger if the screen width is reduced.
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//declaring varaibles that will store video ID's from the recieved response.
/*
var videoID;
var videoID_2;

// call to get the youtube video objects
$(function(){
    $("#submit").on('click', function(e) {
        e.preventDefault();
        //preparing the kind of information that is to be requested

        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",

            //search parameter that takes in the users input about a job and gives back videos related to tips on to become a softare engieer.

            q: encodeURIComponent("tips to become a "+$("#keyword").val()).replace(/%20/g, "+"),
            maxResults: 2,
            order: "viewCount",
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
            location.href = "index2.html"; 
        });
    });
    embed();
});
*/
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
    YT.attr("allowfullscreen");
   
    var YT2 = $("<iframe>");
    YT2.attr("width","200");
    YT2.attr("height","200");
    YT2.attr("frameborder","1");
    YT2.attr("src", "https://www.youtube.com/embed/"+videoID_2);
    YT2.attr("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    YT2.attr("allowfullscreen",true);
    
    $("#youtube").append(YT);
    $("#youtube").append(YT2);
}
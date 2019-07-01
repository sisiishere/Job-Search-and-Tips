// Allows our navbar to collapse into a hamburger if the screen width is reduced.
$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(function(){
    $("#submit").on('click', function(e) {
        e.preventDefault();
        //preparing the kind of information that is to be requested
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#keyword").val()).replace(/%20/g, "+"),
            maxResults: 2,
            order: "viewCount",
        });
        request.execute(function(response){
            console.log(response);
        });
    });
});

function init(){
    gapi.client.setApiKey("AIzaSyCa6Ax79dsyv4aSME_i7u3VKv7ApWTbAe4");
    gapi.client.load("youtube", "v3", function(){
        //Youtube API is ready
    });
};

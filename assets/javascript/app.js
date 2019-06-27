
//should allow our navbar to collapse into a hamburger if the screen width is reduced.
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });
var youtubeURL = "https://www.googleapis.com/youtube/v3/channels?api_key=AIzaSyAJqO0e_xPV3v6dOOSCl7U2OUNGXiSvSo0";

$.ajax({
    url: youtubeURL,
    method: "GET"

})
    .then(function (response) {
        console.log(response);
    })
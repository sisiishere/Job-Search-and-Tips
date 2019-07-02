$(document).ready(function() {

    // *** Wikipedia API
    // Variables to refer to stored Wikipedia API results
    var title = sessionStorage.getItem("title");
    var snippet = sessionStorage.getItem("snippet");
    var link = sessionStorage.getItem("link");

    // Conditional so that nothing shows up unless an API call has been made
    if (title) {
    
        // Dynamically creating the elements for the Wikipedia API results
        var wikiDiv = $("<div>");
        wikiDiv.addClass("card wiki-container");
        var p1 = $("<h3>").html(title);
        var p2 = $("<p>").html(snippet);
        var p3 = $("<br>");
        var p4 = $("<a>Click here for more information</a>");
        p4.addClass("card center-align wiki-url")
        p4.attr("href", link);
        p4.attr("target", "_blank")
    
        // Appending all elements to the wikiDiv
        // $(".wiki-url").show();
        wikiDiv.append(p1);
        wikiDiv.append(p2);
        wikiDiv.append(p3);
        // wikiDiv.append(p4);

        // Displaying the Wikipedia results
        $("#wikipedia-results").append(wikiDiv);
        $("#wiki-link").append(p4);

    }

    console.log(sessionStorage);
    console.log(typeof(sessionStorage));

    // *** Job Seach API
    // Parsing the job search array
    var jobArrayParsed = JSON.parse(sessionStorage.jobs);
    console.log(sessionStorage.jobs);
    
    // Pulling saved data from local storage if it exists and creating an empty array if saved data does not yet exist
    var saved = JSON.parse(localStorage.getItem("saved")) || [];
    console.log(saved);

    // For each i, create variables that we can use to dynamically create elements to show on the page
    jobArrayParsed.forEach(i => {
        console.log(i);
        // The variables
        var jobTitle = i.jobTitle;
        var jobOrg = i.jobOrg;
        var jobLocation = i.jobLocation;
        var jobLink = i.jobLink;
        console.log(jobTitle);
        // Dynamically creating the variables
        var jobDiv = $("<div>");
        jobDiv.addClass("job-container");
        jobDiv.addClass("card job-card-custom");
        var p1 = $("<p>").html(jobTitle);
        var p2 = $("<p>").html(jobOrg);
        var p3 = $("<p>").html(jobLocation);
        var p4 = $("<a>Link to job listing</a>");
        p4.addClass("job-url");
        p4.attr("href", jobLink);
        p4.attr("target", "_blank");
        // var p5 = $("<button>");
        // p5.text("Click here to favorite");
        // p5.addClass("favorite-button");
        // // Adding data-index and data-saved attirubtes to hold information we'll need to access later
        // p5.attr("data-index", i);
        // p5.attr("data-saved", false);
        // Appending all elements to the jobDiv
        jobDiv.append(p1);
        jobDiv.append(p2);
        jobDiv.append(p3);
        jobDiv.append(p4);
        // jobDiv.append(p5);
        // Displaying the job results
        $("#job-results").append(jobDiv);
    })


    // *** FAVORITES
    // When the button is clicked, we retrieve the index from the data-index attritube and verify that the item has not already been saved
    // $(document).on("click", ".favorite-button", function() {
    //     $(this).addClass("red fav-btn");
    //     var newElement = $(this).attr("data-index");
    //     // console.log(newElement);
    //     console.log(this);
        
    //     if ($(this).attr("data-saved") === "true") {
    //         return false
    //     }
    //     // If the button has not already been saved, we save it, push it to the "saved" array, set local storage, and update the data-saved attribute
    //     // We use both indexOf and data-saved in case it was saved previously
    //     else if (saved.indexOf(newElement) === -1) {
    //         saved.push(newElement);
    //         $(this).attr("data-saved", true);
    //         localStorage.setItem("saved", JSON.stringify(saved));
    //         console.log(localStorage);
    //     }
    // })

    // // For each saved item, create a remove button and append to the favorites section
    // for (var i = 0; i < saved.length; i++) {
    //     console.log(saved[i]);
    //     var divFav = $("<div>");
    //     var pFav = $("<p>");
    //     pFav.text(saved[i]);
    //     console.log(pFav);
    //     $("#job-favorites").append(divFav)
        
    // }
    
    // $(document).on("click", ".fav-btn", function () {
    //     var index = $(this).data("index");

    //     saved.splice(index, 1);

    //     $(this).parent(".job-container").remove();
    //     localStorage.setItem("saved", JSON.stringify(saved));
    // })

    // *** YouTube API
    embed();
});
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
        p4.addClass("card wiki-url")
        // p4.addClass("orange-text text-darken-4")
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
        // Appending all elements to the jobDiv
        jobDiv.append(p1);
        jobDiv.append(p2);
        jobDiv.append(p3);
        jobDiv.append(p4);
        // Displaying the job results
        $("#job-results").append(jobDiv);
    })

});
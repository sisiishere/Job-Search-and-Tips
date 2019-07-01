var indeedJobs = [
    {
    "job": "Personal Trainer",
    "background": "Bachelor's in Health Science, Certification",
    "what's it about": "assisting others on exercising techniques and guiding clients on workout plans",
    
},
{
    "job": "Nurse",
    "background": "BSN, N-CLEX",
    "what's it about": "checking for vitals, nursing those who are not feeling well back to health",
    
},
{
    "background": "Full Stack Developer",
    "background": "Comperter Science Degree, Certification",
    "what's it about": "front and back ends of computer"
},
]

var about; ["gym", "hospital", "computer office"];

var jobs; [{}, {}, {}];

 // Constructing a URL to search Giphy for the name of the person who said the quote
 var queryURL = "indeed-indeed.p.rapidapi.com" +
jobs + "&api_key=b3d3d0b13msh631c9838b316377p186ae2jsnfd7d02d6acc7";

   var jobContainer = document.getElementById("jobs-info")
   var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
   var ourRequest = new XMLHttpRequest();
   ourRequest.open('GET', 'https://github.com/indeedlabs/indeed-python')
   ourRequest.onload = function() {
       var ourData = JSON.parse(ourRequest.responseText);
       renderHTML(ourData);
   };
       console.log(ourData[0]); 
       ourRequest.send();
});
  

   function renderHTML(data) {
       var htmlString = "";

       for (i = 0; i < data.length; i++) { 
           htmlString += "<p>" + data[i].name + "is a " + data[i].species + ".</p>"; 
       }

    jobContainer.insertAdjacentHTML('beforeend', htmlString);
   }
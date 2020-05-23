/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote : "1",
    source : "%%",
    citation : "%%",
    year : "%%"
  },{
    quote : "2",
    source : "%%",
    citation : "%%",
    year : "%%"
  },{
    quote : "3",
    source : "%%",
    citation : "%%",
    year : "%%"
  },{
    quote : "4",
    source : "%%",
    citation : "",
    year : ""
  },{
    quote : "5",
    source : "%%",
    citation : "",
    year : ""
  },{
    quote : "6",
    source : "%%",
    citation : "",
    year : ""
  },
]

// testing console.log(quotes[1].quote);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}


//testing console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote(){
  let theQuote = getRandomQuote();
  let htmlSnip = `<p class="quote"> ${theQuote.quote} </p> \n <p class="source"> ${theQuote.source} `;
  if(theQuote.citation !== ""){
    htmlSnip += `<span class="citation"> ${theQuote.citation} </span>`;
  }
  if(theQuote.year !== ""){
    htmlSnip += `<span class="year"> ${theQuote.year} </span>`;
  }
  
  htmlSnip += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlSnip; 
}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
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
//instantiate array of quotes
let quotes = [
  {
    quote : "Neither enemy faces, nor the mothers that love them, come to mind when one is thinking of nothing but endeavouring to survive. Philosophising about war is useless under fire.",
    source : "Linda Berdoll",
    citation : "Mr. Darcy Take a Wife",
    year : "2004"
  },{
    quote : "Life isn't long enough for love and art.",
    source : "W. Somerset Maugham",
    citation : "The Moon and Sixpence",
    year : "1919"
  },{
    quote : "Patience serves as a protection against wrongs as clothes do against cold. For if you put on more clothes as the cold increases, it will have no power to hurt you. So in like manner you must grow in patience when you meet with great wrongs, and they will then be powerless to vex your mind.",
    source : "Leonardo Da Vinci",
    citation : "",
    year : ""
  },{
    quote : `The phrase "action speaks louder than words," is most easily proven by a swift kick to the genitals.`,
    source : "Devin J. Monroe",
    citation : "",
    year : ""
  },{
    quote : "Never give a child a sword.",
    source : "Latin Proverb",
    citation : "",
    year : ""
  },{
    quote : "The reverse side also has a reverse side.",
    source : "Japanese Proverb",
    citation : "",
    year : ""
  },
]

// testing console.log(quotes[1].quote);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //gets random number and uses it to return a random quote at that index.
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}


//testing console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote(){
  //sets variable for the quote
  let theQuote = getRandomQuote();
  //instantiates variable for the html code to be inserted into document.
  let htmlSnip = `<p class="quote"> ${theQuote.quote} </p> \n <p class="source"> ${theQuote.source} `;
  //if statements check if citation and year have a value.
  if(theQuote.citation !== ""){
    htmlSnip += `<span class="citation"> ${theQuote.citation} </span>`;
  }
  if(theQuote.year !== ""){
    htmlSnip += `<span class="year"> ${theQuote.year} </span>`;
  }
  
  htmlSnip += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlSnip; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
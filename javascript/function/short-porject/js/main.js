const quotes = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6"
]
const paragraphQuotes = document.getElementById("quote");


function showNewQuote() {
  
  const randomNumber = Math.floor(Math.random() * quotes.lenght)
  paragraphQuotes.innerText = quotes[randomNumber]
}

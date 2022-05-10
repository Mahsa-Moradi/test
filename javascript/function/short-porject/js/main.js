const quotes = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 6",
];
const paragraphQuotes = document.getElementById("quote")
  function showNewQuote() {
    // alert("hellooooooooooo");
    // const user = prompt('enter a number :')
    const randomNumber =Math.floor( Math.random()*quotes.lenght)
    paragraphQuotes.innerText =quotes[0]
  };

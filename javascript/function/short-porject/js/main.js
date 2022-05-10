const quotes = [
  "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
  "The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.",
  "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.",
  "Today as always, men fall into two groups: slaves and free men. Whoever does not have two-thirds of his day for himself, is a slave, whatever he may be: a statesman, a businessman, an official, or a scholar.",
  "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
  "The true man wants two things: danger and play. For that reason he wants woman, as the most dangerous plaything."
]
const paragraphQuotes = document.getElementById("quote")
// .................

function showNewQuote() {
  
  const randomNumber = Math.floor(Math.random() * quotes.length)
  paragraphQuotes.innerText = quotes[randomNumber]
}

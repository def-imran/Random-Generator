const quotes = [
    {
        "quote": "Anybody who believes in Allah and the Last Day should not harm his neighbor",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "The most complete of the believers in faith, is the one with the best character among them. And the best of you are those who are best to your women.",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "Your smiling in the face of your brother is charity",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "Whoever has three daughters, or three sisters, or two daughters, or two sisters and he keeps good company with them and fears Allah regarding them, then Paradise is for him.",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "Do not hate one another, and do not be jealous of one another, and do not desert each other",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "There is none amongst the Muslims who plants a tree or sows seeds, and then a bird, or a person or an animal eats from it, but is regarded as a charitable gift for him.",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "And beware of going to extremes in religious matters, for those who came before you were destroyed because of going to extremes in religious matters.",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "He is not one of us who does not have mercy on our young and does not respect our elders.",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "Truthfulness leads to righteousness, and righteousness leads to Paradise. And a man keeps on telling the truth until he becomes a truthful person.",
        "name": "Prophet Muhammed peace be upon him"
    },
    {
        "quote": "The one who looks after a widow or a poor person is like a Mujahid (warrior) who fights for Allah's Cause, or like him who performs prayers all the night and fasts all the day.",
        "name": "Prophet Muhammed peace be upon him"
    }
]

const quoteButton = document.getElementById("generate-button")
quoteButton.addEventListener("click", (generateQuote))

function generateQuote() {
    const randomQuote = quotes[Math.floor(quotes.length * Math.random())];
    const quoteText = document.getElementById("quote-text");
    const quotePerson = document.getElementById("person-text");
    const quoteContainer = document.getElementById("quote-visualizer")
    quoteText.textContent = `"${randomQuote.quote}"`;
    quotePerson.textContent = `~${randomQuote.name}`;
    console.log(randomQuote.quote, randomQuote.name)

}
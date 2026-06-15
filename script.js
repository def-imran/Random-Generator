const quotes = [
    {
        "quote": "He who alleviates the suffering of a brother out of the sufferings of the world, Allah would alleviate his suffering from the sufferings of the Day of Resurrection",
        "name": "prophet Muhammed peace be upon him."
    },

    {
        "quote": "test2",
        "name": "test2name"
    },

    {
        "quote": "test3",
        "name": "test3name"
    },

    {
        "quote": "test4",
        "name": "test4name"
    },

    {
        "quote": "test5",
        "name": "test5name"
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
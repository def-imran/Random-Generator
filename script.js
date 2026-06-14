const quotes = [
    {
        "quote": "test1",
        "name": "test1name"
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
    console.log(randomQuote.quote, randomQuote.name)

}
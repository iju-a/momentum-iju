const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const quotes = [{
        quote: `If you judge a fish by its ability to climb tree, it will live its whole life thinking it's a stupid`,
        author: `-Albert Einstein`
    },{
    quote: `There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.`,
    author: `-ERNEST HEMINGWAY`
}, {
    quote: `If you’re always trying to be normal you will never know how amazing you can be.`,
    author: `-MAYA ANGELOU`
}, {
    quote: `Integrity is doing the right thing, even when no one is watching.`,
    author: `-C.S. LEWIS`
}, {
    quote: `Just as soon as you attain to one ambition you see another one glittering higher up still. It does make life so interesting.`,
    author: `-LUCY MAUD MONTGOMERY`
}, {
    quote: `The power of finding beauty in the humblest things makes home happy and life lovely.`,
    author: `-LOUISA MAY ALCOTT`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `-Steve Jobs`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `-Alan Kay`
}, {
    quote: `Strive not to be a success, but rather to be of value.`,
    author: `-ALBERT EINSTEIN`
}, {
    quote: ` I attribute my success to this: I never gave or took any excuse`,
    author: `-Florence Nightingale`
}, {
    quote: `The most common way people give up their power is by thinking they don’t have any.`,
    author: `-Alice Walker`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})
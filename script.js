function generate() {
    const quotes = [
        "**\"The only way to do great work is to love what you do.\"** Steve Jobs",
        "**\"In three words I can sum up everything I've learned about life: it goes on.\"** Robert Frost",
        "**\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\"** Ralph Waldo Emerson",
        "**\"The best time to plant a tree was 20 years ago. The second best time is now.\"** Chinese Proverb",
        "**\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"** Winston Churchill"
    ];
    const randIndex = Math.floor(Math.random() * quotes.length);
    const randQuote = quotes[randIndex];
    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);
    var d = `rgb(${a},${b},${c})`;
    document.getElementById("content").innerHTML = `<h1>${randQuote}</h1>`;
    document.body.style.backgroundColor = d;
}
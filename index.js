var xhttp = new XMLHttpRequest();
let quotes = [];
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //
        let response = JSON.parse(xhttp.responseText);
        quotes = response.quotes;
    };
};
xhttp.open("GET", "quotes.json", true);
xhttp.send();

function generateNewQuote() {
    $(".button-generate").on("click", function() {
        let randomIndex = Math.floor(Math.random() * quotes.length);
            $(".quote").html(`"${quotes[randomIndex].quote}"`);
            $(".speaker").html(`- ${quotes[randomIndex].speaker}`);
    });
}

$(generateNewQuote);
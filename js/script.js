function clickFunc( event ) {
    let inputText = document.getElementById( 'search-input' ).value;

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+ inputText +"&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ec4ba37e70msh4940fde0afa9aaep17b427jsnbeddedfce415",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => { 
        var results = document.getElementById( 'results' );
        if(data.news.length != 0 || data.quotes.length != 0) {
            var newsResults = data.news;
            var quotesResults = data.quotes;

            results.innerHTML = "";

            var news = document.createElement('div');
            var quotes = document.createElement('div');
            news.innerHTML = "";
            news.id = "main-container";
            quotes.innerHTML = "";
            quotes.id = "main-container";

            var newsHeader = document.createElement('div');
            var quotesHeader = document.createElement('div');
            var newsContent = document.createElement('div');
            var quotesContent = document.createElement('div');
            newsHeader.innerHTML = "<h2>News</h2>";
            quotesHeader.innerHTML = "<h2>Quotes</h2>";

            for( let index = 0; index < newsResults.length; index++) {
                var a = document.createElement('a');
                a.href = newsResults[index].link;
                a.innerHTML = '<p>'+newsResults[index].title+'</p>';
                a.id = "main-link";
                a.style.cssText = "color: #CA3E47; font-size: 26px; text-decoration: none;";
                newsContent.appendChild(a);
            }
            for( let index = 0; index < quotesResults.length; index++) {
                var a = document.createElement('a');
                a.href = "#";
                a.id = "main-link";
                a.innerHTML = '<p>'+quotesResults[index].shortname+'</p>';
                a.style.cssText = "color: #CA3E47; font-size: 26px; text-decoration: none;";
                quotesContent.appendChild(a);
            }


            quotes.appendChild(quotesHeader);
            quotes.appendChild(quotesContent);
            news.appendChild(newsHeader);
            news.appendChild(newsContent);

            results.appendChild(quotes);
            results.appendChild(news);
        } else {
            results.innerHTML = "<h2>ERROR... Try something else!</h2>";
        }
     })
    .catch(err => {
        console.error(err);
    });

}

document.getElementById( 'search-button' ).addEventListener( 'click', clickFunc );
import './styles.css';
import React, { useState } from 'react';

function Quotes(props){
    const [quote, setQuote] = useState([]);

    const getQuote = () => {
        //DO AJAX HERE

        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=" + props.symbol + "&region=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ec4ba37e70msh4940fde0afa9aaep17b427jsnbeddedfce415",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => { 
            //TODO
            setQuote(data.price.regularMarketOpen.raw);
        })
        .catch(err => {
            console.error(err);
        });

    }

    return(
        <div className="main-link-container">
            <a onClick={getQuote} href="#" id="main-link" className="main-link">
                <p>{props.shortname} : {props.symbol}</p>
            </a>
            <div className="main-link">
                {quote}
            </div>
        </div>
    );
}

export default Quotes;
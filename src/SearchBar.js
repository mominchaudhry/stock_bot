import './styles.css';
import React, { useState } from 'react';
import Quotes from './Quotes';
import News from './News';

function SearchBar(){
    const [quotes, setQuotes] = useState([]);
    const [news, setNews] = useState([]);
    const [input, setValue] = useState('');

    const search = () => {
        //DO AJAX HERE
        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+ input +"&region=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ec4ba37e70msh4940fde0afa9aaep17b427jsnbeddedfce415",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
        .then(response => {
            if(response.status >= 200 && response.status <= 299){
                return response.json();
            } else {
                setQuotes([]);
                setNews([]);
            }
        })
        .then(data => { 
            setQuotes(data.quotes);
            setNews(data.news);
        })
        .catch(err => {
            console.error(err);
        });
 
    }
    return(
        <div className="search-box-holder">
            <div className="search-box">
                <input className="search-text" type='text'placeholder="Search..." onKeyPress={search} onChange={event => setValue(event.target.value)}></input>
                <a id="search-button" className="search-button" onClick={search}>
                    <i className="fas fa-search"></i>
                </a>
            </div>
            <div className="results">
                <div className="main-container">
                    <div>
                        <h2>Quotes</h2>
                    </div>
                    {quotes.map(quote =>{
                        return <Quotes key={quote.symbol} symbol={quote.symbol} shortname={quote.shortname}/>
                    })}
                </div>
                <div className="main-container">
                    <div>
                        <h2>News</h2>
                    </div>
                    {news.map(n =>{
                        return <News key={n.uuid} title={n.title} link={n.link}/>
                    })}
                </div>
                
            </div>
        </div>
    );
}

export default SearchBar;
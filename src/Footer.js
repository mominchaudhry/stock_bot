import './styles.css';
import React, { useState, useEffect } from 'react';
import FooterStock from './FooterStock';


function Footer(props){
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists", {
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
                setStocks([]);
            }
        })
        .then(data => { 
            setStocks(data.finance.result[0].portfolios);
            console.log(data.finance.result[0].portfolios);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);


    return(
        <footer id="footer" className="footer">
            {stocks.slice(0,3).map(stock =>{
                return <FooterStock key={stock.userId} name={stock.name}/>
            })}
      </footer>
    );
}

export default Footer;
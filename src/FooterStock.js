import './styles.css';
import React, { useState } from 'react';

function FooterStock(props){

    return(
        <div className="col-md-4 footer-item">
            <a id="footer-stock1" href="#"><h2>{props.name}</h2></a>
        </div>
    );
}

export default FooterStock;
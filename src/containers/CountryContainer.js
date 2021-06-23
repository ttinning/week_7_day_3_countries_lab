import { useState, useEffect } from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";
import './CountryContainer.css';


const CountryContainer = () => {
    return (
        <div class="main-container">
            <div>
                <h2>I am a CountryContainer</h2>
                <CountrySelector></CountrySelector>
            </div>
            <div>
                <CountryDetails></CountryDetails>
            </div>
        </div>
    );
};

export default CountryContainer;





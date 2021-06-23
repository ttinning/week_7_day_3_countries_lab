import { useState, useEffect } from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";
import './CountryContainer.css';


const CountryContainer = () => {


    const [countries, setCountries] = useState([]);
    const [selectedCoutry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries()
    }, []);

    const getCountries = function() {
        const request = fetch('https://restcountries.eu/rest/v2/all').then(response => response.json()).then(countries => setCountries(countries));
    };

    const onCountrySelected = function(country) {
        setSelectedCountry(country);
    };



    return (
        <div className="main-container">
            <div>
                <h2>I am a CountryContainer</h2>
                <CountrySelector countries={countries} onCountrySelected={onCountrySelected}></CountrySelector>
            </div>
            <div>
                <CountryDetails></CountryDetails>
            </div>
        </div>
    );
};

export default CountryContainer;





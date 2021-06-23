import { useState, useEffect } from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";
import './CountryContainer.css';
import FavouritesListDisplay from "../components/FavouritesList";


const CountryContainer = () => {


    const [countries, setCountries] = useState([]);
    const [selectedCoutry, setSelectedCountry] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);

    useEffect(() => {
        getCountries()
    }, []);

    const getCountries = function() {
        const request = fetch('https://restcountries.eu/rest/v2/all').then(response => response.json()).then(countries => setCountries(countries));
    };

    const onCountrySelected = function(country) {
        setSelectedCountry(country);
    };

    const totalCountriesPop = countries.reduce((runningTotal, country) => {
        return runningTotal + country.population;
    }, 0);

    const addCountry = () => {
        const submittedCountry = selectedCoutry;
        const updatedFavouritesList = [...favouritesList, submittedCountry];
        setFavouritesList(updatedFavouritesList);
    };



    return (
        <div>
            <div className="main-container">
                <div>
                    <h2>Total world population is {totalCountriesPop}</h2>
                    <CountrySelector countries={countries} onCountrySelected={onCountrySelected}></CountrySelector>
                </div>
                <div>
                    { selectedCoutry ?<CountryDetails country={selectedCoutry}></CountryDetails> : null}
                    { selectedCoutry ?<button onClick={addCountry}>Add to favourite</button> : null}
                </div>
            </div>
            <div>
                <FavouritesListDisplay favouritesList={favouritesList}></FavouritesListDisplay>
            </div>
        </div>
    );
};

export default CountryContainer;





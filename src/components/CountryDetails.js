import './CountryDetails.css';

const CountryDetails = ({country}) => {


    return(
        <div>
            <h2>{country.name}</h2>
            <p>Population: {country.population}</p>
            <img id="country-flag" src={country.flag}></img>
        </div>
    );
};

export default CountryDetails;
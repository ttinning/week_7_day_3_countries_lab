

const CountryDetails = ({country}) => {


    return(
        <div>
            <h2>{country.name}</h2>
            <p>Population: {country.population}</p>
            <img src={country.flag}></img>
        </div>
    );
};

export default CountryDetails;
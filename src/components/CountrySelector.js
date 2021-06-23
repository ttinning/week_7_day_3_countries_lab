

const CountrySelector= ({countries, onCountrySelected}) => {

    const handleChange = function(evt) {
        const chosenCountry = countries[evt.target.value];
        onCountrySelected(chosenCountry);
    };


    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    });


    return (
        <select default="" onChange={handleChange}>
            <option defaultValue="">Choose a country:</option>
            {countryOptions}
        </select>

    );
};


export default CountrySelector;
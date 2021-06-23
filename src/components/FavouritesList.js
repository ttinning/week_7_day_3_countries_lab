


const FavouritesListDisplay = function({favouritesList}) {

    const favListToDisplay = favouritesList.map((favouriteCountry) => {
        return <li>{favouriteCountry.name}</li>
    });

    return (
        <div>
            <h2>Favourite countries</h2>
            <ul>
                {favListToDisplay}
            </ul>
        </div>
    );
};

export default FavouritesListDisplay;
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function RandomBeer() {
    const [beer, setBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                console.log('data', response.data);
                setBeer(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    if (beer === null && isLoading === false) {
        return <p>Loading random beer...</p>
    }

    return (
        <div>
             <Header />
            <>
                {beer === null ?
                    <p>No random beer found</p> :
                    (<div>
                        <img src={beer.image_url} alt="beer_image" />
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                    </div>)
                }
            </>
        </div>
    );
}

export default RandomBeer;
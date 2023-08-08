import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function SingleBeerPage() {
    const [beer, setBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { beerId } = useParams();

    useEffect(() => {
        setIsLoading(true);

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                console.log('data', response.data);
                setBeer(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, [beerId]);

    if (beer === null && isLoading === false) {
        return <p>Loading beer...</p>
    }

    return (
        <div>
             <Header />
            <>
                {beer === null ?
                    <p>No beer found</p> :
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

export default SingleBeerPage;
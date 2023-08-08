import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log('data', response.data);
                setBeers(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading beers...</p>;
    }

    return (
        <div>
            <Header />

            {beers.length === 0 ?
                <p>No beers found</p> :
                (<div>
                    {beers.map(beer => (
                        <div key={beer._id}>
                            <img src={beer.image_url} alt="beer_image" />
                            <p>{beer.name}</p>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                        </div>
                    ))}
                </div>)
            }
        </div>
    );
}

export default Beers;
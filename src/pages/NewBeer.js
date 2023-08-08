import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewersTips: brewersTips,
            attenuationLevel: attenuationLevel,
            contributedBy: contributedBy
        }
        console.log('newBeer', newBeer);
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(({ data }) => {
                console.log('post response data', data)
                navigate("/");
            })

    }

    return (
        <div className="AddBeerPage">
            <Header />

            <h3>Add New Beer</h3>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label>Tagline</label>
                <input
                    type="text"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                />

                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <label>First Brewed</label>
                <input
                    type="text"
                    name="firstBrewed"
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    value={firstBrewed}
                />

                <label>Brewer's Tips</label>
                <input
                    type="text"
                    name="brewersTips"
                    onChange={(e) => setBrewersTips(e.target.value)}
                    value={brewersTips}
                />

                <label>Attenuation Level</label>
                <input
                    type="number"
                    name="attenuationLevel"
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                    value={attenuationLevel}
                />

                <label>Contributed By</label>
                <input
                    type="text"
                    name="contributedBy"
                    onChange={(e) => setContributedBy(e.target.value)}
                    value={contributedBy}
                />

                <button type="submit">Create Beer</button>
            </form>
        </div>
    );
}

export default NewBeer;
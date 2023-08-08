import { Link } from 'react-router-dom';

const imgURL1 = "/assets/beers.png";
const imgURL2 = "/assets/random-beer.png";
const imgURL3 = "/assets/new-beer.png";

const Home = () => {
    return (
        <div>
            <div>
                <img src={imgURL1} alt="All beers" className="home-page-img" />
                <Link to='/beers'><h1>All Beers</h1></Link>
                <p>Lorem...</p>
            </div>
            <div>
                <img src={imgURL2} alt="Random beer" className="home-page-img" />
                <Link to='/random-beer'><h1>Random Beer</h1></Link>
                <p>Lorem...</p>
            </div>
            <div>
                <img src={imgURL3} alt="New beer" className="home-page-img" />
                <Link to='/new-beer'><h1>New Beer</h1></Link>
                <p>Lorem...</p>
            </div>
        </div>
    );
}

export default Home;

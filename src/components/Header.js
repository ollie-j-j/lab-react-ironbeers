import { Link } from "react-router-dom";

const headerImg = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={headerImg} alt="image" /></Link>
        </header>
    );
}

export default Header;

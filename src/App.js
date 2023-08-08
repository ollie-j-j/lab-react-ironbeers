import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeerPage from "./pages/SingleBeers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/beers' element={<Beers />} />
        <Route path="/beers/:beerId" element={<SingleBeerPage />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

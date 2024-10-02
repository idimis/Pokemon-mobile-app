import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

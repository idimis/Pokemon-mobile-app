
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { PokemonProvider } from './context/PokemonContext';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage';
import Header from './components/Header';

const container = document.getElementById('root');

if (container) { // Check if the container is not null
    const root = createRoot(container);

    root.render(
        <Provider store={store}>
            <PokemonProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/pokemon/:name" element={<PokeDetailPage />} />
                    </Routes>
                </Router>
            </PokemonProvider>
        </Provider>
    );
} else {
    console.error('Root container not found');
}

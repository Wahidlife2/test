import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hotel/:id" element={<HotelDetail />} />
                        <Route path="/checkout/:id" element={<Checkout />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

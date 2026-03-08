import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import './index.css';

const Footer = () => (
    <footer className="bl-footer mt-60">
        <div className="container py-40">
            <div className="footer-grid grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
                <div className="footer-col">
                    <h3>CHOISIR BOULANGER</h3>
                    <ul>
                        <li>Garantie 2 ans</li>
                        <li>Livraison offerte</li>
                        <li>Retrait 1h en magasin</li>
                        <li>B Domo</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>BESOIN D'AIDE ?</h3>
                    <ul>
                        <li>Suivi de commande</li>
                        <li>SAV & Réparation</li>
                        <li>Contactez-nous</li>
                        <li>Données personnelles</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>NOS SERVICES</h3>
                    <ul>
                        <li>Vendre son produit</li>
                        <li>Carte de fidélité</li>
                        <li>Assurances</li>
                        <li>Modes de paiement</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>À PROPOS</h3>
                    <ul>
                        <li>Qui sommes-nous ?</li>
                        <li>Nos magasins</li>
                        <li>Nos marques</li>
                        <li>Recrutement</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom border-top mt-40 pt-20 text-center">
                <p className="text-sm text-gray">© 2026 Boulanger - Siège social : Avenue de la Motte, 59810 Lesquin</p>
            </div>
        </div>
    </footer>
);

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-shell">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

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
    <footer className="footer mt-60" style={{ background: '#f5f5f5', borderTop: '1px solid #eee', padding: '60px 0' }}>
        <div className="container">
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
                <div className="footer-col">
                    <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>SERVICE CLIENT</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#666', lineHeight: '2' }}>
                        <li>Suivi de commande</li>
                        <li>Retours & Échanges</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>NOS ENGAGEMENTS</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#666', lineHeight: '2' }}>
                        <li>E-réservation</li>
                        <li>Click & Collect</li>
                        <li>Garantie prix bas</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>LA HALLE</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#666', lineHeight: '2' }}>
                        <li>Nos magasins</li>
                        <li>Recrutement</li>
                        <li>Groupe Beaumanoir</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>NOUS SUIVRE</h4>
                    <div className="social flex gap-15" style={{ display: 'flex', gap: '15px' }}>
                        <span>FB</span> <span>IG</span> <span>TT</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mt-60 pt-20 border-top text-center" style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
                <p>© 2026 La Halle - Tous droits réservés</p>
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

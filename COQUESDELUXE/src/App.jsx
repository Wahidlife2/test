import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import './index.css';

const Footer = () => (
  <footer className="coquesdeluxe-footer">
    <div className="container footer-grid">
      <div className="footer-col">
        <h4>À PROPOS</h4>
        <ul>
          <li>La Philosophie Coques de Luxe</li>
          <li>Nos Engagements</li>
          <li>Presse</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>SERVICE CLIENT</h4>
        <ul>
          <li>Contactez-nous</li>
          <li>Livraison & Retours</li>
          <li>FAQ</li>
          <li>Suivre ma commande</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>COMMUNAUTÉ</h4>
        <ul>
          <li>Instagram</li>
          <li>TikTok</li>
          <li>Pinterest</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>NEWSLETTER</h4>
        <ul>
          <li>Inscrivez-vous pour obtenir -10% sur votre première commande.</li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">
      <div className="legal-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>
        <span>Mentions légales</span> <span>CGV</span> <span>Politique de confidentialité</span>
      </div>
      <p className="copyright" style={{ fontSize: '0.75rem', color: '#999', marginTop: '20px', textAlign: 'center' }}>© 2026 COQUES DE LUXE - Tous droits réservés</p>
    </div>
  </footer>
);

import { CartProvider } from './context/CartContext';
import SearchResults from './pages/SearchResults';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-shell">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:name" element={<Category />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/cart" element={<CartPage />} />
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

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import './index.css';

const Footer = () => (
  <footer className="kiabi-footer">
    <div className="container footer-grid">
      <div className="footer-col">
        <h4>NOS SERVICES</h4>
        <ul>
          <li>E-réservation</li>
          <li>Click & Collect</li>
          <li>Livraison à domicile</li>
          <li>Paiement sécurisé</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>NOS ENGAGEMENTS</h4>
        <ul>
          <li>Kiabi ACT for good</li>
          <li>Seconde main</li>
          <li>Réparabilité</li>
          <li>Accessibilité</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>À PROPOS DE KIABI</h4>
        <ul>
          <li>Nos magasins</li>
          <li>Carrières</li>
          <li>Espace Presse</li>
          <li>Affiliation</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>AIDE & CONTACT</h4>
        <ul>
          <li>Suivi de commande</li>
          <li>Retours & Échanges</li>
          <li>FAQ</li>
          <li>Contactez-nous</li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">
      <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>
        <span>Facebook</span> <span>Instagram</span> <span>TikTok</span> <span>Pinterest</span>
      </div>
      <div className="legal-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>
        <span>Mentions légales</span> <span>CGU</span> <span>Politique de cookies</span> <span>Données personnelles</span>
      </div>
      <p className="copyright" style={{ fontSize: '0.75rem', color: '#999', marginTop: '20px', textAlign: 'center' }}>© 2026 Kiabi - Tous droits réservés</p>
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

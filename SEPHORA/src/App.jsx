import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import './index.css';
import { CartProvider } from './context/CartContext';

const Footer = () => (
  <footer className="sephora-footer">
    <div className="container footer-grid">
      <div className="footer-col">
        <h4>AIDE ET CONTACT</h4>
        <ul>
          <li>Foire aux Questions</li>
          <li>Suivre ma commande</li>
          <li>Retourner un article</li>
          <li>Contactez-nous</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>SERVICES SEPHORA</h4>
        <ul>
          <li>Click & Collect</li>
          <li>Livraison à domicile</li>
          <li>Cartes Cadeaux</li>
          <li>Beauty App</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>À PROPOS DE SEPHORA</h4>
        <ul>
          <li>Notre histoire</li>
          <li>Carrières</li>
          <li>Nos engagements</li>
          <li>Beauty Insider</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>RESTER CONNECTÉ</h4>
        <ul>
          <li>Abonnez-vous à notre newsletter</li>
          <li>Instagram</li>
          <li>TikTok</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">
      <p style={{ fontSize: '0.8rem', color: '#999' }}>© 2026 Sephora France - Tous droits réservés.</p>
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

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBag, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount, searchQuery, setSearchQuery } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sephora-header">
      <div className="header-top">
        DÉCOUVREZ NOS OFFRES EXCLUSIVES SUR L'APP SEPHORA !
      </div>

      <div className="header-main container">
        <Link to="/" className="sephora-logo">SEPHORA</Link>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un produit, une marque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <Search size={18} />
        </div>

        <div className="header-right">
          <div className="hub-switcher">
            <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }} style={{ padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="">HUB</option>
              <option value="/SEPHORA/index.html">SEPHORA</option>
              <option value="/KIABI/index.html">KIABI</option>
              <option value="/COQUESDELUXE/index.html">COQUESDELUXE</option>
            </select>
          </div>
          <div className="header-action-item">
            <MapPin size={24} strokeWidth={1.5} />
            <span>Magasins</span>
          </div>
          <Link to="/account" className="header-action-item">
            <User size={24} strokeWidth={1.5} />
            <span>Compte</span>
          </Link>
          <Link to="/cart" className="header-action-item cart-btn">
            <ShoppingBag size={24} strokeWidth={1.5} />
            <span>Panier</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      <nav className="header-nav">
        <div className="nav-links-center container">
          <Link to="/" className="nav-link">Cadeaux</Link>
          <Link to="/category/Parfum" className="nav-link">Parfum</Link>
          <Link to="/category/Maquillage" className="nav-link">Maquillage</Link>
          <Link to="/category/Soin%20Visage" className="nav-link">Soin Visage</Link>
          <Link to="/category/Cheveux" className="nav-link">Cheveux</Link>
          <Link to="/category/Promos" className="nav-link">Bons Plans</Link>
          <Link to="/category/Sephora%20Collection" className="nav-link sephora-brand">SEPHORA COLLECTION</Link>
        </div>
      </nav>
      <div className="striped-banner"></div>
    </header>
  );
};

export default Navbar;

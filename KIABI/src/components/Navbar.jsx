import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBasket, MapPin, Menu } from 'lucide-react';
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
    <header className="kiabi-header">
      <div className="header-top">
        Dernière chance ! Profitez des Ventes non privées jusqu'à -50%
      </div>

      <div className="header-main container">
        <div className="header-left">
          <div className="search-bar">
            <Search size={18} className="search-icon-left" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        <div className="header-center">
          <Link to="/" className="kiabi-logo">KIABI</Link>
        </div>

        <div className="header-right">
          <div className="hub-switcher" style={{ marginRight: '15px' }}>
            <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.7rem', fontWeight: 'bold' }}>
              <option value="">HUB</option>
              <option value="/KIABI/index.html">KIABI</option>
              <option value="/CDISCOUNT/index.html">CDISCOUNT</option>
              <option value="/BOULANGER/index.html">BOULANGER</option>
              <option value="/LA_HALLE/index.html">LA HALLE</option>
            </select>
          </div>
          <div className="header-action-item hide-mobile">
            <MapPin size={22} />
            <span className="action-label">Magasin</span>
          </div>
          <Link to="/account" className="header-action-item">
            <User size={22} />
            <span className="action-label">Compte</span>
          </Link>
          <Link to="/cart" className="header-action-item cart-btn">
            <ShoppingBasket size={22} />
            <span className="action-label">Panier</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      <nav className="header-nav">
        <div className="nav-links-center container">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/category/Femme" className="nav-link">Femme</Link>
          <Link to="/category/Homme" className="nav-link">Homme</Link>
          <Link to="/category/Enfant" className="nav-link">Fille</Link>
          <Link to="/category/Enfant" className="nav-link">Garçon</Link>
          <Link to="/category/Bébé" className="nav-link">Bébé</Link>
          <Link to="/category/Maison" className="nav-link">Maison</Link>
          <Link to="/category/Promos" className="nav-link promo-link">Ventes Non Privées</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

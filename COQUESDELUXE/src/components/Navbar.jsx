import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBasket, Menu } from 'lucide-react';
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
    <header className="coquesdeluxe-header">
      <div className="header-top">
        LIVRAISON GRATUITE EN FRANCE MÉTROPOLITAINE
      </div>

      <div className="header-main container">
        <div className="header-left">
          <nav className="header-nav-inline">
            <Link to="/category/iPhone%2017" className="nav-link">iPhone 17</Link>
            <Link to="/category/iPhone%2016" className="nav-link">iPhone 16</Link>
            <Link to="/category/iPhone%2015" className="nav-link">iPhone 15</Link>
            <Link to="/category/Collections" className="nav-link">Toutes les coques</Link>
          </nav>
        </div>

        <div className="header-center">
          <Link to="/" className="coquesdeluxe-logo">COQUES <span style={{ fontWeight: 300 }}>DE LUXE</span></Link>
        </div>

        <div className="header-right">
          <div className="hub-switcher" style={{ marginRight: '15px' }}>
            <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.7rem', fontWeight: 'bold' }}>
              <option value="">HUB</option>
              <option value="/COQUESDELUXE/index.html">COQUESDELUXE</option>
              <option value="/KIABI/index.html">KIABI</option>
              <option value="/CDISCOUNT/index.html">CDISCOUNT</option>
              <option value="/BOULANGER/index.html">BOULANGER</option>
              <option value="/LA_HALLE/index.html">LA HALLE</option>
            </select>
          </div>

          <div className="header-action-item">
            <Search size={22} onClick={() => {
              const q = prompt("Rechercher:");
              if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
            }} />
          </div>
          <Link to="/account" className="header-action-item">
            <User size={22} />
          </Link>
          <Link to="/cart" className="header-action-item cart-btn">
            <ShoppingBasket size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

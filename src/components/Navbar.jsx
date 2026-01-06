import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cartCount } = useCart();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        <div className="mi-logo">mi</div>
                    </Link>
                    <nav className="navbar-menu">
                        <Link to="/" className="nav-link">Boutique</Link>
                        <Link to="/search?q=Mobile" className="nav-link">Mobile</Link>
                        <Link to="/search?q=Maison%20Connectée" className="nav-link">Maison Connectée</Link>
                        <Link to="/search?q=Lifestyle" className="nav-link">Lifestyle</Link>
                    </nav>
                </div>

                <div className="navbar-right">
                    <form onSubmit={handleSearch} className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="nav-icon-wrapper search-btn">
                            <Search size={20} className="nav-icon" />
                        </button>
                    </form>
                    <Link to="/cart" className="nav-icon-wrapper cart-icon-wrapper">
                        <ShoppingCart size={20} className="nav-icon" />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <div className="nav-icon-wrapper">
                        <User size={20} className="nav-icon" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, ChevronDown, MapPin, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const { cartCount } = useCart();

    const categories = ["Informatique", "Electroménager", "Maison", "TV Son", "Jardin", "Brico"];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="cd-header">
            <div className="cd-top-bar">
                <div className="container flex justify-between align-center">
                    <div className="top-links flex gap-20">
                        <div className="hub-switcher">
                            <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }} className="hub-select-cd">
                                <option value="">SWITCH PROJECT</option>
                                <option value="/KIABI/index.html">KIABI</option>
                                <option value="/CDISCOUNT/index.html">CDISCOUNT</option>
                                <option value="/BOULANGER/index.html">BOULANGER</option>
                                <option value="/LA_HALLE/index.html">LA HALLE</option>
                            </select>
                        </div>
                        <Link to="#" className="text-white text-xs">Cdiscount à volonté</Link>
                        <Link to="#" className="text-white text-xs">Aide & Contact</Link>
                    </div>
                    <div className="top-promo flex align-center gap-10">
                        <MapPin size={14} color="white" />
                        <span className="text-white text-xs">Livraison à <strong>Paris (75)</strong></span>
                    </div>
                </div>
            </div>

            <div className="cd-main-nav">
                <div className="container flex align-center gap-20 py-15">
                    <div className="menu-container" style={{ position: 'relative' }}>
                        <div
                            className="menu-burger flex align-center gap-10"
                            onClick={() => setShowMenu(!showMenu)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Menu size={28} color="white" />
                            <span className="text-white font-bold hide-mobile">MENU</span>
                        </div>

                        {showMenu && (
                            <div className="dropdown-menu">
                                {categories.map(cat => (
                                    <Link
                                        key={cat}
                                        to={`/search?q=${encodeURIComponent(cat)}`}
                                        className="dropdown-item"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/" className="cd-logo">
                        <span className="logo-cd">C</span>
                        <span className="logo-discount">discount</span>
                    </Link>

                    <form className="search-container" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Rechercher un produit, une marque..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">
                            <Search size={22} color="white" />
                        </button>
                    </form>

                    <div className="nav-actions flex align-center gap-20">
                        <div className="action-item flex align-center gap-5">
                            <User size={24} color="white" />
                            <div className="action-text hide-tablet">
                                <span className="text-xs text-white block">Me connecter</span>
                                <span className="text-sm text-white font-bold block">Compte <ChevronDown size={14} /></span>
                            </div>
                        </div>
                        <div className="action-item flex align-center gap-5">
                            <Heart size={24} color="white" />
                            <span className="text-sm text-white font-bold hide-tablet">Favoris</span>
                        </div>
                        <Link to="/cart" className="cart-btn flex align-center gap-10">
                            <div className="cart-icon-wrapper">
                                <ShoppingCart size={24} color="#002d6a" />
                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                            </div>
                            <span className="text-blue font-bold hide-mobile">Panier</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

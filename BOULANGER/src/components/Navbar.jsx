import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="bl-header">
            <div className="bl-top-bar">
                <div className="container flex justify-between align-center">
                    <span className="text-white text-xs">Livraison offerte dès 50€ | Retrait 1h en magasin</span>
                    <div className="flex gap-20">
                        <div className="hub-switcher">
                            <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }} className="hub-select">
                                <option value="">SWITCH PROJECT</option>
                                <option value="/KIABI/index.html">KIABI</option>
                                <option value="/CDISCOUNT/index.html">CDISCOUNT</option>
                                <option value="/BOULANGER/index.html">BOULANGER</option>
                                <option value="/LA_HALLE/index.html">LA HALLE</option>
                            </select>
                        </div>
                        <Link to="#" className="text-white text-xs">Besoin d'aide ?</Link>
                        <Link to="#" className="text-white text-xs">Magasins</Link>
                    </div>
                </div>
            </div>

            <div className="bl-main-nav">
                <div className="container flex align-center gap-20 py-15">
                    <Link to="/" className="bl-logo">
                        <span className="logo-b">b</span>
                        <span className="logo-oulanger">oulanger</span>
                    </Link>

                    <button className="menu-btn flex align-center gap-10">
                        <Menu size={24} />
                        <span>Rayons</span>
                    </button>

                    <div className="search-bar flex-1 flex align-center">
                        <input type="text" placeholder="Rechercher un produit, une marque..." />
                        <button className="search-btn"><Search size={20} /></button>
                    </div>

                    <div className="nav-actions flex gap-20 align-center">
                        <div className="action-item flex flex-col align-center">
                            <User size={24} />
                            <span className="text-xs">Mon compte</span>
                        </div>
                        <div className="action-item flex flex-col align-center">
                            <ShoppingCart size={24} />
                            <span className="text-xs">Mon panier</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="lh-header">
            <div className="lh-promo-bar">
                <span>-10% SUPPLÉMENTAIRES SUR TOUT LE SITE* - CODE : NEWSTYLE</span>
            </div>

            <div className="lh-main-nav container">
                <div className="nav-left flex gap-20">
                    <div className="hub-switcher">
                        <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }}>
                            <option value="">SWITCH PROJECT</option>
                            <option value="/KIABI/index.html">KIABI</option>
                            <option value="/CDISCOUNT/index.html">CDISCOUNT</option>
                            <option value="/BOULANGER/index.html">BOULANGER</option>
                            <option value="/LA_HALLE/index.html">LA HALLE</option>
                        </select>
                    </div>
                    <Link to="/" className="nav-link">FEMME</Link>
                    <Link to="/" className="nav-link">HOMME</Link>
                </div>

                <Link to="/" className="lh-logo">
                    LA HALLE
                </Link>

                <div className="nav-right flex gap-20 align-center">
                    <div className="search-trigger flex align-center gap-5">
                        <Search size={20} />
                        <span className="hide-mobile">Rechercher</span>
                    </div>
                    <User size={22} />
                    <Heart size={22} />
                    <div className="bag-icon relative">
                        <ShoppingBag size={22} />
                        <span className="bag-count">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <header className="lh-header">
            <div className="lh-promo-bar">
                <span>-10% SUPPLÉMENTAIRES SUR TOUT LE SITE* - CODE : NEWSTYLE</span>
            </div>

            <div className="lh-main-nav container">
                <div className="nav-left flex gap-20">
                    <div className="hub-switcher">
                        <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value }} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.7rem' }}>
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
                    <Link to="/cart" className="bag-icon relative" style={{ display: 'flex', position: 'relative' }}>
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="bag-count" style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#e2001a', color: 'white', fontSize: '0.7rem', fontWeight: 'bold', padding: '2px 6px', borderRadius: '10px' }}>{cartCount}</span>}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

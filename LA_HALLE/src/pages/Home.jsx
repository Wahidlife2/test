import React from 'react';
import { Link } from 'react-router-dom';
import { lahalleProducts } from '../data/lahalleProducts';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
    const { addToCart } = useCart();

    return (
        <div className="home-page">
            <section className="hero-banner">
                <div className="banner-content">
                    <h2>LA NOUVELLE COLLECTION</h2>
                    <h1>LE STYLE À PRIX BAS</h1>
                    <button className="btn-black">ACHETEZ MAINTENANT</button>
                </div>
            </section>

            <section className="categories-grid container mt-60">
                <div className="cat-card femme"><span>FEMME</span></div>
                <div className="cat-card homme"><span>HOMME</span></div>
                <div className="cat-card enfant"><span>ENFANT</span></div>
            </section>

            <section className="featured-products container mt-60 mb-60">
                <h2 className="section-title">NOS COUPS DE CŒUR</h2>
                <div className="product-grid">
                    {lahalleProducts.map(p => (
                        <div key={p.id} className="lh-product-card">
                            <Link to={`/product/${p.id}`} className="card-image flex align-center justify-center">
                                <img src={p.image} alt={p.name} />
                                <div className="quick-add" onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(p); }}>
                                    <ShoppingBag size={20} />
                                </div>
                            </Link>
                            <div className="card-body mt-10">
                                <p className="brand">{p.brand}</p>
                                <Link to={`/product/${p.id}`}>
                                    <h3 className="name">{p.name}</h3>
                                </Link>
                                <div className="price-row flex gap-10 align-center">
                                    <span className={`price ${p.oldPrice ? 'text-red' : ''}`}>{p.price.toFixed(2)}€</span>
                                    {p.oldPrice && <span className="old-price">{p.oldPrice.toFixed(2)}€</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

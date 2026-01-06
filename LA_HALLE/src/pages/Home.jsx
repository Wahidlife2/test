import React from 'react';
import { Link } from 'react-router-dom';
import { lahalleProducts } from '../data/lahalleProducts';
import { ShoppingBag } from 'lucide-react';

const Home = () => {
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
                <Link to="/" className="cat-card femme"><span>FEMME</span></Link>
                <Link to="/" className="cat-card homme"><span>HOMME</span></Link>
                <Link to="/" className="cat-card enfant"><span>ENFANT</span></Link>
            </section>

            <section className="featured-products container mt-60 mb-60">
                <h2 className="section-title">NOS COUPS DE CŒUR</h2>
                <div className="product-grid">
                    {lahalleProducts.map(p => (
                        <Link to="#" key={p.id} className="lh-product-card">
                            <div className="card-image flex align-center justify-center">
                                <img src={p.image} alt={p.name} />
                                <div className="quick-add">
                                    <ShoppingBag size={20} />
                                </div>
                            </div>
                            <div className="card-body mt-10">
                                <p className="brand">{p.brand}</p>
                                <h3 className="name">{p.name}</h3>
                                <div className="price-row flex gap-10 align-center">
                                    <span className={`price ${p.oldPrice ? 'text-red' : ''}`}>{p.price.toFixed(2)}€</span>
                                    {p.oldPrice && <span className="old-price">{p.oldPrice.toFixed(2)}€</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

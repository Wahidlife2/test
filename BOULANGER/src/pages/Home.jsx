import React from 'react';
import { Link } from 'react-router-dom';
import { boulangerProducts } from '../data/boulangerProducts';
import { Truck, Store, ShieldCheck } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page container">
            <section className="hero-section mt-20">
                <div className="hero-banner">
                    <div className="hero-text">
                        <h1>Soldes Boulanger</h1>
                        <p>Jusqu'à -50% sur une sélection de produits</p>
                        <button className="btn-white">Découvrir</button>
                    </div>
                </div>
            </section>

            <section className="services-bar flex justify-between align-center mt-30">
                <div className="service-item flex align-center gap-10">
                    <Truck size={30} color="var(--bl-orange)" />
                    <div>
                        <p className="font-bold">Livraison offerte</p>
                        <p className="text-xs">Dès 50€ d'achat</p>
                    </div>
                </div>
                <div className="service-item flex align-center gap-10">
                    <Store size={30} color="var(--bl-orange)" />
                    <div>
                        <p className="font-bold">Retrait 1h</p>
                        <p className="text-xs">Dans nos 200 magasins</p>
                    </div>
                </div>
                <div className="service-item flex align-center gap-10">
                    <ShieldCheck size={30} color="var(--bl-orange)" />
                    <div>
                        <p className="font-bold">Garantie 2 ans</p>
                        <p className="text-xs">Sur tous nos produits</p>
                    </div>
                </div>
            </section>

            <section className="products-section mt-60 mb-60">
                <h2 className="section-title">Notre sélection pour vous</h2>
                <div className="product-grid">
                    {boulangerProducts.map(p => (
                        <Link to="#" key={p.id} className="bl-product-card">
                            <div className="card-image">
                                <img src={p.image} alt={p.name} />
                            </div>
                            <div className="card-body">
                                <p className="brand">{p.brand}</p>
                                <h3 className="name">{p.name}</h3>
                                <div className="price-row flex align-center justify-between">
                                    <span className="price">{p.price.toFixed(2)}€</span>
                                    {p.oldPrice && <span className="old-price">{p.oldPrice.toFixed(2)}€</span>}
                                </div>
                                <button className="add-btn">Ajouter au panier</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { cdiscountProducts } from '../data/cdiscountProducts';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Zap, ShieldCheck, Truck } from 'lucide-react';

const Home = () => {
    const categories = ["Informatique", "Electroménager", "Maison", "TV Son", "Jardin", "Brico"];
    const featuredProducts = cdiscountProducts.slice(0, 10);
    const promoProducts = cdiscountProducts.filter(p => p.oldPrice).slice(0, 5);

    return (
        <div className="home-page">
            <div className="hero-banner">
                <div className="container">
                    <div className="banner-content">
                        <h1>SOLDES D'HIVER</h1>
                        <p>Jusqu'à -70% sur des milliers de produits</p>
                        <button className="btn-yellow">J'en profite <ChevronRight size={18} /></button>
                    </div>
                </div>
            </div>

            <div className="services-bar">
                <div className="container flex justify-between">
                    <div className="service-item flex align-center gap-10">
                        <Zap size={24} color="#002d6a" />
                        <span>Livraison express</span>
                    </div>
                    <div className="service-item flex align-center gap-10">
                        <ShieldCheck size={24} color="#002d6a" />
                        <span>Paiement sécurisé</span>
                    </div>
                    <div className="service-item flex align-center gap-10">
                        <Truck size={24} color="#002d6a" />
                        <span>Suivi de commande</span>
                    </div>
                </div>
            </div>

            <div className="main-content container mt-40">
                <section className="categories-grid mb-60">
                    <h2 className="section-title">Nos Univers</h2>
                    <div className="cats-flex">
                        {categories.map(cat => (
                            <Link to={`/search?q=${encodeURIComponent(cat)}`} key={cat} className="cat-card">
                                <div className="cat-image"></div>
                                <span>{cat}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="flash-sales mb-60">
                    <div className="flex justify-between align-center mb-20">
                        <h2 className="section-title promo-title">Ventes Flash <span className="timer">02:14:55</span></h2>
                        <button className="view-all">Voir tout {'>'}</button>
                    </div>
                    <div className="product-grid">
                        {promoProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                <section className="for-you mb-60">
                    <h2 className="section-title">Sélection pour vous</h2>
                    <div className="product-grid">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;

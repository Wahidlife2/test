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
                        {[
                            { name: "Informatique", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200&auto=format&fit=crop" },
                            { name: "Electroménager", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
                            { name: "Maison", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&auto=format&fit=crop" },
                            { name: "TV Son", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=200&auto=format&fit=crop" },
                            { name: "Jardin", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=200&auto=format&fit=crop" },
                            { name: "Brico", image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=200&auto=format&fit=crop" }
                        ].map(cat => (
                            <Link to={`/search?q=${encodeURIComponent(cat.name)}`} key={cat.name} className="cat-card">
                                <div className="cat-image">
                                    <img src={cat.image} alt={cat.name} />
                                </div>
                                <span>{cat.name}</span>
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

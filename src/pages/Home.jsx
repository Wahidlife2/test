import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const categories = ["Tous", "Mobile", "Maison Connectée", "Wearable", "TV & Audio", "Lifestyle", "Tablette"];

    const filteredProducts = activeCategory === "Tous"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Xiaomi 15T Pro</h1>
                    <p className="hero-subtitle">Le chef-d'œuvre de la performance</p>
                    <div className="hero-links">
                        <a href="#products" className="btn-primary">Acheter maintenant</a>
                        <a href="/product/1" className="btn-link">En savoir plus &gt;</a>
                    </div>
                </div>
                <img src="/images/xiaomi-15t.png" alt="Xiaomi 15T" className="hero-image" />
            </section>

            {/* Category Tabs */}
            <section id="products" className="category-section container">
                <h2 className="section-title">Découvrez nos univers</h2>
                <div className="category-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Promo Banner Simulation */}
            <section className="promo-banner container">
                <div className="promo-content">
                    <h2>Écosystème Xiaomi</h2>
                    <p>Un mode de vie plus intelligent pour tous.</p>
                    <button className="btn-orange">En savoir plus</button>
                </div>
            </section>
        </div>
    );
};

export default Home;

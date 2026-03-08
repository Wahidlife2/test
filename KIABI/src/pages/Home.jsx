import React from 'react';
import { Link } from 'react-router-dom';
import { kiabiProducts } from '../data/kiabiProducts';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const featured = kiabiProducts.slice(0, 8);

  return (
    <div className="home-page-kiabi">
      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="container banner-inner">
          <div className="banner-content">
            <h2>VENTES NON PRIVÉES</h2>
            <h1>JUSQU'À -50%</h1>
            <p>Sur des milliers d'articles Femme, Homme, Enfant et Maison</p>
            <button className="banner-btn">J'EN PROFITE</button>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="quick-categories container">
        <div className="categories-slider">
          {[
            { name: 'Femme', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=200&auto=format&fit=crop' },
            { name: 'Homme', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=200&auto=format&fit=crop' },
            { name: 'Fille', image: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?q=80&w=200&auto=format&fit=crop' },
            { name: 'Garçon', image: 'https://images.unsplash.com/photo-1519234110480-2582057b568e?q=80&w=200&auto=format&fit=crop' },
            { name: 'Bébé', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=200&auto=format&fit=crop' },
            { name: 'Maison', image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=200&auto=format&fit=crop' }
          ].map(cat => (
            <Link to={`/category/${cat.name}`} key={cat.name} className="cat-item">
              <div className="cat-img-wrapper" style={{ backgroundColor: '#f8f8f8' }}>
                <img src={cat.image} alt={cat.name} />
              </div>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="featured-grid container">
        <div className="section-header">
          <h2 className="title">Nouveautés pour vous</h2>
          <button className="view-all">Voir tout <ChevronRight size={16} /></button>
        </div>
        <div className="grid-4">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights container">
        <div className="highlight-box dark-blue">
          <div className="h-text">
            <h3>PETITS PRIX</h3>
            <p>Dès 3€ pour toute la famille</p>
          </div>
          <button className="h-btn">DÉCOUVRIR</button>
        </div>
        <div className="highlight-box red">
          <div className="h-text">
            <h3>EXCLU WEB</h3>
            <p>Uniquement sur kiabi.com</p>
          </div>
          <button className="h-btn">J'Y VAIS</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

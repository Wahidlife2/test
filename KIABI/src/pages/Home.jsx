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
            { name: 'Femme', color: '#f8f8f8' },
            { name: 'Homme', color: '#f8f8f8' },
            { name: 'Fille', color: '#f8f8f8' },
            { name: 'Garçon', color: '#f8f8f8' },
            { name: 'Bébé', color: '#f8f8f8' },
            { name: 'Maison', color: '#f8f8f8' }
          ].map(cat => (
            <Link to={`/category/${cat.name}`} key={cat.name} className="cat-item">
              <div className="cat-placeholder" style={{ backgroundColor: cat.color }}></div>
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

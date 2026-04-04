import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { coquesdeluxeProducts } from '../data/coquesdeluxeProducts';
import { useCart } from '../context/CartContext';
import { ShoppingBasket } from 'lucide-react';

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const featured = coquesdeluxeProducts.slice(0, 8);

  return (
    <div className="home-page-coquesdeluxe">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>LA COQUE LA PLUS FINE DU MONDE</h1>
          <p>0.3mm d'élégance absolue. Protégez votre iPhone avec le minimalisme français.</p>
          <Link to="/category/Collections" className="btn-hero">DÉCOUVRIR</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section container">
        <h2 className="section-title">LES INDISPENSABLES</h2>
        <div className="grid-4">
          {featured.map(product => {
            // Check if Image needs to be replaced with a default if it's broken
            return (
              <div key={product.id} className="coquesdeluxe-product-card">
                <Link to={`/product/${product.id}`} className="card-image-container">
                  <img src={product.image} alt={product.name} className="card-img" />
                  {product.oldPrice && <div className="sale-tag">SALE</div>}
                </Link>
                <div className="card-details">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="card-pricing">
                    <span className="card-current-price">{product.price.toFixed(2)}€</span>
                    {product.oldPrice && <span className="card-old-price">{product.oldPrice.toFixed(2)}€</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-content container">
          <h2>NOTRE PHILOSOPHIE</h2>
          <p>Nous pensons que le design de l'iPhone se suffit à lui-même. Nos coques sont conçues pour offrir une protection essentielle contre les rayures et les chocs légers du quotidien, tout en conservant la finesse originale de votre téléphone.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;

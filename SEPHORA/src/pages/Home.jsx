import React from 'react';
import { Link } from 'react-router-dom';
import { sephoraProducts } from '../data/sephoraProducts';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const featured = sephoraProducts.slice(0, 8);

  return (
    <div className="home-page-sephora">
      <section className="hero-section">
        <div className="hero-card">
          <h1>THE SEPHORA EVENT</h1>
          <p>Profitez jusqu'à -30% sur une sélection de produits et nouveautés. Révélez votre beauté à prix doux.</p>
          <Link to="/category/Maquillage" className="btn-primary">Découvrir les offres</Link>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">LES PRODUITS DU MOMENT</h2>
        <div className="product-grid">
          {featured.map(product => (
            <div key={product.id} className="sephora-product-card">
              <Link to={`/product/${product.id}`} className="card-image-container">
                <img src={product.image} alt={product.name} className="card-img" />
              </Link>
              <h3 className="brand-name">{product.brand}</h3>
              <p className="card-title">{product.name}</p>
              <div className="card-pricing">
                <span className="card-current-price">{product.price.toFixed(2)}€</span>
                {product.oldPrice && <span className="card-old-price">{product.oldPrice.toFixed(2)}€</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

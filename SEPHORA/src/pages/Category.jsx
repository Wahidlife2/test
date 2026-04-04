import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sephoraProducts } from '../data/sephoraProducts';

const Category = () => {
  const { name } = useParams();

  // Sort logic
  const [sortOrder, setSortOrder] = useState('relevance');

  // Extract actual category filtering logic
  let filtered = sephoraProducts.filter(p => p.category.toLowerCase() === name.toLowerCase());
  if (filtered.length === 0 && name.toLowerCase() === 'promos') {
    filtered = sephoraProducts.filter(p => p.oldPrice);
  }

  if (sortOrder === 'priceAsc') filtered.sort((a, b) => a.price - b.price);
  if (sortOrder === 'priceDesc') filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="category-page-sephora container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
      <div className="breadcrumb" style={{ fontSize: '0.8rem', color: '#666', marginBottom: '20px' }}>
        <Link to="/">Accueil</Link> / <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{name}</span>
      </div>

      <h1 className="category-title" style={{ fontSize: '2.5rem', fontFamily: 'Times New Roman', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase' }}>
        {name}
      </h1>

      {filtered.length === 0 ? (
        <div style={{ minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Oups ! Aucun produit trouvé dans cette catégorie.</h2>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '0.9rem', color: '#666' }}>{filtered.length} PRODUITS</span>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Trier par:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ padding: '10px', borderRadius: '20px', border: '1px solid #ccc', fontSize: '0.9rem', outline: 'none' }}
              >
                <option value="relevance">Pertinence</option>
                <option value="priceAsc">Prix croissant</option>
                <option value="priceDesc">Prix décroissant</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {filtered.map(product => (
              <div key={product.id} className="sephora-product-card">
                <Link to={`/product/${product.id}`} className="card-image-container">
                  <img src={product.image} alt={product.name} className="card-img" />
                  {product.oldPrice && (
                    <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#d50032', color: 'white', padding: '5px 10px', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '3px' }}>
                      OFFRE SPÉCIALE
                    </div>
                  )}
                </Link>
                <h3 className="brand-name">{product.brand}</h3>
                <p className="card-title">{product.name}</p>
                <div className="card-pricing">
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{product.price.toFixed(2)}€</span>
                  {product.oldPrice && <span style={{ fontSize: '0.9rem', color: '#999', textDecoration: 'line-through' }}>{product.oldPrice.toFixed(2)}€</span>}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;

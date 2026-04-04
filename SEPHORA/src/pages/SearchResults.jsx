import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { sephoraProducts } from '../data/sephoraProducts';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    // Convert to lowercase and normalize
    const normalizedQuery = query.toLowerCase().trim();

    const results = sephoraProducts.filter(p =>
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.brand.toLowerCase().includes(normalizedQuery) ||
        p.category.toLowerCase().includes(normalizedQuery)
    );

    const [sortOrder, setSortOrder] = useState('relevance');

    // Implement sort
    if (sortOrder === 'priceAsc') results.sort((a, b) => a.price - b.price);
    if (sortOrder === 'priceDesc') results.sort((a, b) => b.price - a.price);

    return (
        <div className="search-page-sephora container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
            {results.length === 0 ? (
                <div style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontFamily: 'Times New Roman' }}>0 RÉSULTAT POUR "{query}"</h2>
                    <p style={{ color: '#666', marginBottom: '30px' }}>Nous n'avons trouvé aucun produit correspondant à votre recherche.</p>
                    <Link to="/" style={{ display: 'inline-block', backgroundColor: '#000', color: '#fff', padding: '15px 30px', borderRadius: '25px', fontWeight: 'bold' }}>RETOURNER À L'ACCUEIL</Link>
                </div>
            ) : (
                <>
                    <h1 style={{ fontSize: '2rem', fontFamily: 'Times New Roman', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase' }}>
                        RÉSULTATS POUR "{query}" ({results.length})
                    </h1>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>{results.length} PRODUITS</span>
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
                        {results.map(product => (
                            <div key={product.id} className="sephora-product-card">
                                <Link to={`/product/${product.id}`} className="card-image-container">
                                    <img src={product.image} alt={product.name} className="card-img" />
                                    {product.oldPrice && (
                                        <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#d50032', color: 'white', padding: '5px 10px', fontSize: '0.75rem', fontWeight: 'bold', borderRadius: '3px' }}>
                                            OFFRE
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

export default SearchResults;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase()) ||
                product.tagline.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="search-results-page container">
            <h1 className="search-title">Résultats pour "{query}"</h1>
            {results.length > 0 ? (
                <div className="product-grid">
                    {results.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p>Aucun produit trouvé pour "{query}".</p>
                    <p>Essayez de chercher "Xiaomi", "Redmi", "Pad" ou "Watch".</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;

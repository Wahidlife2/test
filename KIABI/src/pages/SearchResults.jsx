import React from 'react';
import { useLocation } from 'react-router-dom';
import { kiabiProducts } from '../data/kiabiProducts';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';

    const results = kiabiProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-page-kiabi container">
            <div className="search-header">
                <h1 className="search-title">
                    {query ? `Résultats pour "${query}"` : 'Tous nos produits'}
                    <span className="count">({results.length} articles)</span>
                </h1>

                <div className="search-controls">
                    <button className="filter-btn">
                        <SlidersHorizontal size={18} />
                        <span>Trier & Filtrer</span>
                    </button>
                </div>
            </div>

            <div className="search-grid-layout">
                {results.length > 0 ? (
                    <div className="product-grid-4">
                        {results.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-results">
                        <div className="empty-box">
                            <h2>Oups ! Aucun résultat trouvé</h2>
                            <p>Nous n'avons pas trouvé d'articles correspondant à votre recherche. Vérifiez l'orthographe ou essayez un autre mot-clé.</p>
                            <button className="btn-back" onClick={() => window.location.href = '/'}>RETOUR À L'ACCUEIL</button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .search-page-kiabi { padding-top: 40px; padding-bottom: 80px; font-family: 'Sora', sans-serif; }
                
                .search-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 24px; }
                .search-title { font-size: 1.8rem; font-weight: 800; color: #000137; }
                .search-title .count { font-size: 1.1rem; font-weight: 400; color: #757575; margin-left: 12px; }
                
                .filter-btn { display: flex; align-items: center; gap: 10px; padding: 12px 24px; background: white; border: 1px solid #000137; border-radius: 4px; font-weight: 700; color: #000137; cursor: pointer; transition: all 0.2s; }
                .filter-btn:hover { background: #000137; color: white; }

                .product-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px 24px; }

                .empty-results { padding: 80px 0; display: flex; justify-content: center; }
                .empty-box { text-align: center; max-width: 500px; }
                .empty-box h2 { font-size: 1.5rem; font-weight: 800; margin-bottom: 16px; color: #000137; }
                .empty-box p { color: #666; margin-bottom: 32px; line-height: 1.6; }
                .btn-back { padding: 16px 32px; background: #000137; color: white; border: none; border-radius: 4px; font-weight: 800; cursor: pointer; }

                @media (max-width: 1200px) { .product-grid-4 { grid-template-columns: repeat(3, 1fr); } }
                @media (max-width: 900px) { .product-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 24px 12px; } .search-title { font-size: 1.4rem; } }
            `}</style>
        </div>
    );
};

export default SearchResults;

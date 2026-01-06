import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { cdiscountProducts } from '../data/cdiscountProducts';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialQuery = searchParams.get('q') || '';

    // State
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [priceRange, setPriceRange] = useState(2000);
    const [onlyCDAV, setOnlyCDAV] = useState(false);
    const [sortBy, setSortBy] = useState('relevance');

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return cdiscountProducts.filter(p => {
            const matchesQuery = p.name.toLowerCase().includes(initialQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(initialQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'Tous' || p.category === selectedCategory;
            const matchesPrice = p.price <= priceRange;
            const matchesCDAV = !onlyCDAV || p.isCDiscountAVolonte;

            return matchesQuery && matchesCategory && matchesPrice && matchesCDAV;
        }).sort((a, b) => {
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
    }, [initialQuery, selectedCategory, priceRange, onlyCDAV, sortBy]);

    const categories = ['Tous', ...new Set(cdiscountProducts.map(p => p.category))];

    return (
        <div className="search-page container">
            <div className="search-header pb-20 mt-20">
                <h1>Résultats pour "{initialQuery}" <span className="results-count">({filteredProducts.length} produits)</span></h1>
            </div>

            <div className="search-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h3>Univers</h3>
                        <div className="filter-options">
                            {categories.map(cat => (
                                <label key={cat} className="filter-item">
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={selectedCategory === cat}
                                        onChange={() => setSelectedCategory(cat)}
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Prix max: {priceRange}€</h3>
                        <input
                            type="range"
                            min="0"
                            max="2000"
                            step="50"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="price-range"
                        />
                        <div className="flex justify-between text-xs text-gray">
                            <span>0€</span>
                            <span>2000€+</span>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Services</h3>
                        <label className="filter-item cdav-toggle">
                            <input
                                type="checkbox"
                                checked={onlyCDAV}
                                onChange={(e) => setOnlyCDAV(e.target.checked)}
                            />
                            <span className="cdav-label">Cdiscount à volonté</span>
                        </label>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="results-content">
                    <div className="results-toolbar flex justify-between align-center">
                        <div className="sort-box flex align-center gap-10">
                            <span className="text-sm">Trier par :</span>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="relevance">Pertinence</option>
                                <option value="price-asc">Prix croissant</option>
                                <option value="price-desc">Prix décroissant</option>
                                <option value="rating">Meilleures notes</option>
                            </select>
                        </div>
                        <div className="view-toggle flex gap-10">
                            <LayoutGrid size={20} color="#002d6a" />
                            <List size={20} color="#ccc" />
                        </div>
                    </div>

                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        {filteredProducts.length === 0 && (
                            <div className="no-results">
                                <h3>Aucun produit ne correspond à ces critères.</h3>
                                <p>Essayez de modifier vos filtres ou votre recherche.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchResults;

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { kiabiProducts } from '../data/kiabiProducts';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const Category = () => {
  const { name } = useParams();
  const [selectedSubCategory, setSelectedSubCategory] = useState('Tous');
  const [sortOrder, setSortOrder] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Get unique subcategories for this main category
  const subCategories = useMemo(() => {
    const subs = kiabiProducts
      .filter(p => p.category === name)
      .map(p => p.subCategory);
    return ['Tous', ...new Set(subs)];
  }, [name]);

  // Subcategory images mapping (for the circular navigation)
  const subCategoryImages = {
    'Tous': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=200&auto=format&fit=crop',
    'T-shirt': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop',
    'Pantalon': 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200&auto=format&fit=crop',
    'Sweat': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200&auto=format&fit=crop',
    'Pull': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=200&auto=format&fit=crop',
    'Manteau': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=200&auto=format&fit=crop',
    'Jean': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=200&auto=format&fit=crop',
    'Chemise': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200&auto=format&fit=crop',
    'Chaussures': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=200&auto=format&fit=crop',
    'Robe': 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=200&auto=format&fit=crop',
    'Ensemble': 'https://images.unsplash.com/photo-1519234110480-2582057b568e?q=80&w=200&auto=format&fit=crop',
    'Pyjama': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=200&auto=format&fit=crop',
    'Sous-vêtements': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200&auto=format&fit=crop',
    'Accessoires': 'https://images.unsplash.com/photo-1544123089-18214df3b1a?q=80&w=200&auto=format&fit=crop',
    'Linge de lit': 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=200&auto=format&fit=crop',
    'Rideaux': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=200&auto=format&fit=crop',
    'Déco': 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=200&auto=format&fit=crop',
    'Linge de bain': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop',
    'Ventes Non Privées': 'https://img.freepik.com/vecteurs-libre/fond-vente-flash-composition-aplatie_23-2149027975.jpg?w=200',
  };

  const products = useMemo(() => {
    let filtered = kiabiProducts.filter(p => p.category === name);

    if (selectedSubCategory !== 'Tous') {
      filtered = filtered.filter(p => p.subCategory === selectedSubCategory);
    }

    switch (sortOrder) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [name, selectedSubCategory, sortOrder]);

  return (
    <div className="category-page-kiabi container">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> / {name}
      </div>

      <div className="category-header">
        <h1 className="category-title">{name}</h1>

        <div className="category-controls">
          <div className="sort-container">
            <button
              className="filter-btn"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              <SlidersHorizontal size={18} />
              <span>Trier & Filtrer</span>
              <ChevronDown size={16} className={showSortDropdown ? 'rotate-180' : ''} />
            </button>

            {showSortDropdown && (
              <div className="sort-dropdown">
                <div className="sort-option" onClick={() => { setSortOrder('featured'); setShowSortDropdown(false); }}>Pertinence</div>
                <div className="sort-option" onClick={() => { setSortOrder('price-asc'); setShowSortDropdown(false); }}>Prix croissant</div>
                <div className="sort-option" onClick={() => { setSortOrder('price-desc'); setShowSortDropdown(false); }}>Prix décroissant</div>
                <div className="sort-option" onClick={() => { setSortOrder('rating'); setShowSortDropdown(false); }}>Avis clients</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="subcategory-nav">
        {subCategories.map(sub => (
          <div
            key={sub}
            className={`subcategory-item ${selectedSubCategory === sub ? 'active' : ''}`}
            onClick={() => setSelectedSubCategory(sub)}
          >
            <div className="subcategory-circle">
              <img src={subCategoryImages[sub] || subCategoryImages['Tous']} alt={sub} />
            </div>
            <span>{sub}</span>
          </div>
        ))}
      </div>

      <div className="items-count-row">
        <span>{products.length} articles</span>
        {selectedSubCategory !== 'Tous' && (
          <button className="clear-filter" onClick={() => setSelectedSubCategory('Tous')}>
            Effacer le filtre <X size={14} />
          </button>
        )}
      </div>

      <div className="product-grid-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <style jsx>{`
                .category-page-kiabi { padding-top: 20px; padding-bottom: 80px; font-family: 'Sora', sans-serif; }
                
                .breadcrumb { font-size: 0.75rem; color: #757575; margin-bottom: 32px; }
                .breadcrumb a:hover { text-decoration: underline; }

                .category-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
                .category-title { font-size: 2.2rem; font-weight: 800; color: #000137; }
                
                .sort-container { position: relative; }
                .filter-btn { display: flex; align-items: center; gap: 10px; padding: 12px 24px; background: #F5F5F7; border: none; border-radius: 8px; font-weight: 700; color: #000137; cursor: pointer; transition: all 0.2s; }
                .filter-btn:hover { background: #E8E8ED; }
                .rotate-180 { transform: rotate(180deg); }

                .sort-dropdown { position: absolute; top: calc(100% + 8px); right: 0; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); width: 220px; z-index: 100; overflow: hidden; border: 1px solid #eee; }
                .sort-option { padding: 14px 20px; cursor: pointer; color: #000137; font-weight: 500; transition: background 0.2s; }
                .sort-option:hover { background: #F5F5F7; color: #000137; }

                .subcategory-nav { display: flex; gap: 24px; overflow-x: auto; padding: 10px 0 30px; margin-bottom: 20px; scrollbar-width: none; }
                .subcategory-nav::-webkit-scrollbar { display: none; }
                
                .subcategory-item { display: flex; flex-direction: column; align-items: center; gap: 12px; cursor: pointer; min-width: 80px; transition: transform 0.2s; }
                .subcategory-item:hover { transform: translateY(-4px); }
                .subcategory-item span { font-size: 0.85rem; font-weight: 700; color: #000137; text-align: center; }
                .subcategory-item.active .subcategory-circle { border: 2px solid #000137; }
                .subcategory-item.active span { color: #000137; }

                .subcategory-circle { width: 90px; height: 90px; border-radius: 50%; overflow: hidden; background: #eee; border: 2px solid transparent; transition: all 0.2s; padding: 2px; }
                .subcategory-circle img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

                .items-count-row { margin-bottom: 30px; display: flex; align-items: center; gap: 20px; font-weight: 500; color: #757575; }
                .clear-filter { display: flex; align-items: center; gap: 6px; background: #000137; color: white; border: none; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; cursor: pointer; font-weight: 600; }

                .product-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px 24px; }

                @media (max-width: 1100px) { .product-grid-4 { grid-template-columns: repeat(3, 1fr); } }
                @media (max-width: 800px) { 
                  .product-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 24px 12px; } 
                  .category-title { font-size: 1.6rem; } 
                  .subcategory-circle { width: 70px; height: 70px; }
                }
            `}</style>
    </div>
  );
};

export default Category;

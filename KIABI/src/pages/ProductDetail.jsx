import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { kiabiProducts } from '../data/kiabiProducts';
import { Heart, Share2, Ruler, ChevronDown, Check, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = kiabiProducts.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
    const [showSizeSelector, setShowSizeSelector] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Produit non trouvé</div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowError(true);
            setShowSizeSelector(true);
            return;
        }
        addToCart(product, selectedSize, selectedColor);
        setShowError(false);
    };

    const selectSize = (size) => {
        setSelectedSize(size);
        setShowSizeSelector(false);
        setShowError(false);
    };

    return (
        <div className="pdp-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Accueil</Link> / <Link to={`/category/${product.category}`}>{product.category}</Link> / {product.name}
                </div>

                <div className="pdp-main">
                    {/* Left Column: Image Gallery */}
                    <div className="pdp-gallery">
                        <div className="gallery-scroll">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="gallery-item">
                                    <img src={product.image} alt={`${product.name} view ${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Info */}
                    <div className="pdp-info-panel">
                        <div className="info-content-sticky">
                            <div className="pdp-header">
                                <div className="brand-badge">BEST SELLER</div>
                                <div className="pdp-actions">
                                    <button className="icon-btn"><Share2 size={20} /></button>
                                    <button className="icon-btn"><Heart size={20} /></button>
                                </div>
                            </div>

                            <h1 className="product-title">{product.name}</h1>
                            <div className="product-ref">Réf: {product.id}C{product.id * 123}</div>

                            <div className="rating-row">
                                <span className="stars">★★★★★</span>
                                <span className="review-count">{product.reviews} avis</span>
                            </div>

                            <div className="price-container">
                                <span className="current-price">{product.price.toFixed(2)} €</span>
                                {product.oldPrice && (
                                    <span className="old-price-pdp">{product.oldPrice.toFixed(2)} €</span>
                                )}
                            </div>

                            {/* Color Selector */}
                            <div className="selector-section">
                                <label className="selector-label">Couleur : <strong>{selectedColor}</strong></label>
                                <div className="color-grid">
                                    {product.colors.map((color, idx) => (
                                        <button
                                            key={idx}
                                            className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {selectedColor === color && <Check size={14} color={color === 'white' ? 'black' : 'white'} />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div className="selector-section">
                                <div className="size-header-pdp">
                                    <label className="selector-label">Taille : <strong>{selectedSize || 'Sélectionner'}</strong></label>
                                    <button className="guide-link"><Ruler size={14} /> Guide des tailles</button>
                                </div>

                                <div className="size-selector-pdp">
                                    <button
                                        className={`size-dropdown-btn ${showError ? 'error' : ''}`}
                                        onClick={() => setShowSizeSelector(!showSizeSelector)}
                                    >
                                        <span>{selectedSize || 'Choisir une taille'}</span>
                                        <ChevronDown size={20} className={showSizeSelector ? 'rotate' : ''} />
                                    </button>

                                    {showSizeSelector && (
                                        <div className="size-options-modal">
                                            <div className="size-grid">
                                                {product.sizes.map(size => (
                                                    <button
                                                        key={size}
                                                        className={`size-btn-opt ${selectedSize === size ? 'active' : ''}`}
                                                        onClick={() => selectSize(size)}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {showError && <p className="error-text">Veuillez sélectionner votre taille</p>}
                            </div>

                            <button className="btn-add-to-cart" onClick={handleAddToCart}>
                                AJOUTER AU PANIER
                            </button>

                            <div className="delivery-pills">
                                <div className="pill">
                                    <Truck size={18} />
                                    <div>
                                        <strong>Livraison en magasin OFFERTE</strong>
                                        <p>Dès 15€ d'achat</p>
                                    </div>
                                </div>
                                <div className="pill">
                                    <RotateCcw size={18} />
                                    <div>
                                        <strong>Retours gratuits</strong>
                                        <p>Sous 30 jours en magasin</p>
                                    </div>
                                </div>
                                <div className="pill">
                                    <ShieldCheck size={18} />
                                    <div>
                                        <strong>Paiement 100% sécurisé</strong>
                                        <p>Visa, Mastercard, Paypal</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-description-pdp">
                                <h3>Description</h3>
                                <p>{product.description}</p>
                                <ul>
                                    <li>Matière principale : 100% Coton</li>
                                    <li>Coupe régulière confortable</li>
                                    <li>Entretien facile en machine</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pdp-page { background: white; padding-bottom: 80px; font-family: 'Sora', sans-serif; }
                .breadcrumb { padding: 20px 0; font-size: 0.75rem; color: #757575; }
                .breadcrumb a:hover { text-decoration: underline; }

                .pdp-main { display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px; }

                /* Gallery Styles */
                .pdp-gallery { position: relative; }
                .gallery-scroll { display: flex; flex-direction: column; gap: 20px; }
                .gallery-item { width: 100%; aspect-ratio: 3/4; background: #F7F7F7; border-radius: 4px; overflow: hidden; }
                .gallery-item img { width: 100%; height: 100%; object-fit: cover; }

                /* Info Panel Styles */
                .pdp-info-panel { position: relative; }
                .info-content-sticky { position: sticky; top: 120px; }

                .pdp-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
                .brand-badge { background: #D35400; color: white; padding: 4px 12px; font-size: 0.7rem; font-weight: 800; border-radius: 2px; }
                .pdp-actions { display: flex; gap: 12px; }
                .icon-btn { background: none; border: none; cursor: pointer; color: #000137; }

                .product-title { font-size: 2rem; font-weight: 800; color: #000137; margin-bottom: 8px; }
                .product-ref { font-size: 0.75rem; color: #757575; margin-bottom: 16px; }
                
                .rating-row { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
                .stars { color: #000137; }
                .review-count { font-size: 0.8rem; text-decoration: underline; cursor: pointer; }

                .price-container { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
                .current-price { font-size: 2.2rem; font-weight: 800; color: #000137; }
                .old-price-pdp { font-size: 1.2rem; color: #757575; text-decoration: line-through; }

                .selector-section { margin-bottom: 24px; }
                .selector-label { display: block; font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; }
                .selector-label strong { color: #000137; }

                .color-grid { display: flex; gap: 12px; }
                .color-btn { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #ddd; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.2s; }
                .color-btn.active { transform: scale(1.1); border: 2px solid #000137; }

                .size-header-pdp { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
                .guide-link { background: none; border: none; font-size: 0.75rem; font-weight: 700; color: #757575; text-decoration: underline; cursor: pointer; display: flex; align-items: center; gap: 4px; }

                .size-selector-pdp { position: relative; }
                .size-dropdown-btn { width: 100%; padding: 16px; border: 1px solid #ddd; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; background: white; cursor: pointer; font-family: inherit; font-size: 1rem; font-weight: 600; }
                .size-dropdown-btn.error { border-color: #E2001A; background: #FEF2F2; }
                .rotate { transform: rotate(180deg); }
                .error-text { color: #E2001A; font-size: 0.8rem; font-weight: 700; margin-top: 8px; }

                .size-options-modal { position: absolute; top: calc(100% + 4px); left: 0; width: 100%; background: white; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 10; padding: 16px; }
                .size-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
                .size-btn-opt { padding: 12px 4px; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; font-size: 0.9rem; font-weight: 700; transition: all 0.2s; }
                .size-btn-opt:hover { border-color: #000137; }
                .size-btn-opt.active { background: #000137; color: white; border-color: #000137; }

                .btn-add-to-cart { width: 100%; padding: 20px; background: #000137; color: white; border: none; border-radius: 4px; font-size: 1.1rem; font-weight: 800; cursor: pointer; margin-top: 32px; transition: background 0.2s; }
                .btn-add-to-cart:hover { background: #00025D; }

                .delivery-pills { margin-top: 40px; display: flex; flex-direction: column; gap: 16px; border-top: 1px solid #eee; padding-top: 24px; }
                .pill { display: flex; gap: 16px; align-items: flex-start; }
                .pill strong { font-size: 0.85rem; font-weight: 800; display: block; }
                .pill p { font-size: 0.75rem; color: #757575; }

                .product-description-pdp { margin-top: 40px; border-top: 1px solid #eee; padding-top: 24px; }
                .product-description-pdp h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 16px; }
                .product-description-pdp p { font-size: 0.9rem; line-height: 1.6; color: #444; margin-bottom: 16px; }
                .product-description-pdp ul { font-size: 0.85rem; color: #666; padding-left: 20px; list-style: disc; }
                .product-description-pdp li { margin-bottom: 8px; }

                @media (max-width: 900px) {
                    .pdp-main { grid-template-columns: 1fr; gap: 40px; }
                    .info-content-sticky { position: relative; top: 0; }
                    .product-title { font-size: 1.5rem; }
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;

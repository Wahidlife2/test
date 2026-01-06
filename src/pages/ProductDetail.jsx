import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Star, User as UserIcon, Calendar } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [recommended, setRecommended] = useState([]);

    // Selection State
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedStorage, setSelectedStorage] = useState(null);

    useEffect(() => {
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
            setSelectedColor(found.colors[0]);
            setSelectedStorage(found.storage[0]);

            // Get recommended products from the same category
            const others = products.filter(p => p.category === found.category && p.id !== found.id);
            setRecommended(others.slice(0, 4));
        }
        // Scroll to top on ID change
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="loading">Chargement...</div>;

    const handleAddToCart = () => {
        addToCart({ ...product, color: selectedColor.name, storage: selectedStorage });
        navigate('/cart');
    };

    return (
        <div className="product-detail-page">
            {/* Sticky Sub-header */}
            <div className="sticky-sub-header">
                <div className="container sub-header-content">
                    <h2 className="sub-header-title">{product.name}</h2>
                    <div className="sub-header-actions">
                        <span className="sub-header-price">{product.price} €</span>
                        <button className="btn-orange" onClick={handleAddToCart}>Acheter</button>
                    </div>
                </div>
            </div>

            <div className="container product-main-layout">
                <div className="product-gallery">
                    <img src={product.image} alt={product.name} className="main-product-image" />
                </div>

                <div className="product-config">
                    <h1 className="config-title">{product.name}</h1>
                    <div className="rating-row">
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill={i <= 4 ? "#FF6700" : "none"} color="#FF6700" />)}
                        </div>
                        <span className="review-count">{product.reviews?.length || 0} avis clients</span>
                    </div>

                    <p className="config-price">{product.price} €</p>

                    <div className="config-section">
                        <h3 className="section-label">Couleur: <span className="selected-value">{selectedColor?.name}</span></h3>
                        <div className="color-options">
                            {product.colors.map(color => (
                                <button
                                    key={color.name}
                                    className={`color-btn ${selectedColor?.name === color.name ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    <span className="color-dot" style={{ backgroundColor: color.value }}></span>
                                    {color.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="config-section">
                        <h3 className="section-label">Capacité: <span className="selected-value">{selectedStorage}</span></h3>
                        <div className="storage-options">
                            {product.storage.map(storage => (
                                <button
                                    key={storage}
                                    className={`storage-btn ${selectedStorage === storage ? 'selected' : ''}`}
                                    onClick={() => setSelectedStorage(storage)}
                                >
                                    {storage}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="config-summary">
                        <h3>Résumé de votre commande</h3>
                        <p>{product.name} {selectedColor?.name} {selectedStorage}</p>
                        <p className="summary-price">Total: {product.price} €</p>
                        <button className="btn-orange full-width" onClick={handleAddToCart}>Ajouter au panier</button>
                    </div>
                </div>
            </div>

            {/* Specs Section */}
            <div className="specs-container container">
                <h2 className="detail-section-title">Caractéristiques Techniques</h2>
                <div className="specs-grid">
                    {product.specs.map((spec, index) => (
                        <div key={index} className="spec-item">
                            <span className="spec-label">{spec.label}</span>
                            <span className="spec-value">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section container">
                <h2 className="detail-section-title">Avis Clients</h2>
                {product.reviews && product.reviews.length > 0 ? (
                    <div className="reviews-list">
                        {product.reviews.map((rev, i) => (
                            <div key={i} className="review-card">
                                <div className="review-header">
                                    <div className="user-info">
                                        <UserIcon size={20} className="user-icon" />
                                        <strong>{rev.user}</strong>
                                    </div>
                                    <div className="review-stars">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill={s <= rev.rating ? "#FF6700" : "none"} color="#FF6700" />)}
                                    </div>
                                </div>
                                <p className="review-comment">{rev.comment}</p>
                                <div className="review-date">
                                    <Calendar size={14} />
                                    <span>{rev.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-reviews">Aucun avis pour le moment.</p>
                )}
            </div>

            {/* Recommended Products */}
            {recommended.length > 0 && (
                <div className="recommended-section container">
                    <h2 className="detail-section-title">Vous pourriez aussi aimer</h2>
                    <div className="product-grid">
                        {recommended.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductDetail;

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
    };

    return (
        <div onClick={() => navigate(`/product/${product.id}`)} className="cd-product-card animated" style={{ cursor: 'pointer' }}>
            <div className="card-image">
                <img src={product.image} alt={product.name} />
                {product.isCDiscountAVolonte && (
                    <div className="avolonte-badge">CDAV</div>
                )}
                <button className="quick-add-btn" onClick={handleQuickAdd}>
                    <ShoppingCart size={14} />
                    <Plus size={10} style={{ marginLeft: -4, marginTop: -8 }} />
                </button>
            </div>

            <div className="card-body">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating flex align-center gap-5">
                    <div className="stars flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={12}
                                fill={i < Math.floor(product.rating) ? "#FFD100" : "none"}
                                color="#FFD100"
                            />
                        ))}
                    </div>
                    <span className="rating-count">({product.reviews})</span>
                </div>

                <div className="product-price-section">
                    {product.oldPrice && (
                        <span className="old-price">{product.oldPrice.toFixed(2)}€</span>
                    )}
                    <div className="current-price">
                        <span className="price-big">{Math.floor(product.price)}</span>
                        <span className="price-small">,{(product.price % 1).toFixed(2).split('.')[1]}€</span>
                    </div>
                </div>

                <div className="shipping-info">
                    Livraison GRATUITE
                </div>
            </div>

        </div>
    );
};

export default ProductCard;

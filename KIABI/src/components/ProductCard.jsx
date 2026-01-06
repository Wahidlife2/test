import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

    return (
        <Link to={`/product/${product.id}`} className="kiabi-product-card">
            <div className="card-image-container">
                <img src={product.image} alt={product.name} className="card-img" />
                <div className="card-overlays">
                    <button className="wish-btn" onClick={(e) => { e.preventDefault(); }}>
                        <Heart size={20} />
                    </button>
                    {discount > 0 && (
                        <div className="sale-tag">-{discount}%</div>
                    )}
                </div>
            </div>

            <div className="card-details">
                <h3 className="card-title">{product.name}</h3>
                <div className="card-pricing">
                    <span className="card-current-price">{product.price.toFixed(2)} €</span>
                    {product.oldPrice && (
                        <span className="card-old-price">{product.oldPrice.toFixed(2)} €</span>
                    )}
                </div>
                <div className="card-colors">
                    {product.colors.slice(0, 5).map((c, i) => (
                        <span key={i} className="card-color-dot" style={{ backgroundColor: c }}></span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

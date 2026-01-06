import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <div className="product-image-container">
                {product.isNew && <span className="new-badge">Nouveau</span>}
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <div className="product-price-row">
                    <span className="current-price">A partir de {product.price} €</span>
                    {product.oldPrice && <span className="old-price">{product.oldPrice} €</span>}
                </div>
                <button className="btn-buy">Acheter</button>
            </div>
        </Link>
    );
};

export default ProductCard;

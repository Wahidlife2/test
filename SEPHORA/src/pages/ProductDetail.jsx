import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sephoraProducts } from '../data/sephoraProducts';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = sephoraProducts.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'Standard');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="container pdp-page">Produit non trouvé</div>;

    const handleAddToCart = () => {
        addToCart(product, selectedSize, product.colors[0] || null);
    };

    return (
        <div className="pdp-page container">
            <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '20px' }}>
                <Link to="/">Accueil</Link> / <Link to={`/category/${product.category}`}>{product.category}</Link> / {product.name}
            </div>

            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '400px', display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '40px' }}>
                    <img src={product.image} alt={product.name} style={{ maxWidth: '80%', objectFit: 'contain' }} />
                </div>

                <div style={{ flex: '1', minWidth: '400px' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>{product.brand}</h2>
                    <h1 style={{ fontSize: '2rem', fontFamily: 'Times New Roman', marginBottom: '15px' }}>{product.name}</h1>
                    <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>★ {product.rating} / 5 ({product.reviews} avis)</div>

                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px' }}>
                        {product.price.toFixed(2)}€
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px' }}>Contenance: {selectedSize}</div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    style={{
                                        padding: '10px 20px',
                                        border: selectedSize === size ? '2px solid black' : '1px solid #ccc',
                                        background: 'white',
                                        cursor: 'pointer',
                                        fontWeight: selectedSize === size ? 'bold' : 'normal'
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        style={{ width: '100%', padding: '15px', backgroundColor: '#d50032', color: 'white', border: 'none', borderRadius: '25px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '30px' }}
                    >
                        AJOUTER AU PANIER
                    </button>

                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Description</h3>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#444' }}>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

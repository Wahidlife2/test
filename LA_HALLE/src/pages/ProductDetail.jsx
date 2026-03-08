import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lahalleProducts } from '../data/lahalleProducts';
import { Truck, Store, RefreshCw, Heart, Share2, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = lahalleProducts.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Produit non trouvé</div>;

    return (
        <div className="product-page container pb-60">
            <div className="breadcrumb mt-20">
                <Link to="/">Accueil</Link> / <span>{product.category}</span> / <span>{product.name}</span>
            </div>

            <div className="product-main-grid mt-30" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                <div className="product-images">
                    <div className="main-image-wrapper p-20 border rounded" style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} />
                    </div>
                </div>

                <div className="product-details">
                    <div className="brand-header flex justify-between">
                        <span className="brand-badge" style={{ background: '#f5f5f5', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '800' }}>{product.brand}</span>
                        <div className="action-btns flex gap-10">
                            <button className="icon-btn" style={{ background: 'white', border: '1px solid #eee', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Heart size={20} /></button>
                        </div>
                    </div>

                    <h1 className="mt-20" style={{ fontSize: '2.4rem', fontWeight: '800', color: '#333' }}>{product.name}</h1>

                    <div className="price-row mt-20">
                        {product.oldPrice && <span className="old-price" style={{ textDecoration: 'line-through', color: '#999', fontSize: '1.2rem', marginRight: '15px' }}>{product.oldPrice.toFixed(2)}€</span>}
                        <span className="current-price" style={{ fontSize: '2.5rem', fontWeight: '900', color: '#e2001a' }}>{product.price.toFixed(2)}€</span>
                    </div>

                    <div className="atc-section mt-40">
                        <div className="qty-picker mb-20">
                            <label className="font-bold mr-10" style={{ fontWeight: '700', marginRight: '15px' }}>Quantité</label>
                            <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>
                        <button className="btn-primary" onClick={() => addToCart(product, quantity)} style={{ width: '100%', padding: '20px', background: '#e2001a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '900', fontSize: '1.2rem', cursor: 'pointer' }}>
                            AJOUTER AU PANIER
                        </button>
                    </div>

                    <div className="trust-pills mt-40 pt-40" style={{ borderTop: '1px solid #eee', paddingTop: '30px' }}>
                        <div className="trust-pill" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div className="icon-circle" style={{ width: '40px', height: '40px', background: '#f5f5f5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Truck size={20} /></div>
                            <div>
                                <p className="font-bold" style={{ fontWeight: '700' }}>Livraison offerte</p>
                                <p className="text-xs text-gray" style={{ fontSize: '0.8rem', color: '#666' }}>Dès 45€ d'achat</p>
                            </div>
                        </div>
                        <div className="trust-pill" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div className="icon-circle" style={{ width: '40px', height: '40px', background: '#f5f5f5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Store size={20} /></div>
                            <div>
                                <p className="font-bold" style={{ fontWeight: '700' }}>E-réservation 2h</p>
                                <p className="text-xs text-gray" style={{ fontSize: '0.8rem', color: '#666' }}>Gratuite et sans obligation d'achat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-description mt-60">
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>Description</h2>
                <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.1rem' }}>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;

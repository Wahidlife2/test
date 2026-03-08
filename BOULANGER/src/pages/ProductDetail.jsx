import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { boulangerProducts } from '../data/boulangerProducts';
import { Truck, Store, ShieldCheck, Heart, Share2, Star, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = boulangerProducts.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Produit non trouvé</div>;

    return (
        <div className="product-page container">
            <div className="breadcrumb mt-20">
                <Link to="/">Accueil</Link> / <span>{product.category}</span> / <span>{product.name}</span>
            </div>

            <div className="product-main mt-30">
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>

                <div className="product-info">
                    <div className="brand-header flex justify-between align-center">
                        <span className="brand-name">{product.brand}</span>
                        <div className="actions">
                            <button className="icon-btn"><Share2 size={20} /></button>
                            <button className="icon-btn"><Heart size={20} /></button>
                        </div>
                    </div>

                    <h1 className="product-title">{product.name}</h1>

                    <div className="rating-row flex align-center gap-10">
                        <div className="stars flex">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} size={16} fill={i <= Math.floor(product.rating) ? "var(--bl-orange)" : "none"} color="var(--bl-orange)" />
                            ))}
                        </div>
                        <span className="reviews">{product.reviews} avis</span>
                    </div>

                    <div className="price-container mt-20">
                        {product.oldPrice && <p className="old-price">{product.oldPrice.toFixed(2)}€</p>}
                        <p className="current-price">{product.price.toFixed(2)}€</p>
                    </div>

                    <div className="purchase-actions mt-30">
                        <div className="qty-selector flex align-center gap-20">
                            <span>Quantité :</span>
                            <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>
                        <button className="btn-orange mt-20" onClick={() => addToCart(product, quantity)}>
                            Ajouter au panier
                        </button>
                    </div>

                    <div className="service-pills mt-40">
                        <div className="service-pill">
                            <Truck size={20} />
                            <span>Livraison offerte dès 50€</span>
                        </div>
                        <div className="service-pill">
                            <Store size={20} />
                            <span>Retrait 1h en magasin</span>
                        </div>
                        <div className="service-pill">
                            <ShieldCheck size={20} />
                            <span>Garantie 2 ans</span>
                        </div>
                    </div>
                </div>
            </div>

            {product.specs && (
                <div className="product-specs mt-60">
                    <h2>Caractéristiques</h2>
                    <table className="specs-table">
                        <tbody>
                            {product.specs.map((spec, i) => (
                                <tr key={i}>
                                    <td>{spec.label}</td>
                                    <td>{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="product-description mt-60">
                <h2>Description</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;

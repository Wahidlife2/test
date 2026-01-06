import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cdiscountProducts } from '../data/cdiscountProducts';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import {
    ShoppingCart, Heart, Share2, Star, ShieldCheck, Truck,
    RotateCcw, CheckCircle, ChevronRight, Info, MessageSquare,
    ChevronDown, Package, Shield, RefreshCw
} from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const product = cdiscountProducts.find(p => p.id === parseInt(id));
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    const { addToCart } = useCart();

    // Recommended products (same category)
    const recommended = useMemo(() => {
        if (!product) return [];
        return cdiscountProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 5);
    }, [product]);

    // Variations state
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
    const [selectedStorage, setSelectedStorage] = useState(product?.storageOptions?.[0] || null);
    const [selectedCondition, setSelectedCondition] = useState(product?.conditions?.[0] || 'Neuf');

    if (!product) {
        return <div className="container mt-40">Produit non trouvé.</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, qty);
        setAdded(true);
        setTimeout(() => setAdded(false), 3000);
    };

    return (
        <div className="product-page container mt-20">
            {added && (
                <div className="cart-notification animated">
                    <CheckCircle size={24} />
                    <span>Produit ajouté au panier avec succès !</span>
                    <Link to="/cart" className="view-cart-link">Voir mon panier</Link>
                </div>
            )}

            <nav className="breadcrumb mb-20 text-xs">
                <Link to="/">Accueil</Link> <ChevronRight size={10} />
                <Link to={`/search?q=${product.category}`}>{product.category}</Link> <ChevronRight size={10} />
                <span className="text-gray">{product.name}</span>
            </nav>

            <div className="product-main-grid">
                {/* 1. GALLERY */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img src={product.image} alt={product.name} />
                        {product.oldPrice && (
                            <div className="promo-tag">
                                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                            </div>
                        )}
                    </div>
                    <div className="thumbnail-list mt-20 flex gap-10">
                        {[1, 2, 3, 4].map(idx => (
                            <div key={idx} className="thumb-item">
                                <img src={product.image} alt="thumbnail" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. PRODUCT INFO */}
                <div className="product-info">
                    <div className="product-header">
                        <span className="product-brand">{product.brand}</span>
                        <h1 className="product-title">{product.name}</h1>
                        <div className="rating-row flex align-center gap-10 mb-20">
                            <div className="stars flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#ff9800" : "none"} color="#ff9800" />
                                ))}
                            </div>
                            <span className="text-blue font-bold">{product.rating}/5</span>
                            <span className="text-gray text-xs">({product.reviews} avis)</span>
                        </div>
                    </div>

                    {/* VARIATIONS */}
                    <div className="variations-section mb-30">
                        {product.colors && (
                            <div className="var-group mb-20">
                                <p className="var-label mb-10">Couleur : <strong>{selectedColor}</strong></p>
                                <div className="flex gap-10">
                                    {product.colors.map(c => (
                                        <div
                                            key={c}
                                            className={`color-circle ${selectedColor === c ? 'active' : ''}`}
                                            style={{ backgroundColor: c }}
                                            onClick={() => setSelectedColor(c)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {product.storageOptions && (
                            <div className="var-group mb-20">
                                <p className="var-label mb-10">Capacité : <strong>{selectedStorage}</strong></p>
                                <div className="flex gap-10 flex-wrap">
                                    {product.storageOptions.map(s => (
                                        <button
                                            key={s}
                                            className={`var-btn ${selectedStorage === s ? 'active' : ''}`}
                                            onClick={() => setSelectedStorage(s)}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {product.conditions && (
                            <div className="var-group">
                                <p className="var-label mb-10">État : <strong>{selectedCondition}</strong></p>
                                <div className="flex gap-10 flex-wrap">
                                    {product.conditions.map(state => (
                                        <button
                                            key={state}
                                            className={`var-btn wide ${selectedCondition === state ? 'active' : ''}`}
                                            onClick={() => setSelectedCondition(state)}
                                        >
                                            {state}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="price-box mb-30">
                        {product.oldPrice && <p className="old-price-line">{product.oldPrice.toFixed(2)}€</p>}
                        <div className="main-price">
                            <span className="big-euro">{Math.floor(product.price)}</span>
                            <span className="small-cents">,{(product.price % 1).toFixed(2).split('.')[1]}€</span>
                        </div>
                        {product.isCDiscountAVolonte && (
                            <div className="cdav-banner mt-15 flex align-center gap-10">
                                <span className="cdav-tag">CDAV</span>
                                <span className="cdav-text">Livré dès demain avec Cdiscount à volonté</span>
                            </div>
                        )}
                    </div>

                    {/* REPRISE BOX */}
                    <div className="reprise-box mb-30 p-20 border rounded bg-light">
                        <div className="flex align-center gap-10 mb-10">
                            <RefreshCw size={20} color="#002d6a" />
                            <h3 className="font-bold text-blue">Cdiscount Reprise</h3>
                        </div>
                        <p className="text-sm mb-10">Estimez la valeur de votre ancien appareil et recevez un bon d'achat !</p>
                        <button className="text-blue font-bold text-sm underline">Estimer mon produit</button>
                    </div>

                    <div className="description-preview mb-30">
                        <h3>En quelques mots</h3>
                        <ul>
                            <li>Produit {selectedCondition}</li>
                            <li>Garantie légale 2 ans</li>
                            {product.specs && product.specs.map((spec, i) => (
                                <li key={i}><strong>{spec.label} :</strong> {spec.value}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. BUY BOX */}
                <aside className="buy-box-container">
                    <div className="buy-box sticky-top">
                        <div className="delivery-badge mb-20">
                            <Truck size={20} />
                            <span>Livraison <strong>GRATUITE</strong></span>
                        </div>

                        <div className="stock-info flex align-center gap-10 mb-20">
                            <div className="green-dot"></div>
                            <span className="text-green font-bold">En stock</span>
                        </div>

                        <div className="qty-selector mb-20">
                            <label className="block mb-5 text-xs font-bold">Quantité</label>
                            <select value={qty} onChange={(e) => setQty(parseInt(e.target.value))}>
                                {[1, 2, 3, 4, 5, 10].map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>

                        <button className="add-to-cart-btn mb-20" onClick={handleAddToCart}>
                            <ShoppingCart size={22} />
                            AJOUTER AU PANIER
                        </button>

                        <div className="trust-features">
                            <div className="feature-item flex align-center gap-10 mb-15">
                                <ShieldCheck size={20} color="#2e7d32" />
                                <div className="feature-text">
                                    <p className="font-bold text-sm">Paiement sécurisé</p>
                                    <p className="text-xs text-gray">En 4 fois possible</p>
                                </div>
                            </div>
                            <div className="feature-item flex align-center gap-10">
                                <RotateCcw size={20} color="#757575" />
                                <div className="feature-text">
                                    <p className="font-bold text-sm">Retours gratuits</p>
                                    <p className="text-xs text-gray">Sous 14 jours</p>
                                </div>
                            </div>
                        </div>

                        {/* GARANTIE SECTION */}
                        <div className="guarantees-section mt-30 pt-20 border-top">
                            <h4 className="text-sm font-bold mb-15 flex align-center gap-5">
                                <Shield size={16} /> Nos offres de garantie
                            </h4>
                            {product.guarantees ? product.guarantees.map((g, i) => (
                                <div key={i} className="guarantee-item flex justify-between align-center mb-10 p-10 border rounded">
                                    <span className="text-xs font-bold">{g.title}</span>
                                    <span className="text-xs text-blue">+{g.price}</span>
                                </div>
                            )) : (
                                <p className="text-xs text-gray italic">Aucune garantie supplémentaire disponible.</p>
                            )}
                        </div>
                    </div>
                </aside>
            </div>

            {/* FULL WIDTH SECTIONS */}
            <div className="product-details-extra mt-60">
                {/* 1. RECOMMENDED */}
                <section className="recommended-section mb-60">
                    <h2 className="section-title">Les clients Cdiscount ont également apprécié</h2>
                    <div className="product-grid">
                        {recommended.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>

                {/* 2. PRESENTATION PRODUIT */}
                <section className="presentation-section mb-60 p-40 bg-white rounded shadow-sm">
                    <h2 className="section-title border-bottom pb-20 mb-30">Présentation produit</h2>
                    <div className="presentation-grid flex gap-40">
                        <div className="pres-text flex-1">
                            <p className="text-lg leading-relaxed">{product.detailedDescription || product.description}</p>
                            <div className="tech-specs mt-40">
                                <h3 className="mb-20 font-bold">Fiche technique</h3>
                                <table className="specs-table w-full">
                                    <tbody>
                                        {product.specs ? product.specs.map((s, i) => (
                                            <tr key={i}>
                                                <td className="font-bold p-10 bg-light w-1/3">{s.label}</td>
                                                <td className="p-10">{s.value}</td>
                                            </tr>
                                        )) : <tr><td>Données non disponibles</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="pres-image flex-1 hide-tablet">
                            <img src={product.image} alt="Product full" className="rounded sticky-top" />
                        </div>
                    </div>
                </section>

                {/* 3. AVIS CLIENTS */}
                <section className="reviews-section mb-60">
                    <h2 className="section-title">Avis clients</h2>
                    <div className="reviews-container grid-2 gap-30">
                        {product.reviewsList ? product.reviewsList.map((rev, i) => (
                            <div key={i} className="review-card p-20 bg-white rounded shadow-sm border">
                                <div className="flex justify-between mb-10">
                                    <div className="flex gap-5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < rev.note ? "#ff9800" : "none"} color="#ff9800" />
                                        ))}
                                    </div>
                                    <span className="text-gray text-xs">{rev.date}</span>
                                </div>
                                <p className="font-bold mb-5">{rev.user}</p>
                                <p className="text-sm text-gray italic">"{rev.comment}"</p>
                            </div>
                        )) : <p className="text-gray italic">Soyez le premier à donner votre avis !</p>}
                    </div>
                </section>
            </div>

            <style jsx>{`
                .w-full { width: 100%; }
                .w-1\/3 { width: 33.33%; }
                .p-20 { padding: 20px; }
                .p-40 { padding: 40px; }
                .p-10 { padding: 10px; }
                .bg-light { background: #f8f9fa; }
                .border { border: 1px solid #eee; }
                .border-top { border-top: 1px solid #eee; }
                .border-bottom { border-bottom: 1px solid #eee; }
                .rounded { border-radius: 8px; }
                .shadow-sm { box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
                .leading-relaxed { line-height: 1.8; }
                .text-lg { font-size: 1.1rem; }
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; }
                .flex-1 { flex: 1; }
                
                .thumbnail-list { overflow-x: auto; scrollbar-width: none; }
                .color-circle { width: 30px; height: 30px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 1px #ddd; cursor: pointer; }
                .color-circle.active { box-shadow: 0 0 0 2px var(--cd-blue); }
                
                .var-btn { padding: 8px 15px; border: 1px solid #ddd; border-radius: 4px; background: white; font-weight: 600; font-size: 0.85rem; cursor: pointer; }
                .var-btn.active { border-color: var(--cd-blue); background: #ebf3ff; color: var(--cd-blue); }
                .var-btn.wide { min-width: 120px; text-align: left; }
                
                .reprise-box { border-left: 4px solid var(--cd-blue); }
                
                .specs-table tr { border-bottom: 1px solid #f0f0f0; }
                .specs-table td { font-size: 0.9rem; }
                
                .sticky-top { position: sticky; top: 110px; }

                @media (max-width: 800px) { .grid-2 { grid-template-columns: 1fr; } }
            `}</style>
        </div>
    );
};

export default ProductDetail;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const CartPage = () => {
    const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-empty-state container">
                <div className="empty-content">
                    <ShoppingBasket size={80} color="#ddd" />
                    <h2>Votre panier est vide</h2>
                    <p>Mais ne restez pas là ! Des milliers d'articles vous attendent.</p>
                    <Link to="/" className="btn-primary-kiabi">DÉCOUVRIR LES NOUVEAUTÉS</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page-kiabi">
            <div className="checkout-stepper container">
                <div className="step active">1. Panier</div>
                <div className="step-line"></div>
                <div className="step">2. Livraison</div>
                <div className="step-line"></div>
                <div className="step">3. Paiement</div>
            </div>

            <div className="container">
                <h1 className="cart-title">Mon Panier <span>({cart.reduce((s, i) => s + i.quantity, 0)} articles)</span></h1>

                <div className="cart-grid">
                    <div className="cart-main">
                        {cart.map((item) => (
                            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="cart-card">
                                <div className="cart-card-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-card-info">
                                    <div className="item-top">
                                        <h3>{item.name}</h3>
                                        <button className="del-btn" onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <div className="item-meta">
                                        <span>Réf: {item.id}</span>
                                        <span>Couleur: {item.selectedColor}</span>
                                        <span>Taille: <strong>{item.selectedSize}</strong></span>
                                    </div>
                                    <div className="item-bottom">
                                        <div className="qty-picker">
                                            <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)} disabled={item.quantity <= 1}>
                                                <Minus size={14} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)}>
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <div className="item-price-col">
                                            <span className="current-price-item">{(item.price * item.quantity).toFixed(2)} €</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="cart-actions-bottom">
                            <Link to="/" className="continue-link"><ArrowLeft size={16} /> Continuer mes achats</Link>
                        </div>

                        <div className="cart-trust-badges">
                            <div className="trust-item"><Truck size={20} /> <span>Livraison offerte dès 15€</span></div>
                            <div className="trust-item"><RotateCcw size={20} /> <span>Retours 30 jours gratuits</span></div>
                            <div className="trust-item"><ShieldCheck size={20} /> <span>Paiement 100% sécurisé</span></div>
                        </div>
                    </div>

                    <div className="cart-sidebar">
                        <div className="summary-box">
                            <h2>Récapitulatif</h2>
                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Sous-total</span>
                                    <span>{cartTotal.toFixed(2)} €</span>
                                </div>
                                <div className="summary-row">
                                    <span>Livraison</span>
                                    <span className="free-text">GRATUIT</span>
                                </div>
                                <div className="summary-row promo">
                                    <span>Total TTC</span>
                                    <span className="final-total">{cartTotal.toFixed(2)} €</span>
                                </div>
                            </div>
                            <button className="btn-checkout-kiabi" onClick={() => navigate('/checkout')}>
                                PASSER LA COMMANDE
                            </button>
                            <p className="sidebar-info">Codes promotionnels et avantages fidélité à l'étape suivante.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cart-page-kiabi { background: #fcfcfc; min-height: 100vh; padding-bottom: 100px; font-family: 'Sora', sans-serif; }
                
                .checkout-stepper { display: flex; align-items: center; justify-content: center; padding: 40px 0; gap: 20px; }
                .step { font-size: 0.85rem; font-weight: 700; color: #ccc; }
                .step.active { color: #000137; }
                .step-line { width: 40px; height: 1px; background: #eee; }

                .cart-title { font-size: 1.8rem; font-weight: 800; margin-bottom: 32px; color: #000137; }
                .cart-title span { font-weight: 400; color: #757575; font-size: 1.2rem; }

                .cart-grid { display: grid; grid-template-columns: 1fr 380px; gap: 40px; }

                .cart-main { display: flex; flex-direction: column; gap: 20px; }
                .cart-card { background: white; border: 1px solid #eee; display: flex; border-radius: 4px; overflow: hidden; }
                .cart-card-img { width: 140px; height: 180px; background: #F7F7F7; }
                .cart-card-img img { width: 100%; height: 100%; object-fit: cover; }
                .cart-card-info { flex: 1; padding: 20px; display: flex; flex-direction: column; }
                
                .item-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
                .item-top h3 { font-size: 1rem; font-weight: 700; color: #000137; }
                .del-btn { background: none; border: none; cursor: pointer; color: #ccc; transition: color 0.2s; }
                .del-btn:hover { color: #E2001A; }

                .item-meta { display: flex; gap: 20px; font-size: 0.8rem; color: #757575; margin-bottom: auto; }
                .item-meta strong { color: #000137; }

                .item-bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
                .qty-picker { display: flex; align-items: center; border: 1px solid #eee; border-radius: 40px; padding: 4px 12px; gap: 16px; }
                .qty-picker button { background: none; border: none; cursor: pointer; display: flex; align-items: center; color: #000137; }
                .qty-picker button:disabled { opacity: 0.3; }
                .qty-picker span { font-weight: 800; font-size: 0.9rem; min-width: 20px; text-align: center; }
                .current-price-item { font-size: 1.2rem; font-weight: 800; color: #000137; }

                .cart-actions-bottom { padding: 20px 0; }
                .continue-link { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 700; color: #000137; }

                .cart-trust-badges { display: flex; gap: 32px; margin-top: 40px; padding: 24px; background: white; border: 1px solid #eee; border-radius: 4px; }
                .trust-item { display: flex; align-items: center; gap: 10px; font-size: 0.75rem; font-weight: 600; color: #444; }

                .summary-box { background: white; border: 1px solid #eee; padding: 32px; border-radius: 4px; position: sticky; top: 120px; }
                .summary-box h2 { font-size: 1.2rem; font-weight: 800; margin-bottom: 24px; }
                .summary-details { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
                .summary-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #757575; }
                .free-text { color: #2ecc71; font-weight: 700; }
                .summary-row.promo { border-top: 2px solid #000137; padding-top: 16px; margin-top: 8px; }
                .final-total { font-size: 1.5rem; font-weight: 900; color: #000137; }

                .btn-checkout-kiabi { width: 100%; padding: 18px; background: #000137; color: white; border: none; border-radius: 4px; font-size: 1.05rem; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
                .btn-checkout-kiabi:hover { opacity: 0.95; }
                .sidebar-info { font-size: 0.75rem; color: #999; text-align: center; margin-top: 16px; line-height: 1.4; }

                .cart-empty-state { padding: 100px 0; text-align: center; }
                .empty-content { display: flex; flex-direction: column; align-items: center; gap: 24px; }
                .btn-primary-kiabi { padding: 16px 32px; background: #000137; color: white; font-weight: 800; border-radius: 4px; }

                @media (max-width: 900px) {
                    .cart-grid { grid-template-columns: 1fr; }
                    .cart-card-img { width: 100px; height: 130px; }
                }
            `}</style>
        </div>
    );
};

export default CartPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ChevronLeft, ShieldCheck, Truck } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mt-60 mb-60 text-center">
                <div className="empty-cart-box">
                    <h2>Votre panier est vide</h2>
                    <p className="mt-20 text-gray">Découvrez nos meilleures offres et commencez vos achats !</p>
                    <Link to="/" className="btn-yellow mt-30 inline-flex">Retourner à l'accueil</Link>
                </div>
                <style jsx>{`
            .empty-cart-box { background: white; padding: 60px; border-radius: 8px; border: 1px solid #eee; }
            .inline-flex { display: inline-flex; width: auto; margin: 30px auto; }
        `}</style>
            </div>
        );
    }

    return (
        <div className="cart-page container mt-40 mb-60">
            <h1 className="cart-title mb-30">Mon panier <span className="items-text">({cartCount} articles)</span></h1>

            <div className="cart-grid">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item animated">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <Link to={`/product/${item.id}`} className="item-name">{item.name}</Link>
                                <p className="item-category text-xs text-gray">{item.category}</p>
                                {item.isCDiscountAVolonte && <span className="cdav-tag mt-10">CDAV</span>}
                                <button className="remove-btn mt-15" onClick={() => removeFromCart(item.id)}>
                                    <Trash2 size={16} /> <span>Supprimer</span>
                                </button>
                            </div>
                            <div className="item-pricing text-right">
                                <div className="item-qty flex align-center justify-end gap-10 mb-10">
                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                                </div>
                                <p className="item-price font-bold">{item.price.toFixed(2)}€</p>
                            </div>
                        </div>
                    ))}

                    <Link to="/" className="continue-shopping flex align-center gap-10 mt-30">
                        <ChevronLeft size={18} /> Continuer mes achats
                    </Link>
                </div>

                <aside className="cart-summary">
                    <div className="summary-box">
                        <h2 className="mb-20">Récapitulatif</h2>
                        <div className="summary-row flex justify-between mb-15">
                            <span>Sous-total</span>
                            <span>{cartTotal.toFixed(2)}€</span>
                        </div>
                        <div className="summary-row flex justify-between mb-15">
                            <span>Livraison</span>
                            <span className="text-green font-bold">Gratuite</span>
                        </div>
                        <div className="total-row flex justify-between mt-20 pt-20 border-top">
                            <span className="font-bold">TOTAL TTC</span>
                            <span className="total-price">{cartTotal.toFixed(2)}€</span>
                        </div>

                        <button className="checkout-btn mt-30">COMMANDER</button>
                        <p className="text-xs text-gray text-center mt-15">Paiement 100% sécurisé</p>
                    </div>

                    <div className="trust-box mt-20">
                        <div className="flex align-center gap-10 mb-15">
                            <ShieldCheck size={20} color="#2e7d32" />
                            <span className="text-xs">Garantie protection des données</span>
                        </div>
                        <div className="flex align-center gap-10">
                            <Truck size={20} color="#002d6a" />
                            <span className="text-xs">Expédition rapide sous 24/48h</span>
                        </div>
                    </div>
                </aside>
            </div>

        </div>
    );
};

export default Cart;

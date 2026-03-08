import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-empty container">
                <ShoppingBag size={80} color="#ddd" />
                <h1>Votre panier est vide</h1>
                <p>N'attendez plus et découvrez nos meilleures offres !</p>
                <Link to="/" className="btn-orange">Continuer mes achats</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1 className="mt-30">Mon Panier</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <p className="brand">{item.brand}</p>
                                <h3>{item.name}</h3>
                                <p className="price">{item.price.toFixed(2)}€</p>
                            </div>
                            <div className="item-actions">
                                <div className="qty-control flex align-center gap-10">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <Link to="/" className="back-link mt-20">
                        <ArrowLeft size={16} /> Continuer mes achats
                    </Link>
                </div>

                <div className="cart-summary">
                    <h2>Récapitulatif</h2>
                    <div className="summary-row flex justify-between">
                        <span>Sous-total</span>
                        <span>{cartTotal.toFixed(2)}€</span>
                    </div>
                    <div className="summary-row flex justify-between">
                        <span>Livraison</span>
                        <span className="free">Gratuite</span>
                    </div>
                    <div className="total-row flex justify-between mt-20">
                        <span>Total TTC</span>
                        <span className="total-amount">{cartTotal.toFixed(2)}€</span>
                    </div>
                    <button className="btn-orange mt-30" onClick={() => navigate('/checkout')}>
                        Valider mon panier
                    </button>
                    <p className="payment-info mt-10">Paiement 100% sécurisé</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;

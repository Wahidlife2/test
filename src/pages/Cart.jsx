import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-empty-state container">
                <h2>Votre panier est vide</h2>
                <p>Découvrez nos derniers produits et trouvez ce qui vous convient.</p>
                <Link to="/" className="btn-primary">Continuer mes achats</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1>Mon Panier</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.color}-${item.storage}`} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />

                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p className="item-variant">{item.color} | {item.storage}</p>
                                <div className="item-price">{item.price} €</div>
                            </div>

                            <div className="cart-item-actions">
                                <div className="quantity-control">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.color, item.storage, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.color, item.storage, item.quantity + 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id, item.color, item.storage)}
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Récapitulatif</h2>
                    <div className="summary-row">
                        <span>Sous-total</span>
                        <span>{cartTotal.toFixed(2)} €</span>
                    </div>
                    <div className="summary-row">
                        <span>Livraison</span>
                        <span className="free-shipping">Gratuite</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span className="total-amount">{cartTotal.toFixed(2)} €</span>
                    </div>

                    <button className="btn-orange full-width" onClick={() => navigate('/checkout')}>
                        Commander
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

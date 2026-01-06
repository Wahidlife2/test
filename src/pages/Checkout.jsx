import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Commande validée ! Merci pour votre achat.');
        clearCart();
        navigate('/');
    };

    return (
        <div className="checkout-page container">
            <h1>Finaliser la commande</h1>

            <div className="checkout-layout">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h2>Adresse de livraison</h2>
                        <div className="form-row">
                            <input type="text" name="firstName" placeholder="Prénom" required onChange={handleChange} />
                            <input type="text" name="lastName" placeholder="Nom" required onChange={handleChange} />
                        </div>
                        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                        <input type="text" name="address" placeholder="Adresse" required onChange={handleChange} />
                        <div className="form-row">
                            <input type="text" name="city" placeholder="Ville" required onChange={handleChange} />
                            <input type="text" name="zip" placeholder="Code Postal" required onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Paiement</h2>
                        <input type="text" name="cardName" placeholder="Nom sur la carte" required onChange={handleChange} />
                        <input type="text" name="cardNumber" placeholder="Numéro de carte" maxLength="19" required onChange={handleChange} />
                        <div className="form-row">
                            <input type="text" name="expiry" placeholder="MM/YY" maxLength="5" required onChange={handleChange} />
                            <input type="text" name="cvv" placeholder="CVV" maxLength="3" required onChange={handleChange} />
                        </div>
                    </div>

                    <button type="submit" className="btn-orange full-width btn-submit">Payer {cartTotal.toFixed(2)} €</button>
                </form>

                <div className="checkout-summary">
                    <h3>Résumé de la commande</h3>
                    {cart.map(item => (
                        <div key={`${item.id}-${item.color}-${item.storage}`} className="checkout-item-preview">
                            <span className="qty">{item.quantity}x</span>
                            <div className="details">
                                <p className="name">{item.name}</p>
                                <p className="variant">{item.color} - {item.storage}</p>
                            </div>
                            <span className="price">{(item.price * item.quantity).toFixed(2)} €</span>
                        </div>
                    ))}
                    <div className="checkout-total">
                        <span>Total à payer</span>
                        <span>{cartTotal.toFixed(2)} €</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

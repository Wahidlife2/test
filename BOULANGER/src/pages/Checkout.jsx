import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        alert("Commande confirmée ! Merci de votre confiance.");
        clearCart();
        navigate('/');
    };

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Votre panier est vide</h2>
                <button className="btn-orange mt-20" onClick={() => navigate('/')}>Retour à l'accueil</button>
            </div>
        );
    }

    return (
        <div className="checkout-page container pb-60">
            <h1 className="mt-30 mb-30">Finaliser ma commande</h1>

            <div className="checkout-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px' }}>
                <div className="checkout-form">
                    <form onSubmit={handlePlaceOrder}>
                        <section className="checkout-section">
                            <h3>1. Information de livraison</h3>
                            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <input type="text" placeholder="Prénom" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Nom" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="email" placeholder="Email" required style={{ gridColumn: 'span 2', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Adresse" required style={{ gridColumn: 'span 2', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Code Postal" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Ville" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                        </section>

                        <section className="checkout-section mt-40">
                            <h3>2. Mode de paiement</h3>
                            <div className="payment-options flex gap-20">
                                <label className="payment-option flex flex-col align-center p-20 border rounded pointer" style={{ flex: 1, cursor: 'pointer', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                                    <input type="radio" name="payment" defaultChecked />
                                    <CreditCard size={24} className="mt-10" />
                                    <span className="mt-5">Carte Bancaire</span>
                                </label>
                                <label className="payment-option flex flex-col align-center p-20 border rounded pointer" style={{ flex: 1, cursor: 'pointer', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                                    <input type="radio" name="payment" />
                                    <span className="mt-10 font-bold" style={{ fontSize: '1.2rem', color: '#003087' }}>PayPal</span>
                                </label>
                            </div>
                        </section>

                        <button type="submit" className="btn-orange full-width mt-40" style={{ width: '100%', padding: '18px', background: 'var(--bl-orange)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '900', fontSize: '1.1rem', cursor: 'pointer' }}>
                            Confirmer et payer {cartTotal.toFixed(2)}€
                        </button>
                    </form>
                </div>

                <div className="order-summary" style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
                    <h3 className="mb-20">Récapitulatif</h3>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item flex justify-between align-center mb-15">
                                <div className="flex align-center gap-10">
                                    <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                    <span className="text-xs font-bold" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.name}</span>
                                </div>
                                <span className="text-sm">x{item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-totals border-top mt-20 pt-20">
                        <div className="flex justify-between mb-10">
                            <span>Soustotal</span>
                            <span>{cartTotal.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between font-bold" style={{ fontSize: '1.2rem', color: 'var(--bl-blue)' }}>
                            <span>Total TTC</span>
                            <span>{cartTotal.toFixed(2)}€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

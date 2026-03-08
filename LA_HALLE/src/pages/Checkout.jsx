import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        alert("Commande validée ! Merci d'avoir choisi La Halle.");
        clearCart();
        navigate('/');
    };

    if (cart.length === 0) return <div className="container p-100 text-center">Panier vide. <Link to="/">Retour</Link></div>;

    return (
        <div className="checkout-page container pb-60">
            <h1 className="mt-40 mb-30" style={{ fontSize: '2.5rem', fontWeight: '900' }}>Paiement sécurisé</h1>

            <div className="checkout-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px' }}>
                <div className="checkout-forms">
                    <form onSubmit={handlePlaceOrder}>
                        <div className="checkout-section p-30 border rounded mb-30" style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '30px', marginBottom: '30px' }}>
                            <h3 className="mb-20" style={{ fontSize: '1.2rem', fontWeight: '800' }}>1. Livraison</h3>
                            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <input type="text" placeholder="Prénom" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Nom" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Adresse" required style={{ gridColumn: 'span 2', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Ville" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="text" placeholder="Code postal" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                        </div>

                        <div className="checkout-section p-30 border rounded mb-30" style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '30px', marginBottom: '30px' }}>
                            <h3 className="mb-20" style={{ fontSize: '1.2rem', fontWeight: '800' }}>2. Paiement</h3>
                            <div className="payment-modes flex gap-20">
                                <div className="payment-mode active p-20 border rounded" style={{ flex: 1, textAlign: 'center', cursor: 'pointer', border: '2px solid #333', borderRadius: '8px', padding: '20px' }}>
                                    <span style={{ fontWeight: '800' }}>CARTE BANCAIRE</span>
                                </div>
                                <div className="payment-mode p-20 border rounded" style={{ flex: 1, textAlign: 'center', cursor: 'pointer', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
                                    <span style={{ fontWeight: '800', color: '#003087' }}>PayPal</span>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary full-width" style={{ width: '100%', padding: '20px', background: '#e2001a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '900', fontSize: '1.2rem', cursor: 'pointer' }}>
                            VALIDER ET PAYER {cartTotal.toFixed(2)}€
                        </button>
                    </form>
                </div>

                <div className="checkout-summary">
                    <div className="summary-card p-30 border rounded" style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '30px' }}>
                        <h3 className="mb-20">Ma commande</h3>
                        <div className="summary-items-mini mb-20" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {cart.map(item => (
                                <div key={item.id} className="mini-item flex gap-15 mb-15" style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', background: '#f5f5f5', borderRadius: '4px' }} />
                                    <div className="flex-1" style={{ flex: 1 }}>
                                        <p className="text-sm font-bold" style={{ fontSize: '0.8rem', fontWeight: '700' }}>{item.name}</p>
                                        <p className="text-xs text-gray" style={{ fontSize: '0.75rem', color: '#666' }}>Qté: {item.quantity}</p>
                                    </div>
                                    <span className="font-bold" style={{ fontWeight: '700' }}>{(item.price * item.quantity).toFixed(2)}€</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-total-footer border-top pt-20" style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                            <div className="flex justify-between" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '900' }}>
                                <span>TOTAL</span>
                                <span style={{ color: '#e2001a' }}>{cartTotal.toFixed(2)}€</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Truck, CreditCard, Lock, ChevronRight, CheckCircle } from 'lucide-react';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handleFinalizeOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate real processing
        setTimeout(() => {
            setLoading(false);
            // Save order to localStorage simulation
            const orders = JSON.parse(localStorage.getItem('cd-orders') || '[]');
            const newOrder = {
                id: 'CD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                date: new Date().toLocaleDateString(),
                items: cartItems,
                total: cartTotal,
                status: 'Confirmée'
            };
            orders.unshift(newOrder);
            localStorage.setItem('cd-orders', JSON.stringify(orders));

            clearCart();
            navigate('/order-success');
        }, 2000);
    };

    if (cartItems.length === 0 && step !== 3) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="checkout-page container mt-40 mb-60">
            <div className="checkout-steps flex justify-center gap-40 mb-40">
                <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                    <span className="step-num">1</span>
                    <span className="step-label">Livraison</span>
                </div>
                <div className="step-divider"></div>
                <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                    <span className="step-num">2</span>
                    <span className="step-label">Paiement</span>
                </div>
            </div>

            <div className="checkout-grid">
                <div className="checkout-form-container">
                    {step === 1 && (
                        <form className="checkout-box animated" onSubmit={handleNextStep}>
                            <h2 className="mb-20">Vos informations de livraison</h2>
                            <div className="form-group mb-15">
                                <label>Email</label>
                                <input type="email" name="email" required placeholder="votre@email.com" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="form-row flex gap-15 mb-15">
                                <div className="form-group flex-1">
                                    <label>Prénom</label>
                                    <input type="text" name="firstName" required placeholder="Jean" value={formData.firstName} onChange={handleInputChange} />
                                </div>
                                <div className="form-group flex-1">
                                    <label>Nom</label>
                                    <input type="text" name="lastName" required placeholder="Durand" value={formData.lastName} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group mb-15">
                                <label>Adresse</label>
                                <input type="text" name="address" required placeholder="123 rue de la Paix" value={formData.address} onChange={handleInputChange} />
                            </div>
                            <div className="form-row flex gap-15 mb-15">
                                <div className="form-group flex-1">
                                    <label>Ville</label>
                                    <input type="text" name="city" required placeholder="Paris" value={formData.city} onChange={handleInputChange} />
                                </div>
                                <div className="form-group" style={{ width: '120px' }}>
                                    <label>Code Postal</label>
                                    <input type="text" name="zipCode" required placeholder="75000" value={formData.zipCode} onChange={handleInputChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn-yellow w-full mt-20">
                                CONTINUER VERS LE PAIEMENT <ChevronRight size={18} />
                            </button>
                        </form>
                    )}

                    {step === 2 && (
                        <form className="checkout-box animated" onSubmit={handleFinalizeOrder}>
                            <h2 className="mb-20 flex align-center gap-10">
                                <CreditCard size={24} color="var(--cd-blue)" />
                                Paiement Sécurisé
                            </h2>
                            <div className="payment-options flex gap-15 mb-25">
                                <div className="pay-opt active">Carte Bancaire</div>
                                <div className="pay-opt">PayPal</div>
                                <div className="pay-opt">4x par Carte</div>
                            </div>
                            <div className="form-group mb-15">
                                <label>Numéro de carte</label>
                                <div className="input-with-icon">
                                    <CreditCard size={18} className="input-icon" />
                                    <input type="text" name="cardNumber" required placeholder="4242 4242 4242 4242" value={formData.cardNumber} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-row flex gap-15 mb-15">
                                <div className="form-group flex-1">
                                    <label>Date d'expiration</label>
                                    <input type="text" name="expiry" required placeholder="MM/YY" value={formData.expiry} onChange={handleInputChange} />
                                </div>
                                <div className="form-group flex-1">
                                    <label>CVV</label>
                                    <div className="input-with-icon">
                                        <Lock size={18} className="input-icon" />
                                        <input type="password" name="cvv" required placeholder="123" value={formData.cvv} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn-yellow w-full mt-20" disabled={loading}>
                                {loading ? 'TRAITEMENT EN COURS...' : `PAYER ${cartTotal.toFixed(2)}€`}
                            </button>
                            <div className="secure-badge flex align-center justify-center gap-10 mt-20 text-xs text-gray">
                                <ShieldCheck size={16} color="#2e7d32" /> Transaction 100% sécurisée par cryptage SSL
                            </div>
                        </form>
                    )}
                </div>

                <aside className="checkout-summary">
                    <div className="summary-box">
                        <h3 className="mb-20">Votre commande</h3>
                        <div className="summary-items-list mb-20 scrollbar-none">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item flex gap-10 mb-10">
                                    <img src={item.image} alt={item.name} className="mini-img" />
                                    <div className="flex-1">
                                        <p className="text-xs font-bold line-clamp-1">{item.name}</p>
                                        <p className="text-xs text-gray">Qté: {item.quantity}</p>
                                    </div>
                                    <span className="text-sm font-bold">{item.price.toFixed(2)}€</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-footer pt-15 border-top">
                            <div className="flex justify-between mb-10">
                                <span>Sous-total</span>
                                <span>{cartTotal.toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between mb-10">
                                <span>Frais de livraison</span>
                                <span className="text-green font-bold">Inclus</span>
                            </div>
                            <div className="flex justify-between mt-15 pt-15 border-top">
                                <span className="font-bold text-lg">TOTAL</span>
                                <span className="text-danger font-bold text-xl">{cartTotal.toFixed(2)}€</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Checkout;

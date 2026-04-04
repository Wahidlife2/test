import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, AlertCircle, MapPin } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', postalCode: '',
        cardNumber: '', expiry: '', cvc: '', cardName: ''
    });

    if (cart.length === 0 && step === 1) {
        navigate('/');
        return null;
    }

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const proceedToPayment = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setStep(3);
        clearCart();
    };

    const inputStyle = { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem', outline: 'none', marginBottom: '15px' };
    const labelStyle = { display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' };

    return (
        <div className="checkout-page-sephora container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
            {step === 3 ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <div style={{ color: '#fff', fontSize: '30px', fontWeight: 'bold' }}>✓</div>
                    </div>
                    <h1 style={{ fontSize: '2rem', fontFamily: 'Times New Roman', fontWeight: 'bold', marginBottom: '20px' }}>Merci pour votre commande !</h1>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>Un e-mail de confirmation vient de vous être envoyé à {formData.email}</p>
                    <button className="btn-primary" onClick={() => navigate('/')}>RETOURNER À L'ACCUEIL</button>
                </div>
            ) : (
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '2', minWidth: '300px' }}>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
                                {step === 1 ? '1. Coordonnées & Livraison' : '2. Paiement Sécurisé'}
                            </h2>

                            {step === 1 ? (
                                <form onSubmit={proceedToPayment}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        <div><label style={labelStyle}>Prénom *</label><input required name="firstName" value={formData.firstName} onChange={handleChange} style={inputStyle} /></div>
                                        <div><label style={labelStyle}>Nom *</label><input required name="lastName" value={formData.lastName} onChange={handleChange} style={inputStyle} /></div>
                                    </div>
                                    <div><label style={labelStyle}>Email *</label><input required type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} /></div>
                                    <div><label style={labelStyle}>Téléphone</label><input name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} /></div>

                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '15px' }}><MapPin size={18} /> Adresse de livraison</h3>
                                    <div><label style={labelStyle}>Adresse *</label><input required name="address" value={formData.address} onChange={handleChange} style={inputStyle} /></div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        <div><label style={labelStyle}>Code Postal *</label><input required name="postalCode" value={formData.postalCode} onChange={handleChange} style={inputStyle} /></div>
                                        <div><label style={labelStyle}>Ville *</label><input required name="city" value={formData.city} onChange={handleChange} style={inputStyle} /></div>
                                    </div>

                                    <button type="submit" className="btn-checkout-sephora" style={{ marginTop: '20px' }}>CONTINUER VERS LE PAIEMENT</button>
                                </form>
                            ) : (
                                <form onSubmit={handlePayment}>
                                    <div style={{ backgroundColor: '#E8F5E9', padding: '15px', borderRadius: '4px', display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px', color: '#2E7D32' }}>
                                        <AlertCircle size={20} /> Connexion cryptée 256-bit SSL
                                    </div>
                                    <div><label style={labelStyle}>Nom sur la carte *</label><input required name="cardName" value={formData.cardName} onChange={handleChange} style={inputStyle} /></div>
                                    <div><label style={labelStyle}>Numéro de carte *</label><input required placeholder="0000 0000 0000 0000" name="cardNumber" value={formData.cardNumber} onChange={handleChange} style={inputStyle} /></div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        <div><label style={labelStyle}>Expiration (MM/AA) *</label><input required placeholder="MM/AA" name="expiry" value={formData.expiry} onChange={handleChange} style={inputStyle} /></div>
                                        <div><label style={labelStyle}>CVC *</label><input required placeholder="123" name="cvc" value={formData.cvc} onChange={handleChange} style={inputStyle} /></div>
                                    </div>
                                    <button type="submit" className="btn-checkout-sephora" style={{ marginTop: '20px' }}><CreditCard size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> PAYER {cartTotal.toFixed(2)}€</button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', position: 'sticky', top: '120px' }}>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ddd' }}>Résumé de la commande ({cart.reduce((a, c) => a + c.quantity, 0)} articles)</h2>

                            <div style={{ marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
                                {cart.map(item => (
                                    <div key={item.cartId} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{item.brand}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#444', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{item.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#666' }}>Qté: {item.quantity}</div>
                                        </div>
                                        <div style={{ fontWeight: 'bold' }}>{(item.price * item.quantity).toFixed(2)}€</div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem' }}>
                                <span>Sous-total</span>
                                <span>{cartTotal.toFixed(2)}€</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem' }}>
                                <span>Livraison <Truck size={14} style={{ verticalAlign: 'middle' }} /></span>
                                <span style={{ color: '#d50032' }}>Offerte</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '15px', borderTop: '2px solid #000', fontSize: '1.3rem', fontWeight: 'bold' }}>
                                <span>TOTAL TTC</span>
                                <span>{cartTotal.toFixed(2)}€</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;

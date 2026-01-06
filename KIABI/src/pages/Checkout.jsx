import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle2, CreditCard, Truck, User, ArrowLeft, ShieldCheck, ChevronRight } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState(2); // Start at step 2 (Coordonnées)
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        phone: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
        window.scrollTo(0, 0);
    };

    const handleOrder = () => {
        setStep(5); // Success step
        clearCart();
        window.scrollTo(0, 0);
    };

    if (cart.length === 0 && step < 5) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                <h2>Votre panier est vide</h2>
                <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '20px' }}>RETOUR À L'ACCUEIL</button>
            </div>
        );
    }

    return (
        <div className="checkout-page-kiabi">
            {/* Stepper Header */}
            <div className="checkout-stepper-header">
                <div className="container stepper-container">
                    <div className={`step-node ${step >= 1 ? 'completed' : ''}`}><span>1. Panier</span></div>
                    <div className="step-arrow"><ChevronRight size={16} /></div>
                    <div className={`step-node ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}><span>2. Coordonnées</span></div>
                    <div className="step-arrow"><ChevronRight size={16} /></div>
                    <div className={`step-node ${step === 3 ? 'active' : step > 3 ? 'completed' : ''}`}><span>3. Livraison</span></div>
                    <div className="step-arrow"><ChevronRight size={16} /></div>
                    <div className={`step-node ${step === 4 ? 'active' : ''}`}><span>4. Paiement</span></div>
                </div>
            </div>

            <div className="container checkout-body">
                <div className="checkout-main-grid">
                    <div className="form-column">
                        {step === 2 && (
                            <div className="checkout-card">
                                <h2>Vos coordonnées</h2>
                                <form onSubmit={nextStep}>
                                    <div className="form-group-kiabi">
                                        <label>Adresse e-mail</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-row-kiabi">
                                        <div className="form-group-kiabi">
                                            <label>Prénom</label>
                                            <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group-kiabi">
                                            <label>Nom</label>
                                            <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group-kiabi">
                                        <label>N° de téléphone (mobile de préférence)</label>
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn-next-step">VALIDER MES COORDONNÉES</button>
                                </form>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="checkout-card">
                                <h2>Choix du mode de livraison</h2>
                                <div className="delivery-options-kiabi">
                                    <div className="delivery-method selected">
                                        <div className="method-info">
                                            <Truck size={24} />
                                            <div>
                                                <strong>Livraison à domicile</strong>
                                                <p>Livraison sous 3 à 5 jours ouvrés</p>
                                            </div>
                                        </div>
                                        <span className="method-price">OFFERT</span>
                                    </div>
                                </div>
                                <form onSubmit={nextStep}>
                                    <div className="form-group-kiabi">
                                        <label>Adresse de livraison</label>
                                        <input type="text" name="address" required value={formData.address} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-row-kiabi">
                                        <div className="form-group-kiabi">
                                            <label>Code postal</label>
                                            <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group-kiabi">
                                            <label>Ville</label>
                                            <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-next-step">VALIDER LA LIVRAISON</button>
                                </form>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="checkout-card">
                                <h2>Paiement sécurisé</h2>
                                <div className="payment-options-kiabi">
                                    <div className="payment-choice">
                                        <input type="radio" id="card" name="paymethod" defaultChecked />
                                        <label htmlFor="card">
                                            <CreditCard size={20} />
                                            <span>Carte bancaire (Visa, MasterCard)</span>
                                        </label>
                                    </div>
                                    <div className="payment-choice">
                                        <input type="radio" id="paypal" name="paymethod" />
                                        <label htmlFor="paypal">
                                            <span>PayPal</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="payment-safety">
                                    <ShieldCheck size={20} color="#27ae60" />
                                    <span>Votre transaction est 100% sécurisée</span>
                                </div>
                                <button onClick={handleOrder} className="btn-pay-now">COMMANDER ET PAYER {cartTotal.toFixed(2)} €</button>
                            </div>
                        )}

                        {step === 5 && (
                            <div className="order-final-success">
                                <CheckCircle2 size={80} color="#27ae60" />
                                <h1>Merci pour votre commande !</h1>
                                <p>C'est validé. Un e-mail de confirmation vient de vous être envoyé à <strong>{formData.email}</strong>.</p>
                                <div className="order-summary-box">
                                    <div className="summary-line"><span>N° de commande :</span> <strong>KB-{(Math.random() * 1000000).toFixed(0)}</strong></div>
                                    <div className="summary-line"><span>Prévu pour le :</span> <strong>{(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)).toLocaleDateString()}</strong></div>
                                </div>
                                <button className="btn-back-home" onClick={() => navigate('/')}>RETOURNER À L'ACCUEIL</button>
                            </div>
                        )}
                    </div>

                    {step < 5 && (
                        <div className="preview-column">
                            <div className="order-preview-card">
                                <h3>Ma commande</h3>
                                <div className="preview-items-list">
                                    {cart.map(item => (
                                        <div key={`${item.id}-${item.selectedSize}`} className="preview-item">
                                            <img src={item.image} alt={item.name} />
                                            <div className="preview-item-info">
                                                <p className="p-title">{item.name}</p>
                                                <p className="p-specs">Qté: {item.quantity} | Taille: {item.selectedSize}</p>
                                                <p className="p-price">{(item.price * item.quantity).toFixed(2)} €</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="preview-totals">
                                    <div className="t-row"><span>Articles</span><span>{cartTotal.toFixed(2)} €</span></div>
                                    <div className="t-row"><span>Livraison</span><span className="green-text">OFFERT</span></div>
                                    <div className="t-row final"><span>Total TTC</span><span>{cartTotal.toFixed(2)} €</span></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .checkout-page-kiabi { background: #F7F7F7; min-height: 100vh; padding-bottom: 80px; font-family: 'Sora', sans-serif; }
                
                .checkout-stepper-header { background: white; border-bottom: 1px solid #eee; padding: 20px 0; }
                .stepper-container { display: flex; align-items: center; justify-content: center; gap: 15px; }
                .step-node { font-size: 0.8rem; font-weight: 700; color: #ccc; }
                .step-node.active { color: #000137; }
                .step-node.completed { color: #27ae60; }
                .step-arrow { color: #eee; }

                .checkout-body { padding-top: 40px; }
                .checkout-main-grid { display: grid; grid-template-columns: 1fr 380px; gap: 40px; }
                
                .checkout-card { background: white; padding: 40px; border-radius: 4px; border: 1px solid #eee; margin-bottom: 24px; }
                .checkout-card h2 { font-size: 1.5rem; font-weight: 800; margin-bottom: 32px; color: #000137; }

                .form-group-kiabi { margin-bottom: 24px; }
                .form-group-kiabi label { display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 8px; color: #444; }
                .form-group-kiabi input { width: 100%; padding: 14px; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; font-family: inherit; }
                .form-group-kiabi input:focus { border-color: #000137; outline: none; }
                
                .form-row-kiabi { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                
                .btn-next-step, .btn-pay-now { width: 100%; padding: 20px; background: #000137; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
                .btn-next-step:hover, .btn-pay-now:hover { opacity: 0.9; }

                .delivery-options-kiabi { margin-bottom: 32px; }
                .delivery-method { display: flex; justify-content: space-between; align-items: center; padding: 20px; border: 2px solid #000137; border-radius: 4px; background: #F0F4FF; }
                .method-info { display: flex; gap: 20px; align-items: center; }
                .method-info p { font-size: 0.75rem; color: #666; }
                .method-price { font-weight: 800; color: #27ae60; }

                .payment-options-kiabi { margin-bottom: 32px; display: flex; flex-direction: column; gap: 16px; }
                .payment-choice { display: flex; align-items: center; gap: 12px; padding: 20px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; }
                .payment-choice:has(input:checked) { border-color: #000137; background: #F0F4FF; }
                .payment-choice input { width: 20px; height: 20px; }
                .payment-choice label { display: flex; align-items: center; gap: 12px; font-weight: 700; cursor: pointer; }

                .payment-safety { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: #444; margin-bottom: 32px; justify-content: center; }

                .order-preview-card { background: white; border: 1px solid #eee; padding: 32px; border-radius: 4px; position: sticky; top: 120px; }
                .order-preview-card h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 24px; border-bottom: 1px solid #eee; padding-bottom: 16px; }
                
                .preview-items-list { max-height: 400px; overflow-y: auto; margin-bottom: 24px; }
                .preview-item { display: flex; gap: 16px; margin-bottom: 16px; }
                .preview-item img { width: 70px; height: 90px; object-fit: cover; border-radius: 4px; }
                .p-title { font-size: 0.85rem; font-weight: 700; margin-bottom: 4px; }
                .p-specs { font-size: 0.75rem; color: #757575; }
                .p-price { font-size: 0.9rem; font-weight: 800; margin-top: 4px; }

                .preview-totals { border-top: 1px solid #eee; padding-top: 24px; }
                .t-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.9rem; color: #444; }
                .t-row.final { border-top: 2px solid #000137; padding-top: 16px; margin-top: 8px; font-weight: 900; font-size: 1.2rem; color: #000137; }
                .green-text { color: #27ae60; font-weight: 700; }

                .order-final-success { text-align: center; padding: 60px 40px; background: white; border-radius: 4px; border: 1px solid #eee; }
                .order-final-success h1 { font-size: 2rem; font-weight: 800; margin: 24px 0 16px; }
                .order-final-success p { color: #666; margin-bottom: 32px; }
                .order-summary-box { background: #F7F7F7; padding: 24px; border-radius: 8px; display: inline-block; text-align: left; margin-bottom: 40px; }
                .summary-line { margin-bottom: 12px; }
                .summary-line:last-child { margin-bottom: 0; }
                .btn-back-home { padding: 18px 40px; background: #000137; color: white; border: none; border-radius: 40px; font-weight: 800; cursor: pointer; }

                @media (max-width: 1000px) {
                    .checkout-main-grid { grid-template-columns: 1fr; }
                    .preview-column { order: -1; }
                }
            `}</style>
        </div>
    );
};

export default Checkout;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, Truck, ShieldCheck } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-empty container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: '#f5f5f5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                    <ShoppingBag size={60} color="#ccc" />
                </div>
                <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Votre panier est vide</h1>
                <p style={{ color: '#666', marginTop: '10px', marginBottom: '30px' }}>Retrouvez nos dernières tendances et faites-vous plaisir !</p>
                <Link to="/" className="btn-primary" style={{ display: 'inline-block', padding: '15px 40px', background: '#333', color: 'white', borderRadius: '8px', fontWeight: '700' }}>VITE, JE SHOPPE !</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container pb-60">
            <h1 className="mt-40 mb-30" style={{ fontSize: '2.5rem', fontWeight: '900' }}>Mon Panier</h1>

            <div className="cart-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px' }}>
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item border rounded mb-20 p-20" style={{ display: 'grid', gridTemplateColumns: '120px 1fr 150px', gap: '30px', background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '20px' }}>
                            <div className="item-img" style={{ background: '#f9f9f9', borderRadius: '8px', padding: '10px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '120px', objectFit: 'contain' }} />
                            </div>
                            <div className="item-details">
                                <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#999' }}>{item.brand}</span>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '5px' }}>{item.name}</h3>
                                <p className="mt-10" style={{ fontSize: '1.3rem', fontWeight: '800', color: '#e2001a' }}>{item.price.toFixed(2)}€</p>
                            </div>
                            <div className="item-controls flex flex-col justify-between align-end" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div className="qty-row flex align-center gap-15" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} style={{ width: '32px', height: '32px', border: '1px solid #ddd', background: 'white', borderRadius: '50%', cursor: 'pointer' }}>-</button>
                                    <span style={{ fontWeight: '700' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ width: '32px', height: '32px', border: '1px solid #ddd', background: 'white', borderRadius: '50%', cursor: 'pointer' }}>+</button>
                                </div>
                                <button className="remove-link" onClick={() => removeFromCart(item.id)} style={{ color: '#999', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-sidebar">
                    <div className="summary-card p-30 border rounded sticky-top" style={{ background: 'white', border: '1px solid #eee', borderRadius: '12px', padding: '30px', position: 'sticky', top: '120px' }}>
                        <h2 className="mb-20" style={{ fontSize: '1.5rem', fontWeight: '800' }}>Récapitulatif</h2>
                        <div className="summary-row flex justify-between mb-15" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <span>Articles ({cart.length})</span>
                            <span style={{ fontWeight: '700' }}>{cartTotal.toFixed(2)}€</span>
                        </div>
                        <div className="summary-row flex justify-between mb-20 pb-20 border-bottom" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                            <span>Livraison</span>
                            <span style={{ color: '#2e7d32', fontWeight: '700' }}>OFFERTE</span>
                        </div>
                        <div className="summary-row flex justify-between mb-30" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: '800' }}>TOTAL TTC</span>
                            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#e2001a' }}>{cartTotal.toFixed(2)}€</span>
                        </div>
                        <button className="btn-primary full-width" onClick={() => navigate('/checkout')} style={{ width: '100%', padding: '18px', background: '#333', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '800', fontSize: '1.1rem', cursor: 'pointer' }}>
                            COMMANDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    return (
        <div className="cart-page-sephora container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '2.5rem', fontFamily: 'Times New Roman', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase' }}>Mon Panier</h1>

            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Votre panier est vide</h2>
                    <p style={{ color: '#666', marginBottom: '30px' }}>Il est temps de vous faire plaisir !</p>
                    <Link to="/" style={{ display: 'inline-block', backgroundColor: '#000', color: '#fff', padding: '15px 30px', borderRadius: '25px', fontWeight: 'bold' }}>Continuer mes achats</Link>
                </div>
            ) : (
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '2', minWidth: '300px' }}>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                            {cart.map(item => (
                                <div key={item.cartId} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid #ddd' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'contain', backgroundColor: '#fff', padding: '10px' }} />
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>{item.brand}</h3>
                                        <div style={{ fontSize: '0.9rem', color: '#444', marginBottom: '10px' }}>{item.name}</div>
                                        {item.size && <div style={{ fontSize: '0.8rem', color: '#666' }}>Contenance : {item.size}</div>}
                                        {item.color && <div style={{ fontSize: '0.8rem', color: '#666' }}>Teinte : {item.color}</div>}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{(item.price * item.quantity).toFixed(2)}€</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                            <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '4px' }}>
                                                <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} style={{ padding: '5px 10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>-</button>
                                                <span style={{ padding: '5px 10px', fontWeight: 'bold' }}>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} style={{ padding: '5px 10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.cartId)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d50032' }}><Trash2 size={20} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', position: 'sticky', top: '120px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>Récapitulatif</h2>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '1.1rem' }}>
                                <span>Sous-total HT</span>
                                <span>{(cartTotal / 1.2).toFixed(2)}€</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '1.1rem' }}>
                                <span>TVA (20%)</span>
                                <span>{(cartTotal - (cartTotal / 1.2)).toFixed(2)}€</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '1.3rem', fontWeight: 'bold', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
                                <span>Total TTC</span>
                                <span>{cartTotal.toFixed(2)}€</span>
                            </div>

                            <button className="btn-checkout-sephora" onClick={() => navigate('/checkout')}>
                                VALIDER LE PANIER
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, ChevronRight, Box } from 'lucide-react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('cd-orders') || '[]');
        setOrders(storedOrders);
    }, []);

    return (
        <div className="container mt-40 mb-60">
            <h1 className="mb-30 flex align-center gap-15">
                <Box size={32} color="var(--cd-blue)" /> Mes commandes
            </h1>

            {orders.length === 0 ? (
                <div className="text-center py-60 bg-white rounded-8 border">
                    <Package size={48} color="#ccc" />
                    <p className="mt-20 text-gray">Vous n'avez pas encore passé de commande.</p>
                    <Link to="/" className="btn-yellow mt-30 inline-flex" style={{ textDecoration: 'none' }}>Commencer mes achats</Link>
                </div>
            ) : (
                <div className="orders-list flex flex-col gap-20">
                    {orders.map((order) => (
                        <div key={order.id} className="order-card bg-white p-25 rounded-8 border flex justify-between align-center animated">
                            <div className="order-info">
                                <span className="status-badge mb-10 inline-block">{order.status}</span>
                                <h3 className="font-bold">Commande #{order.id}</h3>
                                <p className="text-sm text-gray mt-5 flex align-center gap-5">
                                    <Clock size={14} /> Passée le {order.date}
                                </p>
                                <div className="order-items-preview mt-15 flex gap-10">
                                    {order.items.slice(0, 3).map((item, idx) => (
                                        <img key={idx} src={item.image} alt="" className="mini-thumb" />
                                    ))}
                                    {order.items.length > 3 && <span className="more-count">+{order.items.length - 3}</span>}
                                </div>
                            </div>
                            <div className="order-pricing text-right">
                                <p className="text-sm text-gray">Total</p>
                                <p className="text-xl font-bold">{order.total.toFixed(2)}€</p>
                                <button className="mt-15 text-blue text-sm font-bold flex align-center gap-5 justify-end">
                                    Détails de commande <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                .rounded-8 { border-radius: 8px; }
                .border { border: 1px solid #eee; }
                .p-25 { padding: 25px; }
                .status-badge { 
                    background: #e3f2fd; 
                    color: var(--cd-blue); 
                    padding: 4px 12px; 
                    border-radius: 20px; 
                    font-size: 0.7rem; 
                    font-weight: 800; 
                    text-transform: uppercase;
                }
                .mini-thumb { width: 40px; height: 40px; object-fit: cover; border: 1px solid #eee; border-radius: 4px; }
                .more-count { 
                    width: 40px; height: 40px; 
                    background: #f5f5f5; 
                    display: flex; align-items: center; justify-content: center; 
                    font-size: 0.75rem; color: #666; font-weight: bold; border-radius: 4px;
                }
                .order-card:hover { border-color: var(--cd-blue); transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
            `}</style>
        </div>
    );
};

export default MyOrders;

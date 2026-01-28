import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const hotel = hotels.find(h => h.id === id);
    const roomId = location.state?.roomId;
    const room = hotel?.rooms.find(r => r.id === roomId) || hotel?.rooms[0];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        arrival: 'Je ne sais pas'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/confirmation', { state: { hotel, room, user: formData } });
    };

    if (!hotel) return <div>Hôtel non trouvé</div>;

    return (
        <div className="checkout-page container">
            <div className="checkout-steps">
                <span className="step active">Vos informations</span>
                <span className="step">Dernière étape</span>
            </div>

            <div className="checkout-content">
                <div className="checkout-main">
                    <section className="checkout-section">
                        <h2>Saisissez vos coordonnées</h2>
                        <div className="booking-alert">
                            Quasiment terminé ! Plus que quelques détails à remplir.
                        </div>

                        <form id="checkout-form" onSubmit={handleSubmit} className="details-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Prénom *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nom *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Adresse e-mail *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <small>L'e-mail de confirmation sera envoyé à cette adresse</small>
                            </div>
                            <div className="form-group">
                                <label>Numéro de téléphone *</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                                <small>Pour que l'établissement puisse vous contacter</small>
                            </div>

                            <h3>Heure d'arrivée</h3>
                            <div className="form-group">
                                <label>Votre chambre sera prête entre 14h00 et 00h00</label>
                                <select
                                    value={formData.arrival}
                                    onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
                                >
                                    <option>Je ne sais pas</option>
                                    <option>14:00 - 15:00</option>
                                    <option>15:00 - 16:00</option>
                                    <option>16:00 - 17:00</option>
                                </select>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-primary">Dernière étape {'>'}</button>
                            </div>
                        </form>
                    </section>
                </div>

                <aside className="checkout-sidebar">
                    <div className="summary-card">
                        <div className="summary-hotel">
                            <h3>{hotel.name}</h3>
                            <p>{hotel.address}</p>
                            <div className="rating-mini">
                                <span className="rating-badge">{hotel.rating}</span> Superbe · {hotel.reviews} expériences vécues
                            </div>
                        </div>

                        <div className="summary-details">
                            <h4>Détails de votre réservation</h4>
                            <div className="detail-row">
                                <span>Arrivée</span>
                                <strong>Ven 30 janv 2026</strong>
                            </div>
                            <div className="detail-row">
                                <span>Départ</span>
                                <strong>Sam 31 janv 2026</strong>
                            </div>
                            <div className="detail-row">
                                <span>Durée totale du séjour :</span>
                                <strong>1 nuit</strong>
                            </div>
                        </div>

                        <div className="summary-room">
                            <h4>Vous avez sélectionné :</h4>
                            <div className="room-summary-box">
                                <strong>{room.name}</strong>
                                <p>{room.description}</p>
                            </div>
                        </div>

                        <div className="summary-price">
                            <div className="price-total">
                                <span>Prix</span>
                                <span className="amount">€ {room.price}</span>
                            </div>
                            <p className="price-notes">+ € 0 de taxes et frais</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Checkout;

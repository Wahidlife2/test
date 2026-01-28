import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { useState } from 'react';
import { MapPin, Check, Star, Calendar } from 'lucide-react';
import './HotelDetail.css';

const HotelDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = hotels.find(h => h.id === id);
    const [selectedRoom, setSelectedRoom] = useState(null);

    if (!hotel) return <div>Hôtel non trouvé</div>;

    const handleReserve = () => {
        if (selectedRoom) {
            navigate(`/checkout/${hotel.id}`, { state: { roomId: selectedRoom.id } });
        } else {
            alert('Veuillez sélectionner une chambre');
        }
    };

    return (
        <div className="hotel-detail container">
            <nav className="breadcrumbs">
                Hébergements {'>'} {hotel.country} {'>'} {hotel.city} {'>'} {hotel.name}
            </nav>

            <div className="hotel-header">
                <div className="hotel-header-left">
                    <div className="hotel-type">Hôtel <span className="stars"><Star size={12} fill="#feba02" /><Star size={12} fill="#feba02" /><Star size={12} fill="#feba02" /><Star size={12} fill="#feba02" /><Star size={12} fill="#feba02" /></span></div>
                    <h1>{hotel.name}</h1>
                    <p className="hotel-address"><MapPin size={16} /> {hotel.address} — <span className="link">Excellent emplacement - voir la carte</span></p>
                </div>
                <div className="hotel-header-right">
                    <button className="btn-secondary">Réserver maintenant</button>
                </div>
            </div>

            <div className="hotel-gallery">
                <div className="gallery-main" style={{ backgroundImage: `url(${hotel.images[0]})` }}></div>
                <div className="gallery-grid">
                    {hotel.images.slice(1).map((img, i) => (
                        <div key={i} className="gallery-thumb" style={{ backgroundImage: `url(${img})` }}></div>
                    ))}
                    <div className="gallery-thumb more">+ {hotel.images.length - 2} photos</div>
                </div>
            </div>

            <div className="hotel-content">
                <div className="hotel-description">
                    <p className="description-text">{hotel.description}</p>
                    <h3>Ses points forts</h3>
                    <div className="amenities">
                        {hotel.amenities.map((item, i) => (
                            <span key={i} className="amenity-item"><Check size={16} color="#008009" /> {item}</span>
                        ))}
                    </div>
                </div>
                <div className="hotel-info-sidebar">
                    <div className="sidebar-box">
                        <h4>Points forts de l'établissement</h4>
                        <p className="location-score">Idéal pour un séjour de 1 nuit !</p>
                        <p><MapPin size={16} /> Situé en plein cœur de {hotel.city}</p>
                        <p><Calendar size={16} /> Infos sur le petit-déjeuner : Continental, Buffet</p>
                        <button className="btn-primary full-width" onClick={() => document.getElementById('availability').scrollIntoView({ behavior: 'smooth' })}>Réserver</button>
                    </div>
                </div>
            </div>

            <section id="availability" className="availability-section">
                <h2>Disponibilités</h2>
                <table className="room-table">
                    <thead>
                        <tr>
                            <th>Type d'hébergement</th>
                            <th>Nombre de personnes</th>
                            <th>Prix pour 1 nuit</th>
                            <th>Vos options</th>
                            <th>Choisir une chambre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotel.rooms.map(room => (
                            <tr key={room.id} className={selectedRoom?.id === room.id ? 'selected' : ''}>
                                <td>
                                    <div className="room-name">{room.name}</div>
                                    <div className="room-desc">{room.description}</div>
                                </td>
                                <td>{Array(room.capacity).fill('👤').join(' ')}</td>
                                <td>
                                    <div className="room-price">€ {room.price}</div>
                                    <div className="price-info">Comprend les taxes et frais</div>
                                </td>
                                <td>
                                    <ul className="room-options">
                                        <li className="benefit"><Check size={14} /> Annulation GRATUITE</li>
                                        <li><Check size={14} /> Aucun prépaiement requis</li>
                                    </ul>
                                </td>
                                <td>
                                    <select
                                        onChange={(e) => e.target.value === "1" ? setSelectedRoom(room) : setSelectedRoom(null)}
                                        className="room-select"
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1 ( € {room.price} )</option>
                                    </select>
                                </td>
                                {room.id === hotel.rooms[0].id && (
                                    <td rowSpan={hotel.rooms.length} className="reserve-column">
                                        <button className="btn-primary" onClick={handleReserve}>Je réserve</button>
                                        <ul className="reserve-perks">
                                            <li>Confirmation instantanée</li>
                                            <li>Sans frais de réservation</li>
                                        </ul>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default HotelDetail;

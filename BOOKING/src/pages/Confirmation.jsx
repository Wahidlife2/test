import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
    const location = useLocation();
    const { hotel, room, user } = location.state || {};

    if (!hotel) return <div>Erreur de confirmation</div>;

    return (
        <div className="confirmation-page container">
            <div className="success-banner">
                <div className="success-icon">✓</div>
                <div className="success-text">
                    <h1>Merci ! Votre réservation à {hotel.name} est confirmée.</h1>
                    <p>Un e-mail de confirmation a été envoyé à <strong>{user.email}</strong></p>
                </div>
            </div>

            <div className="confirmation-details">
                <div className="confirmation-card">
                    <h2>Récapitulatif de votre séjour</h2>
                    <div className="conf-grid">
                        <div className="conf-item">
                            <strong>Numéro de réservation</strong>
                            <p>2548.965.412</p>
                        </div>
                        <div className="conf-item">
                            <strong>Code confidentiel</strong>
                            <p>7584</p>
                        </div>
                        <div className="conf-item">
                            <strong>Dates</strong>
                            <p>30 janv. – 31 janv. 2026</p>
                        </div>
                        <div className="conf-item">
                            <strong>Hébergement</strong>
                            <p>{room.name}</p>
                        </div>
                    </div>

                    <div className="conf-actions">
                        <button className="btn-primary">Imprimer la confirmation</button>
                        <Link to="/" className="btn-secondary">Retour à l'accueil</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;

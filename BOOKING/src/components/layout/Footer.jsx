import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <button className="footer-save-btn">Économisez du temps et de l'argent !</button>
                    <p>Inscrivez-vous et nous vous enverrons les meilleures offres</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Votre e-mail" />
                        <button className="subscribe-btn">S'abonner</button>
                    </div>
                </div>
            </div>
            <div className="footer-links container">
                <div className="link-column">
                    <ul>
                        <li>Pays</li>
                        <li>Régions</li>
                        <li>Villes</li>
                        <li>Quartiers</li>
                        <li>Aéroports</li>
                        <li>Hôtels</li>
                    </ul>
                </div>
                <div className="link-column">
                    <ul>
                        <li>Hébergements indépendants</li>
                        <li>Appartements</li>
                        <li>Complexes hôteliers</li>
                        <li>Villas</li>
                        <li>Auberges de jeunesse</li>
                        <li>B&B / Chambres d'hôtes</li>
                    </ul>
                </div>
                <div className="link-column">
                    <ul>
                        <li>Bureaux d'excursions</li>
                        <li>Booking.com pour Business</li>
                        <li>Voyages Durables</li>
                        <li>Centre de ressources saisonnier</li>
                        <li>Sécurisé par Expedia</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>© 1996–2026 Booking.com™. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top container">
                <div className="footer-column">
                    <h3>PRODUITS</h3>
                    <ul>
                        <li>Xiaomi Series</li>
                        <li>Redmi Series</li>
                        <li>Xiaomi Pad</li>
                        <li>TV & Audio</li>
                        <li>Maison Connectée</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>SUPPORT</h3>
                    <ul>
                        <li>Service Client</li>
                        <li>Garantie</li>
                        <li>FAQ</li>
                        <li>Points de vente</li>
                        <li>Réparation</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>À PROPOS</h3>
                    <ul>
                        <li>Xiaomi</li>
                        <li>Culture</li>
                        <li>Recrutement</li>
                        <li>Développement Durable</li>
                        <li>Espace Presse</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>SUIVEZ-NOUS</h3>
                    <div className="social-links">
                        <Facebook size={24} />
                        <Twitter size={24} />
                        <Instagram size={24} />
                        <Youtube size={24} />
                    </div>
                    <p className="newsletter-text">Inscrivez-vous pour les dernières offres</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Email" />
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; 2025 Xiaomi. Tous droits réservés.</p>
                <div className="legal-links">
                    <span>Mentions légales</span>
                    <span>Politique de cookies</span>
                    <span>Plan du site</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

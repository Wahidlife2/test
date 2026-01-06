import React from 'react';
import { Mail, Phone, MessageSquare, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container flex justify-between">
                    <div className="contact-item">
                        <Phone size={24} />
                        <div>
                            <p className="font-bold">0 809 10 30 72</p>
                            <p className="text-xs">Du lundi au samedi de 9h à 20h</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <MessageSquare size={24} />
                        <div>
                            <p className="font-bold">Aide & Contact</p>
                            <p className="text-xs">Questions fréquentes</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <Mail size={24} />
                        <div>
                            <p className="font-bold">Newsletter</p>
                            <p className="text-xs">Inscrivez-vous aux bons plans</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-links">
                <div className="container grid-4">
                    <div className="footer-col">
                        <h3>Guide d'achat</h3>
                        <ul>
                            <li>Comment commander ?</li>
                            <li>Paiement en plusieurs fois</li>
                            <li>Modes de livraison</li>
                            <li>Retours et remboursements</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Services Cdiscount</h3>
                        <ul>
                            <li>Cdiscount à volonté</li>
                            <li>Cdiscount Voyages</li>
                            <li>Cdiscount Santé</li>
                            <li>Vendre sur Cdiscount</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Besoin d'aide ?</h3>
                        <ul>
                            <li>Suivre ma commande</li>
                            <li>Modifier mon adresse</li>
                            <li>Déclarer un incident</li>
                            <li>Nous contacter</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Suivez-nous</h3>
                        <div className="socials flex gap-15 mt-10">
                            <Facebook size={24} />
                            <Twitter size={24} />
                            <Instagram size={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container flex justify-between align-center">
                    <p className="text-xs opacity-70">© 1998-2026 Cdiscount.com - Tous droits réservés</p>
                    <div className="payments flex gap-10">
                        <div className="card-logo">Visa</div>
                        <div className="card-logo">MasterCard</div>
                        <div className="card-logo">PayPal</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer { background: #f4f4f4; color: #555; margin-top: 60px; }
        .footer-top { background: var(--cd-blue); color: white; padding: 30px 0; border-bottom: 4px solid var(--cd-yellow); }
        .contact-item { display: flex; align-items: center; gap: 15px; }
        
        .footer-links { padding: 60px 0; border-bottom: 1px solid #ddd; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        
        .footer-col h3 { font-size: 1rem; font-weight: 800; color: var(--cd-blue); margin-bottom: 20px; }
        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 12px; font-size: 0.9rem; cursor: pointer; transition: color 0.2s; }
        .footer-col li:hover { color: var(--cd-blue); text-decoration: underline; }
        
        .card-logo { background: white; padding: 4px 10px; border-radius: 4px; font-size: 0.65rem; font-weight: 800; border: 1px solid #ddd; }
        
        .footer-bottom { padding: 20px 0; background: white; }
        
        @media (max-width: 800px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } .footer-top .container { flex-direction: column; gap: 20px; } }
      `}</style>
        </footer>
    );
};

export default Footer;

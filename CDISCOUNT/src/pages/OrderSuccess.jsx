import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, ExternalLink } from 'lucide-react';

const OrderSuccess = () => {
    return (
        <div className="container mt-60 mb-60 text-center">
            <div className="success-box animated">
                <div className="icon-wrapper">
                    <CheckCircle size={80} color="#2e7d32" />
                </div>
                <h1 className="mt-30">Merci pour votre commande !</h1>
                <p className="mt-15 text-gray font-lg">
                    Votre commande a été enregistrée avec succès sous le numéro <strong>#CD-2026-X8B</strong>.
                </p>
                <div className="success-actions mt-40 flex flex-col gap-15 align-center">
                    <Link to="/my-orders" className="btn-blue flex align-center gap-10">
                        <Package size={20} /> VOIR MES COMMANDES
                    </Link>
                    <Link to="/" className="text-blue font-bold flex align-center gap-5 mt-10">
                        Retourner à la boutique <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="info-grid mt-60 border-top pt-40">
                    <div className="info-item">
                        <h4 className="font-bold">Confirmation par mail</h4>
                        <p className="text-sm text-gray mt-5">Un email récapitulatif vient de vous être envoyé.</p>
                    </div>
                    <div className="info-item mt-20">
                        <h4 className="font-bold">Suivi de livraison</h4>
                        <p className="text-sm text-gray mt-5">Vous pourrez suivre l'avancée de votre colis dans votre espace client.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .success-box {
                    max-width: 700px;
                    margin: 0 auto;
                    background: white;
                    padding: 60px 40px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                    border: 1px solid #eee;
                }
                .icon-wrapper {
                    display: inline-flex;
                    padding: 20px;
                    background: #e8f5e9;
                    border-radius: 50%;
                }
                .btn-blue {
                    background: var(--cd-blue);
                    color: white;
                    padding: 15px 40px;
                    border-radius: 4px;
                    font-weight: 800;
                    width: 100%;
                    max-width: 300px;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
};

export default OrderSuccess;

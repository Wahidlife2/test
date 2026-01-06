import React, { useState } from 'react';

const Portal = () => {
    const [selected, setSelected] = useState("");

    const launchProject = () => {
        if (!selected) return alert("Veuillez sélectionner un projet.");

        // If it's the current project, go to /shop
        if (selected === "http://localhost:6002") {
            window.location.href = "/shop";
        } else {
            window.location.href = selected;
        }
    };

    return (
        <div className="portal-container">
            <div className="blob"></div>
            <div className="blob blob-2"></div>

            <div className="content">
                <span className="badge">ECOMMERCE HUB V1.0</span>
                <h1>E-Commerce Projects</h1>
                <p>Sélectionnez l'un des clones e-commerce ci-dessous pour accéder à l'interface de démonstration locale.</p>

                <div className="portal-ui">
                    <span className="select-label">Choisir un Clone</span>
                    <div className="custom-select-wrapper">
                        <select
                            id="cloneSelect"
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            <option value="" disabled>-- Choisir un projet --</option>
                            <option value="http://localhost:3002">KIABI (Port 3002)</option>
                            <option value="http://localhost:5002">CDISCOUNT (Port 5002)</option>
                            <option value="http://localhost:6002">BOULANGER (Port 6002)</option>
                            <option value="http://localhost:7002">LA HALLE (Port 7002)</option>
                            <option value="other">Prochainement...</option>
                        </select>
                        <div className="arrow">▼</div>
                    </div>

                    <button className="btn-launch" onClick={launchProject}>LANCER LE PROJET</button>
                </div>
            </div>

            <style jsx>{`
                .portal-container {
                    background-color: #0f172a;
                    background-image: 
                        radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%);
                    color: #f8fafc;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 9999;
                    font-family: 'Outfit', sans-serif;
                }

                .content { text-align: center; z-index: 10; padding: 20px; max-width: 800px; }

                h1 {
                    font-size: 4rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    background: linear-gradient(to right, #6366f1, #a855f7);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: -1px;
                }

                p { font-size: 1.2rem; color: #94a3b8; margin-bottom: 3rem; line-height: 1.6; }

                .portal-ui {
                    background: rgba(30, 41, 59, 0.7);
                    backdrop-filter: blur(12px);
                    padding: 3rem;
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                    position: relative;
                }

                .select-label {
                    display: block;
                    text-align: left;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #a855f7;
                    margin-bottom: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .custom-select-wrapper { position: relative; width: 100%; }

                select {
                    width: 100%;
                    padding: 1.2rem;
                    background: rgba(15, 23, 42, 0.6);
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    color: white;
                    font-size: 1.1rem;
                    appearance: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    outline: none;
                }

                .arrow { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #94a3b8; }

                .btn-launch {
                    width: 100%;
                    margin-top: 2rem;
                    padding: 1.2rem;
                    background: linear-gradient(to right, #6366f1, #a855f7);
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);
                }

                .blob {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: #6366f1;
                    filter: blur(80px);
                    opacity: 0.2;
                    border-radius: 50%;
                    z-index: -1;
                    animation: move 20s infinite alternate;
                }

                .blob-2 { background: #a855f7; right: -100px; bottom: -100px; animation-delay: -5s; }

                @keyframes move {
                    from { transform: translate(-10%, -10%) scale(1); }
                    to { transform: translate(10%, 10%) scale(1.1); }
                }

                .badge {
                    display: inline-block;
                    padding: 6px 12px;
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 100px;
                    color: #6366f1;
                    font-size: 0.8rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                }
            `}</style>
        </div>
    );
};

export default Portal;

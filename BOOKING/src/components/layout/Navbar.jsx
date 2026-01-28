import { Link } from 'react-router-dom';
import { Bed, Plane, Car, Camera, HelpCircle, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-left">
                    <Link to="/" className="logo">
                        Booking.com
                    </Link>
                </div>
                <div className="navbar-right">
                    <button className="nav-item">FR</button>
                    <button className="nav-item circle-btn"><HelpCircle size={18} /></button>
                    <button className="nav-btn outline">Listez votre établissement</button>
                    <button className="nav-btn bg-white">S'inscrire</button>
                    <button className="nav-btn bg-white">Se connecter</button>
                </div>
            </div>
            <div className="sub-navbar container">
                <ul className="nav-links">
                    <li className="active"><Bed size={20} /> Hébergements</li>
                    <li><Plane size={20} /> Vols</li>
                    <li><Globe size={20} /> Vols + Hôtels</li>
                    <li><Car size={20} /> Locations de voitures</li>
                    <li><Camera size={20} /> Attractions</li>
                    <li><Car size={20} /> Taxis aéroport</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import { useState } from 'react';
import SearchForm from '../components/common/SearchForm';
import { hotels } from '../data/hotels';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [displayHotels, setDisplayHotels] = useState(hotels);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [lastSearch, setLastSearch] = useState('');

    const handleSearch = (searchData) => {
        console.log('Search triggered:', searchData);
        const { destination } = searchData;
        setSearchPerformed(true);
        setLastSearch(destination);

        if (!destination || destination.trim() === '') {
            setDisplayHotels(hotels);
        } else {
            const query = destination.toLowerCase().trim();
            const filtered = hotels.filter(h =>
                h.name.toLowerCase().includes(query) ||
                h.city.toLowerCase().includes(query) ||
                h.country.toLowerCase().includes(query)
            );
            setDisplayHotels(filtered);
        }

        // Scroll to results after a short delay
        setTimeout(() => {
            const element = document.getElementById('hotels-results');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="home-page">
            <section className="hero">
                <div className="container">
                    <h1>Trouvez votre prochain séjour</h1>
                    <p>Recherchez des offres sur des hôtels, des hébergements indépendants et bien plus encore...</p>
                </div>
            </section>

            <div className="container">
                <div className="booking-search-wrapper">
                    <SearchForm onSearch={handleSearch} />
                </div>

                {!searchPerformed && (
                    <section className="featured-section">
                        <h2>Explorer la France</h2>
                        <p>Ces destinations prisées ont beaucoup à offrir</p>
                        <div className="featured-grid">
                            <div className="featured-item city-card" style={{ backgroundImage: 'url(https://cf.bstatic.com/xdata/images/city/600x600/613095.jpg?k=8695029e2acc916f0322fd2023cb36f1e8473859d0408d6c702fc563bc755694&o=)' }}>
                                <div className="city-info">
                                    <h3>Paris</h3>
                                    <p>3 210 hébergements</p>
                                </div>
                            </div>
                            <div className="featured-item city-card" style={{ backgroundImage: 'url(https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=339908354c2a4773c3fa360982563f46f338b556f8f63548972e37905156644d&o=)' }}>
                                <div className="city-info">
                                    <h3>Lyon</h3>
                                    <p>850 hébergements</p>
                                </div>
                            </div>
                            <div className="featured-item city-card" style={{ backgroundImage: 'url(https://cf.bstatic.com/xdata/images/city/600x600/613083.jpg?k=1092e0717b1f63080ffed322fc697664e528246bc5fb1e204c0acc0158a2f4a1&o=)' }}>
                                <div className="city-info">
                                    <h3>Nice</h3>
                                    <p>1 120 hébergements</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section id="hotels-results" className="hotels-section">
                    <h2>{searchPerformed ? `Résultats de recherche (${displayHotels.length} établissements trouvés)` : "Hébergements à la une"}</h2>
                    {displayHotels.length > 0 ? (
                        <div className="hotels-grid">
                            {displayHotels.map(hotel => (
                                <Link to={`/hotel/${hotel.id}`} key={hotel.id} className="hotel-card">
                                    <div className="hotel-image" style={{ backgroundImage: `url(${hotel.images[0]})` }}></div>
                                    <div className="hotel-info">
                                        <h3>{hotel.name}</h3>
                                        <p className="hotel-location">{hotel.city}, {hotel.country}</p>
                                        <div className="hotel-rating">
                                            <span className="rating-score">{hotel.rating}</span>
                                            <span className="rating-text">Exceptionnel</span>
                                            <span className="rating-reviews">· {hotel.reviews} expériences vécues</span>
                                        </div>
                                        <p className="hotel-price">À partir de <strong>€ {hotel.pricePerNight}</strong></p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results" style={{ padding: '40px', textAlign: 'center' }}>
                            <p style={{ fontSize: '18px', marginBottom: '20px' }}>Désolé, aucun établissement ne correspond à votre recherche "{lastSearch}".</p>
                            <button className="btn-primary" onClick={() => { setDisplayHotels(hotels); setSearchPerformed(false); setLastSearch(''); }}>Voir tous les hôtels</button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Home;

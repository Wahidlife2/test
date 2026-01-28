import { useState } from 'react';
import { Bed, Calendar, User } from 'lucide-react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState({ start: '', end: '' });
    const [options, setOptions] = useState({
        adults: 2,
        children: 0,
        rooms: 1
    });
    const [showOptions, setShowOptions] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) onSearch({ destination, dates, options });
    };

    return (
        <div className="search-form-container">
            <form className="search-form" onSubmit={handleSearch}>
                <div className="search-item input-destination">
                    <Bed size={20} color="#4b4b4b" />
                    <input
                        type="text"
                        placeholder="Où allez-vous ?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="search-item input-dates">
                    <Calendar size={20} color="#4b4b4b" />
                    <input
                        type="date"
                        value={dates.start}
                        onChange={(e) => setDates({ ...dates, start: e.target.value })}
                    />
                    <span>—</span>
                    <input
                        type="date"
                        value={dates.end}
                        onChange={(e) => setDates({ ...dates, end: e.target.value })}
                    />
                </div>
                <div className="search-item input-options" onClick={() => setShowOptions(!showOptions)}>
                    <User size={20} color="#4b4b4b" />
                    <span>{`${options.adults} adultes · ${options.children} enfants · ${options.rooms} chambre`}</span>

                    {showOptions && (
                        <div className="options-dropdown" onClick={(e) => e.stopPropagation()}>
                            <div className="option-row">
                                <span>Adultes</span>
                                <div className="option-counter">
                                    <button type="button" onClick={() => setOptions({ ...options, adults: Math.max(1, options.adults - 1) })}>-</button>
                                    <span>{options.adults}</span>
                                    <button type="button" onClick={() => setOptions({ ...options, adults: options.adults + 1 })}>+</button>
                                </div>
                            </div>
                            <div className="option-row">
                                <span>Enfants</span>
                                <div className="option-counter">
                                    <button type="button" onClick={() => setOptions({ ...options, children: Math.max(0, options.children - 1) })}>-</button>
                                    <span>{options.children}</span>
                                    <button type="button" onClick={() => setOptions({ ...options, children: options.children + 1 })}>+</button>
                                </div>
                            </div>
                            <div className="option-row">
                                <span>Chambres</span>
                                <div className="option-counter">
                                    <button type="button" onClick={() => setOptions({ ...options, rooms: Math.max(1, options.rooms - 1) })}>-</button>
                                    <span>{options.rooms}</span>
                                    <button type="button" onClick={() => setOptions({ ...options, rooms: options.rooms + 1 })}>+</button>
                                </div>
                            </div>
                            <button type="button" className="btn-done" onClick={() => setShowOptions(false)}>Terminé</button>
                        </div>
                    )}
                </div>
                <button type="submit" className="search-btn">Rechercher</button>
            </form>
        </div>
    );
};

export default SearchForm;

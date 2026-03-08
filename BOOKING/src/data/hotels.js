export const hotels = [
    {
        id: 'chido-residence',
        name: 'Chido Residence',
        city: 'Istanbul',
        country: 'Turquie',
        address: 'Kuloğlu Mah. Barbaros Cad. No:12, Beyoglu, 34433 Istanbul',
        rating: 8.9,
        reviews: 452,
        images: [
            'https://images.unsplash.com/photo-1551882547-ff43c63faf76?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Bénéficiant d\'un emplacement exceptionnel dans le centre d\'Istanbul, le Chido Residence propose une connexion Wi-Fi gratuite dans l\'ensemble de ses locaux et une terrasse. Cet hôtel 3 étoiles possède un bureau d\'excursions et une bagagerie.',
        pricePerNight: 85,
        amenities: ['Wi-Fi gratuit', 'Navette aéroport', 'Chambres non-fumeurs', 'Service d\'étage', 'Réception ouverte 24h/24', 'Terrasse'],
        rooms: [
            { id: 'standard', name: 'Chambre Double Standard', price: 85, capacity: 2, description: '1 grand lit double' },
            { id: 'deluxe', name: 'Chambre Double Deluxe', price: 110, capacity: 2, description: '1 grand lit double, Vue sur la ville' },
            { id: 'family', name: 'Chambre Familiale', price: 150, capacity: 4, description: '2 grands lits doubles' }
        ]
    },
    {
        id: 'ritz-paris',
        name: 'Ritz Paris',
        city: 'Paris',
        country: 'France',
        address: '15 Place Vendôme, 1er arr., 75001 Paris',
        rating: 9.8,
        reviews: 1240,
        images: [
            'https://images.unsplash.com/photo-1541973354762-1144f74902b9?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Le Ritz Paris propose une terrasse ainsi qu\'un spa et centre de bien-être doté d\'une piscine, d\'un sauna et d\'installations de massage.',
        pricePerNight: 1200,
        amenities: ['Piscine', 'Spa', 'Bar', 'Petit-déjeuner exceptionnel'],
        rooms: [
            { id: 'superior', name: 'Chambre Supérieure', price: 1200, capacity: 2, description: '1 très grand lit double' }
        ]
    },
    {
        id: 'marina-bay-sands',
        name: 'Marina Bay Sands',
        city: 'Singapour',
        country: 'Singapour',
        address: '10 Bayfront Avenue, Marina Bay, 018956 Singapour',
        rating: 9.2,
        reviews: 25400,
        images: [
            'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551101918-243224b78832?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Surplombant la baie, l\'emblématique Marina Bay Sands propose la plus grande piscine à débordement sur le toit au monde.',
        pricePerNight: 650,
        amenities: ['Piscine à débordement', 'Casino', '20 restaurants', 'Centre de fitness'],
        rooms: [
            { id: 'premier', name: 'Chambre Premier', price: 650, capacity: 2, description: '1 très grand lit double, Vue sur la ville' }
        ]
    },
    {
        id: 'burj-al-arab',
        name: 'Burj Al Arab Jumeirah',
        city: 'Dubaï',
        country: 'Émirats arabes unis',
        address: 'Jumeirah Beach Road, Dubaï',
        rating: 9.5,
        reviews: 3200,
        images: [
            'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Situé sur sa propre île, le Burj Al Arab Jumeirah propose des suites ultra-luxueuses avec vue sur la mer.',
        pricePerNight: 1500,
        amenities: ['Plage privée', '9 restaurants', 'Spa complet', 'Service de majordome'],
        rooms: [
            { id: 'suite', name: 'Suite Deluxe Une Chambre', price: 1500, capacity: 2, description: '1 très grand lit double' }
        ]
    },
    {
        id: 'bellagio',
        name: 'Bellagio',
        city: 'Las Vegas',
        country: 'États-Unis',
        address: '3600 Las Vegas Boulevard South, Las Vegas, NV 89109',
        rating: 8.8,
        reviews: 15800,
        images: [
            'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550616149-ea271705669f?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Situé derrière les célèbres fontaines du Bellagio, cet hôtel de luxe propose plusieurs options de restauration et des chambres élégantes.',
        pricePerNight: 280,
        amenities: ['Fontaines', 'Casino', 'Spectacles', 'Spa'],
        rooms: [
            { id: 'king', name: 'Chambre King avec Vue sur les Fontaines', price: 320, capacity: 2, description: '1 très grand lit double' }
        ]
    },
    {
        id: 'the-savoy',
        name: 'The Savoy',
        city: 'Londres',
        country: 'Royaume-Uni',
        address: 'Strand, Westminster, Londres, WC2R 0EU',
        rating: 9.4,
        reviews: 2100,
        images: [
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514330965385-bd0042e617d5?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Ouvert en 1889, le célèbre Savoy se trouve sur les rives de la Tamise, à moins de 5 minutes à pied du British Museum.',
        pricePerNight: 700,
        amenities: ['Afternoon Tea', 'Gordon Ramsay Grill', 'Piscine intérieure'],
        rooms: [
            { id: 'superior-london', name: 'Chambre Supérieure Queen', price: 700, capacity: 2, description: '1 lit double queen-size' }
        ]
    },
    {
        id: 'hotel-artemis',
        name: 'Hotel Artemis Amsterdam',
        city: 'Amsterdam',
        country: 'Pays-Bas',
        address: 'John M. Keynesplein 2, Slotervaart, 1066 EP Amsterdam',
        rating: 8.4,
        reviews: 5400,
        images: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Le Fletcher Hotel Amsterdam est un hôtel au design futuriste situé à la jonction des autoroutes A2 et A9.',
        pricePerNight: 120,
        amenities: ['Design moderne', 'Restaurant panoramique', 'Parking'],
        rooms: [
            { id: 'comfort', name: 'Chambre Double Confort', price: 120, capacity: 2, description: '2 lits simples' }
        ]
    },
    {
        id: 'shangri-la-tokyo',
        name: 'Shangri-La Tokyo',
        city: 'Tokyo',
        country: 'Japon',
        address: '100-8283 Tokyo Prefecture, Chiyoda-ku Marunouchi 1-8-3 Trust Tower Main',
        rating: 9.6,
        reviews: 1800,
        images: [
            'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Surplombant le palais impérial, le Shangri-La Tokyo se trouve juste à côté de la gare de Tokyo.',
        pricePerNight: 900,
        amenities: ['Spa CHI', 'Piscine intérieure', 'Vue imprenable'],
        rooms: [
            { id: 'horizon', name: 'Chambre Club Horizon', price: 1100, capacity: 2, description: '1 très grand lit double, Accès au salon Club' }
        ]
    },
    {
        id: 'copacabana-palace',
        name: 'Belmond Copacabana Palace',
        city: 'Rio de Janeiro',
        country: 'Brésil',
        address: 'Avenida Atlantica 1702, Copacabana, Rio de Janeiro',
        rating: 9.4,
        reviews: 2800,
        images: [
            'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'L\'élégant Belmond Copacabana Palace est un hôtel 5 étoiles situé face à la plage de Copacabana.',
        pricePerNight: 450,
        amenities: ['Plage de Copacabana', 'Piscine emblématique', 'Étoile Michelin'],
        rooms: [
            { id: 'beach-view', name: 'Chambre avec Vue sur l\'Océan', price: 600, capacity: 2, description: '1 grand lit double' }
        ]
    },
    {
        id: 'la-mamounia',
        name: 'La Mamounia',
        city: 'Marrakech',
        country: 'Maroc',
        address: 'Avenue Bab Jdid, 40040 Marrakech',
        rating: 9.7,
        reviews: 1500,
        images: [
            'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1024&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=1024&auto=format&fit=crop'
        ],
        description: 'Considéré comme l\'un des plus beaux hôtels du monde, La Mamounia offre une expérience sensorielle unique au cœur de Marrakech.',
        pricePerNight: 800,
        amenities: ['Jardins légendaires', 'Spa de luxe', 'Cuisine marocaine'],
        rooms: [
            { id: 'agdal', name: 'Chambre Agdal', price: 800, capacity: 2, description: '1 grand lit double, Vue sur les jardins' }
        ]
    }
];

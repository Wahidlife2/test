export const products = [
    {
        id: 1,
        name: "Xiaomi 15T Pro",
        tagline: "L'intelligence Leica, la puissance Titanium",
        price: 649.90,
        oldPrice: 799.90,
        image: "/images/xiaomi-15t.png",
        category: "Mobile",
        isNew: true,
        colors: [
            { name: "Titane Noir", value: "#333333" },
            { name: "Titane Argent", value: "#e0e0e0" },
            { name: "Bleu Alpin", value: "#a9c5e8" }
        ],
        storage: ["12 Go + 256 Go", "12 Go + 512 Go"],
        description: "Le Xiaomi 15T repousse les limites de la photographie mobile avec son système optique Leica de nouvelle génération. Doté du processeur Snapdragon 8 Gen 4, d'un écran AMOLED CrystalRes de 144Hz et d'une finition en titane, c'est le summum de la technologie.",
        specs: [
            { label: "Processeur", value: "Snapdragon 8 Gen 4" },
            { label: "Caméra", value: "Leica Summilux 50MP" },
            { label: "Écran", value: "6.67\" CrystalRes AMOLED 144Hz" },
            { label: "Batterie", value: "5000mAh, 120W HyperCharge" }
        ],
        reviews: [
            { user: "Marc D.", rating: 5, comment: "Incroyable smartphone, la photo Leica est bluffante.", date: "2025-12-15" },
            { user: "Sophie L.", rating: 4, comment: "Très rapide, écran magnifique. Un peu cher mais ça vaut le coup.", date: "2025-12-20" }
        ]
    },
    {
        id: 2,
        name: "Xiaomi 14 Ultra",
        tagline: "Lentille de légende",
        price: 1499.90,
        oldPrice: null,
        image: "/images/xiaomi-14-ultra.png",
        category: "Mobile",
        isNew: false,
        colors: [
            { name: "Noir", value: "#000000" },
            { name: "Blanc", value: "#ffffff" }
        ],
        storage: ["16 Go + 512 Go"],
        description: "Un chef-d'œuvre de photographie avec un capteur 1 pouce et une ouverture variable.",
        specs: [
            { label: "Processeur", value: "Snapdragon 8 Gen 3" },
            { label: "Caméra", value: "Quadruple 50MP Leica" },
            { label: "Écran", value: "WQHD+ AMOLED" },
            { label: "Batterie", value: "5000mAh, 90W" }
        ],
        reviews: [
            { user: "Jean P.", rating: 5, comment: "Le meilleur photophone du marché, point final.", date: "2025-11-10" }
        ]
    },
    {
        id: 3,
        name: "Redmi Note 13 Pro+ 5G",
        tagline: "Chaque image est iconique",
        price: 399.90,
        oldPrice: 469.90,
        image: "/images/redmi-note-13.png",
        category: "Mobile",
        isNew: true,
        colors: [
            { name: "Violet Aurore", value: "#d3cce3" },
            { name: "Noir Minuit", value: "#1a1a1a" },
            { name: "Blanc Lunaire", value: "#f5f5f5" }
        ],
        storage: ["8 Go + 256 Go", "12 Go + 512 Go"],
        description: "L'écran incurvé et la caméra 200MP redéfinissent le milieu de gamme.",
        specs: [
            { label: "Processeur", value: "Dimensity 7200-Ultra" },
            { label: "Caméra", value: "200MP OIS" },
            { label: "Écran", value: "1.5K AMOLED 120Hz" },
            { label: "Batterie", value: "5000mAh, 120W" }
        ],
        reviews: [
            { user: "Alice M.", rating: 4, comment: "Excellent rapport qualité prix.", date: "2025-12-01" }
        ]
    },
    {
        id: 4,
        name: "Xiaomi Watch S3",
        tagline: "Changez de style en un clic",
        price: 149.99,
        oldPrice: null,
        image: "/images/xiaomi-watch-s3.png",
        category: "Wearable",
        isNew: true,
        colors: [
            { name: "Noir", value: "#000000" },
            { name: "Argent", value: "#c0c0c0" }
        ],
        storage: ["N/A"],
        description: "Une montre connectée polyvalente avec lunettes interchangeables et HyperOS.",
        specs: [
            { label: "Afficheur", value: "1.43\" AMOLED" },
            { label: "OS", value: "HyperOS" },
            { label: "Autonomie", value: "Jusqu'à 15 jours" },
            { label: "Sport", value: "150+ modes" }
        ],
        reviews: [
            { user: "Kevin B.", rating: 5, comment: "Superbe montre, très fluide.", date: "2025-12-28" }
        ]
    },
    {
        id: 5,
        name: "Xiaomi Pad 6S Pro 12.4",
        tagline: "Productivité sans limites",
        price: 699.90,
        oldPrice: 799.90,
        image: "/images/xiaomi-pad-6s.png",
        category: "Tablette",
        isNew: true,
        colors: [
            { name: "Gris Graphite", value: "#3a3a3a" }
        ],
        storage: ["8 Go + 256 Go", "12 Go + 512 Go"],
        description: "Un écran 3K ultra-clair de 12,4 pouces pour une productivité professionnelle.",
        specs: [
            { label: "Processeur", value: "Snapdragon 8 Gen 2" },
            { label: "Écran", value: "12.4\" 3K 144Hz" },
            { label: "Batterie", value: "10000mAh, 120W" },
            { label: "OS", value: "Xiaomi HyperOS" }
        ],
        reviews: [
            { user: "Julie R.", rating: 4, comment: "L'écran est immense et parfait pour le dessin.", date: "2025-12-12" }
        ]
    },
    {
        id: 6,
        name: "Xiaomi Smart Band 8 Pro",
        tagline: "Grand écran, grandes performances",
        price: 69.99,
        oldPrice: 79.99,
        image: "/images/xiaomi-band-8-pro.png",
        category: "Wearable",
        isNew: true,
        colors: [
            { name: "Gris", value: "#808080" },
            { name: "Noir", value: "#000000" }
        ],
        storage: ["N/A"],
        description: "Un écran AMOLED rectangulaire massif de 1,74 pouces pour tout voir en grand.",
        specs: [
            { label: "Écran", value: "1.74\" AMOLED" },
            { label: "Santé", value: "Suivi SpO2 & FC" },
            { label: "Batterie", value: "14 jours" },
            { label: "Étanchéité", value: "5ATM" }
        ],
        reviews: []
    },
    {
        id: 7,
        name: "Xiaomi Robot Vacuum X20+",
        tagline: "Nettoyage intelligent tout-en-un",
        price: 449.99,
        oldPrice: 499.99,
        image: "https://i02.appmifile.com/53_operator_sg/29/08/2024/7f5eb3e8b0b5f5e8e8e8e8e8e8e8e8e8.png", // Attempting a public CDN link
        category: "Maison Connectée",
        isNew: true,
        colors: [{ name: "Blanc", value: "#ffffff" }],
        storage: ["Standard"],
        description: "Station de base intelligente, lavage de serpillière automatique et séchage à l'air.",
        specs: [
            { label: "Aspiration", value: "6000Pa" },
            { label: "Navigation", value: "LDS Laser" },
            { label: "Batterie", value: "5200mAh" }
        ],
        reviews: [
            { user: "Samir K.", rating: 5, comment: "Il change la vie, plus besoin de passer la serpillère !", date: "2025-12-30" }
        ]
    },
    {
        id: 8,
        name: "Xiaomi Smart Air Purifier 4",
        tagline: "Respirez un air pur et sain",
        price: 169.90,
        oldPrice: 199.90,
        image: "https://i02.appmifile.com/835_operator_fr/23/02/2022/2c6c3e1e2c6c3e1e2c6c3e1e2c6c3e1e.png", // Attempting a public CDN link
        category: "Maison Connectée",
        isNew: false,
        colors: [{ name: "Blanc", value: "#ffffff" }],
        storage: ["Standard"],
        description: "Filtration haute efficacité à 99,97% des particules de 0,3μm.",
        specs: [
            { label: "CADR", value: "400m³/h" },
            { label: "Couverture", value: "Jusqu'à 48m²" },
            { label: "Bruit", value: "32.1dB(A)" }
        ],
        reviews: []
    },
    {
        id: 9,
        name: "Xiaomi TV Max 86\"",
        tagline: "L'expérience cinéma à la maison",
        price: 1299.00,
        oldPrice: 1499.00,
        image: "https://i02.appmifile.com/81_operator_fr/29/08/2024/b7f5eb3e8b0b5f5e8e8e8e8e8e8e8e8e.png",
        category: "TV & Audio",
        isNew: true,
        colors: [{ name: "Gris Sidéral", value: "#2c3e50" }],
        storage: ["120Hz FreeSync"],
        description: "Écran ultra-large 4K, MEMC 120Hz pour un divertissement immersif.",
        specs: [
            { label: "Taille", value: "86 pouces" },
            { label: "Résolution", value: "4K UHD" },
            { label: "Refresh Rate", value: "120Hz" }
        ],
        reviews: [
            { user: "Leo V.", rating: 5, comment: "Immense, magnifique, parfaite pour le gaming.", date: "2025-12-25" }
        ]
    },
    {
        id: 10,
        name: "Xiaomi Electric Scooter 4 Pro",
        tagline: "Plus de puissance, plus de plaisir",
        price: 649.00,
        oldPrice: 799.00,
        image: "https://i02.appmifile.com/345_operator_fr/29/08/2024/7f5eb3e8b0b5f5e8e8e8e8e8e8e8e8e8.png",
        category: "Lifestyle",
        isNew: false,
        colors: [{ name: "Noir", value: "#000000" }],
        storage: ["25km/h"],
        description: "Moteur de 700W, autonomie de 55km, pneus auto-régénérants.",
        specs: [
            { label: "Vitesse", value: "25 km/h" },
            { label: "Autonomie", value: "55 km" },
            { label: "Moteur", value: "700W Max" }
        ],
        reviews: []
    }
];

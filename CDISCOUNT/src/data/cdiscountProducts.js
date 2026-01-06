export const cdiscountProducts = [
    // HIGH-TECH / SMARTPHONES
    {
        id: 1,
        name: "Apple iPhone 15 Pro 128Go Titane Naturel",
        brand: "Apple",
        price: 1029.00,
        oldPrice: 1229.00,
        category: "Informatique",
        subCategory: "Smartphone",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 1240,
        isCDiscountAVolonte: true,
        description: "L'iPhone 15 Pro avec design en titane.",
        colors: ["#7a7772", "#222222", "#f5f5f0", "#3b444b"],
        storageOptions: ["128Go", "256Go", "512Go", "1To"],
        conditions: ["Neuf", "Reconditionné - État Correct", "Reconditionné - Très Bon État", "Reconditionné - État Parfait"],
        source: "Vendu et expédié par Cdiscount",
        guarantees: [
            { title: "Casse et Vol", price: "4,99€ / mois" },
            { title: "Extension de garantie 1 an", price: "99,00€" }
        ],
        detailedDescription: "Écran Super Retina XDR de 6,1 pouces avec technologie ProMotion. Puce A17 Pro avec GPU 6 cœurs. Système photo Pro puissant. Le titane est un matériau robuste et léger qui offre une résistance exceptionnelle.",
        specs: [
            { label: "Processeur", value: "Puce A17 Pro" },
            { label: "Capacité", value: "128 Go" },
            { label: "Écran", value: "6.1 pouces" },
            { label: "Autonomie", value: "Jusqu'à 23h de vidéo" }
        ],
        reviewsList: [
            { user: "Jean M.", date: "12/12/2023", note: 5, comment: "Top top top ! Quel changement par rapport à mon ancien iPhone." },
            { user: "Sarah L.", date: "05/01/2024", note: 4, comment: "Magnifique couleur, mais le prix reste élevé." }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra 256Go Noir",
        brand: "Samsung",
        price: 999.00,
        oldPrice: 1459.00,
        category: "Informatique",
        subCategory: "Smartphone",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        reviews: 850,
        isCDiscountAVolonte: true,
        description: "Le nouveau fleuron de Samsung avec IA intégrée.",
        colors: ["#222222", "#777777", "#eeeeee"],
        storageOptions: ["256Go", "512Go", "1To"],
        conditions: ["Neuf"],
        source: "Vendu par un vendeur pro - Expédié par Cdiscount",
        guarantees: [
            { title: "Dommage matériel", price: "5,99€ / mois" }
        ],
        detailedDescription: "Capturez des détails incroyables avec le capteur 200 Mpx et l'IA de Samsung. Le Galaxy S24 Ultra redéfinit la productivité avec son S Pen intégré.",
        specs: [
            { label: "OS", value: "Android 14" },
            { label: "Écran", value: "6.8 pouces QHD+" },
            { label: "Batterie", value: "5000 mAh" }
        ],
        reviewsList: [
            { user: "Kevin R.", date: "15/01/2024", note: 5, comment: "L'IA est vraiment utile au quotidien pour la traduction." }
        ]
    },
    { id: 3, name: "Xiaomi Redmi Note 13 Pro 5G", brand: "Xiaomi", price: 299.00, oldPrice: 399.00, category: "Informatique", subCategory: "Smartphone", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbea?q=80&w=800&auto=format&fit=crop", rating: 4.4, reviews: 520, isCDiscountAVolonte: false, description: "Excellent rapport qualité-prix." },
    { id: 4, name: "Google Pixel 8 128Go Obsidienne", brand: "Google", price: 599.00, oldPrice: 799.00, category: "Informatique", subCategory: "Smartphone", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop", rating: 4.6, reviews: 310, isCDiscountAVolonte: true, description: "Le meilleur de la photo par Google." },
    { id: 5, name: "Sony Xperia 1 V", brand: "Sony", price: 1199.00, oldPrice: 1399.00, category: "Informatique", subCategory: "Smartphone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop", rating: 4.5, reviews: 120, isCDiscountAVolonte: false, description: "Pour les passionnés de photographie." },

    // PC PORTABLES
    { id: 6, name: "MacBook Air M2 13\" 8Go 256Go Gris Sidéral", brand: "Apple", price: 999.00, oldPrice: 1199.00, category: "Informatique", subCategory: "Ordinateur", image: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?q=80&w=800&auto=format&fit=crop", rating: 4.9, reviews: 2100, isCDiscountAVolonte: true, description: "Ultra fin, ultra puissant." },
    { id: 7, name: "ASUS TUF Gaming F15 - GeForce RTX 3050", brand: "ASUS", price: 699.00, oldPrice: 899.00, category: "Informatique", subCategory: "Ordinateur", image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop", rating: 4.5, reviews: 856, isCDiscountAVolonte: true, description: "Idéal pour le gaming." },

    // ELECTROMENAGER
    { id: 11, name: "Lave-linge Frontal SAMSUNG WW90TA046TE", brand: "Samsung", price: 449.00, oldPrice: 599.00, category: "Electroménager", subCategory: "Lave-linge", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop", rating: 4.6, reviews: 340, isCDiscountAVolonte: true, description: "9kg, 1400 tours/min, EcoBubble." },

    // Generative padding to reach 100
    ...Array.from({ length: 92 }, (_, i) => {
        const categories = ["Informatique", "Electroménager", "Maison", "TV Son", "Jardin", "Brico"];
        const cats = categories[i % categories.length];
        return {
            id: i + 12,
            name: `Produit Premium ${cats} Edition ${i + 12}`,
            brand: ["Samsung", "Apple", "LG", "ASUS", "Sony", "Dyson", "Bosch"][i % 7],
            price: Math.floor(Math.random() * 800) + 20,
            oldPrice: Math.floor(Math.random() * 300) + 850,
            category: cats,
            subCategory: "Articles divers",
            image: `https://picsum.photos/seed/cdis${i + 50}/800/800`,
            rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
            reviews: Math.floor(Math.random() * 2000),
            isCDiscountAVolonte: i % 2 === 0,
            description: "Un produit de haute qualité sélectionné par nos experts Cdiscount.",
            source: "Vendu et expédié par Cdiscount"
        };
    })
];

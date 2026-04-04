const fs = require('fs');

async function main() {
    try {
        const res = await fetch('https://www.coquesdeluxe.com/products.json?limit=40');
        const data = await res.json();

        let products = [];
        data.products.forEach(p => {
            // Category can be inferred from tags or product type
            let category = p.product_type || "Coques";
            if (!category) {
                if (p.tags && p.tags.length > 0) category = p.tags[0];
                else category = "Accessoires";
            }
            // Capitalize category
            category = category.charAt(0).toUpperCase() + category.slice(1);

            // Image
            let image = p.images && p.images.length > 0 ? p.images[0].src : "";
            if (!image) return;

            // Process price from variants
            let price = p.variants && p.variants.length > 0 ? parseFloat(p.variants[0].price) : 29.99;
            let comparePrice = p.variants && p.variants.length > 0 ? parseFloat(p.variants[0].compare_at_price) : null;
            if (isNaN(comparePrice)) comparePrice = null;

            products.push({
                id: p.id,
                name: p.title,
                brand: "COQUESDELUXE",
                price: price,
                oldPrice: comparePrice || (price + 10),
                category: category,
                subCategory: "Coque",
                image: image,
                colors: ["#000000", "#FFFFFF", "transparent"],
                sizes: ["Standard"],
                description: "La meilleure protection pour votre téléphone.",
                rating: 4.8 + Math.random() * 0.2, // Fake 4.8 to 5.0
                reviews: Math.floor(Math.random() * 500) + 50
            });
        });

        // Take 30 products max
        products = products.slice(0, 30);

        const content = `export const coquesdeluxeProducts = ${JSON.stringify(products, null, 4)};\n`;
        const path = '/Users/amirwahid/Documents/DEV AI/test ecommerce/COQUESDELUXE/src/data/coquesdeluxeProducts.js';

        fs.writeFileSync(path, content, 'utf8');
        console.log(`Saved ${products.length} products to ${path}`);
    } catch (e) {
        console.error("Error fetching data:", e);
    }
}

main();

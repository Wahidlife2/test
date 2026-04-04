const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.coquesdeluxe.com';

async function getCategories() {
    try {
        console.log('Fetching main page...');
        const { data } = await axios.get(BASE_URL);
        const $ = cheerio.load(data);
        const categoryLinks = [];
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.startsWith('/collections/') && !categoryLinks.includes(href)) {
                categoryLinks.push(href);
            }
        });
        return categoryLinks;
    } catch (e) {
        console.error('Error fetching categories:', e.message);
        return [];
    }
}

async function scrapeCategory(url, maxItems) {
    try {
        console.log(`Scraping category: ${url}`);
        const { data } = await axios.get(BASE_URL + url);
        const $ = cheerio.load(data);
        const products = [];

        $('.grid-product__content, .grid-product, .product-card, .product-item, .card, .product-block').each((i, el) => {
            if (products.length >= maxItems) return;

            // Try different common selectors for title and image
            let title = $(el).find('.grid-product__title, .product-card__title, .product-title, .title, h3, h2').text().trim();
            let image = $(el).find('.grid-product__image, .grid__image img, .lazyload, img').attr('data-src') || $(el).find('img').attr('src');
            let priceText = $(el).find('.grid-product__price, .price, .money').text().replace(/[^0-9,]/g, '').replace(',', '.');
            let price = parseFloat(priceText) || 29.99;

            if (title && image) {
                if (image.startsWith('//')) {
                    image = 'https:' + image;
                } else if (image.startsWith('/')) {
                    image = BASE_URL + image;
                }

                let categoryMatch = url.split('/').pop().replace(/-/g, ' ');
                categoryMatch = categoryMatch.charAt(0).toUpperCase() + categoryMatch.slice(1);

                products.push({
                    id: Math.floor(Math.random() * 1000000),
                    name: title,
                    brand: "COQUESDELUXE",
                    price: price,
                    oldPrice: price + 10,
                    category: categoryMatch,
                    subCategory: "Coque",
                    image: image,
                    colors: ["#000000", "#FFFFFF", "transparent"],
                    sizes: ["Standard"],
                    description: "Coque de luxe ultra fine de haute qualité.",
                    rating: 4.8 + Math.random() * 0.2,
                    reviews: Math.floor(Math.random() * 500) + 50
                });
            }
        });
        return products;
    } catch (e) {
        console.error(`Error scraping ${url}:`, e.message);
        return [];
    }
}

async function main() {
    let allProducts = [];
    let categories = await getCategories();
    // if no collections found via links, push some hardcoded known standard shopify ones
    if (categories.length === 0) {
        categories = ['/collections/all', '/collections/iphone-15', '/collections/iphone-14', '/collections/samsung'];
    }

    // limit categories
    categories = categories.slice(0, 15);

    for (const catUrl of categories) {
        const prods = await scrapeCategory(catUrl, 3); // 2-3 per category
        allProducts = allProducts.concat(prods);
        if (allProducts.length >= 30) break;
    }

    // Fallback if not enough
    if (allProducts.length < 30) {
        console.log('Not enough products, scraping homepage directly...');
        const homeProds = await scrapeCategory('/', 30 - allProducts.length);
        allProducts = allProducts.concat(homeProds);
    }

    // Eliminate duplicates by Name
    const unique = [];
    const names = new Set();
    for (const p of allProducts) {
        if (!names.has(p.name)) {
            names.add(p.name);
            unique.push(p);
        }
    }

    console.log(`Scraped ${unique.length} unique products.`);

    const outputPath = path.join(__dirname, 'COQUESDELUXE/src/data/coquesdeluxeProducts.js');
    const content = `export const coquesdeluxeProducts = ${JSON.stringify(unique, null, 4)};\n`;
    fs.writeFileSync(outputPath, content, 'utf8');
    console.log('Saved to', outputPath);
}

main();

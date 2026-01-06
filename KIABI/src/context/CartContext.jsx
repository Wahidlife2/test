import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const addToCart = (product, size, color) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(
                item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
            );

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id && item.selectedSize === size && item.selectedColor === color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, selectedSize: size, selectedColor: color, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId, size, color) => {
        setCart(prevCart => prevCart.filter(item =>
            !(item.id === itemId && item.selectedSize === size && item.selectedColor === color)
        ));
    };

    const updateQuantity = (itemId, size, color, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === itemId && item.selectedSize === size && item.selectedColor === color) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            searchQuery,
            setSearchQuery
        }}>
            {children}
        </CartContext.Provider>
    );
};

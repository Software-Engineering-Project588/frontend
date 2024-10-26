// WishListContext.js
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (collegeData) => {
        setWishlist((prevWishlist) => [...prevWishlist, collegeData]);
    };

    const removeFromWishlist = (itemId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== itemId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

import React, { useState, useContext, createContext } from 'react'
const Context = createContext();


const Provider = ({ children }) => {
    const [wishlist, setWishlist] = useState(0);
    return (
        <Context.Provider
            value={{
                wishlist,
                setWishlist
            }}
        >
            {children }
        </Context.Provider>
    )
}

export default Provider

export const useStateValues = () => {
    return useContext(Context);
}
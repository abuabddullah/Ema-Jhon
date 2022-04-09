import { useEffect, useState } from "react";
import { getStoredCart } from "../../../utilities/fakedb";

const useCarts = (products) => {
    const [carts, setCarts] = useState([]);
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCarts(savedCart);
    }, [products])
    return [carts, setCarts];
    
};

export default useCarts;
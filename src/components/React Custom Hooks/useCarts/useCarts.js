import { useEffect, useState } from "react";
import { getStoredCart } from "../../../utilities/fakedb";

const useCarts = () => {
    const [carts, setCarts] = useState([]);

    // useEffect( () =>{
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product._id === id);
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCarts(savedCart);
    // }, [products])


    useEffect(() => {
        const storedCart = getStoredCart();
        const keys = Object.keys(storedCart);
        const savedCart = [];


        fetch(`https://emajhon-ecommerce-shopping.herokuapp.com/productByKeys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(keys),
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);


                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCarts(savedCart);
            })
    }, [])

    return [carts, setCarts];

};

export default useCarts;
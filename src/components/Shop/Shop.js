import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import useCarts from '../React Custom Hooks/useCarts/useCarts';
import useProducts from '../React Custom Hooks/useProducts/useProducts';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    // useEffect( () =>{
    //     fetch('products.json')
    //     .then(res=> res.json())
    //     .then(data =>setProducts(data))
    // }, []);
    const [products, setProducts] = useProducts("products.json");



    // const [cart, setCart] = useState([]);
    // useEffect( () =>{
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product.id === id);
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])
    const [cart, setCart] = useCarts(products);



    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="">
                <Cart cart={cart}>
                        <Link to="/orders">

                            <button class="px-4 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Go orders
                            </button>
                        </Link>
                        </Cart>
            </div>
        </div>
    );
};

export default Shop;
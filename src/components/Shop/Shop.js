// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { addToDb, getStoredCart } from '../../utilities/fakedb';
// import Cart from '../Cart/Cart';
// import Product from '../Product/Product';
// import useCarts from '../React Custom Hooks/useCarts/useCarts';
// import useProducts from '../React Custom Hooks/useProducts/useProducts';
// import './Shop.css';

// const Shop = () => {
//     // const [products, setProducts] = useState([]);
//     // useEffect( () =>{
//     //     fetch('products.json')
//     //     .then(res=> res.json())
//     //     .then(data =>setProducts(data))
//     // }, []);
//     const [products, setProducts] = useProducts("https://emajhon-ecommerce-shopping.herokuapp.com/products");



//     // const [cart, setCart] = useState([]);
//     // useEffect( () =>{
//     //     const storedCart = getStoredCart();
//     //     const savedCart = [];
//     //     for(const id in storedCart){
//     //         const addedProduct = products.find(product => product._id === id);
//     //         if(addedProduct){
//     //             const quantity = storedCart[id];
//     //             addedProduct.quantity = quantity;
//     //             savedCart.push(addedProduct);
//     //         }
//     //     }
//     //     setCart(savedCart);
//     // }, [products])
//     const [cart, setCart] = useCarts(products);



//     const handleAddToCart = (selectedProduct) => {
//         // console.log(selectedProduct);
//         let newCart = [];
//         const exists = cart.find(product => product._id === selectedProduct._id);
//         if (!exists) {
//             selectedProduct.quantity = 1;
//             newCart = [...cart, selectedProduct];
//         }
//         else {
//             const rest = cart.filter(product => product._id !== selectedProduct._id);
//             exists.quantity = exists.quantity + 1;
//             newCart = [...rest, exists];
//         }

//         setCart(newCart);
//         addToDb(selectedProduct._id);
//     }

//     return (
//         <div className='shop-container'>
//             <div className="products-container">
//                 {
//                     products.map(product => <Product
//                         key={product._id}
//                         product={product}
//                         handleAddToCart={handleAddToCart}
//                     ></Product>)
//                 }
//             </div>
//             <div className="">
//                 <Cart cart={cart}>
//                         <Link to="/orders">

//                             <button className="px-4 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
//                             Go orders
//                             </button>
//                         </Link>
//                         </Cart>
//             </div>
//         </div>
//     );
// };

// export default Shop;




/*****************************
        module 67-ema-john.src.components.Shop.Shop.js
**************************** */



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import useCarts from '../React Custom Hooks/useCarts/useCarts';
import useProducts from '../React Custom Hooks/useProducts/useProducts';
import './Shop.css';

const Shop = () => {    

    const [noOfPages, setNoOfPages] = useState(0);
    const [perPageProducts, setPerPageProducts] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://emajhon-ecommerce-shopping.herokuapp.com/products?currentPage=${currentPage}&perPageProducts=${perPageProducts}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [currentPage,perPageProducts]);

    // const [cart, setCart] = useCarts(products);
    const [cart, setCart] = useCarts();




    useEffect(() => {
        const url = `https://emajhon-ecommerce-shopping.herokuapp.com/noOfProducts`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const noOfProducts = data.count;
                const countOfPages = Math.ceil(noOfProducts / perPageProducts);
                setNoOfPages(countOfPages);

            });
    }, [perPageProducts]);


    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="">
                    <Cart cart={cart}>
                        <Link to="/orders">

                            <button className="px-4 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Go orders
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
            
            <div className='pagination'>
                    {
                        [...Array(noOfPages).keys()].map((pNum,index) => <span
                        key={index}
                        className={currentPage === pNum ? "selected" : ""}
                        onClick={() => setCurrentPage(pNum)}
                        >{pNum + 1}</span>)
                    }
                    <select onChange={e => setPerPageProducts(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                </div>
        </>
    );
};

export default Shop;
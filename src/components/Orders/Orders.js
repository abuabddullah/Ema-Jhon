import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ItemsInCart from '../ItemsInCart/ItemsInCart';
import useCarts from '../React Custom Hooks/useCarts/useCarts';
import useProducts from '../React Custom Hooks/useProducts/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts("products.json")
    const [cart, setCart] = useCarts(products);

    const deleteItem = product => {
        // console.log(product);
        let rests = cart.filter(pd => pd.id !== product.id)
        // console.log(rests);
        setCart(rests)
        removeFromDb(product.id)

    }

    return (
        <div>
            <div className='grid grid-cols-2 '>
                <div>
                    <h1 className="text-4xl my-20">
                        {
                            cart.map(product => <ItemsInCart
                                key={product.id}
                                product={product}
                                deleteItem={deleteItem} />)
                        }
                    </h1>
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to="/shop">

                            <button class="px-4 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Go Shop
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;
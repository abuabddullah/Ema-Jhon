import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsInCart = ({product,deleteItem}) => {
    // console.log(product);
    const {name, img, price, category, ratings} = product;

const navigate = useNavigate();
const seeDetails = () => {
    let path = `/details/${name}`;
    navigate(path);
}

    return (

        <div className="my-4 border flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover">
                <img src={img} alt="" className='max-w-full h-full object-cover'/>
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{category}</p>

                <div className="flex mt-2 flex items-center">
                    <span className='text-2xl font-bold mr-1'>{ratings}</span>
                    <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    
                </div>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={seeDetails}>Details</button>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={() => deleteItem(product)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ItemsInCart;
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user, loading, error] = useAuthState(auth);
    // get the elemetn from the DOM
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    

    const handleNameOnBlur = (e) => {
        setName(e.target.value);
    }

    const handleEmailOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneOnBlur = (e) => {
        setPhone(e.target.value);
    }

    const handleAddressOnBlur = (e) => {
        setAddress(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        

    }


    return (
        <div className="container mx-auto p-20">

            <h1 className="text-4xl font-bold mb-5 text-center text-blue-700">Shipping Info </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input onBlur={handleNameOnBlur} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input onBlur={handleEmailOnBlur} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" value={user?.email} required readOnly />
                </div>
                <div className="mb-6">
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Phone</label>
                    <input onBlur={handlePhoneOnBlur} type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Your address</label>
                    <input onBlur={handleAddressOnBlur} type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                
                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shipping</button>
            </form>
        </div>
    );
};

export default Shipping;
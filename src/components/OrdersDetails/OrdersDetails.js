import React from 'react';
import { Outlet } from 'react-router-dom';

const OrdersDetails = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold my-20 text-center">Orders Details</h1>
            <Outlet/>
        </div>
    );
};

export default OrdersDetails;
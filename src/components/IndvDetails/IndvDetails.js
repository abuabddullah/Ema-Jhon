import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../React Custom Hooks/useProducts/useProducts';

const IndvDetails = () => {
    const {name} = useParams();
    
    return (
        <div className='py-20 text-center'>
            {name}
        </div>
    );
};

export default IndvDetails;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log('book', booking);
    return (
        <div>

        </div>
    );
};

export default Payment;
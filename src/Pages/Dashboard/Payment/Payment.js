import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, slot, appointmentDate } = booking;
    return (
        <div>
            <h3 className='text-3xl'>Payment For {treatment}</h3>
            <p className='text-3xl'>Please pay ${price} for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;
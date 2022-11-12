import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppiontments from '../AvailableAppiontments/AvailableAppiontments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppiontments
                selectedDate={selectedDate}
            ></AvailableAppiontments>
        </div>
    );
};

export default Appointment;
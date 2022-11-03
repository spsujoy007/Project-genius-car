import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default Orders;
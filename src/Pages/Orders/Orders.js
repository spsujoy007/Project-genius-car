import React, {useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Order succesfully deleted');

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders ] = useState([]);
    const handleDelete = id => {
        const procced = window.confirm("Are you sure, you want to delete your product?");
        if(procced){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    notify();
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining)
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify({status: "Approved"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status ="Approved";
                const newOrders = [...remaining, approving];
                setOrders(newOrders)
            }
        })
    }
   
    useEffect( () =>{
        if(user?.email){
            fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        }
    } , [user?.email])
    return (
        <div className="overflow-x-auto w-full">
            
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Product</th>
        <th>Email</th>
        <th>Massage</th>
      </tr>
    </thead>
    <tbody>
      
      {
        orders.map(order => <OrderRow 
            key={order._id} 
            order={order} 
            handleDelete={handleDelete}
            handleStatusUpdate={handleStatusUpdate}
            ></OrderRow>)
      }
      
    </tbody>
    
    <Toaster/>
    
  </table>
</div>
    );
};

export default Orders;
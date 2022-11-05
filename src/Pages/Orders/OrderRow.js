import React from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    const { _id, serviceName, customer, img, price, email, phone, status} = order;

    
    return (
        <tr>
        <th>
          <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-sm">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-16">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-warning badge-sm">${price}</span>
        </td>
        <td title={email}>
            {email.length > 18 ? <>{email.slice(0, 18)}...</> : email}
        </td>
        <th>
        <div >
          <button 
          onClick={() => handleStatusUpdate(_id)} 
          className="btn btn-ghost btn-xs">{status ? status : "Pending !"}</button>
        </div>
        </th>
      </tr>
    );
};

export default OrderRow;
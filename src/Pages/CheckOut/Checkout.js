import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Order Placed');
const notifyError = () => toast.error('Phone number should be 11 digit');
 
const CheckOut = () => {
    const { _id, title, img, price} = useLoaderData();
    const {user} = useContext(AuthContext)
    // console.log(user)

    const handlePlaceholder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email || 'unregisterd';
        const massage = form.massage.value;
        const phone = form.phone.value

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            price,
            email,
            phone,
            massage
        }

        
            // fetch('http://localhost:5000/orders', {
            //     method: 'POST',
            //     header: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(order)
            // })
            // .then(res => res.json())
            // .then(data => console.log(data))
            // .catch(err => console.error(err))
            
            
            if(phone.length === 11){
                fetch('http://localhost:5000/orders', {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((data) => {
                    if(data.acknowledged){
                        console.log(data)
                        notify()
                        form.reset()
                    }
                });
            }
            
            else{
                // alert('Phone number should be 11 digit')
                notifyError()
            }
       
    }

    return (
        <div>
            <div className='mb-3'>
            <div className="card card-side bg-base-100 shadow-xl p-3">
            <figure><img src={img} className="w-1/3 rounded-xl" alt=""/></figure>
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-red-400 font-bold'>Price: ${price}</p>
    
        </div>
</div>
            </div>
            <br />
            <form onSubmit={handlePlaceholder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='firstname' type="text" placeholder="First name" className="input input-bordered w-full" />
                    <input name='lastname' type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full" required/>
                    <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="Your email" className="text-blue-400 input input-bordered w-full" />
                </div>
                    <textarea name='massage' className="textarea textarea-bordered w-full mt-5" placeholder="Bio"></textarea>
                    <input type="submit" className='btn bg-blue-500 border-0 w-full' value="Place order" />
                    <Toaster />
            </form>
        </div>
    );
};

export default CheckOut;
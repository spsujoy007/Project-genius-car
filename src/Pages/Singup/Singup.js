import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const notify = () => toast.success('Signup completed');

const Singup = () => {
  const {createUser, signInGoogle} = useContext(AuthContext)

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          notify()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="hero w-full my-0">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl py-3 font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="your name" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered"  required/>
          
        </div>
        <div className="form-control mt-6">
            <input className="btn bg-red-500 border-0" type="submit" value="sign up" />
        </div>
      </form>
      <p className='text-center py-3'>Already have an account? <Link className='font-bold text-red-600' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default Singup;
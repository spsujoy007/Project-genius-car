import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const notify = () => toast.success('Login successful');

const Login = () => {
    const {login} = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathName || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password  = form.password.value;
        
        
        login(email, password)
        .then(result => {
          const user = result.user;

          const currentUser = {
            email: user.email
          }
          console.log(currentUser)

          // get jwt token 
          fetch('http://localhost:5000/jwt', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            // local storage is the easiest but not secure
            localStorage.setItem('genius-token', data.token)
          })

          setSuccess(true);
          notify();
          setError('')
          navigate(from, {replace: true})
          form.reset();
        })
        .catch(err => {
          setError(err.message)
        })
      }

    return (
        <div className="hero w-full my-5">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl py-3 font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        
        {success && <p className='text-success'>Login successful</p>}
        <p className='text-warning'>{error && "Email or Password is not matched!"}</p>

        <div className="form-control mt-6">
            <input className="btn bg-red-500 border-0" type="submit" value="login" />
        </div>
      </form>
      <p className='text-center py-3'>New to Genius car? <Link className='font-bold text-red-600' to='/signup'>Sign up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;
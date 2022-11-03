import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Logout successful');

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () =>{
    logout()
    .then(() => {
      notify()
    })
    .catch(error => console.error(error))
  }
    const menuList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link >About</Link></li>
        <li><Link >Services</Link></li>
        <li><Link >Blog</Link></li>
        <li><Link >About</Link></li>
        {
          user?.uid ? <li><button onClick={handleLogout}>Log out</button></li> : <li><Link to='/login'>Login</Link></li>
        }
        <Toaster/>
    </>

    return (
        <div className="navbar bg-base-100 py-12 px-10 h-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuList}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img src={logo} className="w-14" alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuList}
    </ul>
  </div>
  <div className="navbar-end">
    <Link>
        <button className="btn btn-outline btn-warning">Appointment</button>
    </Link>
  </div>
</div>
    );
};

export default Header;
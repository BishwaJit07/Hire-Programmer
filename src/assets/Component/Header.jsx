import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
          
<nav className="navbar bg-base-100 mx-5">
  <div className="navbar-start  ">
  <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost lg:none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/statistics">Statistics</Link></li>
        <li tabIndex={0}>
          <Link to='/AppliedJobs' className="justify-between">
          Apply For Jobs
            
          </Link>
          
        </li>
        <li><Link to='/Blog'>Blog</Link></li>
      </ul>
    </div>

    <Link to='/' className=" font-bold text-xl text-accent	">Hire Programmer</Link>

    
  </div>
 
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-3">
    <li><Link to='/' className='mx-2 hover:'>Home</Link></li>
    <li><Link to="/statistics" className='mx-2 '>Statistics</Link></li>
        <li tabIndex={0}>
          <Link to='/AppliedJobs' className="justify-between">
          Apply For Jobs
            
          </Link>
          
        </li>
        <li><Link to='/Blog' className='mx-2'>Blog</Link></li>
       
    </ul>
  </div>
  </div>
  <div className="navbar-end mr-5">
    <a className="btn">Get started</a>
  </div>
</nav>
    );
};

export default Header;
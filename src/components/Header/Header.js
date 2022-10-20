import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => { console.error(error) })
  }
  return (
    <div>
      <div className="navbar bg-base-300">
        <Link className="btn btn-ghost normal-case text-xl" to='/'>AuthenTic Pagla</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        <button onClick={handleSignOut} className="btn btn-ghost gap-2 normal-case text-xl">
          SignOut
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
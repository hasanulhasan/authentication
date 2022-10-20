import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <div className="navbar bg-base-300">
        <Link className="btn btn-ghost normal-case text-xl" to='/'>AuthenTic Pagla</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {user?.displayName && <span>Welcome, {user.displayName}</span>}
      </div>
    </div>
  );
};

export default Header;
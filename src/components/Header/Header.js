import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Header;
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // <progress className="progress w-56"></progress>
    <div>This is nothing but a loading</div>
  }

  if (user && user.uid) {
    return children
  }

  return <Navigate to='/login'></Navigate>;
};

export default PrivateRouter;
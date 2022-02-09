import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({children}) => {
    const {user, isLoading} = useAuth();
    let location = useLocation();

    if(isLoading){
      return <Spinner animation="border" variant="warning" />
    }

    if (!user.email) {
       
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return (
        <div>
            {children}
        </div>
    );
};

export default RequireAuth;
/* 

    function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

*/
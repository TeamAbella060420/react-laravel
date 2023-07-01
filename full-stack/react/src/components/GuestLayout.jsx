import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function GuestLayout() {
    const {token} = useStateContext();
    if (token) {
        return < Navigate to="/users" />
    }
  return (
    <div>
      <div id=''>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
        <Outlet />
      </div>
    </div>
  );
}

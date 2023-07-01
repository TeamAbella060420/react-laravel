import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {

  const onSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='login-signup-form animated fadeInDown'>
    <div className="form">
      <h1 className='title'>Signup for free</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Full Name'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Confirm Password'/>
        <button className='btn btn-block'>Sign up</button>
        <p className='message'>
          Already Registered? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

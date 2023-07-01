import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name : nameRef.current.vale,
      email : emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value
    }
  }


  return (
    <div className='login-signup-form animated fadeInDown'>
    <div className="form">
      <h1 className='title'>Signup for free</h1>
      <form onSubmit={onSubmit}>
        <input ref={nameRef} type="text" placeholder='Full Name'/>
        <input ref={emailRef} type="email" placeholder='Email'/>
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <input ref={passwordConfirmationRef} type="password" placeholder='Confirm Password'/>
        <button className='btn btn-block'>Sign up</button>
        <p className='message'>
          Already Registered? <Link to='/login'>Sign in</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

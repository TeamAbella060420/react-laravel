import React from 'react'

export default function Login() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button className='btn btn-block'>Login</button>
        </form>
      </div>
    </div>
  )
}

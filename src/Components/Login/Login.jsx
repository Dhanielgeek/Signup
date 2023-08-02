import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'





const Login = () => {
  return (
    <div className='loginHolder'>
        <div className="img_box"></div>
        <div className="login_hold">
        <form action="#">
      <h2>Login</h2>
      <label for="username">Email:</label>
      <input type="text" id="username" name="email" required placeholder='example@gmail.com'/>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required placeholder='*********'/>
      <Link class="forgot-password" to={'./'}>Forgot Password?</Link>
      <button type="submit">Login</button>
      <p class="signup-link">Don't have an account?<Link to={'/signup'} className='INK╝'>Sign Up</Link></p>
      <button>Explore</button>
      </form>
    </div>
    </div>
  )
}

export default Login
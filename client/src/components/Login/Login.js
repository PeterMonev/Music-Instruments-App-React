import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../Login/Login.css';
import * as userService from '../../services/userServices';

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
   
  async function onSubmit(event){
    event.preventDefault();
    const {email, password} = Object.fromEntries(new FormData(event.target));

    try {
      const user = await userService.login(email, password);
      navigate('/catalog');
 
    } catch (error) {
      console.log(error);
      setError('Email or Password are incorrect!');
    }
  }

  return (
    <section className='login-section'>
      <div className="login-container">
      <form onSubmit={onSubmit}>
        <h1>Login</h1>

        <label className="login-label" htmlFor="email">Email:</label>
        <input className="login-input" type="email" name="email" placeholder="peter@gmail.com" />
    

        <label className="login-label" htmlFor="login-pass">Password:</label>
        <input className="login-input" type="password" name="password" placeholder="******" />

        {error && <p className="p-error"  >{error}</p>}
        <input className='submit-login' type="submit" value="Login" />

        <p className='login-container-p'>
          If you don't have account? Click <a href="/register">here!</a>
        </p>
      </form>
      </div>
    </section>
  );
};

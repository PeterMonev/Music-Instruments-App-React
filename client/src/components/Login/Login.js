import { useNavigate } from 'react-router-dom';

import '../Login/Login.css';
import * as userService from '../../services/userServices';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
   
  async function onSubmit(event){
    event.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(event.target));

    try {
      const user = await userService.login(email, password);
      navigate('/catalog');

    } catch (error) {
      setErrors('Email or Password are incorrect');
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

        <input className='submit-login' type="submit" value="Login" />

        <p className='login-container-p'>
          If you don't have account? Click <a href="/register">here!</a>
        </p>
      </form>
      </div>
    </section>
  );
};

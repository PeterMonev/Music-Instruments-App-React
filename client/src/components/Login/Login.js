import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import { AuthContext } from '../../hooks/authContext';
import '../Login/Login.css';
import * as userService from '../../services/userServices';
import CircleLoader from 'react-spinners/CircleLoader';

export const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
   
  async function onSubmit(event){
    event.preventDefault();
    const {email, password} = Object.fromEntries(new FormData(event.target));

    try {
      setLoading(true);

      const user = await userService.login(email, password);
      setAuth(user);
      setLoading(false);

      navigate('/catalog');
    } catch (error) {
      setLoading(false);
      setError('Email or Password are incorrect!');
    }
  }

  return (
    <section className='login-section'>
      <div className="login-container">
        
      <form onSubmit={onSubmit}>
        <h1>Login</h1>

        <label className="login-label" htmlFor="email">Email:</label>
        <input className="login-input" type="email" name="email" data-testid='email' placeholder="peter@gmail.com" />
    

        <label className="login-label" htmlFor="login-pass">Password:</label>
        <input className="login-input" type="password" name="password" data-testid='password' placeholder="******" />

        {error && <p className="p-login-error" >{error}</p>}
        {loading ?
        <CircleLoader color="#DAA520" size={100} />
        :
        <input className='submit-login' data-testid='loginBtn' type="submit" value="Login" />
        }
        <p className='login-container-p'>
          If you don't have account? Click <a data-testid='link' href="/register">here!</a>
        </p>
      </form>
      </div>
    </section>
  );
};

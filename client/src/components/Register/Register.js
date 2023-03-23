import { useState } from 'react';

import * as userServices from '../../services/userServices';
import { inputValidator } from '../../utils/validations'
import '../Register/Register.css'

export const Register = () => {
  const [errors, setErrors] = useState({});
  const [userData, setuserData] = useState({
     email: '',
     fullName: '',
     phone: '',
     password: '',
     repeatPassword: '',
  });

  function onChange(event) {
    setuserData(state => ({...state, [event.target.name]: event.target.value}));
  }

  function lengthValidator(event){
    const tagName = event.target.name;
   
    inputValidator(userData, tagName, setErrors);
    console.log(errors);
    
  }
   
  async function onSubmit(event) {
    event.preventDefault();

    const {email ,fullName ,phone, password } = userData;
    const user = await userServices.register(email, fullName, phone, password);
    console.log(user);
  }



  return (

    <section className="register-section">
    <div className="register-container">  
   
      <form onSubmit={onSubmit} className="register-form">
        <h1>Register</h1>

        <label className="register-label" htmlFor="email">Email:</label>
        <input onChange={onChange} value={userData.email} onBlur={lengthValidator} className="input-field" type="email"id="email" name="email" placeholder="peter@email.com"/>

        <label className="register-label" htmlFor="fullName">Full Name:</label>
        <input onChange={onChange} value={userData.fullName} onBlur={lengthValidator} className="input-field" type="fullName" name="fullName" placeholder="Peter Johnson" />

        <label className="register-label" htmlFor="phone">Phone Number:</label>
        <input onChange={onChange} value={userData.phone} onBlur={lengthValidator} className="input-field" type="phone" name="phone" placeholder="0123456789" />

        <label className="register-label" htmlFor="password">Password:</label>
        <input onChange={onChange} value={userData.password} onBlur={lengthValidator} className="input-field" type="password" name="password" placeholder="*******" />

        <label className="register-label" htmlFor="repeatPassword">Confirm Password:</label>
        <input onChange={onChange} value={userData.repeatPassword} onBlur={lengthValidator} className="input-field" type="password" name="repeatPassword" placeholder="*******" />

        <input className='register-submit' type="submit" value="Register" />

        <p>    
            If you already have account? Click <a href="/login">here!</a>
        </p>
      </form>
    </div>
    </section>
  );
};

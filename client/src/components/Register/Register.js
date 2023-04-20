import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../hooks/authContext';
import * as userServices from '../../services/userServices';
import { inputValidator, passwordMatch, emailValidator } from '../../utils/validations'
import '../Register/Register.css'
import CircleLoader from 'react-spinners/CircleLoader';

export const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
      email: 'Please, enter you Email.',
      fullName: 'Please, enter you Full Name.',
      phone: 'Please, enter your Phone Number.',
      password: 'Please, enter your Password.'
  });
  const [disableButton, setDisableButton] = useState(false);
  const [ disableButtonStyle, setDisableButtonStlye] = useState('register-submit-disable');
  const { setAuth } = useContext(AuthContext);
  const [userData, setuserData] = useState({
     email: '',
     fullName: '',
     phone: '',
     password: '',
     repeatPassword: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(Object.values(errors).some(error => error !== null )){
        setDisableButton(true);
        setDisableButtonStlye('register-submit-disable');
     
    } else {
         setDisableButton(false);
         setDisableButtonStlye('register-submit-enable');
    }
  }, [errors])

  function onChange(event) {
    setuserData(state => ({...state, [event.target.name]: event.target.value}));
  }

  // Validations
  function emailValidation(){
    emailValidator(userData, setErrors);

  };

  function lengthValidation(event){
    const tagName = event.target.name;
    inputValidator(userData, tagName, 4, setErrors, 30);    
  };

  function passwordMatchValidation(){
    passwordMatch(userData, setErrors);
  };
   
  async function onSubmit(event) {
    event.preventDefault();

  try {
    setLoading(true);
    const {email ,fullName ,phone, password } = userData;
    const user = await userServices.register(email, fullName, phone, password);
    setAuth(user);
    setLoading(false);
    navigate('/catalog')
  } catch(error) {
   setLoading(false);
   
   if(error.message.includes('Email')){
    setErrors((errors) => ({
      ...errors, email: `${error.message}`
    }));
   }
   
    }
  }

  return (

    <section className="register-section">
    <div className="register-container">  
   
      
        <form onSubmit={onSubmit} className="register-form">
        <h1>Register</h1>

        <label className="register-label" htmlFor="email">Email:</label>
        <input onChange={onChange} value={userData.email} onBlur={emailValidation} className="input-field" type="email"id="email" name="email" placeholder="peter@email.com"/>
        {errors.email && <p className="p-error" style={{color: 'red'}}>{errors.email}</p>}

        <label className="register-label" htmlFor="fullName">Full Name:</label>
        <input onChange={onChange} value={userData.fullName} onBlur={lengthValidation} className="input-field" type="fullName" name="fullName" placeholder="Peter Johnson" />
        {errors.fullName && <p className="p-error" style={{color: 'red'}} >{errors.fullName}</p>}

        <label className="register-label" htmlFor="phone">Phone Number:</label>
        <input onChange={onChange} value={userData.phone} onBlur={lengthValidation} className="input-field" type="phone" name="phone" placeholder="0123456789" />
        {errors.phone && <p className="p-error" style={{color: 'red'}} >{errors.phone}</p>}

        <label className="register-label" htmlFor="password">Password:</label>
        <input
         onChange={onChange}
          value={userData.password} 
          onBlur={(e) => {
            lengthValidation(e); 
            passwordMatchValidation()}} 
          className="input-field" 
          type="password" 
          name="password" 
          placeholder="*******" />
         {errors.password && <p className="p-error" style={{color: 'red'}}>{errors.password}</p>}

        <label className="register-label" htmlFor="repeatPassword">Confirm Password:</label>
        <input onChange={onChange} value={userData.repeatPassword} onBlur={(e) => {lengthValidation(e); passwordMatchValidation()}} className="input-field-repass" type="password" name="repeatPassword" placeholder="*******" />
        {errors.repeatPassword && <p className="p-error" style={{color: 'red'}}>{errors.repeatPassword}</p>}

        {loading ?
        <CircleLoader color="#DAA520" size={100} />
        : <input disabled={ disableButton } className={disableButtonStyle} type="submit" value="Register" />
        } 
         <p>    
            If you already have account? Click <a href="/login">here!</a>
        </p>
      </form>
     
    </div>
    </section>
  );
};

import '../Register/Register.css'

export const Register = () => {
  return (
    
    <section className="register-section">
    <div className="register-container">
   
      <form className="register-form">
        <h1>Register</h1>

        <label className="register-label" htmlFor="email">Email:</label>
        <input className="input-field" type="email"id="email" name="email" placeholder="peter@email.com"/>

        <label className="register-label" htmlFor="fullName">Full Name:</label>
        <input className="input-field" type="fullName" name="fullName" placeholder="Peter Johnson" />

        <label className="register-label" htmlFor="phone">Phone Number:</label>
        <input className="input-field" type="phone" name="phone" placeholder="0123456789" />

        <label className="register-label" htmlFor="password">Password:</label>
        <input className="input-field" type="password" name="password" placeholder="*******" />

        <label className="register-label" htmlFor="repass">Confirm Password:</label>
        <input className="input-field" type="password" name="repass" placeholder="*******" />

        <input className='register-submit' type="submit" value="Register" />

        <p>    
            If you already have account? Click <a href="/login">here!</a>
        </p>
      </form>
    </div>
    </section>
  );
};

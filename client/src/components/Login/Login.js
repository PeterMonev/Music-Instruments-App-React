import '../Login/Login.css'

export const Login = () => {
  return (
    <section className='login-section'>
      <div className="login-container">
      <form>
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



export const Login = () => {
  return (
    <section>
      <div>
      <form>
        <h1>Login</h1>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="peter@gmail.com" />

        <label htmlFor="login-pass">Password:</label>
        <input type="password" name="password" />

        <input type="submit" value="Login" />

        <p>
          If you don't have account? Click <a href="/register">here!</a>
        </p>
      </form>
      </div>
    </section>
  );
};

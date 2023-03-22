import styles from "../Login/Login.module.css";

export const Login = () => {
  return (
    <section className={styles['section']}>
      <div className={styles["login-container"]}>
      <form>
        <h1>Login</h1>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="peter@gmail.com" />

        <label htmlFor="login-pass">Password:</label>
        <input type="password" name="password" placeholder="******" />

        <input className={styles['submit-login']} type="submit" value="Login" />

        <p className={styles['login-container-p']}>
          If you don't have account? Click <a href="/register">here!</a>
        </p>
      </form>
      </div>
    </section>
  );
};

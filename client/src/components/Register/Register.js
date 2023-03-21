import styles from "../Register/Register.module.css";

export const Register = () => {
  return (
    
    <div className={styles["container"]}>
    <section className={styles["register-section"]}>
   
      <form className={styles["register-form"]}>
        <h1>Register</h1>

        <label htmlFor="email">Email:</label>
        <input type="email"id="email" name="email" placeholder="peter@email.com"/>

        <label htmlFor="fullName">Full Name:</label>
        <input type="fullName" name="fullName" placeholder="Peter Petrov" />

        <label htmlFor="pass">Password:</label>
        <input type="password" name="password" placeholder="*******" />

        <label htmlFor="repass">Confirm Password:</label>
        <input type="repass" name="repass" placeholder="*******" />

        <input className={styles['submit']} type="submit" defaultValue="Register" />

        <p className="field">
          <span>
            If you already have account? Click <a href="/login">here</a>
          </span>
        </p>
      </form>
    </section>
    </div>
  );
};

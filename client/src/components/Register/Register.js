import styles from "../Register/Register.module.css";

export const Register = () => {
  return (
    
    <section className={styles["section"]}>
    <div className={styles["register-container"]}>
   
      <form className={styles["register-form"]}>
        <h1>Register</h1>

        <label htmlFor="email">Email:</label>
        <input type="email"id="email" name="email" placeholder="peter@email.com"/>

        <label htmlFor="fullName">Full Name:</label>
        <input type="fullName" name="fullName" placeholder="Peter Petrov" />

        <label htmlFor="pass">Password:</label>
        <input type="password" name="password" placeholder="*******" />

        <label htmlFor="repass">Confirm Password:</label>
        <input type="password" name="repass" placeholder="*******" />

        <input className={styles['submit']} type="submit" defaultValue="Register" />

        <p>    
            If you already have account? Click <a href="/login">here!</a>
        </p>
      </form>
    </div>
    </section>
  );
};

import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <main className={styles.main}> 
        <section className={styles['main__pic']}>
           <article class="float">
            <h1 className={styles['h1_hello']}>HELLO THERE</h1>
            <h1>ARE YOU LOOKING FOR SOMETHING?</h1>
            <Link to={'/catalog'}>Search</Link>
           </article>
        </section>
        <section className={styles['main__info']}>
            <h1>WELCOME TO OUR SHOP</h1>
            <span>  </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Read More</button>
        </section>
  

      
    </main>
    )
}
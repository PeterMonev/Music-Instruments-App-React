import { Link } from 'react-router-dom';

import styles from '../Header/Header.module.css';

export const Header = () => {
    return (
        <header >
     <h1 ><Link className={styles.title}to={'/'}>Music Instruments Shop</Link></h1>
        <nav>
           <ul>
              <li class="home"><Link to={'/'}>Home</Link></li>
              <li><Link className={styles['a:hover']} to={'/catalog'}>Catalog</Link></li>
              <li><Link to={'/create'}>Create</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/logout'}>Logout</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
           </ul>
        </nav>
    </header>
    );
};
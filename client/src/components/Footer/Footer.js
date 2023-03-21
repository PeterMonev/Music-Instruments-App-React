import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
         <section className={styles['footer-container']}>
             <ul>
                <li>Call us: <Link to={'/callus'}> 555-666 </Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={'/terms-and-condition'}>Terms and Conditions</Link></li>
             </ul>
             <ul className={styles['follow']}>
                <p> Follow Us: </p>
                <li><a href='https://www.facebook.com/peter.monev/'><i class="fa-brands fa-facebook fa-beat fa-lg"></i></a></li>
                <li><a href='https://www.linkedin.com/in/peter-monev-22582b248/'><i class="fa-brands fa-linkedin fa-shake fa-xl"></i></a></li>
                <li><a href='https://github.com/PeterMonev'><i class="fa-brands fa-github fa-spin fa-xl"></i></a></li>
             </ul>
        </section>
      <p className={styles['copy-rigth']}>
        Copyright © 2023 Peter Monev. All Rights Reserved. <span>Music Instruments Shop</span>
      </p>
    </footer>
  );
};

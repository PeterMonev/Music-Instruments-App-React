import '../Home/Home.css'

import CircleLoader from 'react-spinners/CircleLoader';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAll } from '../../services/instrumentServices';
import { LatestOffersList } from './LatestOffersList/LatestOffersList';

export const Home = () => {
    const [offers, setOffers]= useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        (async () => {
          setLoading(true);
          let query = { limit: 6 }
          const data = await getAll(query);
          setOffers(data.instruments);
          setLoading(false);
        })();
      }, []);
    
    return (
        <main className="main"> 

        <section className='main__pic'>

           <article className="float">
            <h1 className='h1_hello'>HELLO THERE</h1>
            <h1>ARE YOU LOOKING FOR SOMETHING?</h1>
            <Link to={'/catalog'}>Search</Link>
           </article>
          
           <div className='lates-offers'>
            <h2 className='lates-offers-h1'>THE LATEST OFFERS:</h2>
 
           {loading ?
            <CircleLoader color="#DAA520" size={100} />
            :
            <LatestOffersList offers={offers} />
           }
            
  
           </div>
        </section>

      

        <section className='main__info'>
            <h1>WELCOME TO OUR WEBSITE</h1>
            <span>  </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link className='aboutUs-button' to={'/aboutus'}>About Us</Link>
        </section>
       
    </main>
    )
}
import { useEffect, useState } from 'react';
import { getAll } from '../../services/instrumentServices';

import '../Catalog/Catalog.css'
import { OffersList } from './OffersList/OffersList';

export const Catalog = () => {
    const [offers, setOffers ] = useState([]);

    useEffect(() => {
       
        (async () => {
            const data = await getAll();
            setOffers(data.instruments);
        })();

    }, []);

console.log(offers);

    return (
        <>
         <section className='catalog-image-section'>
            <img src="" alt="" />
         </section>

            

         <section className="catalog-section">
           
         <OffersList offers={offers}/>

         </section>
        </>
    );
};  

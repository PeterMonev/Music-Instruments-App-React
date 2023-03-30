import { useState } from 'react';

import '../Catalog/Catalog.css'
import { OfferList } from './OfferList/OfferList';

export const Catalog = () => {
    const [offer, setOffer ] = useState([]);

    return (
        <>
         <section className='catalog-image-section'>
            <img src="" alt="" />
         </section>

            

         <section className="catalog-section">
           
         <OfferList />

         </section>
        </>
    );
};  

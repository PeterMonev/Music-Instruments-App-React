import { useEffect, useState } from 'react';
import { getAll } from '../../services/instrumentServices';

import '../Catalog/Catalog.css'
import { OffersList } from './OffersList/OffersList';
import { Search } from '../Search/Search';

const images = {
    firstImg: '/images/GuitarsCatalogPic.jpg',
    secondImg: '/images/DrumsCatalogPic.jpg',
    thirdImg: '/images/KeyboardsCatalogaPic.jpg',
    fourImg: '/images/BrassCatalogPic.jpg'
}


export const Catalog = () => {
    const [offers, setOffers ] = useState([]);
  
    useEffect(() => {
       
        (async () => {
            const data = await getAll();
            setOffers(data.instruments);
        })();

    }, []);

    return (
        <>
         <section className='catalog-image-section'>
            <img src={images.firstImg} alt="guitar" />
            <img src={images.secondImg} alt="drums" />
            <img src={images.thirdImg} alt="keyboards" />
            <img src={images.fourImg} alt="brass" />
         </section>

         <section className="catalog-section">
           
        <Search />

         <OffersList offers={offers}/>

         </section>
        </>
    );
};  

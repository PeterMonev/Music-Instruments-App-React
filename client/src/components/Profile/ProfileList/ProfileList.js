import { useEffect, useState } from 'react';

import '../ProfileList/ProfileList.css';
import { getAll } from "../../../services/instrumentServices";
import { ProfileOffersCards } from './ProfileOffersCards/ProfileOffersCards';
import CircleLoader from 'react-spinners/CircleLoader';

export const ProfileList = ({ owner }) => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
          setLoading(true);
          let query = { owner }
          const data = await getAll(query);
          setOffers(data.instruments);
          setLoading(false);
        })();
      }, [owner]);

    return(
        <div className='profile-myoffers'>
            <h1>My offers: {offers.length}</h1>

            {loading ?
           <CircleLoader color="#DAA520" size={100} bold="true"/>
            :
            <>
            {offers.length > 0 
                 ? <ul className="profileListOffers">{offers.map(offer => (<ProfileOffersCards key={offer._id} offer={offer}/>))}</ul>
                 : <h2 className="profileList-noFound">No offers found yet...</h2>
            }
            </>
             }

        </div>
    )
}
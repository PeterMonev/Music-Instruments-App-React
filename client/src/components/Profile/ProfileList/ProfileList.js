import { useState } from 'react';

import '../ProfileList/ProfileList.css';

export const ProfileList = ({ authId }) => {
    const [offers, setOffers] = useState([]);

   

    return(
        <div className='profile-myoffers'>
            <h1>My offers:</h1>
        </div>
    )
}
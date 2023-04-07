import { useContext, useEffect, useState } from 'react';

import '../Profile/Profile.css';
import { AuthContext } from '../../hooks/authContext';
import { getUserById } from '../../services/userServices';
import { ProfileList } from './ProfileList/ProfileList';

export const Profile = () => {
    const { auth } = useContext(AuthContext);
    const [ user, setUser ] = useState([]);
    
    useEffect(()=> {
        (async () => {
            const data = await getUserById(auth._id,auth.accessToken);
            setUser(data);
        })()
    },[auth])

    return (
        <section className='profile-section'>
            <article className='profile-article'>
                <h1>My Profile</h1>
                 
                 <div className='profile-info'>
                     <p>Email: <span>{user.email}</span></p>
                     <p>Full Name: <span>{user.fullName}</span></p>
                     <p>Phone Number: <span>{user.phoneNumber}</span></p>
                 </div>

                <ProfileList owner={auth._id}/>

            </article>
        </section>
    )
};
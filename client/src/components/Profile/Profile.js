
import { useContext, useEffect } from 'react';
import '../Profile/Profile.css';
import { AuthContext } from '../../hooks/authContext';
import { getUserById } from '../../services/userServices';
import { ProfileList } from './ProfileList/ProfileList';

export const Profile = () => {
    const { auth } = useContext(AuthContext);
    
    useEffect(()=> {
        (async () => {
            const data = await getUserById(auth._id,auth.accessToken);
            console.log(data);
        })()
    },[auth])


    return (
        <section className='profile-section'>
            <article className='profile-article'>
                <h1>My Profile</h1>
                 
                 <div className='profile-info'>
                     <p>Email: <span>{auth.email}</span></p>
                     <p>Full Name: <span>{auth.fullName}</span></p>
                     <p>Phone Number:</p>
                 </div>

                <ProfileList auth={auth._id}/>

            </article>
        </section>
    )
};
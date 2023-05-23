import { Link } from 'react-router-dom';

import '../ProfileOffersCards/ProfileOffersCards.css';

export const ProfileOffersCards = ({ offer }) => {
      return (
        <li className="profile-offer-card">
        
        <img src={offer.imageUrl}  alt="offer.jpg"className="profile-offer-image"/>
        <h1 className='profile-offer-title'>{offer.title}</h1>
        <p className='profile-offer-price'><span className='profile-price-span'>Price: </span>{offer.price}$</p>
      
        <Link to={`/catalog/${offer._id}`} className="profile-read-more-btn" >Read More <i className="fa-sharp fa-solid fa-angles-right fa-beat-fade"></i>  </Link>
        </li>
      )
}
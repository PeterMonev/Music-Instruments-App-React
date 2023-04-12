import { Link } from 'react-router-dom';

import './OfferItem.css';

export const OfferItem = ({ offer }) =>{
      return (
        <li className="offer-list">
            <img src={offer.imageUrl}  alt="offer.jpg"className="offer-image"/>
            <h1 className='offer-title'>{offer.title}</h1>
            <p className='offer-category'>{offer.year}</p>
            <span className='offer-price'>{offer.price}$</span>

            <Link to={`/catalog/${offer._id}`} className="read-more-btn" >Read More <i className="fa-sharp fa-solid fa-angles-right fa-beat-fade"></i>  </Link>
        </li>
      )
};
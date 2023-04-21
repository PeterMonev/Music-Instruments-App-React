import { Link } from 'react-router-dom';

import './OfferItem.css';

export const OfferItem = ({ offer }) =>{
      return (
        <li className="offer-list">
            <div className="offer-image">
            <img src={offer.imageUrl}  alt="offer.jpg"/>
            </div>
            <h1 className='offer-title'>{offer.title}</h1>
            <p className='offer-year'><span>Year of made:</span> {offer.year}</p>
            <span className='offer-price'><span>Price:</span> {offer.price}$</span>

            <Link to={`/catalog/${offer._id}`} className="read-more-btn" >Read More <i className="fa-sharp fa-solid fa-angles-right fa-beat-fade"></i>  </Link>
        </li>
      )
};
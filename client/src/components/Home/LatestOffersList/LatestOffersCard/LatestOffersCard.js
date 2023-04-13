import { Link } from 'react-router-dom';

import '../LatestOffersCard/LatestOffersCard.css';

export const LatestOffersCard= ({offer}) => {
    return (
        <li className='latest-offer-card'>
            <img src={offer.imageUrl}  alt="offer.jpg"className="latest-offer-image"/>
            <h1 className='latest-offer-title'>{offer.title}</h1>
            <p className='latest-offer-price'><span className='latest-text-price'>Price:</span> {offer.price}$</p>

            <Link to={`/catalog/${offer._id}`} className="latest-read-more-btn" >Read More <i className="fa-sharp fa-solid fa-angles-right fa-beat-fade"></i>  </Link>
        </li>
    )
}
import '../LatestOffersList/LatestOffersList.css';
import { LatestOffersCard } from './LatestOffersCard/LatestOffersCard';

export const LatestOffersList = ({offers}) => {
   return(
    <section className='latestOffers-container'>
           {offers.length > 0 
             ? <ul className="latestOffers-list">{offers.map(offer => (<LatestOffersCard key={offer._id} offer={offer}/>))}</ul>
             : <h1 className="latestOffers-noFound">No offers found yet...</h1>
           }
    </section>
   )
}
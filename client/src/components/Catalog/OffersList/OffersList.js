import { OfferItem } from "./OfferItem/OfferItem";
import '../OffersList/OffersList.css';

export const OffersList = ({offers}) => {
     return (
        <section className="offersList-section">
               {offers.length > 0 
               ? <ul className="offers">{offers.map(offer => (<OfferItem key={offer._id} offer={offer}/>))}</ul>
               : <h1 className="offersList-noFound">No offers found yet...</h1>
            }
        </section>
     );
};
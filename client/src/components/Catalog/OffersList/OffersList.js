import { OfferItem } from "./OfferItem/OfferItem";


export const OffersList = ({offers}) => {
     return (
        <section className="offersList-section">
               {offers.length > 0 
               ? offers.map(offer => (<OfferItem key={offer._id} offer={offer}/>))
               : <h1 className="offersList-noFound">No offers found yet...</h1>
            }
        </section>
     );
};
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getById } from "../../services/instrumentServices";
import "../Details/OfferDetails.css";

export const OfferDetails = () => {
  const [offer, setOffer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getById(id);
      setOffer(data);
    })();
  }, [id]);

  console.log(offer);

  return (
    <section className="section-details">
        <h1 className="heading-details">Offer Details:</h1>
        <article className="article-details">

        <div className="div-img-details">
           <img className="img-details" src={offer.imageUrl} alt="" />
        </div>

        <section className="details-section">
            <div className="instrument-info">
              <h2>Instrument Info:</h2>
              <h3 className="title-details">{offer.title}</h3>

              <article className="info">
              <p>Category: <span>{offer.category}</span> </p> 
              <p>Year of production: <span>{offer.year}</span></p>
              <p>Addres: <span>{offer.address}</span></p>
              <p className="price">Price: <span>{offer.price}$</span></p>
              </article>
              
              <div className="about-instrument">
                <h3>About this Instrument:</h3>
                <p>{offer.description}</p>
              </div>

            </div>
            <section className="author-container">
               <h2>Author Info:</h2>
                 
                <article className="author-info">
                  <p>Full Name: <span>BARA BARA</span></p>
                  <p>Email: <span>peter@abv.bg</span></p>
                  <p>Phone Number: <span>09080808080</span></p>
                </article> 

            </section>
        </section>

    </article>
    </section>
  );
};

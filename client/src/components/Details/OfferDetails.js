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
          
        </div>
        <div className="details-info">
        <h1 className="title-details">{offer.title}</h1>
        </div>
      </article>
    </section>
  );
};

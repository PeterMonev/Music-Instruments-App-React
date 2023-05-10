import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../Details/OfferDetails.css";
import { getById } from "../../services/instrumentServices";
import { AuthContext } from "../../hooks/authContext";
import { parseDate } from "../../utils/parseDate";
import { CommentsList } from "./CommentsList/CommentsList";
import { AuthorInfo } from "./AuthorInfo/AuthorInfo";
import CircleLoader from 'react-spinners/CircleLoader';

export const OfferDetails = () => {
  const [offer, setOffer] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    (async () => {
      setLoading(true);
      let data = await getById(id);
      setIsOwner(auth?._id === data.owner._id);
      setOffer(data);
      setLoading(false)
    })();
  }, [id, auth]);


  return (
    <section className="section-details">
        <h1 className="heading-details">Offer Details:</h1>
        <article className="article-details">

        <div className="div-img-details">
           <img className="img-details" src={offer.imageUrl} alt="offer.imageUrl" />
        </div>

        <section className="details-section">
            <div className="instrument-info">
              <h2>Instrument Info:</h2>
              <h3 className="title-details">{offer.title}</h3>

              <article className="info">
              <p>Category: <span>{offer.category}</span> </p> 
              <p>Year of production: <span>{offer.year}</span></p>
              <p>Address: <span>{offer.address}</span></p>
              <p className="price">Price: <span>{offer.price}$</span></p>
              </article>
              
              <div className="about-instrument">
                <h3>About this Instrument:</h3>
                <p>{offer.description}</p>
              </div>
               <p className="createdAt">Created: <span>{parseDate(offer.createdAt)}</span></p>
            </div>
            <h2>Author Info:</h2>
            {
              auth ?
              <AuthorInfo isOwner={isOwner} offer={offer} auth={auth}/>
              : 
              <h1 className="author-sorry-h1">
               Sorry, but if you want to see the author information you need to <Link to="/login">Log in</Link>.
              </h1>
            }
        </section>

    </article>
      
    {loading ?
        <CircleLoader color="#DAA520" size={100} />
        :
      <CommentsList offerId={id} />
} 
    </section>
  );
};

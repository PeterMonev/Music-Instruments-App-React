import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "../Details/OfferDetails.css";
import { deleteOffer, getById } from "../../services/instrumentServices";
import { AuthContext } from "../../hooks/authContext";
import { parseDate } from "../../utils/parseDate";

export const OfferDetails = () => {
  const [offer, setOffer] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getById(id);
      setOffer(data);
      setIsOwner(auth?._id === data.owner._id)
    })();
  }, [id, auth]);

  async function onDelete(event){
     event.preventDefault();
    
    const confirm = window.confirm('Are you sure you want to delete this offer?');

    if(confirm){
      try {
        await deleteOffer(id);
        navigate('/catalog');
  
       } catch (error) {
         console.log(error);
       };
    };
  
  };


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
              <p>Addres: <span>{offer.address}</span></p>
              <p className="price">Price: <span>{offer.price}$</span></p>
              </article>
              
              <div className="about-instrument">
                <h3>About this Instrument:</h3>
                <p>{offer.description}</p>
              </div>
               <p className="createdAt">Created: <span>{parseDate(offer.createdAt)}</span></p>
            </div>
            <section className="author-container">
               <h2>Author Info:</h2>
                 
                <article className="author-info">
                  <p>Full Name: <span>BARA BARA</span></p>
                  <p>Email: <span>peter@abv.bg</span></p>
                  <p>Phone Number: <span>09080808080</span></p>
                </article> 

                <div className="buttons">
                   { isOwner ?
                     <>
                     <Link className="btn"to={`/instrument/edit/${offer._id}`}>Edit</Link>
                     <Link className="btn" onClick={onDelete}>Delete</Link>
                     </>
                     :
                     <>
                     </>
                   }
                </div>

            </section>
        </section>

    </article>
    </section>
  );
};

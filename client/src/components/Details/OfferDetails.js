import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../Details/OfferDetails.css";
import { getById } from "../../services/instrumentServices";
import { AuthContext } from "../../hooks/authContext";
import { parseDate } from "../../utils/parseDate";
import { CommentsList } from "./CommentsList/CommentsList";
import { getUserById } from "../../services/userServices";
import { AuthorInfo } from "./AuthorInfo/AuthorInfo";

export const OfferDetails = () => {
  const [offer, setOffer] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
 
  const [user, setUser] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
  });

  let userObj = {};

  useEffect(() => {
    (async () => {
      let data = await getById(id)
      .then(response=>{setOffer(response)
        
        setIsOwner(auth?._id === response.owner._id)
        userObj = currUser(response.owner._id)})
      
      
      // setOffer(data);
  

     
    })();
  }, [id, auth,]);


  async function currUser(userId){
  
    try {
   
      let userData = await getUserById(userId, auth.accessToken);
   
      setUser(userData);
    } catch (error) {
      
    }
  }
 



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
            {
              auth ?
              <AuthorInfo isOwner={isOwner} offer={offer} />
              : 
              <h1 className="author-sorry-h1">
               Sorry, but if you want to see the author information you need to <Link to="/login">Log in</Link>.
              </h1>
            }
        </section>

    </article>

      <CommentsList offerId={id} />

    </section>
  );
};

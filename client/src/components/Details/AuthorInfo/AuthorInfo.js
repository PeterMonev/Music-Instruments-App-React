import { Link, useNavigate } from "react-router-dom"
import { deleteOffer } from "../../../services/instrumentServices";
import { useEffect, useState } from "react";
import { getUserById } from "../../../services/userServices";

export const AuthorInfo = ({isOwner, offer, auth}) => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState({
        email: '',
        fullName: '',
        phoneNumber: '',
      });

    useEffect(()=> {

        if (offer && offer.owner && offer.owner._id) {
       (async () => {
        let data = await getUserById(offer.owner._id, auth.accessToken);
        setAuthor(data);
       })();

    }

    },[offer,auth.accessToken]);

//Delete Offer
    async function onDelete(event){
        event.preventDefault();
        const confirm = window.confirm('Are you sure you want to delete this offer?');
    
        if(confirm){
          try {
            await deleteOffer(offer._id);
            navigate('/catalog');
      
           } catch (error) {
             console.log(error);
           };
        };
      
      };

    return (
        <section className="author-container">
       
         <article className="author-info">
           <p>Full Name: <span>{author.fullName}</span></p>
           <p>Email: <span>{author.email}</span></p>
           <p>Phone Number: <span>{author.phoneNumber}</span></p>
         </article> 

         <div className="buttons">
            { isOwner ?
              <>
              <Link className="btn" to={`/instrument/edit/${offer._id}`}>Edit</Link>
              <Link className="btn" onClick={onDelete}>Delete</Link>
              </>
              :
              <>
              </>
            }
         </div>

     </section>
    )
}
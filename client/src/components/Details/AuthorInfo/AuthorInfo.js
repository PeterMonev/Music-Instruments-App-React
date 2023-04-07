import { Link, useNavigate } from "react-router-dom"
import { deleteOffer } from "../../../services/instrumentServices";


export const AuthorInfo = ({isOwner, offer}) => {
    const navigate = useNavigate();




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
           <p>Full Name: <span>BARA BARA</span></p>
           <p>Email: <span>peter@abv.bg</span></p>
           <p>Phone Number: <span>09080808080</span></p>
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
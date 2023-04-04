import '../CommentsItem/CommentsItem.css'
import { parseDate } from "../../../../utils/parseDate";
import { useContext } from 'react';
import { AuthContext } from '../../../../hooks/authContext';

export const CommentsItem = ({comments, commentHandler}) => {
   const { auth } = useContext(AuthContext);
   console.log(comments);
    return (
     <li className='comments-li'>
      <div className='comments-div'>
        <p className="comments-email">{comments.owner.email}: </p>
        <p className='comments-text'>{comments.text}</p>
      </div>
       <p className='commnets-created'>{parseDate(comments.createdAt)}</p>
       <div className='comments-buttons'>
        { auth?._id === comments.owner._id ?
           <>
                  <button>Edit</button>
                  <button>Delete</button>
           </> 
           : 
           <>
           </>
      
        }
       </div>
     </li>
    );
};
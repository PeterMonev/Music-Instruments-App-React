import '../CommentsItem/CommentsItem.css'
import { parseDate } from "../../../../utils/parseDate";

export const CommentsItem = ({comments, commentHandler}) => {
   console.log(comments);
    return (
     <li className='comments-li'>
      <div className='comments-div'>
        <p className="comments-email">{comments.owner.email}: </p>
        <p className='comments-text'>{comments.text}</p>
      </div>
       <p className='commnets-created'>{parseDate(comments.createdAt)}</p>
       <div className='comments-buttons'>
       <button >Edit</button>
       <button>Delete</button>
       </div>
     </li>
    );
};
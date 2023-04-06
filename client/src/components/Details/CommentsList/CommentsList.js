import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../CommentsList/CommentsList.css';
import { AuthContext } from '../../../hooks/authContext';
import { CommentsCreate } from './CommentsCreate/CommentsCreate';
import { CommentsItem } from '../CommentsList/CommentsItem/CommentsItem';
import { getCommnetsByOfferId } from '../../../services/commentsServices';

export const CommentsList = ({ offerId }) => {
    const [comments, setComments] = useState([]);
    const { auth } = useContext(AuthContext);

    const requestComments = useCallback(() => {
      getCommnetsByOfferId(offerId)
          .then(response => setComments(response))
          .catch(error => console.log(error));
  }, [offerId]);

    useEffect(() => requestComments(), [requestComments]);
    const commentHandler = () => requestComments();

    return (
        <>
        <h1 className="comments-title"> Commnets: </h1>
        <section className='comments-container'>
            <h4>{comments.length} Comments</h4>
            
            <article className='comments-list'>
                  
             <ul>
              {comments.map(comments => (<CommentsItem key={comments._id} comments={comments} commentHandler={commentHandler} />))}
             </ul>

            </article>

            {auth?.accessToken ? 
              <CommentsCreate offerId={offerId} commentHandler={commentHandler} /> 
              :
              <>
              <p className='p-guest'>
                    If you want to leave a comment you need to <Link to="/login">Log in</Link> your account.
              </p> 
              <p className='p-guest'>   
                    If you dont have an account you can go <Link to="/register">Register</Link> one.
              </p> 
              </>              
            }

        </section>
        </>
    )
}
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../CommentsList/CommentsList.css';
import { AuthContext } from '../../../hooks/authContext';
import { CommentsCreate } from './CommentsCreate/CommentsCreate';
import { CommentsItem } from '../CommentsList/CommentsItem/CommentsItem';
import { getCommnetsByOfferId } from '../../../services/commentsServices';
import CircleLoader from 'react-spinners/CircleLoader';

export const CommentsList = ({ offerId }) => {
    const [comments, setComments] = useState([]);
    const { auth } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const requestComments = useCallback(() => {
      setLoading(true)
      getCommnetsByOfferId(offerId)
          .then(response => setComments(response))
          .catch(error => console.log(error));
      setLoading(false)
  }, [offerId]);

    useEffect(() => requestComments(), [requestComments]);
    const commentHandler = () => requestComments();

    return (
      
        <>
        <h1 className="comments-title"> Commnets: </h1>
        <section className='comments-container'>
            <h4>{comments.length} Comments</h4>
            
            <article className='comments-list'>

            {loading ?
             <CircleLoader color="#DAA520" size={100} bold/>
              :      
             <ul>
              {comments.map(comments => (<CommentsItem key={comments._id} comments={comments} commentHandler={commentHandler} />))}
             </ul>
            }
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
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import '../CommentsList/CommentsList.css';
import { AuthContext } from '../../../hooks/authContext';
import { CommentsCreate } from './CommentsCreate/CommentsCreate';

export const CommentsList = ({ offerId }) => {
    const [comments, setCommnets] = useState([]);
    const { auth } = useContext(AuthContext);
  console.log(auth);
    return (
        <>
        <h1 className="comments-title"> Commnets: </h1>
        <section className='comments-container'>
            <h4>{comments.length} Comments</h4>
            
            <article className='comments-list'>
                  
              

            </article>

            {auth?.accessToken ? 
              <CommentsCreate offerId={offerId} /> 
              :
              <>
              <p className='p-guest'>
                    If you want to leave a comment you need to <Link to="/login">log in</Link> your account.
              </p> 
              <p className='p-guest'>   
                    If you dont have an account you can go <Link to="/register">register</Link> one.
              </p> 
              </>              
            }

        </section>
        </>
    )
}
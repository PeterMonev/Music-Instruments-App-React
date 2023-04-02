import { useState } from 'react';
import '../CommentsList/CommentsList.css';

export const CommentsList = ({ offerId }) => {
    const [comments, setCommnets] = useState();

    return (
        <>
        <h1 className="comments-title"> Commnets: </h1>
        <section className='comments-container'>
            
        </section>
        </>
    )
}
import { useState } from "react";
import "../CommentsCreate/CommentsCreate.css";
import { createComment } from "../../../../services/commentsServices";
import { inputValidator } from "../../../../utils/validations";
import CircleLoader from 'react-spinners/CircleLoader';

export const CommentsCreate = ({ offerId, commentHandler }) => {
  const [comment, setComment] = useState({comment: ''});
  const [errors, setErrors] = useState({comment: ''});
  const [loading, setLoading] = useState(false);

  function onChange(event) {
    setComment({comment: event.target.value});
  };

  async function onSubmit(event){
    event.preventDefault();

    if(errors.comment !== null){
      return 
    }
 console.log(comment);
    try {
        setLoading(true);
        const text = comment.comment;
        
        await createComment(offerId, {text});  
        setComment({comment: ''})
        commentHandler();
        setLoading(false);
    } catch (error) {
        console.log(error);
    }
  };

  // Validation
  function lengthValidation(event){
  
    const tagName = event.target.name;
    inputValidator(comment, tagName, 10, setErrors, 300);
  }

  return (
    <section className="comment-create-container">
      <h4>Leave a comment:</h4>
      <form onSubmit={onSubmit}>
        <textarea name="comment" placeholder="Write youre comment..." onChange={onChange} value={comment.comment} onBlur={lengthValidation}/>
        {errors && <p className='comment-error'>{errors.comment}</p>}  
        {loading ?
             <CircleLoader color="#DAA520" size={100} bold/>
              :   
        <input type="submit" value="Submit" /> 
        }
      </form>
    </section>
  );
};

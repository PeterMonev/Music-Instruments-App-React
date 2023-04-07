import { useState } from "react";
import "../CommentsCreate/CommentsCreate.css";
import { createComment } from "../../../../services/commentsServices";
import { inputValidator } from "../../../../utils/validations";

export const CommentsCreate = ({ offerId, commentHandler }) => {
  const [comment, setComment] = useState({comment: ''});
  const [errors, setErrors] = useState({comment: ''});

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
        const text = comment.comment;
      console.log(text);
        await createComment(offerId, {text});  
        setComment({comment: ''})
        commentHandler();
      
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
        <input type="submit" value="Submit" /> 
      </form>
    </section>
  );
};

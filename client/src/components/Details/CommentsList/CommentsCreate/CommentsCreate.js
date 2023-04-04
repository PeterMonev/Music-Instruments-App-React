import { useEffect, useState } from "react";
import "../CommentsCreate/CommentsCreate.css";
import { createComment } from "../../../../services/commentsServices";
import { inputValidator } from "../../../../utils/validations";

export const CommentsCreate = ({ offerId, commentHandler }) => {
  const [comment, setComment] = useState({comment: ''});
  const [errors, setErrors] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  function onChange(event) {
    setComment({comment: event.target.value});
  };

  useEffect(() => {
    if(Object.values(errors).some(error => error === null || errors === {})){
        setDisableButton(false);
    } else {
         setDisableButton(true);
    }
  }, [errors])

  async function onSubmit(event){
    event.preventDefault();

    try {
        const text = comment.comment;
        await createComment(offerId, {text});
        event.target.children[0].value = '';
        setComment('')
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
        <textarea name="comment" placeholder="Write youre comment..." onChange={onChange}  onBlur={lengthValidation}/>
        {errors && <p className='comment-error'>{errors.comment}</p>}  
        <input disabled={ disableButton } type="submit" value="Submit" /> 
      </form>
    </section>
  );
};

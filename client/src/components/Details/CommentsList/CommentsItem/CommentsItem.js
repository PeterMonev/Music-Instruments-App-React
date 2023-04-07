import '../CommentsItem/CommentsItem.css'
import { parseDate } from "../../../../utils/parseDate";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../hooks/authContext';
import { deleteComment, editComment } from '../../../../services/commentsServices';
import { inputValidator } from '../../../../utils/validations';
import { text } from '@fortawesome/fontawesome-svg-core';

export const CommentsItem = ({comments, commentHandler}) => {
   const { auth } = useContext(AuthContext);
   const [isEdit, setIsEdit ] = useState(false);
   const [dataComment, setDataComment] = useState({ text: comments.text});
   const [errors, setErrors ] = useState({});

   function onChangeComment(event){
    
    setDataComment({text: event.target.value});
   };

   async function onEditComment(event){
    event.preventDefault();
  
    if(errors.text !== null){
      return
    }

    try {      
      await editComment(comments._id, dataComment);
      commentHandler();
      setIsEdit(false);
    } catch (error) {
   
    }
   };

   async function onDeleteComment(event){
     event.preventDefault();
     const confirm = window.confirm('Are you sure you want to delete this comment?');

     if(confirm){
     try {
       await deleteComment(comments._id);
       commentHandler();
     } catch (error) {
       console.log(error);
     };
    };
   };

  // Validation
  function lengthValidation(event){
    const tagName = event.target.name;
    dataComment[tagName] = dataComment[tagName].trim();
    inputValidator(dataComment, tagName, 10, setErrors, 300);
  }

    return (
     <li className='comments-li'>
      <div className='comments-div'>
        <p className="comments-email">{comments.owner.email}: </p>
      
        {isEdit ? 
        <form className='comment-edit-form' onSubmit={onEditComment} >
         <textarea className='comment-edit-form-text' onBlur={lengthValidation} value={dataComment.text} type="text" name='text' onChange={onChangeComment} />
         <input className='comment-edit-form-submit' type="submit" name="submit" />
         {errors && <p className='comment-error'>{errors.text}</p>}
        </form>
        :
        <p className='comments-text'>{comments.text}</p>
        }
      </div>
       <p className='commnets-created'>{parseDate(comments.createdAt)}</p>
       <div className='comments-buttons'>
        { auth?._id === comments.owner._id && !isEdit ?
           <>
                  <button onClick={() => setIsEdit(true)}>Edit</button>
                  <button onClick={onDeleteComment}>Delete</button>
           </> 
           : 
           <>
           </>
        }
       </div>
     </li>
    );
};
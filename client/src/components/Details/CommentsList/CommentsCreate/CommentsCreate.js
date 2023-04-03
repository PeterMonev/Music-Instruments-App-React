import { useState } from "react";
import "../CommentsCreate/CommentsCreate.css";
import { createComment } from "../../../../services/commentsServices";

export const CommentsCreate = ({ offerId, commentHandler }) => {
  const [text, setComment] = useState("");

  function onChange(event) {
    setComment(event.target.value);
  };

  async function onSubmit(event){
    event.preventDefault();

    try {
        await createComment(offerId, {text});
        setComment('');
        commentHandler();
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section className="comment-create-container">
      <h4>Leave a comment:</h4>
      <form onSubmit={onSubmit}>
        <textarea name="text" placeholder="Write youre comment..." onChange={onChange} />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

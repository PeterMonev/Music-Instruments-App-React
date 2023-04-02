import { useState } from "react";
import "../CommentsCreate/CommentsCreate.css";

export const CommentsCreate = ({ offerId }) => {
  const [comment, setCommnet] = useState("");

  function onChange(event) {
    setCommnet(event.target.value);
  };

  async function onSubmit(event){
    event.preventDefault();

    
  }

  console.log(comment);
 
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

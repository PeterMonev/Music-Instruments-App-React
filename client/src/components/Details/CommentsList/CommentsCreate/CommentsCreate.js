import '../CommentsCreate/CommentsCreate.css';

export const CommentsCreate = ({ offerId }) => {
    return (
        <section className="comment-create-container">
            <h4>Leave a comment:</h4>
            <form >
               <textarea ></textarea>
               <input type="submit" value="Submit" />
            </form>
        </section>
    )
}   
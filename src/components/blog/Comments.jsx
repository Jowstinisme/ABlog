import { useState } from "react";
import IndividualComment from "./IndividualComment";

function Comments() {
    const [comments, setComments] = useState({
        name: "",
        content: "",
    });

    const [commentList, setCommentList] = useState([]);

    const addComment = (comment) => {
        setCommentList([...commentList, comment])
    }
    console.log(comments)
    return (
        <section className = "commentSection">
            <h3><b>Comments</b></h3>
            <div className = "commentSubmission">
                <input placeholder="Name"
                onChange = {(e) => setComments({...comments, name: e.target.value})}/>
                <div>
                    <textarea 
                    id="comment" 
                    value={comments.content}
                    onChange={(e) => setComments({...comments, content: e.target.value})} 
                    name="comment" 
                    rows="8" 
                    minlength="10" 
                    placeholder = "Add a comment here!"required></textarea>
                </div>
                <button type="submit" class="accent-btn" onClick={(e) => addComment(comments)}>Submit</button>
            </div>
            {commentList.length === 0 ? <p>There are no comments to display</p> : <div className="existingComments">
                <h4>Existing Comments:</h4>
                <ul>
                    {commentList.map((value, index) => (
                        <IndividualComment value={value} index={index}/>
                    ))}
                </ul>
            </div>   }
            
        </section>
    )
}

export default Comments;
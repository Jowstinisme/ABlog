import {useEffect, useState} from "react";
import IndividualComment from "./IndividualComment";
import {useParams} from "react-router";
import axios from "axios";

function Comments() {
    const params = useParams();

    const [comments, setComments] = useState({
        name: "",
        content: "",
    });

    const [commentList, setCommentList] = useState([]);

    const [users, setUsers] = useState([]);

     const addComment = (comment) => {
         setCommentList([...commentList, comment])
     };

    const postComment = (id) => {
        axios.post('https://jsonplaceholder.typicode.com/posts/'+params.post_id+'/comments', {
            name: comments.name,
            body: comments.content
        }).then((res) => {addComment(res.data); console.log(res.data)})
    }

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+params.post_id)
        //     .then((res) => {setPostData(res.data)})
        //     .catch((err) => {alert('There was an error while trying to get the blog posting.')})
        //     .finally();

        const fetchData = async () => {
            try {
                const postRes = await axios.get('https://jsonplaceholder.typicode.com/comments/'+params.post_id);
                addComment(postRes.data);

                const authorRes = await axios.get('https://jsonplaceholder.typicode.com/users/');
                setUsers(authorRes.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    console.log(users)
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
                    minLength="10"
                    placeholder = "Add a comment here!"required></textarea>
                </div>
                <button type="submit" class="accent-btn" onClick={(e) => postComment(comments)}>Submit</button>
            </div>
            {commentList.length === 0 ? <p>There are no comments to display</p> : <div className="existingComments">
                <h4>Existing Comments:</h4>
                <ul>
                    {commentList.map((value, index) => (
                        <IndividualComment value={value} index={index} user={
                                                                       }/>
                    ))}
                </ul>
            </div>   }
            users.find((user) => user.email === value.email)
        </section>
    )
}

export default Comments;
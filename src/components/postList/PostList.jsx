import React, {useEffect, useState} from 'react'
import { Link } from 'react-router'
import axios from "axios";
import IndividualComment from "../blog/IndividualComment.jsx";

function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+params.post_id)
        //     .then((res) => {setPostData(res.data)})
        //     .catch((err) => {alert('There was an error while trying to get the blog posting.')})
        //     .finally();

        const fetchData = async () => {
            try {
                const postRes = await axios.get('https://jsonplaceholder.typicode.com/posts/');
                console.log(postRes);
                setPosts(postRes.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

  return (
    <div className="postingList">
        {posts.map((value, index) => (
            <Link to={'/posts/'+(value.id)}>{value.title}</Link>
        ))}
    </div>
  );
}

export default PostList
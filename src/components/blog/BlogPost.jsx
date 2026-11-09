import { useParams } from 'react-router';
import Comments from './Comments';
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPost({title, content, author, date}) {

    const params = useParams();

    console.log(params.post_id);

    const [postData, setPostData] = useState({})
    const [authorData, setAuthorData] = useState({})

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+params.post_id)
        //     .then((res) => {setPostData(res.data)})
        //     .catch((err) => {alert('There was an error while trying to get the blog posting.')})
        //     .finally();

        const fetchData = async () => {
            try {
                const postRes = await axios.get('https://jsonplaceholder.typicode.com/posts/'+params.post_id);
                setPostData(postRes.data);

                const authorRes = await axios.get('https://jsonplaceholder.typicode.com/users/'+postRes.data.userId);
                setAuthorData(authorRes.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])


    console.log(postData);

    return (
        <div className = "posting">
            <div className = "postingInfo">
                <h2 className = "blogTitle"><b>{postData.title}</b></h2>
                <p className = "blogContent">{postData.body}</p>
                <p className = "blogAuthor"><b>Author: </b>{authorData.name}</p>
            </div>
            <div className = "comment">
                <Comments/>
            </div>
        </div>
    )
}

export default BlogPost;
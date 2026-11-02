import { useParams } from 'react-router';
import Comments from './Comments';

function BlogPost({title, content, author, date}) {

    const params = useParams();

    const allPosts = [{
        title: "What is 1 + 1",
        content: "1 + 1 has been dramatically talked about for milenia, about what is it's true answer. While most of the common people are convinced that 1 + 1 is equal to two, I know better. I know that it is not equal to two, but instead there is the truth that the mathematicians of the world are trying to hide from us. Have you perhaps heard of Calculus?",
        author: "Meeple Snrople",
        date: "1872-12-31"
    },
    {
        title: "Why do sheep look like that?",
        content: "Since the dawn of time, sheep have always looked like that, and it's always made me wonder... why? Which god would do such a thing to make sheep look like that. Like... why?",
        author: "Mr. Wolf",
        date: "2026-02-21"
    },
    {
        title: "Google how do I make a cake?",
        content: "Google how do I mak ea cake? google stop typing stop I lsaid to stop.",
        author: "Grannie Snoozie",
        date: "2026-10-31"
    }

    ];

    const posting = allPosts[params.post_id - 1];

    console.log(params);

    return (
        <div className = "posting">
            <div className = "postingInfo">
                <h2 className = "blogTitle"><b>{posting.title}</b></h2>
                <p className = "blogContent">{posting.content}</p>
                <p className = "blogAuthor"><b>Author: </b>{posting.author}</p>
                <p className = "blogDate"><b>Date: </b>{posting.date}</p>
            </div>
            <div className = "comment">
                <Comments/>
            </div>
        </div>
    )
}

export default BlogPost;
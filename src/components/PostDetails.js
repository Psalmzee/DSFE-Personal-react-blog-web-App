import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";


const PostDetails = () => {
    const { id } = useParams();
    const {data: posts, isLoading, error} = useFetch('http://localhost:8000/posts/'+id);
    const history = useNavigate();
    const isAuth = localStorage.getItem('auth')

    const handleDelete = () => {
        fetch('http://localhost:8000/posts/'+id, {
            method: "DELETE"
        })
        .then (() => {
            history('/home')
        })
    }
    return (
        <div className="container">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading content...</div> }
            { posts && (
                <article>
                    <h1>{ posts.title }</h1>
                    <p className="subtitle">Written By: <b>{ posts.author }</b></p>
                    <hr />
                    <div className="post-preview">
                        { posts.body}
                    </div>
                    { isAuth && <button className="delete-post" onClick={ handleDelete }>delete post</button> }  
                </article>
            )}
        </div>
    );
}
 
export default PostDetails;
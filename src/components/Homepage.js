import Posts from "./Posts";
import useFetch from "./useFetch";


const Homepage = () => {
    const { data: posts, isLoading, error } = useFetch('http://localhost:8000/posts')

    // const handleDelete = (id) => {
    //     setPosts(posts.filter((post) => (post.id !== id)))
    // }
    // handleDelete={ handleDelete } 

    return (
        <div className="container">
            <h1>Welcome to my Article Blog Space!</h1>
            <p className="subtitle">Your most entertaining and trending Articles Blog!.</p>
            <hr />

            <div className="posts-list">
                { error && <div>{ error }</div>}
                { isLoading && <div>Loading content...</div> }
                { posts && <Posts posts={ posts } title="All Articles" /> }
            </div>
        </div>
    );
}
 
export default Homepage;
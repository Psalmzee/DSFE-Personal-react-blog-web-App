import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Samson');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body, author }
        console.log(newPost);

        setIsLoading(true);

        fetch('http://localhost:8000/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        })
        .then(() => {
            alert("Your article have been added successfully!")
            setIsLoading(false);
            history('/home')
        })
    }
    return (
        <div className="container">
            <h1>Create Article</h1>
            <hr />

            <div className="form">
                <form onSubmit={ handleSubmit }>
                    <label>Article title</label>
                    <input 
                        type="text"
                        required
                        value= { title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                    <label>Article Body</label>
                    <textarea
                        required
                        value= { body }
                        onChange = { (e) => setBody(e.target.value) }
                    ></textarea>
                    <label>Article Author</label>
                    <select
                        required
                        value= { author }
                        onChange = { (e) => setAuthor(e.target.value) }
                    >
                        <option value="Samson">Samson Okeji</option>
                        <option value="Sammy">Engr. Sammy</option>
                        <option value="Okeji">Mr. Okeji</option>
                    </select>
                    { !isLoading && <button>Add Article</button> }
                    { isLoading && <button disabled>Adding Article...</button> }
                </form>
                <div className="dont-have">
                    <p>Already have an Account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}
 
export default Create;
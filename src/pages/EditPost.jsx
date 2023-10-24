import { useParams } from 'react-router-dom';
import { useState} from 'react';
import {supabase} from "../client"
import './EditPost.css'

// eslint-disable-next-line react/prop-types
const EditPost = ({data}) => {

    const {id} = useParams();
    // eslint-disable-next-line react/prop-types
    const [post, setPost] = useState(data.filter(item => String(item.id) === id)[0]);


    const handleChange = (e) => { 
        const {name, value} = e.target;
        setPost(prev => ({...prev, [name]:value}));
        console.log(post);
    };

    const handleSubmit = async (event) => {

       event.preventDefault();
       console.log(post)

        await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author,  description: post.description})
            .eq('id', id);

    //    updatePost(post);
       window.location = "/";
    }
    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id) 

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label> <br />
                <input htmlFor="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input htmlFor="text" id="author" name="author" value={post.author} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea htmlFor="5" cols="50" id="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost
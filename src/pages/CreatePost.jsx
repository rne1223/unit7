import { useState } from "react";
import "./CreatePost.css"
import {supabase} from "../client"

const CreatePost = () => {

    const [post, setPost] =    useState({title:"", author:"", description:""});

    const handleChange = (e) => { 
        const {name, value} = e.target;
        setPost(prev => ({...prev, [name]:value}));
    };

    const createPost = async (event) => {

        event.preventDefault();

    //    const { error } = await supabase
       await supabase
        .from('Posts')
        .insert({title: post.title, author: post.author, description: post.description})
        .select()

        // if (error) {
        //     console.log(error);
        // }

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} value={post.title}/><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} value={post.author}/><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea name="description" rows="5" cols="50" id="description" onChange={handleChange} value={post.description}/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost;

import Card from '../components/Card';
import { useEffect, useState } from 'react';
import styles from "./ReadPosts.css" 

// eslint-disable-next-line react/prop-types
const ReadPosts = ({data}) => {

const [posts, setPosts] = useState([]);

useEffect( () => { setPosts(data)}, [data]);

 return (
    <div className={styles.ReadPosts}>
        {posts && posts.length > 0 ?
            posts.map((post,index) => 
                <Card key={index} id={post.id} title={post.title} author={post.author} description={post.description} />
            ) : <h2> {'No challenges Yet 😔'}</h2> 
        }
    </div>
 );
}

export default ReadPosts
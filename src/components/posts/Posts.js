import Post from './post/Post'
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";


export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() =>  {
        getPostsOfUser().then(({data}) => setPosts([...data]));
    },[]);


    return (
        <div>
            {
                // posts.map((postItem)  => <Post key={postItem.id} {...postItem}/>)
                posts.map(postValue => <Post key={postValue.id} {...postValue} />)
            }
        </div>
    );
}

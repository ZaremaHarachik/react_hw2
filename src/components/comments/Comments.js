import Comment from "./comment/Comment";
import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../../services/comment.service";

export default function Comments() {

  let [comments,setComments]= useState([]);

  useEffect(()=> {


    getCommentsOfUser().then(({data}) => setComments([...data]));

  }, [])

  return(
      <div>
        {
          comments.map(commentValue => <Comment key={commentValue.id} {...commentValue} />)
        }
      </div>
  );
}
import React from "react";
import Comment from "../components/comments/Comment";
import { useState } from "react";
function testComments() {
  const [comment, setComment] = useState(null);
  const [activeComment, setActiveComment] = useState(null);
  return (
    <div>
      <Comment
        comment={comment}
        getReplies={()=> console.log("replies")}
        setActiveComment={setActiveComment}
        ActiveComment={activeComment}
        updateComment={(text)=>{setComment(text)}}
        deleteComment={()=>console.log("delete")}
        addComment={()=>console.log("add")}
        currentUserId={1}
      />
    </div>
  );
}

export default testComments;

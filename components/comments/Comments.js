import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comments";
import axios from "axios";
// import {
//   getComments as getCommentsApi,
//   createComment as createCommentApi,
//   updateComment as updateCommentApi,
//   deleteComment as deleteCommentApi,
// } from "../api";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  // const rootComments = backendComments.filter(
  //   (backendComment) => backendComment.parentId === null
  // );

  // Get Replies
  const getReplies = async (commentId) => {
    const replies = axios.get("/:_idComment/getReplys",)
    setBackendComments(()=> {
      const i = backendComments.findIndex(
          (element) => element._id == commentId
        );
        backendComments[i].replies = replies;
    })
  };


  // Add comment
  const addComment = async (text) => {
    const comment = await axios.post("/:_id/addComment", { commentText: text }).then(() => {
      setBackendComments((list) => {
        list.concat(comment);
      });
      setActiveComment(null);
    });
  };

  // Add reply
  const addReply = async (text) =>{
    const comment = axios.post("/:_idComment/replyComment",{commentText: text});
    setBackendComments(()=> {
      const i = backendComments.findIndex(
          (element) => element._id == commentId
        );
        backendComments[i].replies.push(comment);
    })
  }

  // Update del commento
  const updateComment = async (text, commentId) => {
    if (window.confirm("Are you sure you want to change the comment?")) {
      axios.patch(":_id/modify/:_idComment", { commentText: text });
      setBackendComments(() => {
        const i = backendComments.findIndex(
          (element) => element._id == commentId
        );
        backendComments[i].commentText = text;
      });
      setActiveComment(null);
    }
  };

  // Delete di un commento
  const deleteComment = async (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      axios.delete("/:_id/delete/:_idComment");
      setBackendComments(() => {
        const i = backendComments.findIndex(
          (element) => element._id == commentId
        );
        backendComments.splice(i, 1);
      });
      setActiveComment(null);
    }
  };

  // caricamento iniziale commenti
  useEffect(() => {
    setBackendComments(async () => {
      await axios.get(":_id/allComments/");
    });
  }, []);

  return (
    <div className="comments">
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {backendComments.map((backendComment) => (
          <Comment
            key={backendComment._id}
            comment={backendComment}
            replies={getReplies(backendComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};
export default Comments;

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
    let x = backendComments
      .find(commentId)
      .backendComments.filter(
        (backendComment) => backendComment._id === commentId
      )
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  // Add comments
  const addComment = async (text) => {
    const comment = await axios.post("  ", { commentText: text }).then(() => {
      setBackendComments((list) => {
        list.concat(comment);
      });
      setActiveComment(null);
    });
  };

  // Update del commento
  const updateComment = async (text,commentId) => {
    const fixedComment = await axios.patch("",text)    
    backendComments.find(comment => comment.id==commentId).remove
    setBackendComments(updatedBackendComments);
    setActiveComment(null);
    }

  // Delete di un commento
  const deleteComment = async (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      axios.delete().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  // caricamento iniziale commenti
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
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

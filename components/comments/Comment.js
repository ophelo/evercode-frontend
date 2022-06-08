import CommentForm from "./CommentForm";
import { useState } from "react";

const Comment = ({
  comment,
  // replies,
  getReplies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  currentUserId,
}) => {
  const [open, setOpen] = useState(false);
  const [replies, setReplies] = useState([]);
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const canDelete = currentUserId === comment.userId && replies.length === 0;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className="flex flex-row border-2 border-black text-white ">
      <div className=" border-2 rounded-full flex justify-center align-center ">
        <img src="/user-icon.png" />
      </div>
      <div className=" flex flex-col gap-1 ">
        <div className="text-center flex flex-col gap-2 px-3">
          <div className=" font-bold">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="flex flex-row gap-2 items-center m-2 border-2">
          {canReply && (
            <div
              className="hover:scale-125 hover:bg-blue-500 bg-stone-400 "
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="hover:scale-125 hover:bg-blue-500 bg-stone-400 "
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div className="hover:scale-125 hover:bg-blue-500 bg-stone-400" onClick={() => deleteComment(comment.id)}>
              Delete
            </div>
          )}
        </div>
        <div>
          {!open && (
            <button
              className="active:translate-y-1 text-center active:scale-125 hover:bg-black border border-white bg-stone-500 text-white"
              onClick={async () => {
                const appo = await getReplies(comment._id);
                setReplies(appo)
                setOpen(true);
              }}
            >
              Apri
            </button>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text)}
          />
        )}

        {comment.replies.length > 0 && open && (
          <div className="">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;

import { useState } from "react";

const CommentsPage = function () {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("../api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async function () {
    const response = await fetch("../api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    fetchComments();
  };

  const deleteComment = async function (commentId) {
    const response = await fetch(`../api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div className="w-10/12 mx-auto mb-10">
      <input
        className="border-2 border-gray-700 rounded-lg mr-3"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={submitComment}
        className="block px-3 mt-1 border-2 text-white bg-gray-700 rounded-lg"
      >
        Submit Comment
      </button>
      <button
        onClick={fetchComments}
        className="block px-3 mt-1 border-2 text-white bg-gray-700 rounded-lg"
      >
        Load Comments
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1 className="inline">
              {comment.id} {comment.comments}
            </h1>
            <button
              onClick={() => deleteComment(comment.id)}
              className="px-3 mt-1 border-2 text-white bg-red-700 rounded-lg"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;

const CommentId = function (props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <p>{props.comments}</p>
    </div>
  );
};

export default CommentId;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

// export async function getStaticProps() {}

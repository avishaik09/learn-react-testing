const CommentList = ({ allcomments }) => {
  if (allcomments.length == 0) {
    return <h6>No Comments</h6>;
  }

  return (
    <div>
      <ul>
        {allcomments.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;

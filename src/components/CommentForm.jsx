import { useState } from "react";
import "./commentForm.css";

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  // const addComment = () => {
  //   setComments((prev) => [...prev, { id: Date.now(), text: text }]);
  //   setText("");
  // };

  const postComment =async () => {

    const response =await fetch("http://localhost:5173/addcomments",{
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({text:text})
    })
const result= await response.json();
setComments((prev) => [...prev, result]);
  //   setText("");
  };

  return (
    <div>
      <h2>Comment Form </h2>
      <input
        placeholder="write your comment here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agree to terms and conditions</label>
      <button
        id="btn"
        disabled={!checked || !text}
        onClick={postComment}
      >
        comment
      </button>
    </div>
  );
};

export default CommentForm;

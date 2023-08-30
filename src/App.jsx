import CommentForm from "./components/CommentForm"
import "./App.css"
import { useState } from "react"
import CommentList from "./components/CommentList"


function App() {
 const [comments,setComments]=useState([])
  return (
    <div>
{/* 
     
      <div data-testid="myrootdiv">
    <h1> react testing</h1>
    <input type="text" placeholder='Enter name'  /> */}
    {/* <button>Click Me</button> */}
    {/* <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>
    </div>   */}
 <CommentForm setComments={setComments}/>
 <CommentList allcomments={comments}/>



    </div>
  )
}

export default App

import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './todo';
function App() {
  const [todos,setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    getTodos();
  },[])
  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress
      })));
    });
  }

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add(
      {
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      }
    );
    setTodoInput("");
  }

  return (
    <div className="App"
      style={
        {
          
          width: "100%",
         
          
        }
      }
     >
      <div
        style={{
    
        display: "flex",
        flexDirection: "column",
        
          alignItems: "center",
          width: "900px",
          
          height: "auto",
        
    margin: "auto",
          backgroundColor: "#312E81",
           borderRadius:"2rem",
       
      }}>
        <h1 style={{
        color:"#EEF2FF",
      }}> TODO APP</h1>
        <form>
          <TextField id="outlined-basic" label="Write a TODO" variant="outlined"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value)
            
          }}
          style={{
            width: "90vw", maxWidth: "500px",
            backgroundColor: "#FFFBEB",
            color:"black"
            
          }} />
          <Button type="submit" variant="contained" color="primary" onClick={addTodo}
            style={{
           
              
            display:"none"
          }}>
  Primary
</Button>
        </form>
        <div  style={{
          width:"90vw", maxWidth:"500px",marginTop:"24px"
          }}>
        {todos.map((todo) => (
          <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
        ))}</div>
        </div>
    </div>
  );
}

export default App;

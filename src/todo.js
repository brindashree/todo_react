 import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'
import "./todo.css"
 
export default function TodoListItem({ todo, inprogress, id }) {
     
    function toggleInProgress() {
        db.collection("todos").doc(id).update({
            inprogress:!inprogress
        })
    }
    function deleteTodo() {
        db.collection("todos").doc(id).delete();
    }
     return (
         <div className="tile">
             <ListItem>
                 <ListItemText primary={todo} secondary={ inprogress ? "In progress":"Completed"}/>
             </ListItem>
             <Button onClick={toggleInProgress}>
                 { inprogress ? "Done":"Undone"}
             </Button>
             <Button style={{
color:"red",
             }}
                 onClick={deleteTodo}>
                 X
             </Button>
            
         </div>
     )
 }
 

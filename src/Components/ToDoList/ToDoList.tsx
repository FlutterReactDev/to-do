import { List } from "@mui/material"
import ToDoListItem from "../ToDoListItem/ToDoListItem"
function TodoList():JSX.Element {
    return (
        <List>
            <ToDoListItem/>
           
            <ToDoListItem/>
           
            <ToDoListItem/>
        </List>
    )
}


export default TodoList
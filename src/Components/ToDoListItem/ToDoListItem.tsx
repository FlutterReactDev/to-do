import { ListItem,ListItemText, IconButton, Divider  } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function ToDoListItem() {
  return (
    <>
    <ListItem>
  
      <ListItemText>
        Some todo name
      </ListItemText>
      <IconButton color="success">
        <CheckBoxIcon  />
      </IconButton>
      <IconButton>
        <EditIcon  />
      </IconButton>
      <IconButton color="error">
        <DeleteIcon  />
      </IconButton>
    </ListItem>
        <Divider />
        </>
  );
}

export default ToDoListItem;

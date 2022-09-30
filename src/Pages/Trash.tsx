import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
export default function Trash() {
  function renderItems() {
    return (
        <>
        <ListItem>
          <ListItemText>Some todo name</ListItemText>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        
        </ListItem>
        <Divider />
        </>
    )
  }
  return (
    <List>
        {renderItems()}
    </List>
  );
}

import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
export default function Done() {
  function renderItems() {
    return (
      <>
        <ListItem>
          <ListItemText>Some todo name</ListItemText>
          <IconButton color="success">
            <CheckBoxIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </>
    );
  }
  return <List>{renderItems()}</List>;
}

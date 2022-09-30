import { Button, Stack, TextField } from "@mui/material";

function SearchBar(): JSX.Element {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="outlined-basic"
        fullWidth
        label="Enter Title"
        multiline
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </Stack>
  );
}

export default SearchBar;

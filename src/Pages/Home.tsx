import SearchBar from "../Components/SearchBar/SearchBar";
import TodoList from "../Components/ToDoList/ToDoList";

function Home(): JSX.Element {
  return (
    <>
      <SearchBar />
      <TodoList/>
    </>
  );
}

export default Home;

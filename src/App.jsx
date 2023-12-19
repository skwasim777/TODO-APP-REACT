import ToDo from "../components/ToDo";
import AddToDo from "../components/AddToDo";
import ToDoItem1 from "../components/TodoItem1";
import ToDoItem2 from "../components/ToDoItem2";
import "../components/App.css";
function App() {
  return (
    <center class="todo-container">
      <ToDo />
      <AddToDo />
      <div className="item-container">
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;

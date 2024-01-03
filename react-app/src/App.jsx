import { useState, useEffect } from "react";
import axios from "axios";
import { getEnv } from "./lib/helper";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos when the component mounts
    const fetchTodos = async () => {
      try {
        const todoApi = getEnv("VITE_API_URL") + "/api/todos";
        const response = await axios.get(todoApi);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import { getEnv } from "./lib/helper";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const fetchTodos = async () => {
    try {
      const todoApi = getEnv("VITE_API_URL") + "/api/todos";
      const response = await axios.get(todoApi);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    // Fetch todos when the component mounts
    fetchTodos();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <div className="todo-app-container">
        <h1>Todo App</h1>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <span>{todo.task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

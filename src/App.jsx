import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./styles.css";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("todos"));
        return saved || [];
    });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addTodo(text) {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    }

    function toggleTodo(id) {
    setTodos(
        todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
        )
    );
    }

    function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
    }
    return (
    <div className="container">
        <h1>To-Do List</h1>
        <TodoForm addTodo={addTodo} />

        <ul className="todo-list">
        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        ))}
        </ul>
    </div>
    );
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo ${todo.done ? "done" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>

      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        ✕
      </button>
    </li>
  );
}

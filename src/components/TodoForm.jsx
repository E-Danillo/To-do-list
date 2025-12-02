import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

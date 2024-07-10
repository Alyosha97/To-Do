import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  return (
    <form
      className="TodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (value !== '') {
          addTodo(value);
          setValue('');
        }
        e.target.reset();
      }}
    >
      <input
        type="text"
        placeholder="What is the task today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        type="submit"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        Add Task
      </button>
    </form>
  );
}
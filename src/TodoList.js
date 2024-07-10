import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        task: todo,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="TodoList">
      <h1>Best To-Do List 😉 !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          task={todo}
          key={todo.id}
          toggleCompleted={toggleCompleted}
          deleteTodo={(task) => {
            setTodos(todos.filter((t) => t.id !== task.id));
          }}
        />
      ))}
    </div>
  );
}
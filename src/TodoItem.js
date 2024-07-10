import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ task, deleteTodo, toggleCompleted }) {
  return (
    <div
      onClick={() => {
        toggleCompleted(task.id);
      }}
      className={`${task.isCompleted ? "completed" : "todo"}`}
    >
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(task);
          }}
          icon={faTrash}
        />
        <FontAwesomeIcon icon={faCheckToSlot} />
      </div>
    </div>
  );
}

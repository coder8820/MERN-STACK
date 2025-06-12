import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, handleDeleteTodo, onhandleCheckTodo }) => {
  return (
    <li className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <FaCheck />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDeleteForever onClick={() => onhandleCheckTodo(data)} />
      </button>
    </li>
  );
};

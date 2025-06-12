import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data,chacked, handleDeleteTodo, onhandleCheckTodo }) => {
  return (
    <li className="todo-item">
      <span className={chacked? "checkList": "noCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onhandleCheckTodo(data)} >
        <FaCheck />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

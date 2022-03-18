import { Link } from "react-router-dom";

export const ToDoListItem = ({ todo }) => {
  return (
    <li className="bg-orange-200 rounded-full text-left m-1 pl-2 py-0.5 min-w-max">
      <Link to={"/todos/:id" + todo._id}>{todo.description}</Link>
    </li>
  );
};

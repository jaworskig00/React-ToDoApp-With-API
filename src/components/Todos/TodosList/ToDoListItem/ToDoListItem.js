export const ToDoListItem = ({ todo }) => {
  return (
    <li className="bg-orange-200 rounded-full text-left m-1 pl-2 py-0.5 min-w-max">
      {todo.description}
    </li>
  );
};

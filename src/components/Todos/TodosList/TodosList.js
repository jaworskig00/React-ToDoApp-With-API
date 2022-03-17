import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDoListPlaceholder } from "./ToDoListPlaceholder/ToDoListPlaceholder";

export const TodosList = ({ todos }) => {
  return (
    <main>
      <ul>
        {todos.length ? (
          todos.map((todo) => {
            return <ToDoListItem key={todo._id} todo={todo} />;
          })
        ) : (
          <ToDoListPlaceholder />
        )}
      </ul>
    </main>
  );
};

import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { ToDoListPlaceholder } from './ToDoListPlaceholder/ToDoListPlaceholder';

export const TodosList = ({ todos }) => {
  return (
    <main>
      <ul>
      {todos.length ? (
        todos.map((todo) => {
        return <ToDoListItem todo={ todo }/> ; //Id: {todo._id}
        })
      ) : (
        <ToDoListPlaceholder />
      )}
      </ul>
    </main>
  )
}
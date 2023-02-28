import TodoItem from './TodoItem';

const TodoList = ({
  todoProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todoProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
export default TodoList;

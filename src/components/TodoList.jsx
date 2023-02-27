import TodoItem from "./TodoItem"
const TodoList = ( { todoProps, handleChange, delTodo } ) => {
    return (
        <ul>
        {todoProps.map((todo) =>(
            <TodoItem key={todo.id} itemProp={todo}  handleChange={handleChange}
            delTodo={delTodo}
            />
        ))}
        </ul>
    )
}
export default TodoList;
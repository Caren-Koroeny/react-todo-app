import TodoItem from "./TodoItem"
const TodoList = ( { todoProps, handleChange } ) => {
    return (
        <ul>
        {todoProps.map((todo) =>(
            <TodoItem key={todo.id} itemProp={todo}  handleChange={handleChange} />
        ))}
        </ul>
    )
}
export default TodoList;
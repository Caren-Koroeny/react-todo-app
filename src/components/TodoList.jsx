import TodoItem from "./TodoItem"
const TodoList = ( { todoProps, setTodos } ) => {
    return (
        <ul>
        {todoProps.map((todo) =>(
            <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
        ))}
        </ul>
    )
}
export default TodoList;
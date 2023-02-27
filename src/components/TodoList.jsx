import TodoItem from "./TodoItem";
const TodoList = ( { todoProps } ) => {
    return (
        <ul>
        {todoProps.map((todo) =>(
            <TodoItem key={todo.id} itemProp={todo} />
        ))}
        </ul>
    )
}
export default TodoList;
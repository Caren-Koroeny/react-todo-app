const TodoList = ( { todoProps } ) => {
    return (
        <ul>
        {todoProps.map((todo) =>(
            <li>{todo.title}</li>
        ))}
        </ul>
    )
}
export default TodoList;
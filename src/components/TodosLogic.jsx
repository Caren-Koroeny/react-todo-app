const TodosLogic = () => {
    const todos = [
        {
            id: 1,
            title: "Set up development environment",
            completed: true,
        },
        {
            id: 2,
            title: "Develop website content",
            completed: false,
        },
        {
            id: 3,
            title: "Deploy it on a live server",
            completed: false,
        },
    ];
    return (
        <ul>
        {todos.map((todo) =>(
            <li>{todo.title}</li>
        ))}
        </ul>
    )
}

export default TodosLogic;
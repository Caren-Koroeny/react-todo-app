import InputTodo from "./InputTodo";
import TodosList from "./TodoList"
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
        <div>
        <InputTodo />
        <TodosList todoProps={todos} />
        
        </div>
    )
}

export default TodosLogic;
import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodoList"
const TodosLogic = () => {
    const [todos, setTodos] =  useState([
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
    ]);
    return (
        <div>
        <InputTodo />
        <TodosList todoProps={todos} setTodos={setTodos} />
        
        </div>
    )
}

export default TodosLogic;
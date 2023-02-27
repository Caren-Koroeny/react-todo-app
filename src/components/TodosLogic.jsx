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
    const handleChange = (id) => {
        setTodos((prevState) =>
        prevState.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        }))
    };
    return (
        <div>
        <InputTodo />
        <TodosList todoProps={todos} handleChange={handleChange} />
        
        </div>
    )
}

export default TodosLogic;
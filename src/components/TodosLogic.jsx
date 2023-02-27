import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] =  useState([
        {
            id: uuidv4(),
            title: "Set up development environment",
            completed: true,
        },
        {
            id: uuidv4(),
            title: "Develop website content",
            completed: false,
        },
        {
            id: uuidv4(),
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

    const addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      };
      
    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
              return todo.id !== id;
            }),
          ]);
        console.log('deleted', id);
      };

    return (
        <div>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todoProps={todos} handleChange={handleChange} 
        delTodo={delTodo}
        />
        
        </div>
    )
}

export default TodosLogic;
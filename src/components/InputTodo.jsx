import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
      }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(title);
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Add todo..."
        value={title}
        onChange={handleChange}
        />
        <button>Submit</button>
        </form>
    )
};
export default InputTodo;
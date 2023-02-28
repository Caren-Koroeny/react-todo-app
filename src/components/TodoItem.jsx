import { useState } from 'react';
import styles from "../styles/TodoItem.module.css";
const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      const [editing, setEditing] = useState(false);

      const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
        let editMode = {};
        if(editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }
    return (
        <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
        <input
         type="checkbox"
         checked={itemProp.completed}
         onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}></span>
        { itemProp.title }

        </div>
        <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
    />
        </li>
        
    )
};

export default TodoItem;
import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue.trim(), completed: false }]);
            setInputValue('');
        }
    }

    function handleDelete(index) {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = true;
        setTodos(updatedTodos);
    }

    function handleEdit(index) {
        setIsEditing(index);
        setEditValue(todos[index].text);
    }

    function handleEditChange(event) {
        setEditValue(event.target.value);
    }

    function handleEditSubmit(index) {
        const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, text: editValue } : todo));
        setTodos(updatedTodos);
        setIsEditing(null);
        setEditValue('');
    }

    return (
        <div className="todo-list-container">
            <div className="input-container">
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button className="add-button" onClick={handleSubmit}>Add Todo</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={handleEditChange}
                                />
                                <button className="save-button" onClick={() => handleEditSubmit(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span className="todo-text">{todo.text}</span>
                                {!todo.completed && (
                                    <div className="button-container">
                                        <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                                        <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                                    </div>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;






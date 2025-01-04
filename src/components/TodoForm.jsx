import React, { useState } from "react";
import axios from "axios";
import "./TodoForm.css";

const TodoForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState("");

    const addTask = async (e) => {
        e.preventDefault();
        if (title) {
            await axios.post("http://localhost:8080/api/todos", { title });
            setTitle("");
            refreshTasks();
        }
    };

    return (
        <form onSubmit={addTask} className="todo-form">
            <input
                type="text"
                placeholder="Enter a task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
            />
            <button type="submit" className="btn btn-primary btn-block add-btn">
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;

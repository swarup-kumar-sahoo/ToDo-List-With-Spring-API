import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TodoList.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get("http://localhost:8080/api/todos");
        setTasks(response.data);
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8080/api/todos/${id}`);
        fetchTasks();
    };

    return (
        <div className="todo-container">
            <h1 className="title">Your List</h1>
            <ul className="todo-list">
                {tasks.map((task) => (
                    <li key={task.id} className="todo-item">
                        <span className="task-title">{task.title}</span>
                        <button
                            className="btn btn-danger btn-sm delete-btn"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

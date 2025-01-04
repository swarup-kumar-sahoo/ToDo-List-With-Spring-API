import React from "react";
import TodoList from "../src/components/TodoList";
import TodoForm from "../src/components/TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [refreshFlag, setRefreshFlag] = React.useState(false);

    const refreshTasks = () => setRefreshFlag(!refreshFlag);

    return (
        <div className="container">
            <h1 className="text-center my-4">To-Do List App</h1>
            <TodoForm refreshTasks={refreshTasks} />
            <TodoList key={refreshFlag} />
        </div>
    );
};

export default App;

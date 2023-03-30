import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };
        getTasks();
    }, []);

    // Fetch Tasks from server
    const fetchTasks = async () => {
        const response = await fetch("http://localhost:5000/tasks");
        const data = await response.json();
        return data;
    };

    // Fetch Task from server
    const fetchTask = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await response.json();
        return data;
    };

    // Add Task
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });

        const data = await res.json();

        setTasks([...tasks, data]);

        // const id = Math.floor(Math.random() * 10000) + 1;

        // const newTask = { id, ...task };
        // setTasks([...tasks, newTask]);
    };

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });
        setTasks(
            tasks.filter((task) => {
                return task.id !== id;
            })
        );
    };

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updatedTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder,
        };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        });

        const data = await res.json();
        console.log(data);
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, reminder: !task.reminder }
                    : task;
            })
        );
    };

    return (
        <div className="container">
            <Header
                formActive={showForm}
                onAdd={() => setShowForm(!showForm)}
            />
            {showForm && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No Task To Show"
            )}
        </div>
    );
}

export default App;

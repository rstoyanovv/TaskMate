import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArchivedTask from "./ArchivedTask";

export default function Archive() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/api/fetch-all-tasks');
                const archivedTasks = response.data;
                setTasks(archivedTasks);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTasks();
    }, []);

    console.log(tasks);

    return (
        <div className="archive">
            <ul className="list-group">
                {tasks.map((task) => (
                    <ArchivedTask key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}
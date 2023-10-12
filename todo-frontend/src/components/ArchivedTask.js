export default function ArchivedTask({ task }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const completedStyle = {
        color: task.is_completed ? 'green' : 'red',
    };

    return (
        <li className="list-group-item" key={task.id} style={{ backgroundColor: '#f0f0f0', paddingBottom:'0.5rem' }}>
            <div style={{marginBottom: '0.2rem'}}>
                {task.title} 
            </div>
            <div>
                Completed: <span style={completedStyle}>{task.is_completed ? "YES" : "NO"}</span> | Date: {formatDate(task.date_of_creating)}
            </div>
        </li>
    );
}


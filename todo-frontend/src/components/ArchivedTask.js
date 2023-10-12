export default function ArchivedTask({ task }) {
    return (
        <li className="list-group-item" key={task.id}
            style={{ backgroundColor: '#f0f0f0' }}>
            {task.title}--{task.is_completed}--{task.date_of_creating}
        </li>
    );
}
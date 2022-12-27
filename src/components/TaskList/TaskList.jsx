import { useEffect, useState } from "react";

import List from "./List";

export default function TaskList() {

    const [taskList, setTaskList] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCounter(counter + 1), 1000);

        if (counter !== 0) {
            const tasksWithNewExpireTimes = taskList.map(task => {
                return {
                    ...task,
                    expireTime: task.expireTime - 1
                }
            });
            const newTaskList = tasksWithNewExpireTimes.filter(task => (task.expireTime > 0));
            setTaskList(newTaskList);
        }
        
        return () => clearInterval(interval);
    }, [counter]);

    function handleClick() {
        setTaskList(taskList.concat({
            text: `Задание`,
            expireTime: 9 + Math.ceil(Math.random() * 21)
        }));
    }
    
    return (
        <div className="task-list">
            <button className="task-list__button" onClick={handleClick}>Добавить задачу</button>
            <List list={taskList} />
        </div>
    );
}
import TaskList from "./TaskList/TaskList";

export default function Content() {
    return (
        <main className="content">
            <div className="container">
                <div className="content__body">
                    <TaskList />
                </div>
            </div>
        </main>
    );
}
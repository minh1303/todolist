import Card from "../Basic/Card";
import Todo from "../Todo/Todo";
import style from "./TaskList.module.css";
const TaskList = ({
  tasks,
  setTasks,
}: {
  tasks: Array<{ id: number; title: string; description: string }>;
  setTasks: CallableFunction;
}) => {
  const taskList = tasks.map((task) => {
    return (
      <Todo
        setTasks={setTasks}
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
      ></Todo>
    );
  });

  return <Card className={style.Card}>{taskList}</Card>;
};

export default TaskList;

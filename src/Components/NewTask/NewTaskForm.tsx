import style from "./NewTaskForm.module.css";
import Card from "../Basic/Card";
import { useState } from "react";
const NewTaskForm = ({ onTaskChange }: { onTaskChange: CallableFunction }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onClick = () => {
    if (title === "") return alert("You have to input title");
    if (description === "") return alert("You have to input description");

    onTaskChange((state: {
      id: number;
      title: string;
      description: string;
  }[]) => {
        return state.concat({id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1,title: title, description:description})
    })
  };

  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  return (
    <Card>
      <h3>New Task</h3>
      <div className={style.container}>
        <label htmlFor="title">Title</label>
        <input onChange={onTitleChange} id="title" value={title}></input>
        <label htmlFor="description">Task</label>
        <input
          onChange={onDescriptionChange}
          id="description"
          value={description}
        ></input>
        <button onClick={onClick}>Add</button>
      </div>
    </Card>
  );
};

export default NewTaskForm;

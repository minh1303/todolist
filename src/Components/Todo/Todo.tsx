import { useState } from "react";
import style from "./Todo.module.css";
const Todo = ({
  id,
  title,
  description,
  setTasks,
}: {
  id: number;
  title: string;
  description: string;
  setTasks: CallableFunction;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const onClick = () => {
    setTasks(
      (state: Array<{ id: number; title: string; description: string }>) => {
        return state.filter((task) => task.id !== id);
      }
    );
  };

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSave = () => {
    setTasks(
      (state: Array<{ id: number; title: string; description: string }>) => {
        return state.map((task) => {
          if (task.id !== id) return;
          return {id,title: newTitle, description: newDescription}
        });
      }
    );
    setIsEditing(false);
  };
  return (
    <div className={style.todo}>
      {!isEditing && <p>{title}</p>}
      {isEditing && (
        <>
          <label htmlFor="editingTitle">Title</label>
          <input
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            id="editingTitle"
            type="text"
            value={newTitle}
          />
        </>
      )}
      {!isEditing && <p>{description}</p>}
      {isEditing && (
        <>
          <label htmlFor="editingDescription">Description</label>
          <input
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
            id="editingDescription"
            value={newDescription}
            type="text"
          />
        </>
      )}

      {!isEditing && <button onClick={onClick}>Delete</button>}
      {!isEditing && <button onClick={onEdit}>Edit</button>}
      {isEditing && <button onClick={onSave}>Save</button>}
      {isEditing && <button onClick={onEdit}>Cancel</button>}
    </div>
  );
};

export default Todo;

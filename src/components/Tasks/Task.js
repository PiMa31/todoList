import React from 'react';

const Task = ({ id, label, done, changeTaskDone, deleteTask }) => {

  const htmlId = `task-${id}`;
  const htmlClass = done ? 'tasks__task tasks__task--done' : 'tasks__task';
  return (
    <li className={htmlClass}>
      <input
        id={htmlId}
        type="checkbox"
        checked={done}
        onChange={() => {
          console.log('checkbox modifiée, on veut modifier la propriété done de la tache');
          changeTaskDone(id);
        }}
      />
      <label htmlFor={htmlId}>
        {label}
      </label>
      <button
        className="task_delete"
        type="button"
        onClick={() => {console.log('la', {id}); deleteTask(id)}}>
        Supprimer
        </button>
    </li>
  );
};

export default Task;

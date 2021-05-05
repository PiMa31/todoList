import React from 'react';

const Task = ({ id, label, done, changeTaskDone }) => {

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
    </li>
  );
};

export default Task;

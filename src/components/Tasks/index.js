import React from 'react';

import './tasks.scss';

import Task from './Task';

const Tasks = ({tasksList, changeTaskDone}) => (
  <ul className="tasks">
    {
      tasksList.map((task) => (
        <Task key={task.id} {...task} changeTaskDone={changeTaskDone} />
      ))
    }
  </ul>
);

export default Tasks;

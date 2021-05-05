import React from 'react';

import './tasks.scss';

import Task from './Task';

const Tasks = ({tasksList, changeTaskDone, deleteTask}) => (
  <ul className="tasks">
    {
      tasksList.map((task) => (
        <Task key={task.id} {...task} changeTaskDone={changeTaskDone} deleteTask={deleteTask}/>
      ))
    }
  </ul>
);

export default Tasks;

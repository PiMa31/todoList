import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faWindowClose, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const Task = ({ id, label, done, changeTaskDone, deleteTask }) => {

  const htmlId = `task-${id}`;
  const htmlClass = done ? 'tasks__task tasks__task--done' : 'tasks__task';
  return (
    <Fade bottom>
      <li className={htmlClass}>
        <label htmlFor={htmlId}>
          {label}
        </label>
        <div className="li__button">
          {!done &&
            <button
              className="task_validate"
              type="button"
              onClick={() => { changeTaskDone(id) }}>
              <FontAwesomeIcon icon={faCheckSquare} size="2x" color="green" />
            </button>
          }
          {done &&
            <button
              className="task_validate"
              type="button"
              onClick={() => { changeTaskDone(id) }}>
              <FontAwesomeIcon icon={faUndoAlt} size="2x" color="orange" />
            </button>
          }
          <button
            className="task_delete"
            type="button"
            onClick={() => { console.log('la', { id }); deleteTask(id) }}>
            <FontAwesomeIcon icon={faWindowClose} size="2x" color="red" />
          </button>
        </div>
      </li>
    </Fade>
  );
};

export default Task;

import React from 'react';
import './form.scss';

const Form = ({ submitTask, newTaskLabel, setNewTaskLabel }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitTask();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={newTaskLabel}
        type="text"
        className="form__input"
        placeholder="Ajouter une tâche"
        autoComplete="off"
        onChange={(event) => {
          setNewTaskLabel(event.target.value);
        }}
      />
    </form>
  );
};

export default Form;

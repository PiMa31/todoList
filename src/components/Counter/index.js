import React from 'react';

import './counter.scss';

const Counter = ({ count }) => {
  let message;

  if (count === 0) {
    message = 'Aucune tâche en cours';
  }
  else if (count === 1) {
    message = 'Une tâche en cours';
  }
  else {
    message = `${count} tâches en cours`;
  }


  return (
    <div className="counter">
      {message}
    </div>
  );
  
};

export default Counter;

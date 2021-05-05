// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Tasks from 'src/components/Tasks';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';

import taskListData from 'src/data/tasks';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasksList: [],
      newTaskLabel: '',
    };
  }
  addTask = () => {
    const { tasksList, newTaskLabel } = this.state;
    const newTache = {
      id: this.getNextTaskId(),
      label: newTaskLabel,
      done: false,
    };
    const newTasksList = [...tasksList, newTache];

    this.setState({
      tasksList: newTasksList,
      newTaskLabel: '',
    });

    console.log(this.state.tasksList);
  };

  setNewTaskLabel = (newTaskLabelFromForm) => {
    this.setState({
      newTaskLabel: newTaskLabelFromForm,
    });
  }

  getNextTaskId = () => {
    // on récupère la liste des tâches
    const { tasksList } = this.state;

    if (tasksList.length > 0) {
      // on ne récupère que les id
      const tasksIds = tasksList.map((task) => (task.id));

      console.log(tasksIds);

      // on récupère l'id max :
      const maxId = Math.max(...tasksIds);

      // on renvoie le max + 1
      return maxId + 1;
    }

    return 1;
  }
  updateTaskState = (taskId) => {
    const { tasksList } = this.state;
    const updatedTaskList = tasksList.map((task) => {
      if (task.id === taskId) {
        const updatedTask = {
          id: task.id,
          label: task.label,
          done: !task.done,
        };

        return updatedTask;
      }
      return task;
    });
    this.setState({
      tasksList: updatedTaskList,
    });

  }

  render() {
    const { tasksList, newTaskLabel } = this.state;
    const undoneTasksCount = tasksList.filter((task) => (!task.done)).length;

    return (
      <div className="app">
         <Form
          newTaskLabel={newTaskLabel}
          setNewTaskLabel={this.setNewTaskLabel}
          submitTask={this.addTask}
        />
        <Counter count={undoneTasksCount} />
        <Tasks changeTaskDone={this.updateTaskState} tasksList={tasksList} />
      </div>
    );
  }
}
// == Export
export default App;

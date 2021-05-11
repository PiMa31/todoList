// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Tasks from 'src/components/Tasks';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';

// import taskListData from 'src/data/tasks';

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
    },
      this.saveStateToLocalStorage);
  };

  setNewTaskLabel = (newTaskLabelFromForm) => {
    this.setState({
      newTaskLabel: newTaskLabelFromForm,
    });
  }

  getNextTaskId = () => {
    const { tasksList } = this.state;

    if (tasksList.length > 0) {
      const tasksIds = tasksList.map((task) => (task.id));
      const maxId = Math.max(...tasksIds);
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
    },
      this.saveStateToLocalStorage);
  }
  deleteTaskState = (id) => {
    const newArr = [...this.state.tasksList].filter(task => task.id !== id);
    this.setState({tasksList: newArr},
      this.saveStateToLocalStorage);
}

  saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state))
  }


  componentDidMount() {
    const state = localStorage.getItem('state')
    if (state) {
      this.setState(JSON.parse(state))
    }
  }

  render() {
    const { tasksList, newTaskLabel } = this.state;
    const undoneTasksCount = tasksList.filter((task) => (!task.done)).length;

    return (
      <div className="app">
      <h1>ToDoList</h1>
        <Form
          newTaskLabel={newTaskLabel}
          setNewTaskLabel={this.setNewTaskLabel}
          submitTask={this.addTask}
        />
        <Counter count={undoneTasksCount} />
        <Tasks changeTaskDone={this.updateTaskState} tasksList={tasksList} deleteTask={this.deleteTaskState} />
      </div>
    );
  }
}
// == Export
export default App;

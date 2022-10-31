import React, { useState } from 'react'

import InputTask from '../input-task/input-task.component';
import QuickTask from '../quick-task/quick-task.component';

import './quick-task-list.styles.css';

const  QuickTaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    // console.log(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) { return; }

    
    setTasks(prev => prev.map(item => (
      item.id === taskId ? newValue : item
      ))
    );
  };

  const removeTask = id => {
    const removeArr = [...tasks].filter(task => task.id !== id);

    setTasks(removeArr);
  };

  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.isComplete = !task.isComplete
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  

  return (
    <div className='quick-task-list-container'>
      <div className='quick-task-list-title'>
        QuickTasks
      </div>
      <QuickTask
        tasks={tasks}
        updateTask={updateTask}
        removeTask={removeTask}
        completeTask={completeTask}
      />
      <InputTask
      onSubmit={addTask}
      />
    </div>
  )
}

export default QuickTaskList;
import React, { useState } from 'react'

import { BiAddToQueue } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

import MainTask from '../main-task/main-task.component';
import MainTaskPopup from '../main-task-popup/main-task-popup.component';

import './tasker.styles.css';

const Tasker = () => {
  const [mainTasks, setMainTasks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState([]);

  const openPopup = () => {
    setIsPopupOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(true);
  }

  const addMainTask = mainTask => {
    console.log('add a main task');
    const newMainTasks = [mainTask, ...mainTasks];
    setMainTasks(newMainTasks);
  };

  // const updateMainTask = (mainTaskId, newValue) => {
  //   setMainTasks(prev => prev.map(item => (
  //     item.id === mainTaskId ? newValue : item
  //     ))
  //   );
  // };

  const removeMainTask = id => {
    const removeArr = [...mainTasks].filter(mainTask => mainTask.id !== id);

    setMainTasks(removeArr);
  }

  return (
    <div className='tasker-container'>
      <div className='tasker-header-container'>
        <div className='tasker-title'>
          Taskers
        </div>
        <BiAddToQueue 
          className='add-tasker-icon'
          onClick={openPopup}
        />
      </div>
      <MdCancel 
          className={!isPopupOpen ? 'cancel-icon-open' : 'cancel-icon-closed'}
          onClick={closePopup}
      />
      <div className='taskers-body-container'>
        <MainTaskPopup 
          isPopupOpen={isPopupOpen}
        />
        <MainTask 
        mainTasks={mainTasks}
        removeMainTask={removeMainTask}
        // updateMainTask={updateMainTask}
        />
        {/* <div className='main-task-container'>Tasker_2</div>
        <div className='main-task-container'>Tasker_3</div>
        <div className='main-task-container'>Tasker_4</div>
        <div className='main-task-container'>Tasker_5</div>
        <div className='main-task-container'>Tasker_6</div>
        <div className='main-task-container'>Tasker_5</div>
        <div className='main-task-container'>Tasker_4</div>
        <div className='main-task-container'>Tasker_5</div>
        <div className='main-task-container'>Tasker_6</div>
        <div className='main-task-container'>Tasker_5</div> */}
      </div>
    </div>
  )
}

export default Tasker;
import React from 'react'

import { MdDelete, MdModeEdit } from 'react-icons/md';
import './main-task.styles.css';

const MainTask = ({ mainTasks, removeMainTask }) => {

  return mainTasks.map((mainTask, index) => (
    <div className='main-task-container'>
      <div className='main-task-title-container'>
        <div className='main-task-title'>
          Tasker {index + 1}
        </div>
        <div className='icon-container'>
          <MdModeEdit 
            className='edit-mainT-icon'
          />
          <MdDelete
            className='delete-mainT-icon'
            onClick={() => removeMainTask(mainTask.id)}
          />
        </div>
      </div>
      <div className='main-task-body'>
        <div className=''> TASKS </div>
      </div>
    </div>
  ));
};

export default MainTask;
import React from 'react'

import { BiAddToQueue } from 'react-icons/bi';

import './tasker.styles.css';

const Tasker = () => {
  return (
    <div className='tasker-container'>
      <div className='tasker-header-container'>
        <div className='tasker-title'>
          Taskers
        </div>
        <BiAddToQueue className='add-tasker-icon' />
      </div>
      <div className='taskers-body-container'>
        <div className='main-task-container'>
          <div className='main-task-title-container'>
            <div className='main-task-title'>
              Log In Feature
            </div>
            <div> edit </div>
          </div>
          <div className='main-task-body'>
            <div className=''> TASKS </div>
          </div>
        </div>
        <div className='main-task-container'>Tasker_2</div>
        <div className='main-task-container'>Tasker_3</div>
        <div className='main-task-container'>Tasker_4</div>
        <div className='main-task-container'>Tasker_5</div>
        <div className='main-task-container'>Tasker_6</div>
        <div className='main-task-container'>Tasker_5</div>
        <div className='main-task-container'>Tasker_4</div>
        <div className='main-task-container'>Tasker_5</div>
        <div className='main-task-container'>Tasker_6</div>
        <div className='main-task-container'>Tasker_5</div>
      </div>
    </div>
  )
}

export default Tasker;
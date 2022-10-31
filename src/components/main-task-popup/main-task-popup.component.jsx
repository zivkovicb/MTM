import React from 'react';

import './main-task-popup.styles.css';

const MainTaskPopup = ({isPopupOpen}) => {
  

  return (
    <div className={ !isPopupOpen ? 'main-task-popup-open' : 'main-task-popup-closed'}>
      <div className='main-task-popup-container'>
        <div className='main-task-popup-header'>
          <div className='main-task-popup-title'>
            <input 
              className='main-task-title-input'
              placeholder='Enter Main Task Title'
            />
          </div>
        </div>
        <div className='main-task-popup-body-contianer'>
          
          <div className='task-list'>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #2</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #3</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
            <div className='task-container'>
              <div className='task-title'>Task #1</div>
            </div>
          </div>
          <div className='task-input-container'>
            <input
            className='task-input'
            placeholder='Add a new Task' 
            />
            <button>ADD</button>
          </div>
          <textarea
          type='textarea'
          className='sub-main-task'
          placeholder='Add a Note'
          />
          <button className='add-main-task-button'>ADD MAIN TASK</button>

        </div>
      </div>
    </div>
  )
}

export default MainTaskPopup;
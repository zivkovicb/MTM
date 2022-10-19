import React, { useState } from 'react'

import InputTask from '../input-task/input-task.component';

import { MdDelete, MdModeEdit, MdStickyNote2 } from 'react-icons/md';

import './quick-task.styles.css';

const  QuickTask = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id:null,
    value: '',
    isNoteOpen: false
  });

  const submitUpdate = value => {
    updateTask(edit.id, value)
    setEdit({
      id:null,
      value: ''
    });
  };

  if(edit.id) {
    return <InputTask 
    edit={edit} 
    onSubmit={submitUpdate} 
    />
  };

  return tasks.map((task, index) => (
    <div 
    key={index} 
    className={task.isComplete 
      ? 'quick-task-complete'
      : 'quick-task'}
    >
      <div 
      className={task.isComplete 
        ? 'task-text-complete'
        : 'task-text'}
      key={task.id} 
      onClick={() => completeTask(task.id)}
      >
        {task.text}
      </div>
      <div className='icons'>
        <MdStickyNote2 
          className='note-icon'
          // onClick={() => openNote({
          //   id: task.id,
          //   value: task.text
          //   }
          //)}
        />
        <MdModeEdit 
          className='edit-icon'
          onClick={() => setEdit({
            id: task.id,
            value: task.text
            })
          }
        />
        <MdDelete 
        className='delete-icon'
        onClick={() => removeTask(task.id)}
        />
      </div>
    </div>
    
  ));
};

export default QuickTask;
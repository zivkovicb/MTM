import React, { useState, useEffect, useRef } from 'react'

const  InputTask = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });  this is to foucs on the input 

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              className='quick-task-input'
              name='text'
              type='text'
              placeholder='Update this quick task'
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <button>UPDATE</button>
            <button>CANCEL</button>
          </>
        ) : (
          <>
            <div className='input-container'>
              <div className='input-status-container'>
                <input
                  className='quick-task-input'
                  name='text'
                  type='text'
                  placeholder='Add a quick task'
                  value={input}
                  onChange={handleChange}
                  ref={inputRef}
                />
                <div className='status-container'>
                  <div className='status-title'>
                    STATUS
                  </div>
                  <div className='status-buttons'>
                    <div className='status-button-r'></div>
                    <div className='status-button-y'></div>
                    <div className='status-button-b'></div>
                  </div>
                </div>
              </div>
                <div className='input-buttons-container'>
                  <button>ADD NEW</button>
                  <button>CANCEL</button>
                </div>
              </div>
          </>
        )}
      </form>

    </>
  );
};

export default InputTask;
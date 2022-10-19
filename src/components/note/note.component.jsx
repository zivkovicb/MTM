import React, { useState } from 'react'

const  Note = () => {
  const [note, setNote] = useState({
    id: note.id,
    value: note.text
  });

  return (
    <div className='note-container'>
      
      <p>{value}</p>
    </div>
  )
}

export default Note;
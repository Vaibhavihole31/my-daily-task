import React from 'react'
import "./TaskCard.css"
import axios from 'axios'

function TaskCard({taskId, title, content }) {

  async function deleteTask() {
    const response = await axios.delete(`/task/${taskId}`, {
      taskId: taskId
    })
    console.log(response);

    window.location.reload()
  }

  return (
    <div className='card-note'>
      <h6 className='card-note-title'>{title}</h6>
      <p className='card-note-content'>{content}</p>
      <span className='deleteButton' onClick={deleteTask}>❌</span>
    </div>
  )
}

export default TaskCard

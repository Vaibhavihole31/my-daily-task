import React from 'react'
import "./TaskCard.css"
import axios from 'axios'
import swal from 'sweetalert';
import DeleteImg from './delete.png'

function TaskCard({taskId, title, content }) {

  async function deleteTask() {
    const response = await axios.delete(`/task/${taskId}`, {
      taskId: taskId
    })
    console.log(response);

    swal({
      title: "Deleted!",
      text: "Your Task has been deleted",
      icon: "success",
    })

    window.location.reload()
  }

  return (
    <div className='card-note'>
      <h6 className='card-note-title'>{title}</h6>
      <p className='card-note-content'>{content}</p>
      <span className='deleteButton' onClick={deleteTask}><img className='deleteImg' src={DeleteImg}/></span>
    </div>
  )
}

export default TaskCard

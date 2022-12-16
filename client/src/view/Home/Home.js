import React, { useState, useEffect } from 'react'
import TaskCard from '../../components/TaskCard/TaskCard';
import axios from 'axios';
import './Home.css'

function Home() {

  const [tasks, setTasks] = useState("");

  useEffect(() => {
    axios.get('/task').then(res => {
      setTasks(res.data);
      console.log(res.data);
    })
  }, [])


  return (
    <>

      <div className='container'>
        <div className=' app-title-container '>

          <h2 className='app-title text-center'>📝 Daily Task</h2>
        </div>

        <div className='app-task-container'>
          <div className='row'>
            {
              tasks && tasks.map((task, index) => {
                return (
                  <>
                    <TaskCard
                      taskId={task._id}
                      title={task.title}
                      content={task.content}
                    />
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
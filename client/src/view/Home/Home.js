import React, { useState, useEffect} from 'react'
import TaskCard from '../../components/TaskCard/TaskCard';
import axios from 'axios';
import './Home.css'

function Home() {

  const [tasks, setTasks] =  useState("");
  
  useEffect(() => {
    axios.get('/task').then(res => {
      setTasks(res.data);
      console.log(res.data);
    })
  },[])

  return (
    <>
    <div className='contanier'>
    <div className='app-title-container'>
        <h1 className='app-title'>📝 Daily Task</h1>
      </div>
      <div className='row'>
      <div className='notes-container '>
        {
          tasks && tasks.map((task, i) => {
            return (
              <>
              <TaskCard 
              key = {i}
              title = {task.title}
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
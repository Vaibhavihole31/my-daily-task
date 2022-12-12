import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css'
import Task from './task.png';
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';

function AddTask() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addTask() {
    const response = await axios.post('/task', {
      title: title,
      content: content
    })

    if(response.data.success)
    {
      swal("Task Added Successfully!!");
      navigate('/');
    }
    else{
      swal("Invalid Credientials")
    }

    setTitle("");
    setContent("");
  }

  return (
    <>
      <div className='container'>
        <div className=' card-add-task mb-5'>
        <div className='row'>
          <h2 className='text-center mt-3'>Add Task 📝</h2>
          <div className='col-md-6'>
            <div className='mt-5 '>
              <img
                src={Task}
                alt=""
                className="task-image mx-auto d-block"
              />
            </div>
          </div>
          <div className='col-md-6 mt-3 '>
            <form>

              <div className="mb-3 mt-5" >
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder='Title'
                  value={title} onChange={(e) => { setTitle(e.target.value) }}
                />
              </div>
               <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  placeholder="Content"
                  value={content} onChange={(e) => { setContent(e.target.value) }}
                />
              </div>
              <button className="addtask-page-btn w-100 mb-5" type="button" onClick={addTask}>
                <i class="fa-solid fa-right-to-bracket"></i>  Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AddTask
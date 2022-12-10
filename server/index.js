import express from 'express';
import dotennv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Task from './models/Task.js';

dotennv.config();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB 📦');
});

app.get('/health', (req, res) => {
  res.json({
      success: true,
  });
})


app.post('/task', async(req,res) => {
  const {title, content} = req.body;

  const newTask = new Task({
   title,
   content
  })

  const savedTask = await newTask.save();

  res.json({
    success: true,
    data: savedTask,
    message: "New Task is added Successfully!"
  })
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
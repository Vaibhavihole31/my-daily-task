import express from 'express';
import dotennv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Task from './models/Task.js';
const __dirname = path.resolve();

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

  if (!title) {
    return res.send({
      success: false,
      message: "title cannot be empty",
    });
  }

  if (!content) {
    return res.send({
      success: false,
      message: "content cannot be empty",
    });
  }

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

app.get('/task', async(req,res) => {
  {
    const taskData = await Task.find();
    res.send(taskData);
}
})

app.delete('/task/:id',  async (req, res) => {
  const id = req.params.id;
  let task;
  try {
      task = await Task.findByIdAndRemove(id)
  } catch (err) {
      console.log(err);
  }
  if (!task) {
      return res.status(404).json({ message: 'Unable To Delete By this Id' })
  }
  return res.status(200).json({ message: 'Product Successfully Deleted' });
})

app.put('/task/:id', async (req, res) => {
  let result = await Task.updateOne(
      {_id :req.params.id},
      {
          $set : req.body
      }
  )
  res.send(result)

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
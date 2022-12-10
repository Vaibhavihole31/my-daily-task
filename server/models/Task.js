import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title cannot be empty'] },
  content: { type: String, required: [true, 'content cannot be empty'] }
},
  {
    timestamps: true
  }
)

const Task = mongoose.model('Task', TaskSchema);
export default Task;
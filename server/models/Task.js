const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title cannot be empty'] },
  content: { type: String, required: [true, 'content cannot be empty'] }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Task', TaskSchema)
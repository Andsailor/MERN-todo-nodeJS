import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
    task: { type: String, required: true },
    isTaskDone: { type: Boolean, default: false }
});

export default mongoose.model('Todo', Todo);

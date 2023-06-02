import Todo from './Todo.js';

class PostController {
    async add(req, res) {
        try {
            const { task } = req.body;
            const todo = await Todo.create({ task });
            res.json(todo);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: 'id not specified' });
            }
            const todo = await Todo.findByIdAndDelete(id);
            return res.json(todo);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async get(req, res) {
        try {
            const todos = await Todo.find();
            return res.json(todos);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const todo = req.body;
            if (!todo._id) {
                res.status(400).json({ message: 'id not specified' })
            }
            const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, { new: true })
            return res.json(updatedTodo);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();

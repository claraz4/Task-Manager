// TASKS:
// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks)         - create a new task
// app.get('/api/v1/tasks/:id)      - get a single task
// app.patch('/api/v1/tasks/:id)    - edit a task
// app.delete('/api/v1/tasks/:id)   - delete a task

const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ 
            "success": true,
            "data": tasks
         });
    } catch(error) {
        res.status(500).json({
            "success": false,
            "msg": error
        })
    }
}

const createNewTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ 
            "success": true,
            "data": task
         });
    } catch(error) {
        res.status(500).json({
            "success": false,
            "msg": error
        })
    }
}

const getSingleTask = async (req, res) => {
    try {
        const { id:taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        
        if (!task) {
            return res.status(404).json({
                "success": false,
                "msg": "task id not found"
            })
        }

        res.status(200).json({ 
            "success": true,
            "data": task
         });

    } catch(error) {
        res.status(500).json({
            "success": false,
            "msg": error
        })
    }
}

const editTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const newTask = req.body;

        const task = await Task.findOneAndUpdate({ _id:taskID }, newTask, {
            new: true,
            runValidators: true
        })
        
        if (!task) {
            return res.status(404).json({
                "success": false,
                "msg": "task id not found"
            })
        }

        res.status(200).json({
            "success": true,
            "updatedData": task
        })

    } catch (error) {
        res.status(500).json({
            "success": false,
            "msg": error
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });

        if (!task) {
            return res.status(404).json({
                "success": false,
                "msg": "task id not found"
            })
        }

        res.status(200).json({
            "success": true,
            "deletedData": task
        })

    } catch (error) {
        res.status(500).json({
            "success": false,
            "msg": error
        })
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    editTask,
    deleteTask
};
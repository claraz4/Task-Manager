const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    getSingleTask,
    editTask,
    deleteTask
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createNewTask);
router.route('/:id').get(getSingleTask).patch(editTask).delete(deleteTask);

module.exports = router;
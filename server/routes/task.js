require('../keys');

const express = require('express');

const Task = require('../models/tasks.model');
const { verificationToken } = require('../middlewares/validation-token');

const app = express()

app.post('/createTask', verificationToken, (req, res) => {

    body = req.body

    let task = new Task({
        tittle: body.tittle,
        taskPriority: body.taskPriority,
        dueDate: body.dueDate,
        postedBy: req.user
    })

    task.save((err, taskDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            user: taskDB
        })
    })
})

app.post('/tasks', verificationToken, (req, res) => {
    let id = req.user._id;

    Task.find({ postedBy: id }, (err, myTasks) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            myTasks
        });

    }).populate("postedBy", "_id name")
});

app.post('/deleteTasks/:id', verificationToken, (req, res) => {

    let idTask = req.params.id;
    console.log(idTask);

    Task.findByIdAndDelete(idTask, (err, taskDeleted) => {

        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        }

        if (!taskDeleted) {
            res.status(400).json({
                ok: false,
                err: {
                    messege: 'task not found'
                }
            });
        }

        res.json({
            ok: true,
            taskDeleted
        });
    });
});

module.exports = app
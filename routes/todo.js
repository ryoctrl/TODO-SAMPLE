const express = require('express');
const router = express.Router();
const todo = require('../models').todo;

router.get('/', async(req, res) => {
    const todos = await todo.findAll().then(todos => todos.map(todo => todo.dataValues));
    res.status(200).render('todo', { todos: JSON.stringify(todos) });
});

router.post('/create', async(req, res) => {
    const { title } = req.body
    const newTodo = await todo.create({ title });
    console.log(newTodo.dataValues);
    res.status(200).json(newTodo.dataValues);
});

router.post('/delete', async(req, res) => {
    const { id } = req.body;

    const query = {
        where: {
            id,
        }
    };
    const result = await todo.destroy(query);
    if (result === 1) {
        res.status(200).json({ id });
    } else {
        res.status(500).json({});
    }
});

module.exports = router;
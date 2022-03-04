import express from 'express';
const router = express.Router();
import controller from '../controller/TodoController';

router.post('/addtodo',controller.addTodo);

router.get('/gettodo', controller.getTodo );

router.delete('/deletetodo/:id', controller.deleteTodo);

router.put('/updatetodo', controller.updateTodo);

export = router;


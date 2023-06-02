import { Router } from 'express';
import PostController from './PostController.js';

const router = new Router();

router.post('/todos', PostController.add);
router.get('/todos', PostController.get);
router.delete('/todos/:id', PostController.delete);
router.put('/todos', PostController.update);

export default router;

import express from 'express'
import { UsersControllers } from './controllers/UsersControllers';


const router = express.Router();

router.get('/users', UsersControllers.index);
router.post('/users', UsersControllers.sotre)
router.put('/users/:id', UsersControllers.update)

export { router }
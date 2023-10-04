import express from 'express'
import { UsersControllers } from './controllers/UsersControllers';


const router = express.Router();

router.get('/users', UsersControllers.index);

export { router }
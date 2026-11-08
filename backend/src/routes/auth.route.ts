import {Router} from 'express'
import { getme, Login } from '../controllers/auth.controller.js'
import { authmiddle } from '../middlewares/auth.middleware.js'
const router = Router()
router.post('/login', Login)
router.get('/get-user',authmiddle, getme )
export default router
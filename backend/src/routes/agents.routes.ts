import {Router} from 'express'
import { authmiddle } from '../middlewares/auth.middleware.js'
const agentRouter = Router()
import { createAgent, getAgents, getAgentById,deleteAgent } from '../controllers/agent.controller.js'

agentRouter.post('/', authmiddle, createAgent)
agentRouter.get('/', authmiddle, getAgents)
agentRouter.get('/:id', authmiddle, getAgentById)
agentRouter.delete('/:id', authmiddle, deleteAgent)
export default agentRouter
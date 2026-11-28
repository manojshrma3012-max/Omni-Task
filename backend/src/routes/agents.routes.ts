import {Router} from 'express'
import { authmiddle } from '../middlewares/auth.middleware.js'
const agentRouter = Router()
import { createAgent, getAgents, getAgentById,deleteAgent } from '../controllers/agent.controller.js'

agentRouter.post('/create-agent', authmiddle, createAgent)
agentRouter.get('/getagents', authmiddle, getAgents)
agentRouter.get('/get-agent/:id', authmiddle, getAgentById)
agentRouter.delete('/delete-agent/:id', authmiddle, deleteAgent)
export default agentRouter
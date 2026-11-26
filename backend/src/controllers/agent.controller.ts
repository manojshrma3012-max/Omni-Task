import TryCatch from "../middlewares/TryCatch.js";
import Agent from "../models/agent.model.js";
import type { AuthenticatedRequest, userpayload } from '../middlewares/auth.middleware.js'
import { Types } from "mongoose";


export const createAgent = TryCatch(async(req,res)=>{
    const {userid,name,knowledgebase,instructions,tools} = req.body;
    if(!userid || !name || !knowledgebase || !instructions || !tools){
        res.status(400).json({
            message:"All fields are required"
        })
        return
    }
    const agent = await Agent.create({
        userid,
        name,
        knowledgebase,
        instructions,
        tools
    })
    res.status(201).json({
        message:"Agent created successfully",
        agent
    })
})

export const getAgents = TryCatch(async(req:AuthenticatedRequest,res)=>{
    const user = req.user?._id
    if(!user){
        res.status(401).json({
            message:"Unauthorized"
        })
        return
    }
    const agents = await Agent.find({ userid: user }).populate('userid','name email image');
    console.log("Fetched agents:", agents); 
    res.status(200).json({
        agents
    })
})
export const getAgentById = TryCatch(async(req:AuthenticatedRequest,res)=>{
    const agentid = req.params.id;
    const user = req.user?._id
    if(!user){
        res.status(401).json({
            message:"Unauthorized"
        })
        return
    }
    if(typeof agentid !== "string" || !Types.ObjectId.isValid(agentid)){
        res.status(400).json({
            message:"Invalid agent ID"
        })
        return
    }
    const agent = await Agent.findOne({ _id: new Types.ObjectId(agentid), userid: user });
    if(!agent){
        res.status(404).json({
            message:"Agent not found"
        })
        return
    }
    res.status(200).json({
        agent
    })
})
import TryCatch from "../middlewares/TryCatch.js";
import Agent from "../models/agent.model.js";


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
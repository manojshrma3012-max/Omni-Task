import axios from "axios";
import { serviceurl } from '../main.tsx'


export const createAgent = async({name,knowledgebase,instructions,tools}: { name: string; knowledgebase: string; instructions: string; tools: string[] })=>{
    try {
       const { data } = await axios.post(String(serviceurl) + "/api/agents/create-agent", {
            name,
            knowledgebase,
            instructions,
            tools
        },
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
        return data.agent;
    } catch (error) {
        console.error("Error creating agent:", error);
    }
}
        
export const getAgents = async () => {
    try {
        const { data } = await axios.get(String(serviceurl) + "/api/agents",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return data.agents;
    } catch (error) {
        console.error("Error fetching agents:", error);
    }
};
export const getAgentById = async (id: string) => {
    try {
        const { data } = await axios.get(String(serviceurl) + `/api/agents/get-agent/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return data.agent;
    } catch (error) {
        console.error("Error fetching agent:", error);
    }
};
export const deleteAgent = async (id: string) => {
    try {
        const { data } = await axios.delete(String(serviceurl) + `/api/agents/delete-agent/${id}`,{ 
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return data.agent;
    } catch (error) {
        console.error("Error deleting agent:", error);
    }
};
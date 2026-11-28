
export interface agent  {
    userid:string
    name: string;
    knowledgebase: string;
    instructions: string;
    tools: string[];
    isActive: boolean;
}
import {Schema,Document} from 'mongoose';
import mongoose from 'mongoose';
interface agent extends Document {
    userid: mongoose.Types.ObjectId;
    name: string;
    knowledgebase: string;
    instructions: string;
    tools: string[];
    isActive: boolean;
}

const userSchema = new Schema<agent>({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
         required:true
    },
    name: { type: String, required: true, trim: true },
    knowledgebase: { type: String, required: true },
    instructions: { type: String, required: true },
    tools:[
        {
            type: String,
            trim:true
        }
    ],
    isActive: { type: Boolean, default: true },
    
   
},{
    timestamps: true,
});
const Agent = mongoose.model<agent>('Agent', userSchema);
export default Agent;
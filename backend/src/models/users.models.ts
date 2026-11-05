import {Schema,Document} from 'mongoose';
import mongoose from 'mongoose';
interface IUser extends Document {
    name: string;
    email: string;
    image: string; 
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true,lowercase: true, trim: true },
    image: { type: String, required: false },
},{
    timestamps: true,
});
const User = mongoose.model<IUser>('User', userSchema);
export default User;
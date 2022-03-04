import { timeStamp } from 'console';
import {Schema, model} from 'mongoose';
interface Todo {
    title: string;
    description: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const schema = new Schema<Todo>({
    title: { type: String, required: true },
    description: { type: String, required: true },
  },{ timestamps: true });
  
  // 3. Create a Model.
  export const TodoModel = model<Todo>('Todo', schema);
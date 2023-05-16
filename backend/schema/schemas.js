import mongoose, {Schema} from "mongoose";


const list = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})
const TodoList = mongoose.model('todo',list)
export default TodoList ;
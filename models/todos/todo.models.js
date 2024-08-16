import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo'
            }
        ], // Array od Sub-Todo
    }, {timestamp: true}
);

export const Todo = mongoose.Schema('Todo', todoSchema)
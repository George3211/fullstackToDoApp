const mongoose = require('mongoose');

// Define the schema for tasks
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task title is required'], // Task must have a title, otherwise returns this message
        trim: true, // Removes whitespace from the beginning and end
    },

    description: {
        type: String,
        default: '', // If no description is provided, it defaults to an empty string
    },
    
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'], // Status can only be one of these three
        default: 'pending', // Default status is 'pending'
    },

    priority: {
        type: String,
        enum: ['low', 'medium', 'high'], // Priority can only be 'low', 'medium', or 'high'
        default: 'medium', // Default priority is 'medium'
    },

    isCompleted: {
        type: Boolean,
        default: false, // Boolean field to quickly check if the task is completed
    },
}, {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

// Create the Task model from the schema
const Task = mongoose.model('Task', taskSchema);

// Export the Task model
module.exports = Task;

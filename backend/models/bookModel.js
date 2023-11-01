import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String, 
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        isbn: {
            type: Number,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);
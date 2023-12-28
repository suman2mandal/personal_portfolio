import mongoose,{Schema} from 'mongoose';

const certificateSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    provider: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    grade: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    date: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    link: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
})

export const Certificates = mongoose.model('Certificates', certificateSchema,'Certificates');
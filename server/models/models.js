import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {
        required: false,
        type: String,
    },
    twitterId: {
        required: false,
        type: String,
    },
    githubId: {
        required: false,
        type: String,
    },
    username: {
        required: true,
        type: String,
    },
    authType: {
        required: true,
        type: String,
    },
    address: {
        required: false,
        type: String,
    }
});

const appointmentSchema = new Schema({
    location: {
        required: false,
        type: String,
    },
    booked: {
        required: false,
        type: Boolean,
    },
    time: {
        required: false,
        type: Date,
    },
    user_id: {
        required: false,
        type: String,
    },
    mlOfBloodDonated: {
        required: false,
        type: Number,
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
const Appointment = mongoose.model("Appointment", appointmentSchema);

export { User, Appointment };
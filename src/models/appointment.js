const mongoose = require("mongoose");

// Define the appointment schema
const appointmentSchema = new mongoose.Schema({
    donorName: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },

    donorEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hospital_name: {
        type: String,
        },
    hospital: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    }
});

// Creating a new collection for appointments
const Appointment = mongoose.model("AppointmentData", appointmentSchema);
module.exports = Appointment;

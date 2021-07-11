import mongoose from 'mongoose';
import { Appointment, User } from '../models/models.js';

// const dbConfig = process.env.MONGODB_URI;
const localdbConfig = 'mongodb://127.0.0.1:27017/blood-bank';

mongoose.connect(localdbConfig, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

let appointmentSeed = [
  {
    location: "Canadian Blood Services",
    time: "2021-07-11T11:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  },
  {
    location: "Hudson’s Bay Centre",
    time: "2021-07-22T12:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  },
  {
    location: "Create Cord Blood Bank",
    time: "2021-07-23T12:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  },
  {
    location: "Insception Lifebank - Mount Sinai",
    time: "2021-07-24T12:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  },
  {
    location: "Progenics Cord Blood Cryobank",
    time: "2021-07-25T12:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  },
  {
    location: "Cells for Life",
    time: "2021-07-26T12:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  },
  {
    location: "Canadian Blood Services, King St",
    time: "2021-07-27T12:05:18.011+00:00",
    booked: false,
    user_id: '',
    mlOfBloodDonated: 0
  }
];

Appointment.deleteMany({})
  .then(() => Appointment.insertMany(appointmentSeed))
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
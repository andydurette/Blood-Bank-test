import { Appointment, User } from '../models/models.js';
import express from 'express';

const apiRouter = express.Router();

// Provide a living address to be kept in your user profile
// arg1 = _id is the user_id
// arg2 = address is the users place of residence
apiRouter
.route('/UserAddressUpdate')
.put(({body}, res) => {
  console.log("body", body)
  User.findOneAndUpdate({_id: body._id}, { $set : { address: body.address }}, { new: true, useFindAndModify: false })
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Route to create a new appointment
// Location and time need to be provided
apiRouter
  .route('/createNewAppointment')
  .post(({body}, res) => {
    console.log(body);
    const createAppointment = new Appointment({
      location: body.location,
      time: body.time,
      booked: false,
      mlOfBloodDonated: 0
    });

    createAppointment.save()
      .then((result) => {
        res.send(result);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Route to view all appointments past and present
// Location and time need to be provided
  apiRouter
  .route('/adminViewAppointments')
  .get(({query}, res) => {
    // console.log("query", query)
    Appointment.find({})
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// Route to update an appointments blood collection
apiRouter
.route('/adminAppointmentCollectionUpdate')
.put(({body}, res) => {
  console.log("body", body)
  // Change to booked to true or false and add or remove user to/from the booking
  Appointment.findOneAndUpdate({_id: body._id}, { $set : { mlOfBloodDonated: body.mlOfBloodDonated }}, { new: true, useFindAndModify: false })
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Route to view all appointments that appear in the future
// Location and time need to be provided
// Two filters are in place to stop an event from being booked or modified after it's date has passed
// 1. Only unbooked sessions show up 
// 2. Only sessions that are a future date are passed
  apiRouter
  .route('/publicViewAppointments')
  .get(({query}, res) => {
    // console.log("query", query)
    Appointment.find({booked: { $ne: true }, time: { $gt: new Date() }})
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // Route to return all appointments that a user booked in a descending order
  apiRouter
  .route('/userAppointment')
  .get(({query}, res) => {
    // console.log("query", query)
    Appointment.find({ user_id: query.user_id, time: { $gt: new Date() } })
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // Route to add a users booking of an appointment
  apiRouter
  .route('/userConfirmAppointment')
  .put(({body}, res) => {
    console.log("body", body)
    // Change to booked to true or false and add or remove user to/from the booking
    Appointment.findOneAndUpdate({_id: body._id}, { $set : { booked: true, user_id: body.user_id }}, { new: true, useFindAndModify: false })
    .then((data) => {
      res.json(data);
    }) 
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // Route to clear a users booking of an appointment
  apiRouter
  .route('/userCancelAppointment')
  .put(({body}, res) => {
    console.log("body", body)
    // Change to booked to true or false and add or remove user to/from the booking
    Appointment.findOneAndUpdate({_id: body._id}, { $set : { booked: false, user_id: body.user_id }}, { new: true, useFindAndModify: false })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  export default apiRouter;
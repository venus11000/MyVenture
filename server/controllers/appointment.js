const Appointment = require("../models/appointment");

exports.createAppointment = (req, res) => {
    Appointment.create(req.body)
        .then(appointment => res.json(appointment))
        .catch(error => res.status(400).json({ "message": "Unable to Create", error }));
}

exports.getAppointments = (req, res) => {
    Appointment.aggregate([{
        $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "product_details"
        }
    }, {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user_details"
        }
    }]).exec((err, response) => {
        console.log(response);
        res.send(response);
    })
    // Appointment.find({})
    //     .then(response => {
    //         res.send(response);
    //     })
    //     .catch(error => {
    //         res.status(400).json({ "message": "Unable to fetch", error });
    //     })
}

exports.getAppointmentsByUserId = (req, res) => {
    // Appointment.find({ userId: req.params.userId })
    Appointment.aggregate([{
        $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "product_details"
        }
    }]).exec((err, response) => {
        console.log(response);
        res.send(response);
    })
        // .then(response => {
        //     res.send(response);
        // })
        // .catch(error => {
        //     res.status(400).json({ "message": "Unable to fetch", error });
        // })
}

exports.getAppointmentById = (req, res) => {
    Appointment.findById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}

exports.removeAppointment = (req, res) => {
    let appointmentId = req.params.id;
    Appointment.remove({ _id: appointmentId })
        .then(appointment => res.json(appointment))
        .catch(error => res.status(400).json({ "message": "Unable to Remove", error }));
}

exports.modifyAppointment = (req, res) => {
    let appointmentId = req.params.id;
    Appointment.updateOne({ _id: appointmentId }, req.body, { upsert: true })
        .then(appointment => res.json(appointment))
        .catch(error => res.status(400).json({ "message": "Unable to Modify", error }));
}

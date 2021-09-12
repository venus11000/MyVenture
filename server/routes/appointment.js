const express = require("express");
const router = express.Router();

const { createAppointment, getAppointments, getAppointmentsByUserId, getAppointmentById, modifyAppointment, removeAppointment } = require("../controllers/appointment");

router.get("/list", getAppointments);
router.get("/user/:userId/list", getAppointmentsByUserId);
router.get("/:id", getAppointmentById);
router.post("/create", createAppointment);
router.delete("/:id/remove", removeAppointment);
router.put("/:id/edit", modifyAppointment);

module.exports = router;
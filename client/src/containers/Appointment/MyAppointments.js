import { useEffect, useState } from "react";
import { deleteAppointmentById, getAppointmentByUserId } from "../../core/appointment";
import "./style.css";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [cancelResponse, setCancelResponse] = useState();

    useEffect(() => {
        getMyAppointments();
    }, [cancelResponse]);

    const getMyAppointments = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        getAppointmentByUserId(user._id)
            .then((response) => {
                setAppointments(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const cancelAppointment = (appointmentId) => {
        deleteAppointmentById(appointmentId)
            .then((response) => {
                setCancelResponse(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="appointments-container">
            <div className="page-header">My Appointments</div>
            <div className="appointments__card-wrapper">
                {appointments.length === 0 ? <div>No Appointments yet...</div>
                    : appointments.map((appointment) => {
                        return (
                            <div className="appointments__card">
                                {appointment.product_details &&
                                    appointment.product_details.length > 0 &&
                                    <div><b>Product Name:</b>{appointment.product_details[0].name}</div>
                                }
                                <div><b>Status:</b>{appointment.status}</div>
                                <div className="btn-primary" onClick={() => cancelAppointment(appointment._id)}>Cancel Appointment</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default MyAppointments;
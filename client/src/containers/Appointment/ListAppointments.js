import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAppointments } from "../../core/appointment";
import "./style.css";

const ListAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        getAppointments()
            .then((appointments) => {
                if (appointments && appointments.length > 0) setAppointments(appointments);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // const deleteCategory = async (id) => {
    //     let response = await deleteCategoryById(id)

    //     if (response.ok === 1) {
    //         getCategories()
    //             .then((categories) => {
    //                 if (categories && categories.length > 0) setCategories(categories);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }

    return (
        <div className="category-list__container">
            <div className="page-header">All Appointments ({appointments.length})</div>
            <table className="category-list__card">
                <thead>
                    <tr className="category-list__tr">
                        <th className="category-list__th">Id</th>
                        <th className="category-list__th">Product Name</th>
                        <th className="category-list__th">User Details</th>
                        <th className="category-list__th">Status</th>
                        <th className="category-list__th">Created At</th>
                        {/* <th className="category-list__th">Actions</th> */}
                    </tr>
                </thead>
                {appointments.length > 0 ?
                    appointments.map(appointment => <tr className="category-list__tr">
                        <td className="category-list__td">{appointment._id}</td>
                        <td className="category-list__td">
                            {appointment.product_details &&
                                appointment.product_details.length > 0 &&
                                <div>
                                    {appointment.product_details[0].name}
                                </div>}
                        </td>
                        <td className="category-list__td">
                            {appointment.user_details &&
                                appointment.user_details.length > 0 &&
                                <div>
                                    <div><b>Name: </b>{appointment.user_details[0].name}</div>
                                    <div><b>Email: </b>{appointment.user_details[0].email}</div>
                                    <div><b>Mobile: </b>{appointment.user_details[0].mobile}</div>
                                </div>}
                        </td>
                        <td className="category-list__td">{appointment.status}</td>
                        <td className="category-list__td">{appointment.createdAt}</td>
                        {/* <td className="category-list__td">
                            <Link className="action-btn" to={"/category/edit/" + appointment._id}><i class="far fa-edit"></i></Link>
                            <button className="action-btn" onClick={() => deleteCategory(appointment._id)}><i class="far fa-trash-alt"></i></button>
                        </td> */}
                    </tr>) :
                    <tr>No Data...</tr>}
            </table>
        </div>
    );
}

export default ListAppointments;
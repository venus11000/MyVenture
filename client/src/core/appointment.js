export const getAppointments = async () => {
    try {
        let response = await fetch("http://localhost:8000/api/appointment/list")
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getAppointmentById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/appointment/" + id)
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getAppointmentByUserId = async (userId) => {
    try {
        let response = await fetch(`http://localhost:8000/api/appointment/user/${userId}/list`)
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const createAPpointment = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/appointment/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const editAppountment = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/appointment/" + data.id + "/edit", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const deleteAppointmentById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/appointment/" + id + "/remove", {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
export const register = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/user/signup", {
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

export const login = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/user/signin", {
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
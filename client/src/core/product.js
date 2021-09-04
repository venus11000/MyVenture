export const getProducts = async (params = {}) => {
    try {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');

        let response = await fetch("http://localhost:8000/api/product/list?" + query, {

        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getProductByProductId = async (params) => {
    try {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');

        let response = await fetch("http://localhost:8000/api/product/product-details?" + query, {

        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const searchProducts = async (params) => {
    try {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');

        let response = await fetch("http://localhost:8000/api/product/search?" + query, {

        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const deleteProductById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/product/" + id + "/remove", {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const createProduct = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/product/create", {
            method: "POST",
            headers: { 'Content-Type': 'multipart/form-data' },
            body: data
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
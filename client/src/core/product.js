export const getProducts = async (params) => {
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
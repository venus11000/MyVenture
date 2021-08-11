export const getCategories = async () => {
    try {
        let response = await fetch("http://localhost:8000/api/category/list")
        console.log(response);
        return response.json();
    } catch(e) {
        console.log(e);
    }
}

export const getSubCategories = async (categoryId) => {
    try {
        let response = await fetch("http://localhost:8000/api/category/" + categoryId + "/sub-categories")
        console.log(response);
        return response.json();
    } catch(e) {
        console.log(e);
    }
}
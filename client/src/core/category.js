export const getCategories = async () => {
    try {
        let response = await fetch("http://localhost:8000/api/category/list")
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getCategoryById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/category/" + id)
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const createCategory = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/category/create", {
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

export const editCategory = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/category/" + data.id + "/edit", {
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

export const deleteCategoryById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/category/" + id + "/remove", {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getSubCategories = async () => {
    try {
        let response = await fetch("http://localhost:8000/api/sub-category/list")
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getSubCategoriesByCategoryId = async (categoryId) => {
    try {
        let response = await fetch("http://localhost:8000/api/category/" + categoryId + "/sub-categories")
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const getSubCategoryById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/sub-category/" + id)
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export const createSubCategory = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/sub-category/create", {
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

export const editSubCategory = async (data) => {
    try {
        let response = await fetch("http://localhost:8000/api/sub-category/" + data.id + "/edit", {
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

export const deleteSubCategoryById = async (id) => {
    try {
        let response = await fetch("http://localhost:8000/api/sub-category/" + id + "/remove", {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(response);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
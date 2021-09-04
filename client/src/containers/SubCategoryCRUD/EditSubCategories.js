import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../../components/Alert";
import { editSubCategory, getSubCategoryById, getCategories } from "../../core/category";
import "./CreateSubCategory.css";

const EditSubCategory = () => {
    const [categories, setCategories] = useState([]);
    const [fields, setFields] = useState({
        name: "",
        key: "",
        categoryId: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        key: "",
        categoryId: ""
    });

    const [response, setResponse] = useState();

    const params = useParams();

    useEffect(async () => {
        const response = await getCategories();
        setCategories(response);

        let subCategory = await getSubCategoryById(params.id);

        if (subCategory.name && subCategory.key) {
            let obj = {
                name: subCategory.name,
                key: subCategory.key,
                categoryId: subCategory.categoryId
            };
            setFields({ ...obj });
        }
    }, []);

    const handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        fields[fieldName] = fieldValue;
        if (fieldName === "name") fields.key = fieldValue?.toLowerCase().split(" ").join("_");
        errors.name = fieldValue ? "" : "Required!";

        setFields({ ...fields });
        setErrors({ ...errors });
    }

    const submit = async (event) => {
        event.preventDefault();
        if (fields.name && fields.key) {
            let response = await editSubCategory({ id: params.id, ...fields });
            console.log(response);

            setResponse(response);
        }
    }
    return (
        <div className="sub-create-category-form-container">
            <form className="sub-create-category-form">
                {response && <Alert type={response.ok ? "success" : "error"} >Successfully Updated!</Alert>}
                <h1 className="sub-create-category-form__header">Edit Sub Category</h1>
                <div className="input-container">
                    <div className="input-label">Name</div>
                    <input className="input-field" name="name" onChange={handleChange} value={fields.name} />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Key</div>
                    <input className="input-field" name="key" onChange={handleChange} value={fields.key} disabled />
                    {/* {errors.key && <div>{errors.key}</div>} */}
                </div>

                <div className="input-container">
                    <div className="input-label">Choose Category</div>
                    <select className="input-field" name="categoryId" onChange={handleChange} value={fields.categoryId}>
                        <option value="">Select</option>
                        {categories.map(category => (<option value={category._id}>{category.name}</option>))}
                    </select>
                    {/* <input className="input-field" name="key" onChange={handleChange} value={fields.key} disabled /> */}
                    {/* {errors.key && <div>{errors.key}</div>} */}
                </div>

                <button className="sub-create-category-form__btn" onClick={submit}>Modify</button>
            </form>
        </div>
    );
}

export default EditSubCategory;
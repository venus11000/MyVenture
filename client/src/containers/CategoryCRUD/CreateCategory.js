import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Alert from "../../components/Alert";
import { createCategory } from "../../core/category";
import "./CreateCategory.css";

const CreateCategory = () => {
    const [fields, setFields] = useState({
        name: "",
        key: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        key: ""
    });

    const [response, setResponse] = useState();

    const handleChange = (event) => {
        // let fieldName = event.target.name;
        let fieldValue = event.target.value;

        fields.name = fieldValue;
        fields.key = fieldValue?.toLowerCase().split(" ").join("_");
        errors.name = fieldValue ? "" : "Required!";

        setFields({ ...fields });
        setErrors({ ...errors });
    }

    const submit = async (event) => {
        event.preventDefault();
        if (fields.name && fields.key) {
            let response = await createCategory(fields);
            console.log(response);

            setFields({
                name: "",
                key: ""
            });

            setResponse(response);
        }
    }
    return (
        <div className="create-category-form-container">
            <form className="create-category-form">
                {response && <Alert type={response._id ? "success" : "error"} >Successfully Created!</Alert>}
                <h1 className="create-category-form__header">Create Category</h1>
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

                <button className="create-category-form__btn" onClick={submit}>Create</button>
            </form>
        </div>
    );
}

export default CreateCategory;
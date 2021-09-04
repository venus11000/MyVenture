import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import { getCategories, getSubCategoriesByCategoryId } from "../../core/category";
import { createProduct } from "../../core/product";
import "./CreateProduct.css";

const EditSubCategory = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [fields, setFields] = useState({
        name: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
        areaOccupied: "",
        catId: "",
        subCatId: "",
        attachments: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
        areaOccupied: "",
        catId: "",
        subCatId: "",
        attachments: ""
    });

    const [response, setResponse] = useState();

    useEffect(async () => {
        const response = await getCategories();

        setCategories(response);
    }, []);

    useEffect(async () => {
        if (fields.catId) {
            const response = await getSubCategoriesByCategoryId(fields.catId);

            setSubCategories(response);
        }
    }, [fields.catId]);

    const handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        fields[fieldName] = fieldValue;
        errors[fieldName] = fieldValue ? "" : "Required!";

        setFields({ ...fields });
        setErrors({ ...errors });
    }

    const handleFileChange = (event) => {
        console.log(event.target.files);
        fields.attachments = event.target.files[0];
        errors.attachments = event.target.files ? "" : "Required!";

        setFields({ ...fields });
        setErrors({ ...errors });
    }

    const submit = async (event) => {
        event.preventDefault();
        if (
            fields.name &&
            fields.description &&
            fields.bedrooms &&
            fields.bathrooms &&
            fields.areaOccupied &&
            fields.catId &&
            fields.subCatId
        ) {
            const formData = new FormData();

            ["name",
                "description",
                "bedrooms",
                "bathrooms",
                "areaOccupied",
                "catId",
                "subCatId",
                "attachments"].map(key => {
                    formData.append(key, fields[key]);
                    return null;
                })

            console.log(fields, formData, formData.get("name"))

            let response = await createProduct(formData);
            console.log(response);

            // setFields({
            //     name: "",
            //     description: "",
            //     bedrooms: "",
            //     bathrooms: "",
            //     areaOccupied: "",
            //     catId: "",
            //     subCatId: "",
            //     attachments: ""
            // });

            setResponse(response);
        }
    }
    return (
        <div className="sub-create-category-form-container">
            <form className="sub-create-category-form">
                {response && <Alert type={response._id ? "success" : "error"} >{response.message}</Alert>}
                <h1 className="sub-create-category-form__header">Create Product</h1>
                <div className="input-container">
                    <div className="input-label">Name</div>
                    <input className="input-field" name="name" onChange={handleChange} value={fields.name} />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Description</div>
                    <input className="input-field" name="description" onChange={handleChange} value={fields.description} />
                    {errors.description && <div>{errors.description}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Bedrooms</div>
                    <input className="input-field" name="bedrooms" onChange={handleChange} value={fields.bedrooms} />
                    {errors.bedrooms && <div>{errors.bedrooms}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Bathrooms</div>
                    <input className="input-field" name="bathrooms" onChange={handleChange} value={fields.bathrooms} />
                    {errors.bathrooms && <div>{errors.bathrooms}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Area Occupied</div>
                    <input className="input-field" name="areaOccupied" onChange={handleChange} value={fields.areaOccupied} />
                    {errors.areaOccupied && <div>{errors.areaOccupied}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Choose Category</div>
                    <select className="input-field" name="catId" onChange={handleChange} value={fields.catId}>
                        <option value="">Select</option>
                        {categories && categories.map(category => (<option value={category._id}>{category.name}</option>))}
                    </select>
                    {/* <input className="input-field" name="key" onChange={handleChange} value={fields.key} disabled /> */}
                    {/* {errors.key && <div>{errors.key}</div>} */}
                </div>

                <div className="input-container">
                    <div className="input-label">Choose Sub Category</div>
                    <select className="input-field" name="subCatId" onChange={handleChange} value={fields.subCatId}>
                        <option value="">Select</option>
                        {subCategories && subCategories.map(category => (<option value={category._id}>{category.name}</option>))}
                    </select>
                    {/* <input className="input-field" name="key" onChange={handleChange} value={fields.key} disabled /> */}
                    {/* {errors.key && <div>{errors.key}</div>} */}
                </div>

                <div className="input-container">
                    <div className="input-label">Area Occupied</div>
                    <input className="input-field" type="file" name="attachments" accept="image/jpg, image/jpeg, image/png" multiple onChange={handleFileChange} />
                    {errors.attachments && <div>{errors.attachments}</div>}
                </div>

                <button className="sub-create-category-form__btn" onClick={submit}>Create</button>
            </form>
        </div>
    );
}

export default EditSubCategory;
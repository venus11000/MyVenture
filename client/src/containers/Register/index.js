import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Alert from "../../components/Alert";
import { register } from "../../core/auth";
import "./style.css";

const Register = () => {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const [response, setResponse] = useState();

    const handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        switch (fieldName) {
            case "name":
            case "email":
            case "mobile":
            case "password":
                fields[fieldName] = fieldValue;
                errors[fieldName] = fieldValue ? "" : "Required!";
                break;

            default:
                fields[fieldName] = fieldValue;
                errors[fieldName] = "";
                break;
        }
        setFields({ ...fields });
        setErrors({ ...errors });
    }

    const submit = async (event) => {
        event.preventDefault();
        if (fields.name && fields.password && fields.mobile && fields.email) {
            let response = await register(fields);
            console.log(response);

            setResponse(response);
        }
    }
    return (
        <div className="register-form-container">
            <form className="register-form">
                {response && <Alert type={response.user ? "success" : "error"} >Successfully Registered! <Link className="login-link" to="/login">Login</Link></Alert>}
                <h1 className="register-form__header">Register</h1>
                <div className="input-container">
                    <div className="input-label">Name</div>
                    <input className="input-field" name="name" onChange={handleChange} value={fields.name} />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Email</div>
                    <input className="input-field" name="email" onChange={handleChange} value={fields.email} />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Mobile Number</div>
                    <input className="input-field" name="mobile" onChange={handleChange} value={fields.mobile} />
                    {errors.mobile && <div>{errors.mobile}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Password</div>
                    <input className="input-field" name="password" onChange={handleChange} value={fields.password} />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <button className="register-form__btn" onClick={submit}>Register</button>
            </form>
            {localStorage.getItem("user") && <Redirect to={"/"} />}
        </div>
    );
}

export default Register;
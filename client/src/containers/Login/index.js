import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Alert from "../../components/Alert";
import { login } from "../../core/auth";
import "./style.css";

const Login = () => {
    const [fields, setFields] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const [response, setResponse] = useState();

    let history = useHistory();

    const handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        switch (fieldName) {
            case "email":
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
        if (fields.password && fields.email) {
            let response = await login(fields);
            if (response && response.token) {
                localStorage.setItem("token", response.token);
                history.push("/");
            } else {
                setResponse(response);
            }
        }
    }
    return (
        <div className="login-form-container">
            <form className="login-form">
                {response && response.error && <Alert type={"error"}>{response.error}</Alert>}
                <h1 className="login-form__header">Login</h1>
                <div className="input-container">
                    <div className="input-label">Email</div>
                    <input className="input-field" name="email" onChange={handleChange} value={fields.email} />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div className="input-container">
                    <div className="input-label">Password</div>
                    <input className="input-field" name="password" type="password" onChange={handleChange} value={fields.password} />
                    {errors.password && <div>{errors.password}</div>}
                </div>

                <button className="login-form__btn" onClick={submit}>Login</button>
            </form>
            {localStorage.getItem("token") && <Redirect to={"/"} />}
        </div>
    );
}

export default Login;
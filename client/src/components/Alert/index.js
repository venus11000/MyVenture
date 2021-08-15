import "./style.css";

const Alert = ({ children, type = "error" }) => {
    return (
        <div className={"alert-container " + (type && "alert-container__" + type)}>{children}</div>
    );
}

export default Alert;
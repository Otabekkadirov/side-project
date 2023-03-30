import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, formActive }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                onClick={onAdd}
                color={formActive ? "crimson" : "green"}
                text={formActive ? "Close" : "Add"}
            />
        </header>
    );
};

// CSS in JS
// const headingStyle = { color: "red", backgroundColor: "black" };

Header.defaultProps = {
    title: "Task tracker",
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;

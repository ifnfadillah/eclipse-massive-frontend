const Button = (props) => {
    const { onClick, children, classname, type, name } = props;
    return (
        <button
            onClick={onClick}
            className={classname}
            type={type}
            name={name}
        >
            {children}
        </button>
    );
};

export default Button;
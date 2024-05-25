const Button = (props) => {
    const { children, classname, type, name } = props;
    return (
        <button
            className={classname}
            type={type}
            name={name}
        >
            {children}
        </button>
    );
};

export default Button;
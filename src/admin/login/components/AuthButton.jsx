
const AuthButton = (props) => {
    const { children } = props;
    return (
        <button
            className={"w-full text-white bg-sky-500 hover:bg-sky-700 font-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-3 text-center"}
            type="submit"
            name="login"
        >
            {children}
        </button>
    );
};

export default AuthButton;
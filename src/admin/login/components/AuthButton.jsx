/* eslint-disable react/prop-types */
const AuthButton = (props) => {
    const { children } = props;
    return (
        <button
            className={"w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-3 text-center"}
            type="submit"
            name="login"
        >
            {children}
        </button>
    );
};

export default AuthButton;
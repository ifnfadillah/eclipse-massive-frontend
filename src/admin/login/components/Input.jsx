const InputForm = (props) => {
    const { type, name, placeholder, text } = props;
    return (
        <div>
            <label
                htmlFor={name}
                className="block mb-2 text-md font-primary font-medium text-gray-800">
                {text}
            </label>
            <input
                type={type}
                name={name}
                className="bg-gray-50 border border-sky-500 text-gray-900 font-secondary text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:opacity-50"
                placeholder={placeholder}
                required />
        </div>
    );
};

export default InputForm;
import React from 'react';

const Input = (props) => {
    const { type, name, placeholder, text } = props;

    return (
        <div className="col-span-2 md:col-span-6">
            <label
                htmlFor={name}
                className="block mb-2 text-md font-primary font-medium text-gray-900">
                {text}
            </label>
            {type === "file" ? (
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-700 font-regular rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id={name}
                    type="file"
                />
            ) : type === "desc" ? (
                <textarea
                    id={name}
                    rows="4"
                    className="block font-primary w-full text-xs text-gray-900 rounded-lg border border-gray-700"
                    placeholder={placeholder}
                ></textarea>
            ) : (
                <input
                    type={type}
                    name={name}
                    className="bg-white border border-gray-700 text-gray-900 text-sm font-primary font-regular rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-4 placeholder:text-xs"
                    placeholder={placeholder}
                    id={name}
                    required
                />
            )}
        </div>
    );
};

export default Input;

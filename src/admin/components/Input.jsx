import React from 'react';
import Button from './Button';

const Input = (props) => {
    const { type, name, placeholder, text } = props;

    return (
        <div className="col-span-2 md:col-span-6">
            <label
                htmlFor={name}
                className="block mb-2 text-md font-primary font-medium text-gray-800">
                {text}
            </label>
            <input
                type={type}
                name={name}
                className="bg-white border border-gray-700 text-gray-900 text-sm font-primary font-regular rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-4 placeholder:text-xs"
                placeholder={placeholder}
                id={name}
                required
            />
        </div>
    );
};

export default Input;

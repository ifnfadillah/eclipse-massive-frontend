import React from 'react';

const InputDropdown = (props) => {
    const { name, options, text } = props;

    return (
        <div className="col-span-2 md:col-span-6">
            <label
                htmlFor={name}
                className="block mb-2 text-md font-primary font-medium text-gray-900">
                {text}
            </label>
            <select
                name={name}
                className="bg-white border border-gray-700 text-gray-800 text-xs font-primary font-regular rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 px-4 placeholder:text-xs"
                id={name}
                required
            >
                <option value="">Pilih kategori Bahan Belajar</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default InputDropdown;

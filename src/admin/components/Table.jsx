import React, { useState } from 'react';
import Button from "./Button";
import Pagination from "./Pagination";

const Table = ({ headers, data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    return (
        <>
            <div className="bg-white relative shadow-sm sm:rounded-lg rounded-lg overflow-hidden">
                <div className="overflow-x-auto" id="searchResults">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-sm text-white font-primary font-medium bg-sky-700">
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        scope="col"
                                        className={`${header.className}`}
                                    >
                                        {header.label}
                                    </th>
                                ))}
                                <th scope="col" className="lg:px-12 lg:py-6 px-6 py-3">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={headers.length + 1} className="text-center p-6 text-gray-500">Belum ada data</td>
                                </tr>
                            ) : (
                                renderData().map((row, index) => (
                                    <tr className="border border-gray-200" key={index}>
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                className={`font-secondary text-xs font-medium text-gray-800 px-12 py-4 max-w-xs truncate ${headers[cellIndex].className}`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                        <td className="px-12 py-3 flex items-center justify-end space-x-4">
                                            <Button
                                                classname="h-9 w-20 font-secondary text-xs rounded-3xl font-medium bg-amber-500 hover:bg-amber-600 text-white"
                                                type="button"
                                            >
                                                Ubah
                                            </Button>
                                            <Button
                                                classname="h-9 w-20 font-secondary text-xs rounded-3xl font-medium bg-red-500 hover:bg-red-700 text-white"
                                                type="button"
                                            >
                                                Hapus
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {data.length > 0 && (
                <div className="flex justify-center mt-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </>
    );
};

export default Table;

import React, { useState } from 'react';
import Button from '@/admin/components/Button';
import PopupDelete from '@/admin/components/pop-up/PopupDelete';
import Pagination from '@/admin/components/Pagination';
import { Link } from 'react-router-dom';

const TableArtikel = ({ data, setData, itemName }) => {
    // Pop Up Dialog Hapus
    const [isOpen, setIsOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = (index) => {
        setItemToDelete(index);
        setIsOpen(true);
    };

    const handleConfirm = () => {
        setIsOpen(false);
        if (itemToDelete !== null) {
            const newData = data.filter((_, index) => index !== itemToDelete);
            setData(newData);
            console.log('Item dihapus', newData);
        }
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    // Pagination
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
                                <th scope="col" className="px-10 lg:py-6 py-3">No</th>
                                <th scope="col" className="px-12 lg:py-6 py-3">Judul Bahan Belajar</th>
                                <th scope="col" className="px-12 lg:py-6 py-3">Kategori</th>
                                <th scope="col" className="px-12 lg:py-6 py-3">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 ? (
                                <tr className="">
                                    <td colSpan={data.length + 1} className="text-center p-6 text-gray-500">Belum ada data</td>
                                </tr>
                            ) : (
                                renderData().map((row, index) => (
                                    <tr className="border border-gray-200" key={index}>
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                className={`font-primary text-xs font-regular text-gray-800 px-12 py-4 max-w-xs truncate ${data[cellIndex].className}`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                        <td className="px-12 py-3 flex items-center justify-end space-x-4">
                                            <Link key="/data-mitra/delete/">
                                                <Button
                                                    classname="h-9 w-20 font-secondary text-xs rounded-3xl font-medium bg-amber-300 hover:bg-amber-400 text-black"
                                                    type="button"
                                                >
                                                    Ubah
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() => handleDelete(index, row[1])}
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
            {isOpen && (
                <PopupDelete
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    itemName={itemName}
                />
            )}
        </>
    );
};

export default TableArtikel;

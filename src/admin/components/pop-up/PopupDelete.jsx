import React from 'react';
import Button from '../Button';

const PopupDelete = ({ onConfirm, onCancel }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 -top-10">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative pt-8 pb-4 h-70 bg-white rounded-lg shadow">
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-8 text-red-600 w-14 h-14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-8 text-lg font-medium font-primary text-gray-900">Apakah Anda yakin menghapus ?</h3>
                        <div className="space-x-4">
                            <Button
                                onClick={onCancel}
                                classname="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium px-8 py-3 hover:text-gray-900 focus:z-10 font-secondary"
                            >
                                Batal
                            </Button>
                            <Button
                                onClick={onConfirm}
                                classname="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm inline-flex items-center px-6 py-3 text-center me-2 font-secondary"
                            >
                                Ya, saya yakin
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupDelete;

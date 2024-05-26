import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePreviousPage = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (e, number) => {
        e.preventDefault();
        onPageChange(number);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <a href='#'
                        onClick={handlePreviousPage}
                        className={`flex items-center justify-center font-primary font-regular px-3 h-10 ms-0 leading-tight text-sky-700 bg-white border border-e-0 border-sky-700 rounded-s-lg ${currentPage === 1 ? 'pointer-events-none text-white bg-gray-600 border-gray-400' : 'hover:bg-sky-900 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                    >
                        Sebelumnya
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a href='#'
                            onClick={(e) => handlePageClick(e, number)}
                            className={`flex items-center justify-center font-primary font-regular w-10 h-10 leading-tight border border-sky-700 ${currentPage === number ? 'bg-sky-900 text-white' : 'text-sky-700 bg-white hover:bg-sky-900 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                        >
                            {number}
                        </a>
                    </li>
                ))}
                <li>
                    <a href='#'
                        onClick={handleNextPage}
                        className={`flex items-center justify-center font-primary font-regular px-3 h-10 leading-tight text-sky-700 bg-white border border-sky-700 rounded-e-lg ${currentPage === totalPages ? 'pointer-events-none text-white bg-gray-600 border-gray-400' : 'hover:bg-sky-900 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                    >
                        Selanjutnya
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;

import React from 'react'
import SearchForm from '../../components/SearchForm';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import TableWebinar from '../components/TableWebinar';


function ListWebinar() {

    const data = [
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="text-2xl font-primary font-medium mb-3 md:mb-0">
                    Data Webinar
                </h1>
                <div className="flex items-center space-x-5">
                    <SearchForm placeholder="Masukkan Judul Webinar" />
                    <Button
                        classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-green-500 hover:bg-green-600 text-white"
                        type="search"
                        name="search">
                        Cari
                    </Button>
                    <Button
                        classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-sky-500 hover:bg-sky-700 text-white"
                        type="add"
                        name="tambah">
                        <Link to="/data-webinar/add">Tambah</Link>
                    </Button>
                </div>
            </div>
            <TableWebinar data={data} />
        </>
    )
}

export default ListWebinar
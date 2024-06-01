import React from 'react'
import SearchForm from '../../components/SearchForm';
import TableKidspedia from '../components/TableKidspedia';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function ListKidspedia() {

    const data = [
        ["1", "Gambar Domba", "Lembar Mewarnai"],
        ["2", "Gambar Kebun", "Lembar Mewarnai"],
        ["3", "Gambar Kebun", "Lembar Mewarnai"],
        ["4", "Gambar Kebun", "Lembar Mewarnai"],
        ["5", "Gambar Kebun", "Lembar Mewarnai"],
        ["6", "Gambar Kebun", "Lembar Mewarnai"],
        ["7", "Gambar Kebun", "Lembar Mewarnai"],
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="text-2xl font-primary font-medium mb-3 md:mb-0">
                    Data Kidspedia
                </h1>
                <div className="flex items-center space-x-5">
                    <SearchForm placeholder="Masukkan Judul Bahan Belajar" />
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
                        <Link to="/data-kidspedia/add">Tambah</Link>
                    </Button>
                </div>
            </div>
            <TableKidspedia
                data={data} />
        </>
    )
}

export default ListKidspedia;
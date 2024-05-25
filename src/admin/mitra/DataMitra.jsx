import React from 'react'
import Layout from '../layout';
import SearchForm from '../components/SearchForm';
import Button from '../components/Button';
import Table from '../components/Table';


function DataMitra() {

    const headers = [
        { label: "No", className: "lg:px-8 lg:py-6 px-6 py-3" },
        { label: "Nama Mitra", className: "lg:px-12 lg:py-6 px-6 py-3" },
        { label: "Logo", className: "lg:px-12 lg:py-6 px-6 py-3" },
    ];

    const data = [
    ];
    return (
        <Layout>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="text-2xl font-primary font-medium mb-3 md:mb-0">
                    Data Mitra
                </h1>
                <div className="flex items-center space-x-5">
                    <SearchForm placeholder="Cari Mitra" />
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
                        Tambah
                    </Button>
                </div>
            </div>
            <Table headers={headers} data={data} />

        </Layout>
    )
}

export default DataMitra;
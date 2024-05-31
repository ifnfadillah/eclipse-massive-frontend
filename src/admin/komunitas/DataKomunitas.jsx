import React from 'react'
import Layout from '../layout'
import DataHeader from '../components/section/DataHeader';
import Table from '../components/Table'


function DataKomunitas() {

    const headers = [
        { label: "No", className: "lg:px-8 lg:py-6 px-6 py-3" },
        { label: "Nama Komunitas", className: "lg:px-12 lg:py-6 px-6 py-3" },
        { label: "Foto", className: "lg:px-12 lg:py-6 px-6 py-3" },
    ];

    const data = [
    ];


    return (
        <Layout>
            <DataHeader
                title="Data Komunitas"
                Placeholder="Cari Komunitas"
                addButtonLink="/data-komunitas-tambah"
            />
            <Table headers={headers} data={data} />
        </Layout>
    )
}

export default DataKomunitas
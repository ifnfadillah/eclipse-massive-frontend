import React from 'react'
import Layout from '../layout';
import DataHeader from '../components/section/DataHeader';
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
        <Layout><DataHeader
            title="Data Mitra"
            Placeholder="Cari Mitra"
            addButtonLink="/data-mitra-tambah"
        />
            <Table headers={headers} data={data} />

        </Layout>
    )
}

export default DataMitra;
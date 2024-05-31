import React from 'react'
import Layout from '../layout';
import DataHeader from '../components/section/DataHeader';
import Table from '../components/Table'


function DataWebinar() {

    const headers = [
        { label: "No", className: "lg:px-8 lg:py-6 px-6 py-3" },
        { label: "Judul Webinar", className: "lg:px-12 lg:py-6 px-6 py-3" },
        { label: "Tanggal", className: "lg:px-12 lg:py-6 px-6 py-3" },
        { label: "Harga", className: "lg:px-12 lg:py-6 px-6 py-3" },
    ];

    const data = [
    ];

    return (
        <Layout>
            <DataHeader
                title="Data Webinar"
                Placeholder="Cari Webinar"
                addButtonLink="/data-webinar-tambah"
            />
            <Table headers={headers} data={data} />
        </Layout>
    )
}

export default DataWebinar
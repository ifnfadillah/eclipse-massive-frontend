import React from 'react'
import Layout from '../layout';
import Table from '../components/Table';
import DataHeader from '../components/section/DataHeader';

function DataKidspedia() {
    const headers = [
        { label: "No", className: "lg:px-8 lg:py-6 px-6 py-3" },
        { label: "Judul Bahan Belajar", className: "lg:px-12 lg:py-6 px-6 py-3" },
        { label: "Foto", className: "lg:px-12 lg:py-6 px-6 py-3" },
        { label: "Kategori", className: "lg:px-12 lg:py-6 px-6 py-3" },
    ];

    const data = [
        ["1", "Gambar Domba", "domba.png", "Lembar Mewarnai"],
        ["2", "Gambar Kebun", "kebun.png", "Lembar Mewarnai"],
        ["3", "Gambar Kebun", "kebun.png", "Lembar Mewarnai"],
        ["4", "Gambar Kebun", "kebun.png", "Lembar Mewarnai"],
        ["5", "Gambar Kebun", "kebun.png", "Lembar Mewarnai"],
        ["6", "Gambar Kebun", "kebun.png", "Lembar Mewarnai"],
        ["7", "Gambar Kebun", "kebun.png", "Lembar Mewarnai"],
    ];
    return (
        <Layout>
            <DataHeader
                title="Data Kidspedia"
                Placeholder="Cari Kidspedia"
                addButtonLink="/data-kidspedia/tambah"
            />
            <Table
                headers={headers}
                data={data}
                editPath="/data-kidspedia/edit"
                itemNameToDelete="judul" />
        </Layout>
    )
}

export default DataKidspedia;
import React from 'react'
import Layout from '@/admin/layout'
import Button from '@/admin/components/Button'
import Input from '@/admin/components/Input'
import { Link } from 'react-router-dom'


function AddMitra() {
    return (
        <Layout>
            <div className="py-8 px-4 md:mx-52 max-w-xl  lg:py-13">
                <h2 className="mb-5 text-2xl font-semibold font-primary text-gray-900">Tambah Mitra</h2>
                <form action="" method="post">
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-6 sm:gap-6">
                        <Input text="Nama Mitra" name="judul" type="judul" placeholder="Masukkan nama mitra" />
                        <Input type="file"
                            name="foto"
                            text="Logo Mitra" />
                        <Input text="Kontak Mitra" name="link" type="link" placeholder="Masukkan kontak mitra" />
                    </div>
                    <div className="mt-6 flex space-x-4 justify-end">
                        <Button
                            classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-red-500 hover:bg-red-700 text-white"
                            type="cancel"
                            name="batal">
                            <Link to="/data-mitra">Batal</Link>
                        </Button>
                        <Button
                            classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-sky-700 hover:bg-sky-900 text-white"
                            type="submit"
                            name="submit">
                            <Link to="/data-mitra">Tambah</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default AddMitra
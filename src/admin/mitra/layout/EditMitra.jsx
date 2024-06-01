import React from 'react'
import Layout from '../../layout'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'


function EditMitra() {
    return (
        <Layout>
            <div className="py-8 px-4 md:mx-52 max-w-xl mx-auto lg:py-13">
                <h2 className="mb-5 text-2xl font-semibold font-primary text-gray-900">Ubah Mitra</h2>
                <form action="" method="post">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
                            <Link to="/data-mitra">Simpan</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default EditMitra
import React from 'react'
import Layout from '../layout'
import Button from '../components/Button'
import Input from '../components/Input'
import InputDropdown from '../components/InputDropdown'
import { Link } from 'react-router-dom'


function TambahKidspedia() {
    return (
        <Layout>
            <div className="py-8 px-4 md:mx-52 max-w-xl mx-auto lg:py-13">
                <h2 className="mb-5 text-2xl font-semibold font-primary text-gray-900">Tambah Kidspedia</h2>
                <form action="" method="post">
                    <div class="grid gap-4 grid-cols-2 lg:grid-cols-6 sm:gap-6">
                        <Input text="Judul Bahan Belajar" name="judul" type="judul" placeholder="Masukkan Judul Bahan Belajar" />
                        <InputDropdown
                            name="category"
                            text="Kategori Bahan Belajar"
                            options={[
                                { value: "option1", label: "Video Belajar" },
                                { value: "option2", label: "Lembar Mewarnai" }
                            ]}
                        />
                        <Input type="file"
                            name="foto"
                            text="Foto" />
                        <Input text="Link Bahan Belajar" name="link" type="link" placeholder="Masukkan Link Bahan Belajar" />
                    </div>
                    <div className="mt-6 flex space-x-4 justify-end">
                        <Button
                            classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-red-500 hover:bg-red-700 text-white"
                            type="cancel"
                            name="batal">
                            <Link to="/data-kidspedia">Batal</Link>
                        </Button>
                        <Button
                            classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-sky-700 hover:bg-sky-900 text-white"
                            type="submit"
                            name="submit">
                            <Link to="/data-kidspedia">Tambah</Link>
                        </Button>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default TambahKidspedia
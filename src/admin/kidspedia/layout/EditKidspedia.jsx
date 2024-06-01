import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/admin/layout';
import Button from '@/admin/components/Button';
import Input from '@/admin/components/Input';
import InputDropdown from '@/admin/components/InputDropdown';
import { Link } from 'react-router-dom';

function EditKidspedia() {
    const { id } = useParams();

    const data = [
        { id: "1", title: "Gambar Domba", image: "domba.png", category: "Lembar Mewarnai", link: "link_to_resource" },
        { id: "2", title: "Gambar Kebun", image: "kebun.png", category: "Lembar Mewarnai", link: "link_to_resource" },
        { id: "3", title: "Gambar Kebun", image: "kebun.png", category: "Lembar Mewarnai", link: "link_to_resource" },
        { id: "4", title: "Gambar Kebun", image: "kebun.png", category: "Lembar Mewarnai", link: "link_to_resource" },
        { id: "5", title: "Gambar Kebun", image: "kebun.png", category: "Lembar Mewarnai", link: "link_to_resource" },
        { id: "6", title: "Gambar Kebun", image: "kebun.png", category: "Lembar Mewarnai", link: "link_to_resource" },
    ];

    const itemToEdit = data.find(item => item.id === id);

    if (!itemToEdit) {
        return <div>Data not found</div>;
    }

    return (
        <Layout>
            <div className="py-8 px-4 md:mx-52 max-w-xl  lg:py-13">
                <h2 className="mb-5 text-2xl font-semibold font-primary text-gray-900">Ubah Kidspedia</h2>
                <form action="" method="post">
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-6 sm:gap-6">
                        <Input
                            text="Judul Bahan Belajar"
                            name="judul"
                            type="judul"
                            placeholder="Masukkan Judul Bahan Belajar"
                            Value={itemToEdit.title}
                        />

                        <InputDropdown
                            name="category"
                            text="Kategori Bahan Belajar"
                            options={[
                                { value: "Video Belajar", label: "Video Belajar" },
                                { value: "Lembar Mewarnai", label: "Lembar Mewarnai" }
                            ]}
                            Value={itemToEdit.category}
                        />
                        <Input type="file" name="foto" text="Foto" />
                        <Input
                            text="Link Bahan Belajar"
                            name="link"
                            type="link"
                            placeholder="Masukkan Link Bahan Belajar"
                            value={itemToEdit.link}
                        />
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
                            <Link to="/data-kidspedia">Simpan</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default EditKidspedia;

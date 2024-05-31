import React, { useState } from "react";
import Pagination from "../../components/paginationUser";
import JudulCTA from "../../components/Judul";
import DeskripsiCta from "../../components/Deskripsi";
import CardKomunitas from "@/user/components/CardKomunitas";
import { Link } from "react-router-dom";

function SectionKomunitas() {
    const communitys = [
        {
            id: 1,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 2,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 3,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 4,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 5,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 6,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 7,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 8,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },
        {
            id: 9,
            imageSrc: "/assets/category1.png",
            title: "Calon Orang Tua",
            description: "Orang tua dimotivasi untuk menggunakan pendekatan kreatif dalam mendidik anak-anak mereka. Komunitas ini melakukan hal-hal seperti workshop seni, proyek DIY, dan aktivitas keluarga kreatif untuk membantu orang tua mengembangkan cara-cara baru dan menyenangkan untuk mendidik anak-anak mereka.",
            link: "https/gform.com/f/1wT6gKXf-2pO2gkz7DkN4xQ",
        },

    ];

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(communitys.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return communitys.slice(startIndex, endIndex);
    };

    return (
        <section className="bg-slate-50 dark:bg-gray-900">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:px-6 lg:mb-0">
                <div className="mx-auto mt-4 max-w-screen-lg text-center mb-12">
                    <JudulCTA>
                        Komunitas
                    </JudulCTA>
                    <DeskripsiCta>Berikut beberapa komunitas untuk diskusi yang ada di Parentify</DeskripsiCta>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-8">
                    {renderData().map((community) => (
                        <Link key={community.id} to={`/sharenting-komunitas/${community.id}`} className="px-2 ">
                            <CardKomunitas
                                imageSrc={community.imageSrc}
                                title={community.title}
                            />
                        </Link>
                    ))}
                </div>
                {communitys.length > itemsPerPage && (
                    <div className="flex justify-center mt-10 md:mt-16">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </div>
                )}

            </div>
        </section>
    );
}

export default SectionKomunitas;

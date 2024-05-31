import React, { useState } from "react";
import CardWebinar from "../../components/CardWebinar";
import Pagination from "../../components/paginationUser";
import JudulCTA from "../../components/Judul";
import DeskripsiCta from "../../components/Deskripsi";
import { Link } from "react-router-dom";

function SectionWebinar() {
    const webinars = [
        {
            id: 1,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Gratis",
            date: "31 Februari 2024"
        },
        {
            id: 2,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Rp 30.000",
            date: "31 Februari 2024"
        },
        {
            id: 3,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Rp 30.000",
            date: "31 Februari 2024"
        },
        {
            id: 4,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Rp 50.000",
            date: "31 Februari 2024"
        },
        {
            id: 5,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Rp 60.000",
            date: "31 Februari 2024"
        },
        {
            id: 6,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Rp 50.000",
            date: "31 Februari 2024"
        },
        {
            id: 7,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            price: "Rp 50.000",
            date: "31 Februari 2024"
        },

    ];

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(webinars.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return webinars.slice(startIndex, endIndex);
    };

    return (
        <section className="bg-slate-50 dark:bg-gray-900">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:px-6 lg:mb-0">
                <div className="mx-auto mt-4 max-w-screen-lg text-center mb-12">
                    <JudulCTA>
                        Webinar
                    </JudulCTA>
                    <DeskripsiCta>Berikut beberapa webinar atau sosialisasi yang diadakan oleh Parentify</DeskripsiCta>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 ">
                    {renderData().map((webinar) => (
                        <Link key={webinar.id} to={`/sharenting-webinar/${webinar.id}`} className="px-2 ">
                            <CardWebinar imageSrc={webinar.imageSrc} title={webinar.title} price={webinar.price} date={webinar.date} />
                        </Link>
                    ))}
                </div>
                {webinars.length > itemsPerPage && (
                    <div className="flex justify-center mt-10 md:mt-16">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default SectionWebinar;

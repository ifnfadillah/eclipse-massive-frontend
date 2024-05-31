import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LayoutUser from "../layout";
import CardWebinar from "../components/CardWebinar";

function DetailWebinar() {
    const { id } = useParams();
    const webinars = [
        {
            id: 1,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            desc: "Semua orang tua ingin memberikan yang terbaik untuk masa depan anak-anak mereka. Namun, peran kita tidak selalu mudah dan sering kali penuh tantangan. Webinar Peran Ortu untuk Masa Depan Anaknya bertujuan untuk membantu para orang tua memahami tanggung jawab dan peran mereka dalam mendukung perkembangan anak, baik secara emosional, intelektual, maupun sosial.",
            author: "Dr. Ratna Sariwati M.Psi. Psikolog",
            time: "14.00 WIB",
            price: "Gratis",
            date: "31 Februari 2024",
            link: "https://gform.com",
        },
        {
            id: 2,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            desc: "Semua orang tua ingin memberikan yang terbaik untuk masa depan anak-anak mereka. Namun, peran kita tidak selalu mudah dan sering kali penuh tantangan. Webinar Peran Ortu untuk Masa Depan Anaknya bertujuan untuk membantu para orang tua memahami tanggung jawab dan peran mereka dalam mendukung perkembangan anak, baik secara emosional, intelektual, maupun sosial.",
            author: "Dr. Ratna Sariwati M.Psi. Psikolog",
            time: "14.00 WIB",
            price: "Gratis",
            date: "31 Februari 2024",
            link: "https://gform.com",
        },
        {
            id: 3,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            desc: "Semua orang tua ingin memberikan yang terbaik untuk masa depan anak-anak mereka. Namun, peran kita tidak selalu mudah dan sering kali penuh tantangan. Webinar Peran Ortu untuk Masa Depan Anaknya bertujuan untuk membantu para orang tua memahami tanggung jawab dan peran mereka dalam mendukung perkembangan anak, baik secara emosional, intelektual, maupun sosial.",
            author: "Dr. Ratna Sariwati M.Psi. Psikolog",
            time: "14.00 WIB",
            price: "Gratis",
            date: "31 Februari 2024",
            link: "https://gform.com",
        },
        {
            id: 4,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            desc: "Semua orang tua ingin memberikan yang terbaik untuk masa depan anak-anak mereka. Namun, peran kita tidak selalu mudah dan sering kali penuh tantangan. Webinar Peran Ortu untuk Masa Depan Anaknya bertujuan untuk membantu para orang tua memahami tanggung jawab dan peran mereka dalam mendukung perkembangan anak, baik secara emosional, intelektual, maupun sosial.",
            author: "Dr. Ratna Sariwati M.Psi. Psikolog",
            time: "14.00 WIB",
            price: "Gratis",
            date: "31 Februari 2024",
            link: "https://gform.com",
        },
        {
            id: 5,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            desc: "Semua orang tua ingin memberikan yang terbaik untuk masa depan anak-anak mereka. Namun, peran kita tidak selalu mudah dan sering kali penuh tantangan. Webinar Peran Ortu untuk Masa Depan Anaknya bertujuan untuk membantu para orang tua memahami tanggung jawab dan peran mereka dalam mendukung perkembangan anak, baik secara emosional, intelektual, maupun sosial.",
            author: "Dr. Ratna Sariwati M.Psi. Psikolog",
            time: "14.00 WIB",
            price: "Gratis",
            date: "31 Februari 2024",
            link: "https://gform.com",
        },
        {
            id: 6,
            imageSrc: "/assets/article1.jpg",
            title: "Pentingnya Keterlibatan Ayah dalam Pengasuhan Anak",
            desc: "Semua orang tua ingin memberikan yang terbaik untuk masa depan anak-anak mereka. Namun, peran kita tidak selalu mudah dan sering kali penuh tantangan. Webinar Peran Ortu untuk Masa Depan Anaknya bertujuan untuk membantu para orang tua memahami tanggung jawab dan peran mereka dalam mendukung perkembangan anak, baik secara emosional, intelektual, maupun sosial.",
            author: "Dr. Ratna Sariwati M.Psi. Psikolog",
            time: "14.00 WIB",
            price: "Gratis",
            date: "31 Februari 2024",
            link: "https://gform.com",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll ke atas setiap kali id berubah
    }, [id]); // Bergantung pada perubahan id

    const webinar = webinars.find((webinar) => webinar.id === parseInt(id));

    if (!webinar) {
        return <div>Webinar tidak ditemukan</div>;
    }

    const displayedWebinars = webinars
        .filter((art) => art.id !== parseInt(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    return (
        <LayoutUser>
            <div className="w-full mt-5 sm:px-8 py-10 flex flex-col items-center gap-12">
                <div className="flex flex-col md:flex-row items-center px-8">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <img
                            src={webinar.imageSrc}
                            alt={webinar.title}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-2/3 md:px-24 space-y-4 md:space-y-8 font-primary ">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            {webinar.title}
                        </h2>
                        <p className="text-gray-700 text-xs md:text-sm">
                            {webinar.description}
                        </p>
                        <h3 className="text-sm font-medium">Penyelenggara: <span className="text-sm font-normal">{webinar.author}</span></h3>
                        <h3 className="text-sm font-medium">Tanggal: <span className="text-sm font-normal">{webinar.date}</span></h3>
                        <h3 className="text-sm font-medium">Pukul: <span className="text-sm font-normal">{webinar.time}</span></h3>
                        <h3 className="text-sm font-medium">Harga: <span className="text-sm font-normal">{webinar.price}</span></h3>
                        <button
                            className="px-5 py-3 font-primary text-sm font-medium bg-sky-700 rounded-lg md:rounded-xl shadow border-2 text-white hover:bg-sky-900"
                            type=""
                            name="daftar"
                        >
                            <Link
                                to={webinar.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                Daftar Sekarang
                                <svg className="w-5 h-5 ml-2 -mr-1 transition duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </button>

                    </div>
                </div>

                {/* List Artikel */}
                <div className="containersm:py-16">
                    <div className="flex flex-row justify-between mb-10 text-center sm:text-left items-center">
                        <h1 className="lg:text-3xl text-2xl font-primary font-semibold ">
                            Komunitas Lainnya
                        </h1>
                        <button
                            className="px-3 py-2 text-xs md:px-5 md:py-3 font-secondary md:text-sm font-medium bg-white rounded-lg md:rounded-xl shadow border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white hover:border-sky-700"
                            type="navigate"
                            name="selengkapnya"
                        >
                            <Link to="/sharenting-komunitas" className="flex items-center">
                                Selengkapnya
                                <svg className="w-5 h-5 ml-2 -mr-1 transition duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
                        {displayedWebinars.map((webinar) => (
                            <Link
                                key={webinar.id}
                                to={`/sharenting-webinar/${webinar.id}`}
                                className="mx-2"
                            >
                                <CardWebinar
                                    imageSrc={webinar.imageSrc} title={webinar.title} price={webinar.price} date={webinar.date}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutUser >
    );
}

export default DetailWebinar;

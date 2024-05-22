import JudulCTA from "../components/JudulCTA";
import JudulFitur from "../components/JudulFitur";
import DeskripsiCta from "../components/DeskripsiCta";

const FeaturesHome = () => {
  return (
    <div className="sectionFeatures">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <JudulCTA>
              Keunggulan Menggunakan <JudulFitur>Parentify</JudulFitur>
            </JudulCTA>
            <DeskripsiCta>
              Parentify membantu orang tua untuk memahami terkait parenting dan
              pola asuh yang tepat kepada anak disertai berbagai layanan untuk
              mendukung tumbuh kembang anak.
            </DeskripsiCta>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <a
              href="#"
              className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full mx-4 rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/assets/fitur1.png"
                alt="Panduan Pola Asuh"
              />
              <div className="flex flex-col justify-between p-4 my-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Panduan Pola Asuh
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Memberikan pemahaman kepada orang tua terkait pola asuh yang
                  tepat ke anak.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full mx-4 rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/assets/fitur2.png"
                alt="Kenali Gaya Parenting"
              />
              <div className="flex flex-col justify-between p-4 my-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kenali Gaya Parenting
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Membantu orang tua untuk mengenali jenis pola asuhnya kepada
                  anak.
                </p>
              </div>
            </a>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <a
              href="#"
              className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full mx-4 rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/assets/fitur3.png"
                alt="Kidspedia"
              />
              <div className="flex flex-col justify-between p-4 my-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kidspedia
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Kumpulan bahan belajar untuk menunjang tumbuh kembang anak.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full mx-4 rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/assets/fitur4.png"
                alt="Sharenting"
              />
              <div className="flex flex-col justify-between p-4 my-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sharenting
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Ruang interaksi antar orang tua untuk terhubung dengan ahli
                  parenting.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesHome;

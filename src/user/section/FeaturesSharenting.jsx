import JudulCTA from "../components/JudulCTA";
import DeskripsiCta from "../components/DeskripsiCta";
import JudulFitur from "../components/JudulFitur";

const FeaturesSharenting = () => {
  return (
    <div className="sectionFeatures">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <JudulCTA>
              Mari Bergabung Bersama <JudulFitur>Sharenting</JudulFitur>
            </JudulCTA>
            <DeskripsiCta>Lakukan pendampingan bahan belajar dari Sharenting untuk menunjang tumbuh kembang anakmu Parennials. Pilih bahan belajar yang sesuai di bawah ini!</DeskripsiCta>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <a href="#" className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full mx-4 rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/fitur7.png" alt="Panduan Pola Asuh" />
              <div className="flex flex-col justify-between p-4 my-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Webinar </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sosialisasi secara online terkait dunia parenting langsung dari ahlinya.</p>
              </div>
            </a>
            <a href="#" className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full mx-4 rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/fitur8.png" alt="Kenali Gaya Parenting" />
              <div className="flex flex-col justify-between p-4 my-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Komunitas</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ruang diskusi antar orang tua seputar edukasi parenting dan masalah pola asuh.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSharenting;

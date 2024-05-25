// import { useState } from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <h2 className="mb-4 text-5xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Kata Mereka tentang <strong className="text-blue-700">Parentify</strong>
            </h2>
            <p className="font-light text-gray-800 lg:mb-16 sm:text-xl dark:text-gray-400">
              Kami bekerja sama dengan beberapa ahli di bidang parenting maupun kesehatan dan mitra atau yayasan terpercaya.Berikut beberapa Mitra yang bekerja sama dengan Parentify
            </p>
          </div>
          <div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10 pt-8">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/ahli.png" alt="Bonnie image" />
                  <h5 className="mb-1 text-xl font-medium text-sky-700 dark:text-white">dr Darrel Atthar D</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Dokter Umum</span>
                  <div className="flex mt-4 md:mt-6 mx-10 text-center">
                    <p>“Parentify adalah website yang saya sarankan untuk orang tua yang ingin belajar terkait parenting karena dilengkapi pemahaman dan bahan belajar untuk menunjang pertumbuhan anak-anak di Indonesia.”</p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10 pt-8">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/ahli3.png" alt="Bonnie image" />
                  <h5 className="mb-1 text-xl font-medium text-sky-700 dark:text-white">Ambar Yuliarti S.Gz</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Kepala Ahli Gizi</span>
                  <div className="flex mt-4 md:mt-6 mx-10 text-center">
                    <p>“Parentify menyediakan pengetahuan parenting yang sangat berguna bagi orangtua untuk lebih eksplore lagi. Bahkan tersedia informasi terkait gizi untuk anak yang sangat penting diketahui para orangtua..”</p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10 pt-8">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/ahli2.png" alt="Bonnie image" />
                  <h5 className="mb-1 text-xl font-medium text-sky-700 dark:text-white">Dr. Ratna Sariwati M.Psi.</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Psikolog</span>
                  <div className="flex mt-4 md:mt-6 mx-10 text-center">
                    <p>“Parentify memadukan teori psikologi dengan saran praktis, menjadikannya panduan yang sangat berharga bagi siapa saja yang ingin membangun hubungan yang sehat dan mendukung dengan anak-anak mereka.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

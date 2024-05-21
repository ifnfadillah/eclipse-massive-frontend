import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <section className="bg-slate-50 dark:bg-gray-900 py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <h2 className="mb-4 text-5xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Masih Ada Pertanyaan Tentang <strong className="text-sky-900">Parentify</strong> ?
            </h2>
            <p className="font-light text-gray-800 lg:mb-16 sm:text-xl dark:text-gray-400">
              Kami bekerja sama dengan beberapa ahli di bidang parenting maupun kesehatan dan mitra atau yayasan terpercaya. Berikut beberapa Mitra yang bekerja sama dengan Parentify.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div id="accordion-collapse" data-accordion="collapse">
                <div className="mb-8">
                  <h3 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-whiteborder-b-0 rounded-lg shadow-lg"
                      onClick={() => handleToggle(1)}
                      aria-expanded={activeIndex === 1}
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span className="text-sky-900 text-3xl font-medium">Apa itu Parentify?</span>
                      <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${activeIndex === 1 ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </h3>
                  <div id="accordion-collapse-body-2" className={`${activeIndex === 1 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-2">
                    <div className="p-5 shadow-md bg-white">
                      <p className="mb-2 text-gray-800">
                        Parentify merupakan website edukasi parenting untuk orang tua dan calon orang tua di Indonesia. Melalui Parentify, Ayah dan Bunda dapat mendapatkan pemahaman pola asuh yang tepat kepada anak dari ahlinya.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 id="accordion-collapse-heading-2">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 bg-whiteborder-b-0 rounded-lg shadow-lg"
                      onClick={() => handleToggle(2)}
                      aria-expanded={activeIndex === 2}
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span className="text-sky-900 text-3xl">Kenapa harus menggunakan Parentify?</span>
                      <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${activeIndex === 2 ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </h3>
                  <div id="accordion-collapse-body-2" className={`${activeIndex === 2 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-2">
                    <div className="p-5 shadow-md bg-white">
                      <p className="mb-2 text-gray-800">
                        Parentify tidak hanya sekedar memberikan informasi dan edukasi terkait parenting, tetapi juga memiliki beragam fitur seperti bahan belajar untuk menunjang tumbuh kembang anak, mengenali gaya parenting orang tua,
                        sosialisasi dan komunitas yang dipandu langsung olehahlinya.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 id="accordion-collapse-heading-3">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-white rounded-lg shadow-lg"
                      onClick={() => handleToggle(3)}
                      aria-expanded={activeIndex === 3}
                      aria-controls="accordion-collapse-body-3"
                    >
                      <span className="text-sky-900 text-3xl">Apakah Parentify mudah digunakan?</span>
                      <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${activeIndex === 3 ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </h3>
                  <div id="accordion-collapse-body-3" className={`${activeIndex === 3 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                    <div className="p-5 shadow-md  bg-white">
                      <p className="mb-2 text-gray-500">
                        Parentify mudah digunakan dan diakses oleh Ayah atau Bunda tanpa melakukan autentikasi masuk menggunakan akun dan langsung dapat mengakses segala informasi dan fitur yang ada di Parentify.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 id="accordion-collapse-heading-4">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-white rounded-lg shadow-lg"
                      onClick={() => handleToggle(4)}
                      aria-expanded={activeIndex === 4}
                      aria-controls="accordion-collapse-body-4"
                    >
                      <span className="text-sky-900 text-3xl">Apa saja fitur utama yang ditawarkan oleh Parentify?</span>
                      <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${activeIndex === 4 ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </h3>
                  <div id="accordion-collapse-body-4" className={`${activeIndex === 4 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                    <div className="p-5 shadow-md bg-white">
                      <p className="mb-2 text-gray-800">
                        Fitur utama Parentify meliputi Panduan Pola Asuh, Artikel informatif, Komunitas untuk diskusi dan berbagi pengalaman, serta Webinar dan acara sosialisasi untuk pembelajaran lebih lanjut.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 id="accordion-collapse-heading-5">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-white rounded-lg shadow-lg"
                      onClick={() => handleToggle(5)}
                      aria-expanded={activeIndex === 5}
                      aria-controls="accordion-collapse-body-5"
                    >
                      <span className="text-sky-900 text-3xl">Bagaimana cara menghubungi tim dukungan Parentify?</span>
                      <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${activeIndex === 5 ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </h3>
                  <div id="accordion-collapse-body-5" className={`${activeIndex === 5 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                    <div className="p-5 shadow-md bg-white">
                      <p className="mb-2 text-gray-800">
                        Anda dapat menghubungi tim dukungan kami dengan melalui formulir kontak yang tersedia di halaman Hubungi Kami di situs web atau melalui email di support@parentify.com, apabila mempunyai pertanyaan dan permasalahan.
                      </p>
                    </div>
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

export default Faq;

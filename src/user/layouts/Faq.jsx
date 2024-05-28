import { useState, useRef, useEffect } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      contentRefs.current[activeIndex].style.maxHeight = contentRefs.current[activeIndex].scrollHeight + "px";
    }
    contentRefs.current.forEach((content, idx) => {
      if (idx !== activeIndex) {
        content.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="faq">
      <section className="bg-slate-50 dark:bg-gray-900 py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <h2 className="mb-4 text-5xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Masih Ada Pertanyaan Tentang <strong className="text-blue-700">Parentify</strong>?
            </h2>
            <p className="font-light text-gray-800 lg:mb-16 sm:text-xl dark:text-gray-400">
              Kami bekerja sama dengan beberapa ahli di bidang parenting maupun kesehatan dan mitra atau yayasan terpercaya. Berikut beberapa Mitra yang bekerja sama dengan Parentify.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-7xl">
              <div id="accordion-collapse" data-accordion="collapse">
                {[
                  {
                    question: "Apa itu Parentify?",
                    answer: "Parentify merupakan website edukasi parenting untuk orang tua dan calon orang tua di Indonesia. Melalui Parentify, Ayah dan Bunda dapat mendapatkan pemahaman pola asuh yang tepat kepada anak dari ahlinya.",
                  },
                  {
                    question: "Kenapa harus menggunakan Parentify?",
                    answer:
                      "Parentify tidak hanya sekedar memberikan informasi dan edukasi terkait parenting, tetapi juga memiliki beragam fitur seperti bahan belajar untuk menunjang tumbuh kembang anak, mengenali gaya parenting orang tua, sosialisasi dan komunitas yang dipandu langsung oleh ahlinya.",
                  },
                  {
                    question: "Apakah Parentify mudah digunakan?",
                    answer: "Parentify mudah digunakan dan diakses oleh Ayah atau Bunda tanpa melakukan autentikasi masuk menggunakan akun dan langsung dapat mengakses segala informasi dan fitur yang ada di Parentify.",
                  },
                  {
                    question: "Apa saja fitur utama yang ditawarkan oleh Parentify?",
                    answer: "Fitur utama Parentify meliputi Panduan Pola Asuh, Artikel informatif, Komunitas untuk diskusi dan berbagi pengalaman, serta Webinar dan acara sosialisasi untuk pembelajaran lebih lanjut.",
                  },
                  {
                    question: "Bagaimana cara menghubungi tim dukungan Parentify?",
                    answer:
                      "Anda dapat menghubungi tim dukungan kami dengan melalui formulir kontak yang tersedia di halaman Hubungi Kami di situs web atau melalui email di support@parentify.com, apabila mempunyai pertanyaan dan permasalahan.",
                  },
                ].map((item, index) => (
                  <div key={index} className="mb-8">
                    <h3 id={`accordion-collapse-heading-${index}`}>
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-white border-b-0 rounded-lg shadow-lg"
                        onClick={() => handleToggle(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`accordion-collapse-body-${index}`}
                      >
                        <span className="text-blue-900">{item.question}</span>
                        <svg data-accordion-icon className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </h3>
                    <div
                      id={`accordion-collapse-body-${index}`}
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="transition-all duration-300 overflow-hidden max-h-0 shadow-lg rounded-lg"
                      aria-labelledby={`accordion-collapse-heading-${index}`}
                    >
                      <div className="p-5 bg-white rounded-b-lg">
                        <p className="mb-2 text-gray-500">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

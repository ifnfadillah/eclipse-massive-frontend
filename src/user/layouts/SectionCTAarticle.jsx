import JudulCTA from "../components/JudulCTA";
import DeskripsiCta from "../components/DeskripsiCta";
import ButtonCta from "../components/ButtonCta";

const ListArticle = () => {
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="flex flex-col items-start mt-4 md:mt-0">
            <JudulCTA>Eksplorasi Beragam Informasi Melalui Artikel</JudulCTA>
            <DeskripsiCta>
              Kumpulan berita seputar parenting untuk orang tua dalam menambah
              wawasan dan pengetahuan terkait pola asuh kepada anak. Temukan
              beragam topik mulai dari kesehatan anak, pendidikan, psikologi
              anak, hingga hubungan keluarga!
            </DeskripsiCta>
            <ButtonCta>Lihat Panduan Pola Asuh</ButtonCta>
          </div>
          <div className="flex justify-end md:mt-0">
            <img
              className="w-[415px] h-auto dark:hidden"
              src="/assets/ArticleSection.png"
              alt="section-Article"
            />
            <img
              className="w-[415px] h-auto hidden dark:block"
              src="/assets/ArticleSection.png"
              alt="section-Article"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListArticle;

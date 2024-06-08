import CardTestimonial from "../components/CardTestimonial";
import Deskripsi from "../components/Deskripsi";
import Judul from "../components/Judul";
import JudulFitur from "../components/JudulFitur";

const testimonials = [
  {
    imgUrl: "/assets/ahli-1.png",
    nama: "dr Darrel Atthar D",
    pekerjaan: "Dokter Umum",
    deksripsi: "“Parentify adalah website yang saya sarankan untuk orang tua yang ingin belajar terkait parenting karena dilengkapi pemahaman dan bahan belajar untuk menunjang pertumbuhan anak-anak di Indonesia.”",
  },
  {
    imgUrl: "/assets/ahli-2.png",
    nama: "Ambar Yuliarti, S.Gz",
    pekerjaan: "Ahli Gizi",
    deksripsi: "“Parentify menyediakan pengetahuan parenting yang sangat berguna bagi orangtua untuk lebih eksplore lagi. Bahkan tersedia informasi terkait gizi untuk anak yang sangat penting diketahui para orangtua.”",
  },
  {
    imgUrl: "/assets/ahli-3.png",
    nama: "Fertika Eka Wardani, S.Psi",
    pekerjaan: "Psikolog",
    deksripsi: "“Parentify memadukan teori psikologi dengan saran praktis, menjadi sumber informasi yang sangat berharga. Orangtua dapat membantu anak mencapai potensi optimal mereka dengan memahami pola asuh yang efektif.”",
  },
];

const Testimonial = () => {
  return (
    <div className=" px-4 mx-auto max-w-screen-xl py-16 lg:px-6">
      <div className="mx-auto max-w-screen-lg text-center">
        <Judul>
          Kata Mereka tentang <JudulFitur>Parentify</JudulFitur>
        </Judul>
        <Deskripsi>Parentify telah dipercaya oleh para orang tua dan ahli dari berbagai kalangan.</Deskripsi>
      </div>
      <div>
        <div className="space-y-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 py-8">
          {testimonials.map((testimonial, index) => (
            <CardTestimonial key={index} imgUrl={testimonial.imgUrl} nama={testimonial.nama} pekerjaan={testimonial.pekerjaan} deksripsi={testimonial.deksripsi} />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Testimonial;

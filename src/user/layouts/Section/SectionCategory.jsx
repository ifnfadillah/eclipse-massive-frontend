import JudulFitur from "../../components/JudulFitur";
import CardCategory from "../../components/CardCategory";
import Judul from "../../components/Judul";
import Deskripsi from "../../components/Deskripsi";
import { Link } from "react-router-dom";
import { polaAsuh } from "../Data/polaAsuh";

const SectionCategory = () => {
  // const polaAsuh = [
  //   {
  //     id: 1,
  //     description: "0 - 12 Bulan",
  //     imageCard: "/assets/category1.png",
  //     imageCTA: "/assets/imgPanduan1.png",
  //     imagePanduan: "/assets/polaAsuh1.png",
  //     imageSaran: "/assets/saranAyah1.png",
  //     imageAhli: "/assets/ahli-2.png",
  //     title: " Bayi 0 - 12 Bulan",
  //     category: "Bayi",
  //     descPerilaku:
  //       "Bayi baru lahir umumnya memiliki keterbatasan gerakan tubuh. Mereka biasanya hanya bisa menangis, gelisah, dan rewel. Kemampuan berpikir bayi pada tahap ini masih sedang berkembang. Bedanya dengan bayi yang sudah agak besar, mereka sudah mulai bisa bergerak dan menjelajahi ruangan di sekitarnya. Tingkah laku bayi tersebut terjadi karena mereka sedang belajar mengenali dunia melalui indra dan tubuhnya.",
  //     descSection: "Simak panduan pola asuh yang dapat diterapkan pada bayi usia 0 - 12 bulan di bawah ini!",
  //     umur: "usia 0 - 12 bulan",
  //     guidelines: [
  //       "Memberikan pola asuh secara konsisten atau teratur dengan cara memberikan asuhan yang sama setiap hari, termasuk waktu makan, tidur, dan aktivitas lainnya.",
  //       "Memberikan respon dengan ekspresi wajah yang positif hingga reaksi emosional.",
  //       "Memberikan stimulasi belajar dengan menyanyikan lagu, membacakan cerita, hingga bercerita dengan bayi.",
  //       "Memberikan stimulasi belajar dengan menyanyikan lagu, membacakan cerita, hingga bercerita dengan bayi.",
  //     ],
  //     fatherTips:
  //       "Peran Ayah dalam pengasuhan anak sangat penting dan tidak boleh dianggap sepele. Ayah dapat berinteraksi dengan anak sejak dalam kandungan, seperti berbicara, bernyanyi, atau membacakan cerita. Ayah juga perlu aktif dalam pengasuhan bayi, seperti menggendong, mengganti popok, dan memandikan bayi. Bermain bersama bayi juga penting untuk membangun ikatan dan merangsang pertumbuhan bayi.",
  //     nutrisi: {
  //       1: {
  //         title: "ASI",
  //         desc: "Nutrisi penting bagi bayi dengan karbohidrat laktosa sekitar 42% energi total. Asam lemak esensial dalam ASI mendukung perkembangan otak dan sistem saraf, sementara vitamin dan mineral memainkan peran penting dalam berbagai fungsi tubuh, termasuk pembentukan tulang dan sistem imun.",
  //       },
  //       2: {
  //         title: "Vitamin A, D, E, K",
  //         desc: "Vitamin A, D, E, dan K juga terdapat dalam ASI, yang berperan penting dalam berbagai fungsi tubuh, termasuk pertumbuhan tulang dan sistem imun.",
  //       },
  //       3: {
  //         title: "Protein & Energi",
  //         desc: "Protein merupakan bahan utama untuk membangun sel-sel tubuh, seperti otot dan tulang, serta berperan dalam pembentukan enzim dan hormon. Sementara itu, energi yang diperoleh dari karbohidrat dan lemak memberikan bahan bakar untuk aktivitas dan proses metabolisme bayi.",
  //       },
  //     },
  //     expertAdvice:
  //       "“Bayi yang baru lahir sangat sensitif pengawasannya. Tidak hanya dari perawatan tetapi juga gizi yang harus terpenuhi dalam dirinya. Ibu harus menjaga pola makannya karena akan berdampak pada gizi ASI yang akan diberikan kepada bayi dengan pola makan melalui buah dan sayur. Lakukan pemantuan pada perkembangan bayi secara rutin.”",
  //     ahli: "Ambar Yuliarti, S.Gz",
  //     pekerjaan: "Ahli Gizi",
  //   },
  //   {
  //     id: 2,
  //     description: "1 - 3 Tahun",
  //     imageCard: "/assets/category2.png",
  //     imageCTA: "/assets/imgPanduan2.png",
  //     imagePanduan: "/assets/polaAsuh2.png",
  //     imageSaran: "/assets/saranAyah2.png",
  //     imageAhli: "/assets/ahli-2.png",
  //     title: "Balita 1-3 Tahun",
  //     category: "Balita",
  //     descPerilaku:
  //       "Batita merupakan anak berumur dibawah 3 tahun dan transisi dari fase bayi. Perkembangan berbicara dan berjalan telah meningkat, namun kemampuan lain masih terbatas, sang anak sangat bergantung kepada orang tuanya dalam melakukan aktivitas seperti makan, mandi dan buang air. Masa ini merupakan masa penting dalam tumbuh kembang anak sebelum memasuki usia sekolah.",
  //     descSection: "Simak panduan pola asuh yang dapat diterapkan pada batita usia 1 - 3 tahun di bawah ini!",
  //     umur: " anak usia 3 - 6 tahun",
  //     guidelines: [
  //       "Mulai  mengajarkan keterampilan sosial seperti mengucapkan terima kasih, meminta maaf, dan berbagi.",
  //       "Memberikan kesempatan untuk bermain dan bereksplorasi akan membantu anak belajar dan mengembangkan keterampilan motorik, kognitif, dan sosialnya.",
  //       "Mulai membangun rutinitas dan konsisten harian yang sehat seperti jam tidur yang teratur, waktu makan yang sehat, dan waktu bermain yang cukup.",
  //       "Memberikan kesempatan mulai belajar, membaca buku, bermain permainan dan melakukan aktivitas yang membangun keterampilan berpikir kreatif dan logis.",
  //     ],
  //     fatherTips:
  //       "Ayah dapat berperan dalam pertumbuhan anak batita dengan meningkatkan bonding antara ayah dan anak. Masa ini anak baru mengenal main dan dunia luar. Bermain bersama dapat membantu meningkatkan kemampuan motorik dan sosial anak, serta membantu anak mengembangkan kepercayaan dan keamanan.",
  //     nutrisi: {
  //       1: {
  //         title: "MPASI",
  //         desc: "Merupakan makanan pendamping ASI. Saat anak memasuki usia transisi dari bayi dapat mulai memberikan MPASI dari beberapa olahan jenis makanan sampai memiliki tekstur yang mudah dicerna anak, seperti wortel ataupun buah lainnya.",
  //       },
  //       2: {
  //         title: "Protein",
  //         desc: "Ibu bisa membantu agar anak mendapat cukup asupan protein dengan memberi makanan seperti ikan, daging, dan telur.",
  //       },
  //       3: {
  //         title: "Sayur dan Buah",
  //         desc: "Asupan  serat dapat divariasikan dan berikan secara bergantian. Konsumsi buah dan sayur bisa membantu menjaga tubuh anak tetap sehat. Buah-buahan mengandung vitamin dan mineral yang dibutuhkan untuk penyerapan nutrisi dalam tubuh anak.",
  //       },
  //     },
  //     expertAdvice:
  //       "“Anak merupakan perjalan penuh kasih sayang. Setiap anak memiliki keunikan dalam perkembangannya masing-masing. Memperkenalkan MPASI kepada batita usia 1 - 3 tahun perjalan penting untuk perkembangan batita. MPASI berperan dalam memenuhi kebutuhan gizi dan nutrisi yang tidak lagi tercukupi hanya dari ASI saja.”",
  //     ahli: "Ambar Yuliarti, S.Gz",
  //     pekerjaan: "Ahli Gizi",
  //   },
  //   {
  //     id: 3,
  //     description: "3 - 6 Tahun",
  //     imageCard: "/assets/category3.png",
  //     imageCTA: "/assets/imgPanduan3.png",
  //     imagePanduan: "/assets/polaAsuh3.png",
  //     imageSaran: "/assets/saranAyah3.png",
  //     imageAhli: "/assets/ahli-2.png",
  //     title: "Anak 3-6 Tahun",
  //     category: "Anak",
  //     descPerilaku: "Masa anak usia 3-6 tahun termasuk dalam masa perkembangan prasekolah dasar. Pada masa ini, anak-anak mulai mengembangkan kemampuan berbahasa, kognitif, dan sosio-emosional yang lebih kompleks dari masa sebelumnya.",
  //     descSection: "Simak panduan pola asuh yang dapat diterapkan pada anak usia 3 - 6 tahun di bawah ini!",
  //     umur: " anak usia 3 - 6 tahun",
  //     guidelines: [
  //       "Mulai berikan batasan aturan dan konsekuensi secara bertahap.",
  //       "Mulai contoh perilaku yang baik setelah mengenalkan secara sosial di usia balita.",
  //       "Mulai ajarkan anak untuk mengembangkan kemampuan kognitif, seperti membaca ataupun menulis sebelum memasuki usia sekolah.",
  //       "Dorong anak untuk berpartisipasi dalam permainan yang melibatkan aktivitas fisik dan interaksi sosial untuk mengembangkan keterampilan.",
  //     ],
  //     fatherTips:
  //       "Ayah dapat membantu anak mengembangkan kemampuan kognitif seperti berpikir, berhitung, dan bermain. Hal ini dapat membantu anak mengembangkan kemampuan berpikir yang dapat menjadikan bekal dalam memasuki usia sekolah nantinya.",
  //     nutrisi: {
  //       1: {
  //         title: "Karbohidrat",
  //         desc: "Anak usia 3-6 tahun memerlukan 155 gram karbohidrat per hari, yang dapat diperoleh dari makanan seperti nasi putih, kentang, ubi jalar, dan pisang.",
  //       },
  //       2: {
  //         title: "Kalsium",
  //         desc: "Saat anak menginjak usia 3 tahun, orang tua bisa coba memberi susu yang dilengkapi dengan kandungan AA dan DHA. Kandungan ini penting untuk membantu perkembangan otak anak dan mempersiapkannya menjelang usia sekolah.",
  //       },
  //       3: {
  //         title: "Protein dan Mineral",
  //         desc: "Protein sebesar 44 gram per hari dapat diperoleh dari makanan seperti daging ayam, keju cheddar, dan susu sapi.",
  //       },
  //     },
  //     expertAdvice:
  //       "“Masa prasekolah dasar (3-6 tahun) merupakan periode emas untuk anak dalam mengembangkan berbagai kemampuan fisik, kognitif, dan sosial emosional. Anak mulai menjelajahi dunia dengan rasa ingin tahu yang tinggi dan membutuhkan panduan yang tepat dari orang tua. Pada masa ini, kebutuhan kalsium anak meningkat pesat untuk mendukung pertumbuhan tulang dan gigi yang optimal, mendukung pertumbuhan tinggi badan, dan menjaga kesehatan saraf dan otot.”",
  //     ahli: "Ambar Yuliarti, S.Gz",
  //     pekerjaan: "Ahli Gizi",
  //   },
  //   {
  //     id: 4,
  //     description: "6 - 12 Tahun",
  //     imageCard: "/assets/category4.png",
  //     imageCTA: "/assets/imgPanduan4.png",
  //     imagePanduan: "/assets/polaAsuh4.png",
  //     imageSaran: "/assets/saranAyah4.png",
  //     imageAhli: "/assets/ahli-2.png",
  //     title: "Usia Sekolah 6 - 12 Tahun",
  //     category: "Usia Sekolah",
  //     descPerilaku: "Masa anak usia 6-12 tahun termasuk dalam masa perkembangan prasekolah dasar. Pada masa ini, anak-anak mulai mengembangkan kemampuan berbahasa, kognitif, dan sosio-emosional yang lebih kompleks dari masa sebelumnya.",
  //     descSection: "Simak panduan pola asuh yang dapat diterapkan pada usia sekolah 6-12 tahun di bawah ini!",
  //     umur: "usia sekolah 6 - 12 tahun",
  //     guidelines: [
  //       "Komunikasi efektif dan terbuka dengan anak untuk membangun kepercayaan terhadap pendapat anak.",
  //       "Mendampingi belajar anak ketika mengalami kesulitan dan tantangan yang mereka hadapi.",
  //       "Membantu mengembangkan keterampilan sosial anak seperti berkomunikasi, berempati, dan berbagi.",
  //       "Mengembangkan kebiasaan yang baik dan meningkatkan kesadaran anak tentang batas-batas yang harus diikuti.",
  //     ],
  //     fatherTips:
  //       "Ayah harus memastikan anak memiliki waktu yang cukup untuk bermain dan mengembangkan keterampilan yang diperlukan. Bermain adalah bagian penting dari perkembangan anak dengan mengembangkan keterampilan yang dimiliki anak, salah satunya mendukung hobi yang dimiliki anak.",
  //     nutrisi: {
  //       1: {
  //         title: "Karbohidrat",
  //         desc: "Anak usia 6-12 tahun memerlukan 250 gram karbohidrat per hari, yang dapat diperoleh dari makanan seperti roti maupun nasi putih.",
  //       },
  //       2: {
  //         title: "Protein",
  //         desc: "Anak usia 6-12 tahun memerlukan 40 gram protein per hari, yang dapat diperoleh dari makanan seperti daging tanpa lemak, ikan, telur, kacang-kacangan, dan sayur.",
  //       },
  //       3: {
  //         title: "Vitamin dan Mineral",
  //         desc: "Anak usia 6-12 tahun memerlukan vitamin dan mineral seperti vitamin A, vitamin D, vitamin E, kalsium dan kalium yang dapat diperoleh dari makanan seperti sayuran, buah.",
  //       },
  //     },
  //     expertAdvice:
  //       "“Dimasa ini, anak-anak mulai belajar di sekolah, menjalin pertemanan, dan memiliki rasa ingin tahu untuk menjelajahi dunia di sekitar mereka. Mereka membutuhkan asupan gizi terutama protein untuk meningkatkan sistem kekebalan tubuh, membangun tulang yang kuat, dan meningkatkan konsentrasi dan daya ingat pada anak.”",
  //     ahli: "Ambar Yuliarti, S.Gz",
  //     pekerjaan: "Ahli Gizi",
  //   },
  //   {
  //     id: 5,
  //     description: "12 - 17 Tahun",
  //     imageCard: "/assets/category5.png",
  //     imageCTA: "/assets/imgPanduan5.png",
  //     imagePanduan: "/assets/polaAsuh5.png",
  //     imageSaran: "/assets/saranAyah5.png",
  //     imageAhli: "/assets/ahli-2.png",
  //     title: " Usia Remaja 12 - 17 Tahun",
  //     category: "Usia Remaja",
  //     descPerilaku:
  //       "Masa remaja usia 12 - 17 tahun termasuk dalam masa perkembangan prasekolah dasar. Pada masa ini, anak-anak mulai mengembangkan kemampuan berbahasa, kognitif, dan sosio-emosional yang lebih kompleks dari masa sebelumnya.",
  //     descSection: "Simak panduan pola asuh yang dapat diterapkan pada remaja usia 12 - 17 tahun di bawah ini!",
  //     umur: " remaja usia 12 - 17 tahun",
  //     guidelines: [
  //       "Memberikan ruang kebebasan untuk anak dalam mengambil keputusan dengan penuh tanggung jawab.",
  //       "Menetapkan aturan dan konsekuensi yang sesuai dengan perilaku apa yang dapat diterima dan tidak dapat diterima.",
  //       "Bersikap terbuka dengan mendengarkan keluh kesah atau permasalahan yang dialami anak.",
  //       "Memberikan ekspektasi atau tujuan yang dapat diterima oleh anak.",
  //     ],
  //     fatherTips:
  //       "Ayah harus memahami bahwa masa remaja adalah masa peralihan dan anak-anak membutuhkan ruang untuk mengembangkan diri mereka sendiri dan harus memberikan kesempatan bagi anak untuk berbicara dan mendengar apa yang mereka inginkan, tanpa menghakimi atau menyalahkan.",
  //     nutrisi: {
  //       1: {
  //         title: "Karbohidrat",
  //         desc: "Anak remaja memerlukan 155 gram karbohidrat per hari, yang dapat diperoleh dari makanan seperti nasi putih, kentang, ubi jalar, dan pisang.",
  //       },
  //       2: {
  //         title: "Serat",
  //         desc: "Anak remaja memerlukan 28 gram serat per hari, yang dapat diperoleh dari makanan seperti sayur bayam bening dan kentang.",
  //       },
  //       3: {
  //         title: "Vitamin dan Mineral",
  //         desc: "Anak remaja memerlukan vitamin dan mineral seperti vitamin A, vitamin D, kalsium, dan besi, yang dapat diperoleh dari makanan seperti susu sapi, keju cheddar, dan daging ayam.",
  //       },
  //     },
  //     expertAdvice:
  //       "”Masa remaja merupakan periode krusial dalam kehidupan anak, di mana mereka mengalami berbagai perubahan fisik, psikologis, dan sosial yang signifikan. Mulai mengembangkan identitas diri, membangun hubungan dengan orang lain, dan mempersiapkan diri untuk memasuki dunia dewasa. Walaupun sudah remaja, asupan gizi harus terpenuhi untukukung pertumbuhan dan perkembangan.”",
  //     ahli: "Ambar Yuliarti, S.Gz",
  //     pekerjaan: "Ahli Gizi",
  //   },
  // ];

  return (
    <div className="section-kategori-usia">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
        <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
          <Judul>
            Pilih
            <JudulFitur> Panduan Pola Asuh</JudulFitur>
          </Judul>
          <Deskripsi>Kami mengelompokkkan beberapa panduan pola asuh anak dalam beberapa fase rentang usia anak. Pilih panduan pola asuh yang sesuai buah hatimu yang Parennials!</Deskripsi>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-y-8 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:gap-12 md:space-y-0 justify-center">
            {polaAsuh.slice(0, 3).map((pola) => (
              <Link key={pola.id} to={`/edukasi/panduan-asuh/${pola.id}`}>
                <CardCategory title={pola.category} description={pola.description} imageUrl={pola.imageCard} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="space-y-8 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 md:gap-12 md:space-y-0">
            {polaAsuh.slice(3).map((pola) => (
              <Link key={pola.id} to={`/edukasi/panduan-asuh/${pola.id}`}>
                <CardCategory title={pola.category} description={pola.description} imageUrl={pola.imageCard} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCategory;

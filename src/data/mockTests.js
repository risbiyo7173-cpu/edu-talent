/**
 * PANDUAN MENGGANTI SOAL UJIAN (UNTUK ADMIN/GURU)
 * -----------------------------------------------
 * File ini berisi daftar pertanyaan (soal) untuk aplikasi EduTalent.
 * Bapak bisa mengganti teks pertanyaan di dalam kutip ganda ("...").
 *
 * Aturan:
 * 1. Jangan mengubah nama variabel seperti `id` atau `category`.
 * 2. Hanya ubah tulisan di sebelah kanan `text:`.
 * 3. Jika ingin menambah pertanyaan baru, copy-paste satu baris `{ id: "...", text: "...", category: "..." },`
 *    dan pastikan ID-nya berbeda (misal: "mi_6").
 */

export const tests = [
  {
    id: "multiple_intelligence",
    title: "Tes Profil Kecerdasan Majemuk",
    description: "Tes ini mengukur jenis kecerdasan dominan Anda berdasarkan teori Howard Gardner.",
    questions: [
      // Linguistik
      { id: "mi_1", text: "Saya senang menyusun kalimat yang terdengar “pas” saat menulis caption, pesan, atau tugas.", category: "Linguistik" },
      { id: "mi_2", text: "Saat menjelaskan ide, saya sering memakai perumpamaan atau cerita kecil agar mudah dipahami.", category: "Linguistik" },
      { id: "mi_3", text: "Saya menikmati permainan kata (teka-teki silang, anagram, plesetan) dan merasa tertantang.", category: "Linguistik" },
      { id: "mi_4", text: "Saya cenderung mengingat kutipan, slogan, atau frasa menarik lebih mudah daripada angka.", category: "Linguistik" },
      { id: "mi_5", text: "Saya suka menulis (cerita, puisi, jurnal, caption) untuk mengekspresikan pikiran.", category: "Linguistik" },
      // Logika-Matematika
      { id: "mi_6", text: "Ketika menghadapi masalah, saya otomatis memecahnya menjadi langkah-langkah kecil yang terurut.", category: "Logika-Matematika" },
      { id: "mi_7", text: "Saya senang mencari pola tersembunyi—misalnya dalam deret angka, jadwal, atau kebiasaan.", category: "Logika-Matematika" },
      { id: "mi_8", text: "Saat berbelanja, saya sering membandingkan harga per unit/dosis untuk memastikan mana yang paling hemat.", category: "Logika-Matematika" },
      { id: "mi_9", text: "Saya menikmati menyusun argumen “jika–maka” dan menguji apakah kesimpulan saya masuk akal.", category: "Logika-Matematika" },
      { id: "mi_10", text: "Saya tertarik pada eksperimen sederhana: mengubah satu variabel dan melihat hasilnya.", category: "Logika-Matematika" },
      // Spasial
      { id: "mi_11", text: "Saya mudah membayangkan tata letak ruangan atau denah hanya dari deskripsi verbal.", category: "Spasial" },
      { id: "mi_12", text: "Saat belajar, saya lebih cepat paham bila ada diagram, peta konsep, atau sketsa.", category: "Spasial" },
      { id: "mi_13", text: "Saya sering “melihat” solusi di kepala dulu (mis. cara merakit sesuatu) sebelum mulai mengerjakan.", category: "Spasial" },
      { id: "mi_14", text: "Saya peka terhadap keseimbangan, warna, dan komposisi saat menata slide, poster, atau feed.", category: "Spasial" },
      { id: "mi_15", text: "Saya senang menggambar, mendesain, atau membuat visual untuk menjelaskan ide.", category: "Spasial" },
      // Kinestetik
      { id: "mi_16", text: "Saya belajar lebih baik bila bisa mencoba langsung, bukan hanya membaca atau mendengar.", category: "Kinestetik" },
      { id: "mi_17", text: "Saya senang aktivitas yang melibatkan ketangkasan tangan (merakit, memperbaiki, kerajinan).", category: "Kinestetik" },
      { id: "mi_18", text: "Saat berpikir, saya sering bergerak (berjalan, mengetuk meja, gestur) untuk “melancarkan” ide.", category: "Kinestetik" },
      { id: "mi_19", text: "Saya cepat menangkap teknik baru dalam olahraga/tari karena bisa meniru gerakan dengan tepat.", category: "Kinestetik" },
      { id: "mi_20", text: "Saya menikmati kegiatan fisik yang menantang (panjat, lari, dansa, praktikum).", category: "Kinestetik" },
      // Musikal
      { id: "mi_21", text: "Saya mudah mengenali perubahan nada, tempo, atau instrumen dalam sebuah lagu.", category: "Musikal" },
      { id: "mi_22", text: "Saat suasana hati berubah, saya spontan memilih lagu yang “cocok” dengan perasaan itu.", category: "Musikal" },
      { id: "mi_23", text: "Saya sering menghafal informasi dengan mengubahnya menjadi irama atau jingle kecil.", category: "Musikal" },
      { id: "mi_24", text: "Saya peka terhadap suara latar (AC, langkah kaki, notifikasi) dan bisa membedakan sumbernya.", category: "Musikal" },
      { id: "mi_25", text: "Saya senang menyanyi, memainkan alat musik, atau membuat ketukan/ritme sendiri.", category: "Musikal" },
      // Interpersonal
      { id: "mi_26", text: "Saya cepat menangkap “suasana” dalam kelompok dan tahu kapan harus mencairkan atau menenangkan.", category: "Interpersonal" },
      { id: "mi_27", text: "Saat ada konflik, saya cenderung menjadi penengah yang membantu masing-masing pihak merasa didengar.", category: "Interpersonal" },
      { id: "mi_28", text: "Saya menikmati kerja tim karena bisa belajar dari cara berpikir orang lain.", category: "Interpersonal" },
      { id: "mi_29", text: "Saya mudah menyesuaikan gaya bicara saya tergantung lawan bicara (usia, latar, mood).", category: "Interpersonal" },
      { id: "mi_30", text: "Saya peka terhadap ekspresi wajah dan nada suara orang lain.", category: "Interpersonal" },
      // Intrapersonal
      { id: "mi_31", text: "Saya rutin merefleksikan keputusan saya: apa yang berhasil, apa yang perlu diperbaiki.", category: "Intrapersonal" },
      { id: "mi_32", text: "Saya punya “kompas internal” yang membantu saya memilih antara benar/salah meski ada tekanan.", category: "Intrapersonal" },
      { id: "mi_33", text: "Saya sadar kapan energi saya turun dan tahu cara mengisinya kembali (istirahat, hobi, doa).", category: "Intrapersonal" },
      { id: "mi_34", text: "Saya mampu menunda kepuasan sesaat demi tujuan jangka panjang yang lebih penting.", category: "Intrapersonal" },
      { id: "mi_35", text: "Saya nyaman menghabiskan waktu sendiri untuk merenung, menulis, atau merencanakan hidup.", category: "Intrapersonal" },
      // Naturalis
      { id: "mi_36", text: "Saya peka terhadap perubahan kecil di lingkungan (cuaca, tanaman, perilaku hewan).", category: "Naturalis" },
      { id: "mi_37", text: "Saya senang mengklasifikasikan hal-hal (jenis tanaman, gaya musik, tipe orang) berdasarkan ciri.", category: "Naturalis" },
      { id: "mi_38", text: "Saat bepergian, saya memperhatikan detail alam (awan, tekstur tanah, suara serangga).", category: "Naturalis" },
      { id: "mi_39", text: "Saya tertarik pada isu keberlanjutan (daur ulang, hemat energi) dan menerapkannya.", category: "Naturalis" },
      { id: "mi_40", text: "Saya merasa tenang dan berenergi saat berada di alam terbuka (taman, gunung, pantai).", category: "Naturalis" }
    ]
  },
  {
    id: "personality",
    title: "Tes Kepribadian (Big Five)",
    description: "Mengukur aspek kepribadian inti Anda untuk mencocokkan dengan lingkungan kerja/studi.",
    questions: [
      { id: "p_1", text: "Saya merasa energik ketika berada di tengah banyak orang.", category: "Extraversion" },
      { id: "p_2", text: "Saya cenderung mudah khawatir tentang banyak hal.", category: "Neuroticism" },
      { id: "p_3", text: "Saya sangat peduli dengan perasaan orang lain.", category: "Agreeableness" },
      { id: "p_4", text: "Saya selalu merencanakan segala sesuatu dengan sangat detail.", category: "Conscientiousness" },
      { id: "p_5", text: "Saya suka mencoba hal-hal baru dan berpikir *out of the box*.", category: "Openness" },
    ]
  },
  {
    id: "interest",
    title: "Tes Minat & Bakat (Inventori Kuat)",
    description: "Mengukur ketertarikan Anda pada berbagai bidang aktivitas, mata pelajaran, dan lingkungan kerja berdasarkan pendekatan E.K. Strong Jr.",
    questions: [
      // Sains & Analitik
      { id: "int_1", text: "Saya sangat tertarik membaca artikel atau menonton video tentang penemuan ilmiah terbaru.", category: "Sains & Analitik" },
      { id: "int_2", text: "Saya senang melakukan eksperimen di laboratorium atau mencoba membedah cara kerja suatu alat.", category: "Sains & Analitik" },
      { id: "int_3", text: "Mempelajari biologi, kimia, atau fisika terasa sangat menyenangkan bagi saya.", category: "Sains & Analitik" },
      { id: "int_4", text: "Saya suka memecahkan teka-teki logika yang rumit atau masalah matematika.", category: "Sains & Analitik" },
      { id: "int_5", text: "Saya lebih suka bekerja dengan data, grafik, dan angka daripada berdebat tentang opini.", category: "Sains & Analitik" },
      
      // Seni & Kreativitas
      { id: "int_6", text: "Saya sangat menikmati menghabiskan waktu luang untuk menggambar, melukis, atau mendesain.", category: "Seni & Kreativitas" },
      { id: "int_7", text: "Saya merasa bebas saat bisa mengekspresikan diri melalui musik, puisi, atau tarian.", category: "Seni & Kreativitas" },
      { id: "int_8", text: "Saya lebih suka mengerjakan proyek sekolah yang tidak punya aturan kaku sehingga saya bisa berkreasi.", category: "Seni & Kreativitas" },
      { id: "int_9", text: "Mendekorasi ruangan atau menata layout presentasi agar terlihat indah adalah keahlian saya.", category: "Seni & Kreativitas" },
      { id: "int_10", text: "Saya sering memiliki ide-ide out-of-the-box yang tidak terpikirkan oleh teman-teman saya.", category: "Seni & Kreativitas" },
      
      // Sosial & Pelayanan
      { id: "int_11", text: "Saya sangat senang jika diminta mengajari teman yang kesulitan memahami pelajaran.", category: "Sosial & Pelayanan" },
      { id: "int_12", text: "Menjadi relawan untuk kegiatan sosial atau kemanusiaan adalah hal yang memuaskan batin saya.", category: "Sosial & Pelayanan" },
      { id: "int_13", text: "Saya pendengar yang baik dan teman-teman sering curhat atau meminta saran kepada saya.", category: "Sosial & Pelayanan" },
      { id: "int_14", text: "Saya lebih suka bekerja dalam kelompok yang saling mendukung daripada bekerja sendirian.", category: "Sosial & Pelayanan" },
      { id: "int_15", text: "Membantu menyembuhkan, merawat, atau melayani orang lain adalah prioritas hidup saya.", category: "Sosial & Pelayanan" },

      // Bisnis & Kepemimpinan
      { id: "int_16", text: "Saya bersemangat saat harus memimpin proyek kelompok atau menjadi ketua panitia.", category: "Bisnis & Kepemimpinan" },
      { id: "int_17", text: "Saya pandai meyakinkan orang lain untuk menyetujui ide atau membeli produk yang saya tawarkan.", category: "Bisnis & Kepemimpinan" },
      { id: "int_18", text: "Saya tertarik dengan dunia wirausaha, bisnis, dan bagaimana cara menghasilkan keuntungan.", category: "Bisnis & Kepemimpinan" },
      { id: "int_19", text: "Berbicara di depan umum atau mempresentasikan ide di depan banyak orang tidak membuat saya gugup.", category: "Bisnis & Kepemimpinan" },
      { id: "int_20", text: "Saya suka bersaing secara sehat untuk menjadi yang terbaik atau memenangkan suatu kompetisi.", category: "Bisnis & Kepemimpinan" },

      // Organisasi & Keteraturan
      { id: "int_21", text: "Saya sangat menyukai jadwal yang terstruktur dan ruang kerja yang tertata rapi.", category: "Organisasi & Keteraturan" },
      { id: "int_22", text: "Saya teliti dalam mengurus dokumen, laporan keuangan, atau mencatat detail kecil.", category: "Organisasi & Keteraturan" },
      { id: "int_23", text: "Saya merasa nyaman bekerja dengan aturan, prosedur baku, dan standar yang sudah jelas.", category: "Organisasi & Keteraturan" },
      { id: "int_24", text: "Teman-teman sering mengandalkan saya untuk mencatat jadwal atau mengatur anggaran kegiatan.", category: "Organisasi & Keteraturan" },
      { id: "int_25", text: "Saya lebih suka pekerjaan yang menuntut ketelitian tinggi (seperti akuntansi/arsip) daripada proyek yang abstrak.", category: "Organisasi & Keteraturan" },

      // Fisik & Praktikal
      { id: "int_26", text: "Saya lebih senang bekerja di luar ruangan daripada duduk seharian di belakang meja.", category: "Fisik & Praktikal" },
      { id: "int_27", text: "Saya sangat menikmati kegiatan fisik, olahraga rutin, atau petualangan di alam bebas.", category: "Fisik & Praktikal" },
      { id: "int_28", text: "Saya penasaran bagaimana mesin, otomotif, atau perangkat elektronik bekerja, dan suka memperbaikinya.", category: "Fisik & Praktikal" },
      { id: "int_29", text: "Merakit perabotan, memasang kabel, atau pekerjaan tangan lainnya (kriya) sangat menyenangkan bagi saya.", category: "Fisik & Praktikal" },
      { id: "int_30", text: "Saya lebih suka menghasilkan produk nyata yang bisa disentuh daripada sekadar merumuskan teori.", category: "Fisik & Praktikal" }
    ]
  },
  {
    id: "riasec",
    title: "Tes Potensi Karir (RIASEC)",
    description: "Memetakan kepribadian karir Anda berdasarkan teori kode Holland (Holland Codes).",
    questions: [
      // Realistic
      { id: "ria_1", text: "Saya senang melakukan pekerjaan fisik atau menggunakan alat-alat pertukangan dan mesin.", category: "Realistic" },
      { id: "ria_2", text: "Saya lebih suka memelihara tanaman atau merawat hewan peliharaan di luar ruangan.", category: "Realistic" },
      { id: "ria_3", text: "Merakit komputer atau memperbaiki barang elektronik yang rusak adalah hal yang mudah bagi saya.", category: "Realistic" },
      { id: "ria_4", text: "Saya lebih suka bekerja dengan benda nyata (seperti kayu, logam, alat berat) daripada dengan ide atau manusia.", category: "Realistic" },
      { id: "ria_5", text: "Saya menyukai kegiatan yang kotor-kotoran seperti otomotif, berkebun, atau pertukangan.", category: "Realistic" },

      // Investigative
      { id: "ria_6", text: "Saya sangat menikmati memecahkan masalah matematika yang sangat kompleks.", category: "Investigative" },
      { id: "ria_7", text: "Saya suka melakukan observasi, menganalisis data, dan menyimpulkan hasil eksperimen.", category: "Investigative" },
      { id: "ria_8", text: "Saya lebih percaya pada bukti ilmiah dan penelitian daripada sekadar pendapat orang lain.", category: "Investigative" },
      { id: "ria_9", text: "Membaca jurnal ilmiah, artikel sains, atau buku biologi/kimia sangat menarik minat saya.", category: "Investigative" },
      { id: "ria_10", text: "Saya senang bekerja sendiri di laboratorium atau di depan komputer untuk meneliti sesuatu secara mendalam.", category: "Investigative" },

      // Artistic
      { id: "ria_11", text: "Saya memiliki kebutuhan yang kuat untuk mengekspresikan diri melalui seni (lukis, musik, teater).", category: "Artistic" },
      { id: "ria_12", text: "Saya tidak suka pekerjaan yang terlalu terstruktur atau memiliki aturan baku yang sangat kaku.", category: "Artistic" },
      { id: "ria_13", text: "Saya sering mengandalkan intuisi dan perasaan saya dalam mengambil keputusan hidup.", category: "Artistic" },
      { id: "ria_14", text: "Saya senang menciptakan sesuatu yang benar-benar baru, orisinal, dan memiliki nilai estetika.", category: "Artistic" },
      { id: "ria_15", text: "Saya sering membayangkan atau berimajinasi tentang berbagai ide gila yang tidak konvensional.", category: "Artistic" },

      // Social
      { id: "ria_16", text: "Membantu orang lain yang sedang kesusahan atau sakit memberikan kepuasan batin bagi saya.", category: "Social" },
      { id: "ria_17", text: "Saya sangat mudah berteman dengan orang baru dan bisa membuat mereka merasa nyaman.", category: "Social" },
      { id: "ria_18", text: "Saya lebih suka bekerja dalam tim yang suportif dan saling membantu daripada bekerja sendirian.", category: "Social" },
      { id: "ria_19", text: "Mengajar atau menjelaskan suatu materi kepada orang lain adalah kegiatan yang saya nikmati.", category: "Social" },
      { id: "ria_20", text: "Saya lebih suka memecahkan masalah melalui diskusi dan mufakat bersama daripada memutuskan sendiri.", category: "Social" },

      // Enterprising
      { id: "ria_21", text: "Saya sangat percaya diri ketika harus memimpin tim atau mengatur jalannya sebuah acara.", category: "Enterprising" },
      { id: "ria_22", text: "Saya pandai bernegosiasi dan meyakinkan orang lain untuk mengikuti jalan pikiran saya.", category: "Enterprising" },
      { id: "ria_23", text: "Saya memiliki ambisi kuat untuk meraih posisi tinggi, status sosial, atau keuntungan finansial.", category: "Enterprising" },
      { id: "ria_24", text: "Saya tidak takut mengambil risiko dalam bisnis atau kompetisi asalkan peluang menangnya besar.", category: "Enterprising" },
      { id: "ria_25", text: "Memulai proyek baru atau kampanye besar selalu membuat saya sangat antusias.", category: "Enterprising" },

      // Conventional
      { id: "ria_26", text: "Saya menyukai pekerjaan yang mengharuskan ketelitian, kerapian, dan pencatatan yang detail.", category: "Conventional" },
      { id: "ria_27", text: "Saya lebih nyaman jika ada SOP (Standar Operasional Prosedur) atau panduan yang jelas sebelum bekerja.", category: "Conventional" },
      { id: "ria_28", text: "Saya sangat jeli dalam menemukan kesalahan kecil pada data, laporan, atau pembukuan keuangan.", category: "Conventional" },
      { id: "ria_29", text: "Saya mengatur file, meja belajar, atau dokumen penting saya sedemikian rupa agar sangat mudah dicari.", category: "Conventional" },
      { id: "ria_30", text: "Saya lebih suka bekerja dengan angka, data tertulis, atau perangkat lunak administrasi secara rutin.", category: "Conventional" }
    ]
  }
];

// Opsi jawaban skala Likert (Sangat Tidak Setuju - Sangat Setuju)
export const likertOptions = [
  { value: 1, label: "Sangat Tidak Setuju" },
  { value: 2, label: "Tidak Setuju" },
  { value: 3, label: "Netral" },
  { value: 4, label: "Setuju" },
  { value: 5, label: "Sangat Setuju" }
];

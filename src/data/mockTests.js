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
  },
  {
    id: "iq",
    title: "Tes Kemampuan Kognitif (IQ)",
    description: "Tes ini mengukur 4 pilar kecerdasan kognitif Anda berdasarkan kerangka David Wechsler. Pilihlah jawaban yang paling logis dan tepat.",
    questions: [
      // Pemahaman Verbal
      { id: "iq_1", category: "Pemahaman Verbal", text: "Panas berbanding dengan Dingin, seperti halnya Terang berbanding dengan...", options: [{ label: "Gelap", value: 1 }, { label: "Silau", value: 0 }, { label: "Matahari", value: 0 }, { label: "Hitam", value: 0 }] },
      { id: "iq_2", category: "Pemahaman Verbal", text: "Manakah dari kata berikut yang BUKAN merupakan kelompoknya?", options: [{ label: "Buku", value: 0 }, { label: "Majalah", value: 0 }, { label: "Koran", value: 0 }, { label: "Lemari", value: 1 }] },
      { id: "iq_3", category: "Pemahaman Verbal", text: "Sinonim (persamaan kata) yang paling tepat untuk 'Evakuasi' adalah...", options: [{ label: "Penghancuran", value: 0 }, { label: "Penyelamatan", value: 1 }, { label: "Penelantaran", value: 0 }, { label: "Pembangunan", value: 0 }] },
      { id: "iq_4", category: "Pemahaman Verbal", text: "Dokter berbanding dengan Pasien, seperti halnya Guru berbanding dengan...", options: [{ label: "Sekolah", value: 0 }, { label: "Kelas", value: 0 }, { label: "Murid", value: 1 }, { label: "Pelajaran", value: 0 }] },
      { id: "iq_5", category: "Pemahaman Verbal", text: "Antonim (lawan kata) dari kata 'Progresif' adalah...", options: [{ label: "Aktif", value: 0 }, { label: "Regresif", value: 1 }, { label: "Pasif", value: 0 }, { label: "Kreatif", value: 0 }] },
      { id: "iq_6", category: "Pemahaman Verbal", text: "Manakah yang TIDAK termasuk alat musik petik?", options: [{ label: "Gitar", value: 0 }, { label: "Biola", value: 0 }, { label: "Harpa", value: 0 }, { label: "Seruling", value: 1 }] },
      { id: "iq_7", category: "Pemahaman Verbal", text: "Hutan identik dengan Pohon, sebagaimana Gurun identik dengan...", options: [{ label: "Kaktus", value: 0 }, { label: "Pasir", value: 1 }, { label: "Unta", value: 0 }, { label: "Panas", value: 0 }] },
      { id: "iq_8", category: "Pemahaman Verbal", text: "Kata 'Fiktif' memiliki makna yang paling dekat dengan...", options: [{ label: "Fakta", value: 0 }, { label: "Nyata", value: 0 }, { label: "Khayalan", value: 1 }, { label: "Sejarah", value: 0 }] },
      { id: "iq_9", category: "Pemahaman Verbal", text: "Di antara kata-kata berikut, mana yang memiliki makna berbeda?", options: [{ label: "Menciptakan", value: 0 }, { label: "Membuat", value: 0 }, { label: "Membangun", value: 0 }, { label: "Merusak", value: 1 }] },
      { id: "iq_10", category: "Pemahaman Verbal", text: "Roti terbuat dari gandum, seperti halnya tahu terbuat dari...", options: [{ label: "Kacang Hijau", value: 0 }, { label: "Kedelai", value: 1 }, { label: "Beras", value: 0 }, { label: "Jagung", value: 0 }] },

      // Penalaran Perseptual
      { id: "iq_11", category: "Penalaran Perseptual", text: "Jika sebuah kubus dibuka lipatannya (jaring-jaring), ada berapa jumlah persegi yang menyusun kubus tersebut?", options: [{ label: "4", value: 0 }, { label: "5", value: 0 }, { label: "6", value: 1 }, { label: "8", value: 0 }] },
      { id: "iq_12", category: "Penalaran Perseptual", text: "Jika Anda menghadap Utara, lalu berputar 90 derajat searah jarum jam, lalu berputar 180 derajat, arah mana yang sedang Anda hadapi?", options: [{ label: "Barat", value: 1 }, { label: "Timur", value: 0 }, { label: "Selatan", value: 0 }, { label: "Utara", value: 0 }] },
      { id: "iq_13", category: "Penalaran Perseptual", text: "Bayangkan ada roda gigi A (kiri) yang bersinggungan dengan roda gigi B (kanan). Jika roda gigi A diputar searah jarum jam, bagaimana roda B berputar?", options: [{ label: "Searah jarum jam", value: 0 }, { label: "Berlawanan jarum jam", value: 1 }, { label: "Maju mundur", value: 0 }, { label: "Tidak bergerak", value: 0 }] },
      { id: "iq_14", category: "Penalaran Perseptual", text: "Jika bayangan sebuah tiang jatuh tepat di sebelah Timur tiang tersebut, di manakah posisi matahari?", options: [{ label: "Barat", value: 1 }, { label: "Timur", value: 0 }, { label: "Utara", value: 0 }, { label: "Selatan", value: 0 }] },
      { id: "iq_15", category: "Penalaran Perseptual", text: "Berapa banyak sudut yang dimiliki oleh sebuah heksagon beraturan?", options: [{ label: "4", value: 0 }, { label: "5", value: 0 }, { label: "6", value: 1 }, { label: "8", value: 0 }] },
      { id: "iq_16", category: "Penalaran Perseptual", text: "Bentuk geometri mana yang TIDAK memiliki sudut?", options: [{ label: "Segitiga", value: 0 }, { label: "Trapesium", value: 0 }, { label: "Oval", value: 1 }, { label: "Belah Ketupat", value: 0 }] },
      { id: "iq_17", category: "Penalaran Perseptual", text: "Sebuah benda dilihat dari depan berbentuk lingkaran, dan dilihat dari samping berbentuk persegi panjang. Benda apakah itu?", options: [{ label: "Bola", value: 0 }, { label: "Tabung", value: 1 }, { label: "Kerucut", value: 0 }, { label: "Piramida", value: 0 }] },
      { id: "iq_18", category: "Penalaran Perseptual", text: "Jika jarum jam menunjukkan tepat pukul 03.00, berapakah sudut yang dibentuk oleh kedua jarum tersebut?", options: [{ label: "45 derajat", value: 0 }, { label: "90 derajat", value: 1 }, { label: "180 derajat", value: 0 }, { label: "360 derajat", value: 0 }] },
      { id: "iq_19", category: "Penalaran Perseptual", text: "Anda melipat selembar kertas persegi menjadi dua, lalu melipatnya lagi. Anda menggunting ujung bagian tengah (pusat). Saat kertas dibuka, ada berapa lubang di tengahnya?", options: [{ label: "1", value: 1 }, { label: "2", value: 0 }, { label: "4", value: 0 }, { label: "0", value: 0 }] },
      { id: "iq_20", category: "Penalaran Perseptual", text: "Di antara bangun ruang berikut, mana yang secara matematis memiliki volume paling besar jika luas permukaannya sama?", options: [{ label: "Kubus", value: 0 }, { label: "Balok", value: 0 }, { label: "Prisma", value: 0 }, { label: "Bola", value: 1 }] },

      // Memori Kerja
      { id: "iq_21", category: "Memori Kerja", text: "Berapakah angka selanjutnya dari deret ini: 2, 4, 8, 16, ...?", options: [{ label: "20", value: 0 }, { label: "24", value: 0 }, { label: "32", value: 1 }, { label: "64", value: 0 }] },
      { id: "iq_22", category: "Memori Kerja", text: "Jika 3x + 2 = 11, berapakah nilai x?", options: [{ label: "2", value: 0 }, { label: "3", value: 1 }, { label: "4", value: 0 }, { label: "5", value: 0 }] },
      { id: "iq_23", category: "Memori Kerja", text: "Berapakah hasil dari operasi hitung: 15 - 3 x 4?", options: [{ label: "48", value: 0 }, { label: "12", value: 0 }, { label: "3", value: 1 }, { label: "0", value: 0 }] },
      { id: "iq_24", category: "Memori Kerja", text: "Deret angka Fibonacci: 1, 1, 2, 3, 5, 8, ... Angka berikutnya adalah?", options: [{ label: "10", value: 0 }, { label: "11", value: 0 }, { label: "12", value: 0 }, { label: "13", value: 1 }] },
      { id: "iq_25", category: "Memori Kerja", text: "Anda memiliki 10 buah apel. Anda memakan 2 apel, lalu memberikan setengah dari sisanya kepada teman Anda. Berapa sisa apel Anda sekarang?", options: [{ label: "3", value: 0 }, { label: "4", value: 1 }, { label: "5", value: 0 }, { label: "6", value: 0 }] },
      { id: "iq_26", category: "Memori Kerja", text: "Berapakah 1/4 (seperempat) dari 200?", options: [{ label: "25", value: 0 }, { label: "50", value: 1 }, { label: "75", value: 0 }, { label: "100", value: 0 }] },
      { id: "iq_27", category: "Memori Kerja", text: "Sebuah kereta bergerak dengan kecepatan konstan 60 km/jam. Berapa jarak yang ditempuhnya dalam 30 menit?", options: [{ label: "20 km", value: 0 }, { label: "30 km", value: 1 }, { label: "60 km", value: 0 }, { label: "120 km", value: 0 }] },
      { id: "iq_28", category: "Memori Kerja", text: "Berapakah hasil dari perhitungan (8 + 2) x (5 - 3)?", options: [{ label: "10", value: 0 }, { label: "14", value: 0 }, { label: "20", value: 1 }, { label: "30", value: 0 }] },
      { id: "iq_29", category: "Memori Kerja", text: "Perhatikan pola deret: 100, 90, 81, 73, 66, ... Berapakah angka berikutnya?", options: [{ label: "59", value: 0 }, { label: "60", value: 1 }, { label: "61", value: 0 }, { label: "62", value: 0 }] },
      { id: "iq_30", category: "Memori Kerja", text: "Jika 5 orang pekerja dapat menyelesaikan sebuah tugas dalam 10 hari, berapa hari yang dibutuhkan jika tugas tersebut dikerjakan oleh 10 pekerja?", options: [{ label: "2 hari", value: 0 }, { label: "5 hari", value: 1 }, { label: "10 hari", value: 0 }, { label: "20 hari", value: 0 }] },

      // Kecepatan & Logika
      { id: "iq_31", category: "Kecepatan & Logika", text: "Semua burung memiliki sayap. Pinguin adalah burung. Kesimpulan yang tepat:", options: [{ label: "Pinguin bisa terbang", value: 0 }, { label: "Pinguin memiliki sayap", value: 1 }, { label: "Sebagian pinguin tidak bersayap", value: 0 }, { label: "Sayap pinguin besar", value: 0 }] },
      { id: "iq_32", category: "Kecepatan & Logika", text: "Jika hari ini hujan, maka saya membawa payung. Saya tidak membawa payung. Kesimpulannya...", options: [{ label: "Hari ini hujan", value: 0 }, { label: "Hari ini tidak hujan", value: 1 }, { label: "Payung saya hilang", value: 0 }, { label: "Hari ini panas", value: 0 }] },
      { id: "iq_33", category: "Kecepatan & Logika", text: "Jika Budi lebih tinggi dari Andi, dan Caca lebih tinggi dari Budi, siapakah yang paling pendek di antara mereka?", options: [{ label: "Budi", value: 0 }, { label: "Andi", value: 1 }, { label: "Caca", value: 0 }, { label: "Tidak dapat disimpulkan", value: 0 }] },
      { id: "iq_34", category: "Kecepatan & Logika", text: "Beberapa mobil berwarna merah. Semua kendaraan milik Budi berwarna merah. Maka...", options: [{ label: "Semua kendaraan Budi adalah mobil", value: 0 }, { label: "Belum tentu kendaraan Budi adalah mobil", value: 1 }, { label: "Budi memiliki mobil merah", value: 0 }, { label: "Semua mobil merah milik Budi", value: 0 }] },
      { id: "iq_35", category: "Kecepatan & Logika", text: "Semua karyawan wajib hadir pukul 08.00. Joko adalah karyawan dan datang pukul 08.15. Maka...", options: [{ label: "Joko rajin", value: 0 }, { label: "Joko datang lebih awal", value: 0 }, { label: "Joko terlambat", value: 1 }, { label: "Joko bukan karyawan", value: 0 }] },
      { id: "iq_36", category: "Kecepatan & Logika", text: "Kucing adalah mamalia. Tidak ada mamalia yang bertelur. Kesimpulannya...", options: [{ label: "Kucing bertelur", value: 0 }, { label: "Kucing tidak bertelur", value: 1 }, { label: "Sebagian kucing bertelur", value: 0 }, { label: "Mamalia adalah kucing", value: 0 }] },
      { id: "iq_37", category: "Kecepatan & Logika", text: "Jika A = B dan B = C, maka...", options: [{ label: "A lebih besar dari C", value: 0 }, { label: "A = C", value: 1 }, { label: "C lebih kecil dari B", value: 0 }, { label: "Tidak ada hubungan", value: 0 }] },
      { id: "iq_38", category: "Kecepatan & Logika", text: "Jika Ani belajar, maka ia lulus ujian. Ani tidak lulus ujian. Kesimpulannya...", options: [{ label: "Ani belajar", value: 0 }, { label: "Ani tidak belajar", value: 1 }, { label: "Ujiannya sulit", value: 0 }, { label: "Ani malas", value: 0 }] },
      { id: "iq_39", category: "Kecepatan & Logika", text: "Semua bunga mawar berduri. Ada bunga mawar yang berwarna merah. Kesimpulannya...", options: [{ label: "Semua bunga merah berduri", value: 0 }, { label: "Ada bunga berduri yang berwarna merah", value: 1 }, { label: "Bunga mawar tidak merah", value: 0 }, { label: "Semua bunga berduri adalah mawar", value: 0 }] },
      { id: "iq_40", category: "Kecepatan & Logika", text: "Semua murid di sekolah harus memakai seragam. Budi sedang berada di sekolah tetapi tidak memakai seragam. Kesimpulannya...", options: [{ label: "Budi adalah murid", value: 0 }, { label: "Budi lupa memakai seragam", value: 0 }, { label: "Budi pasti bukan murid sekolah tersebut", value: 1 }, { label: "Budi anak guru", value: 0 }] }
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

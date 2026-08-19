export function calculateScores(answers) {
  const scores = {
    multiple_intelligence: {},
    personality: {},
    interest: {},
    riasec: {},
    iq: {}
  };

  Object.values(answers).forEach(ans => {
    const { testId, category, value } = ans;
    if (!scores[testId][category]) {
      scores[testId][category] = 0;
    }
    scores[testId][category] += value;
  });

  return scores;
}

export function getRecommendations(scores, userData, selectedMode = 'comprehensive') {
  const level = userData?.level || 'smp';
  
  // 1. Get Top RIASEC
  const riasecScores = scores.riasec || {};
  const sortedRiasec = Object.entries(riasecScores).sort((a, b) => b[1] - a[1]);
  const topRiasec = sortedRiasec.length > 0 ? sortedRiasec[0][0] : 'Realistic';

  // 2. Get Top Multiple Intelligence
  const miScores = scores.multiple_intelligence || {};
  const sortedMI = Object.entries(miScores).sort((a, b) => b[1] - a[1]);
  const topMI = sortedMI.length > 0 ? sortedMI[0][0] : 'Linguistik';

  // 3. Get Top Interest
  const interestScores = scores.interest || {};
  const sortedInterest = Object.entries(interestScores).sort((a, b) => b[1] - a[1]);
  const topInterest = sortedInterest.length > 0 ? sortedInterest[0][0] : 'Sains & Analitik';

  // 4. Get Top IQ (Wechsler)
  const iqScores = scores.iq || {};
  const sortedIQ = Object.entries(iqScores).sort((a, b) => b[1] - a[1]);
  const topIQ = sortedIQ.length > 0 ? sortedIQ[0][0] : 'Pemahaman Verbal';

  // 5. Build Roadmap based on Level and selectedMode
  let roadmap = [];

  if (selectedMode === 'iq') {
    roadmap = [
      { title: "Kekuatan Kognitif", desc: `Berdasarkan tes, pilar kecerdasan kognitif terkuat Anda adalah ${topIQ}. Ini menunjukkan keunggulan analitis Anda pada bidang tersebut (merujuk pada teori David Wechsler).` },
      { title: "Rekomendasi Strategis", desc: `Maksimalkan ${topIQ} Anda untuk memecahkan masalah kompleks, sekaligus terus melatih aspek logika, spasial, dan memori lainnya agar kognitif Anda berkembang seimbang.` }
    ];
  } else if (selectedMode === 'multiple_intelligence') {
    roadmap = [
      { title: "Karakter Belajar", desc: `Kecerdasan kognitif dominan Anda adalah ${topMI}. Anda akan lebih cepat dan mudah memahami pelajaran jika materi disesuaikan dengan kekuatan ini.` },
      { title: "Potensi Aktivitas", desc: `Anda sangat direkomendasikan untuk mencari hobi, klub, atau proyek sekolah yang mengasah kemampuan ${topMI} Anda agar potensi tersebut tidak terbuang sia-sia.` }
    ];
  } else if (selectedMode === 'interest') {
    roadmap = [
      { title: "Fokus Pengembangan (Ekskul & Hobi)", desc: `Berdasarkan tes, Anda menunjukkan ketertarikan alami yang sangat kuat pada bidang ${topInterest}.` },
      { title: "Saran Kegiatan", desc: `Bergabunglah dengan komunitas, kursus, atau perlombaan yang secara spesifik membahas bidang ${topInterest} untuk menyalurkan minat bawaan Anda.` }
    ];
  } else if (selectedMode === 'riasec') {
    roadmap = [
      { title: "Rekomendasi Lingkungan Kerja", desc: `Profil ${topRiasec} Anda menunjukkan kecenderungan kuat pada karir yang memfasilitasi gaya penyelesaian masalah spesifik Anda.` },
      { title: "Target Persiapan", desc: `Pilih jurusan kuliah atau pelatihan vokasi yang akan menuntun Anda ke lingkungan kerja bertipe ${topRiasec} agar Anda merasa bermakna dan tidak mudah stres.` }
    ];
  } else {
    // Mode Komprehensif
    if (level === 'sd' || level === 'smp') {
      if (topRiasec === 'Realistic' || topRiasec === 'Investigative') {
      roadmap = [
        { title: "Rekomendasi SMA/SMK", desc: "Sangat disarankan masuk SMK jurusan Teknik Mesin, Otomotif, Rekayasa Perangkat Lunak (IT), atau SMA peminatan MIPA/Sains." },
        { title: "Fokus Pengembangan (Ekskul)", desc: "Ikuti ekstrakurikuler Robotik, Klub Sains, Koding, atau Olahraga Teknis." },
        { title: "Karakter Belajar", desc: `Karena kecerdasan dominan Anda adalah ${topMI}, Anda akan lebih cepat belajar dengan praktek langsung (Hands-on).` }
      ];
    } else if (topRiasec === 'Artistic') {
       roadmap = [
        { title: "Rekomendasi SMA/SMK", desc: "Sangat disarankan masuk SMK jurusan Desain Komunikasi Visual (DKV), Animasi, Seni Musik, atau SMA dengan minat Seni Budaya/Bahasa." },
        { title: "Fokus Pengembangan (Ekskul)", desc: "Ikuti Teater, Paduan Suara, Klub Jurnalistik, atau Desain Grafis." },
        { title: "Karakter Belajar", desc: `Kecerdasan ${topMI} Anda membuat Anda unggul jika diberi kebebasan berekspresi dalam mengerjakan tugas.` }
      ];
    } else {
       roadmap = [
        { title: "Rekomendasi SMA/SMK", desc: "Cocok masuk SMA peminatan IPS, atau SMK jurusan Bisnis Daring, Pemasaran, Akuntansi, maupun Pariwisata." },
        { title: "Fokus Pengembangan (Ekskul)", desc: "Ikuti OSIS, Pramuka, Klub Debat, atau Kewirausahaan (Entrepreneurship)." },
        { title: "Karakter Belajar", desc: `Gunakan kecerdasan ${topMI} Anda dengan cara berdiskusi kelompok dan presentasi verbal.` }
      ];
    }
  } else if (level === 'sma') {
    if (topRiasec === 'Investigative' || topRiasec === 'Realistic') {
      roadmap = [
        { title: "Rekomendasi Fakultas/Prodi", desc: "Fakultas Teknik (Sipil, Mesin, Industri), Ilmu Komputer/Informatika, Kedokteran, atau FMIPA." },
        { title: "Target Karir Masa Depan", desc: "Software Engineer, Dokter, Peneliti, Arsitek, atau Data Scientist." },
        { title: "Saran Persiapan Kuliah", desc: "Fokus perkuat nilai Matematika dan Fisika/Biologi. Ikuti olimpiade atau bootcamp teknologi." }
      ];
    } else if (topRiasec === 'Artistic' || topRiasec === 'Social') {
      roadmap = [
        { title: "Rekomendasi Fakultas/Prodi", desc: "Fakultas Psikologi, Ilmu Komunikasi, Seni Rupa & Desain, Pendidikan/Keguruan, atau Hubungan Internasional." },
        { title: "Target Karir Masa Depan", desc: "Psikolog, Guru/Dosen, UI/UX Designer, Public Relations, atau Content Creator." },
        { title: "Saran Persiapan Kuliah", desc: "Perbanyak bacaan literatur, aktif di organisasi sosial, dan bangun portofolio karya/desain." }
      ];
    } else {
      roadmap = [
        { title: "Rekomendasi Fakultas/Prodi", desc: "Fakultas Ekonomi & Bisnis (Manajemen, Akuntansi), Hukum, atau Administrasi Publik." },
        { title: "Target Karir Masa Depan", desc: "Pengusaha (Entrepreneur), Pengacara, HR Manager, Analis Keuangan, atau Pejabat Pemerintahan." },
        { title: "Saran Persiapan Kuliah", desc: "Asah skill public speaking, negosiasi, dan ikuti perlombaan debat atau bisnis." }
      ];
    }
    } else {
      // Mahasiswa / Umum
      roadmap = [
        { title: "Area Karir Terbaik", desc: `Bidang industri yang sesuai dengan profil ${topRiasec}, didukung dengan ketertarikan kuat di bidang ${topInterest}, dan memanfaatkan kecerdasan ${topMI}.` },
        { title: "Strategi Upskilling", desc: "Ambil sertifikasi profesional di bidang tersebut, ikuti seminar, dan perluas koneksi profesional." },
        { title: "Lingkungan Kerja Ideal", desc: topRiasec === 'Social' ? "Budaya perusahaan yang kolaboratif dan mengutamakan kesejahteraan tim." : "Perusahaan yang menghargai target, inovasi, dan efisiensi kerja." }
      ];
    }
  }

  return {
    topRiasec,
    topMI,
    topInterest,
    topIQ,
    sortedRiasec,
    sortedMI,
    sortedInterest,
    sortedIQ,
    roadmap
  };
}

export function getNarrative(testType, topCategory) {
  if (testType === 'IQ (Kognitif)') {
    const narratives = {
      'Pemahaman Verbal': {
        karakteristik: [
          "Sangat tangkas dalam memahami, mengolah, dan menyimpulkan informasi verbal.",
          "Memiliki kekayaan kosakata dan kemampuan mengekspresikan argumen logis yang kuat.",
          "Mudah menangkap makna tersirat dan korelasi konsep dalam bacaan kompleks."
        ],
        saranPengembangan: [
          "Gunakan kekuatan bahasa untuk memimpin diskusi, negosiasi, atau penulisan analitis.",
          "Jangan lupakan aspek logika spasial dan matematis agar kemampuan kognitif tetap holistik."
        ]
      },
      'Penalaran Perseptual': {
        karakteristik: [
          "Mampu memvisualisasikan, merotasi, dan membayangkan objek 3D dalam pikiran dengan akurat.",
          "Memiliki logika spasial yang sangat peka, mampu melihat pola visual yang sering terlewatkan orang lain.",
          "Pendekatan pemecahan masalah cenderung intuitif, kreatif, dan out-of-the-box."
        ],
        saranPengembangan: [
          "Maksimalkan potensi di bidang desain, arsitektur, teknik, atau seni visual tingkat tinggi.",
          "Latih komunikasi verbal agar Anda bisa menjelaskan pola visual rumit ke orang awam."
        ]
      },
      'Memori Kerja': {
        karakteristik: [
          "Sangat piawai mengingat, memanipulasi, dan menghitung data/angka secara mental (di luar kepala).",
          "Mampu mempertahankan konsentrasi tinggi saat memproses instruksi yang berlapis-lapis.",
          "Analisis rasional dan logis berjalan sangat cepat untuk memecahkan masalah matematis."
        ],
        saranPengembangan: [
          "Bidang pemrograman, aktuaria, atau sains data sangat membutuhkan kapasitas memori kerja seperti ini.",
          "Pelajari teknik memori tingkat lanjut (mnemonic) untuk menguasai berbagai bahasa atau ilmu baru."
        ]
      },
      'Kecepatan & Logika': {
        karakteristik: [
          "Cepat dalam memproses informasi baru, mengambil konklusi deduktif, dan mengeksekusi keputusan.",
          "Tidak mudah panik di bawah tekanan waktu, logika tetap berjalan jernih.",
          "Sangat tanggap terhadap perubahan instruksi dan mampu beradaptasi seketika."
        ],
        saranPengembangan: [
          "Kemampuan ini sangat krusial dalam karir strategis, operasional lapangan, atau manajemen krisis.",
          "Tetap berhati-hati, jangan biarkan kecepatan memengaruhi akurasi dan ketelitian detail."
        ]
      }
    };
    return narratives[topCategory] || narratives['Pemahaman Verbal'];
  } else if (testType === 'Kecerdasan Majemuk') {
    const narratives = {
      'Linguistik': {
        karakteristik: [
          "Memiliki sensitivitas tinggi terhadap struktur, makna, dan ritme kata-kata.",
          "Mampu mengekspresikan gagasan kompleks secara terstruktur dan persuasif.",
          "Sangat reseptif terhadap informasi verbal (membaca, menulis, mendengarkan)."
        ],
        saranPengembangan: [
          "Latih kemampuan 'active listening' dan public speaking untuk mempertajam empati verbal.",
          "Biasakan membuat jurnal harian atau menulis esai opini untuk menstrukturkan alur pikiran.",
          "Ikuti klub debat atau jurnalistik untuk melatih artikulasi gagasan di bawah tekanan."
        ]
      },
      'Logika-Matematika': {
        karakteristik: [
          "Memiliki penalaran deduktif dan induktif yang sangat tajam.",
          "Cenderung mendekati masalah secara sistematis, objektif, dan terukur.",
          "Sangat peka terhadap pola, hubungan sebab-akibat, dan konseptualisasi abstrak."
        ],
        saranPengembangan: [
          "Tantang diri dengan mempelajari bahasa pemrograman atau algoritma komputasi.",
          "Terapkan pemikiran logis dalam pemecahan masalah sosial, bukan hanya angka.",
          "Ikuti proyek penelitian atau eksperimen sains untuk menguji hipotesis secara empiris."
        ]
      },
      'Spasial': {
        karakteristik: [
          "Mampu memanipulasi dan merepresentasikan gambaran visual-spasial di dalam pikiran.",
          "Memiliki kesadaran ruang (spatial awareness) dan orientasi arah yang sangat baik.",
          "Sangat peka terhadap detail visual, warna, garis, dan komposisi estetika."
        ],
        saranPengembangan: [
          "Salurkan ide melalui mind-mapping visual, sketsa, atau desain 3D.",
          "Pelajari software desain grafis, arsitektur, atau animasi untuk menunjang potensi bawaan.",
          "Latih observasi visual dengan mempelajari fotografi atau seni rupa murni."
        ]
      },
      'Kinestetik': {
        karakteristik: [
          "Menggunakan seluruh tubuh atau bagian tubuh untuk memecahkan masalah atau menciptakan sesuatu.",
          "Memiliki memori otot (muscle memory) yang sangat baik dan refleks yang tajam.",
          "Membutuhkan pengalaman langsung (hands-on) untuk memahami konsep baru secara optimal."
        ],
        saranPengembangan: [
          "Jangan paksa belajar hanya dengan duduk diam; gunakan gerakan (pacing) saat menghafal teori.",
          "Ikuti kegiatan ekstrakurikuler yang menuntut koordinasi fisik (olahraga, tari, teater).",
          "Cari metode belajar praktikum, simulasi, atau magang lapangan agar potensi maksimal keluar."
        ]
      },
      'Musikal': {
        karakteristik: [
          "Memiliki kepekaan luar biasa terhadap intonasi, ritme, melodi, dan timbre suara.",
          "Sering kali memproses informasi atau emosi melalui pola nada.",
          "Mampu mengidentifikasi harmoni dan ketidakselarasan dalam sebuah sistem (tidak hanya musik)."
        ],
        saranPengembangan: [
          "Gunakan musik instrumental untuk membantu fokus saat mempelajari materi akademik yang sulit.",
          "Pelajari komposisi musik atau produksi audio digital sebagai medium ekspresi analitis.",
          "Gabungkan kemampuan musikal dengan kecerdasan lain (misal: menciptakan lagu untuk menghafal sejarah)."
        ]
      },
      'Interpersonal': {
        karakteristik: [
          "Sangat empatik dan mampu membaca intensi, motivasi, serta emosi orang lain.",
          "Memiliki kecerdasan sosial yang memungkinkan adaptasi cepat dalam berbagai dinamika kelompok.",
          "Natural dalam memediasi konflik dan memimpin kolaborasi tim."
        ],
        saranPengembangan: [
          "Ambil peran kepemimpinan dalam OSIS, panitia acara, atau proyek kolaboratif.",
          "Pelajari teknik resolusi konflik dan psikologi komunikasi untuk mengasah empati taktis.",
          "Berlatih memberikan *constructive feedback* (kritik membangun) tanpa menyinggung perasaan kolega."
        ]
      },
      'Intrapersonal': {
        karakteristik: [
          "Memiliki metakognisi (kesadaran akan proses berpikir sendiri) yang sangat matang.",
          "Sangat menyadari kekuatan, kelemahan, nilai-nilai inti, dan motivasi internal.",
          "Sangat mandiri, reflektif, dan mampu mengatur emosi diri sendiri dengan baik."
        ],
        saranPengembangan: [
          "Tetapkan target personal jangka panjang dan pecah menjadi langkah-langkah *actionable*.",
          "Lakukan meditasi atau refleksi rutin untuk menjaga stabilitas emosi dan fokus mental.",
          "Jangan mengisolasi diri; belajarlah membagikan wawasan mendalam Anda kepada kelompok kecil."
        ]
      }
    };
    return narratives[topCategory] || null;
  }
  
  if (testType === 'Potensi Karir (RIASEC)') {
    const narratives = {
      'Realistic': {
        karakteristik: [
          "Pragmatis, lugas, dan sangat menyukai aktivitas yang membuahkan hasil nyata (tangible).",
          "Lebih nyaman berinteraksi dengan benda, mesin, atau alam dibandingkan interaksi sosial intens.",
          "Mengutamakan solusi praktis dan efisiensi di atas teori abstrak."
        ],
        saranPengembangan: [
          "Asah keahlian teknis spesifik (hard skills) melalui sertifikasi profesional atau vokasi.",
          "Terlibat dalam proyek pembuatan prototipe, perakitan, atau aktivitas alam terbuka.",
          "Latih kemampuan komunikasi interpersonal agar karya teknis Anda dapat dipresentasikan dengan baik."
        ],
        rekomendasiJurusanSMK: [
          "SMK Teknik Kendaraan Ringan (Otomotif)", "SMK Teknik Pemesinan", "SMK Agribisnis / Pertanian",
          "SMK Teknik Instalasi Listrik", "SMA Peminatan MIPA"
        ],
        rekomendasiProfesiSMK: [
          "Mekanik / Montir Bengkel", "Operator Mesin Pabrik", "Teknisi Listrik / Instalator",
          "Staf Lapangan Pertanian", "Drafter Arsitektur Dasar"
        ],
        rekomendasiJurusan: [
          "Teknik Mesin", "Teknik Otomotif", "Arsitektur", "Teknik Sipil", "Teknik Elektro",
          "Pertanian & Agribisnis", "Kehutanan", "Ilmu Kelautan", "Penerbangan / Kedirgantaraan", "Teknologi Pangan"
        ],
        rekomendasiProfesi: [
          "Teknisi / Mekanik", "Insinyur Sipil", "Arsitek / Kontraktor", "Pilot / Penerbang", "Ahli Pertanian / Petani Modern",
          "Polisi / Militer", "Ahli Konservasi Lingkungan", "Operator Alat Berat", "Ahli K3 (Kesehatan & Keselamatan Kerja)", "Surveyor / Pemetaan"
        ],
        trenPekerjaan: "Di era modern, profesi Teknisi (terutama spesialisasi energi terbarukan dan kendaraan listrik) serta Insinyur Infrastruktur sangat dibutuhkan seiring dengan pesatnya transisi energi hijau dan pembangunan skala besar."
      },
      'Investigative': {
        karakteristik: [
          "Sangat analitis, rasional, dan digerakkan oleh rasa ingin tahu intelektual (intellectual curiosity).",
          "Lebih menyukai observasi, penelitian, dan pemecahan masalah kompleks secara mandiri.",
          "Cenderung skeptis dan membutuhkan bukti empiris atau data sebelum mengambil kesimpulan."
        ],
        saranPengembangan: [
          "Banyak membaca literatur ilmiah dan berlatih menulis karya tulis ilmiah atau analisis data.",
          "Ikuti perlombaan sains, debat akademik, atau proyek riset independen.",
          "Belajarlah untuk mengomunikasikan ide kompleks ke dalam bahasa yang mudah dipahami orang awam."
        ],
        rekomendasiJurusanSMK: [
          "SMK Rekayasa Perangkat Lunak (RPL)", "SMK Analis Kimia", "SMK Farmasi Klinis",
          "SMK Teknik Komputer Jaringan (TKJ)", "SMA Peminatan MIPA"
        ],
        rekomendasiProfesiSMK: [
          "Junior Programmer / Koder", "Asisten Laboratorium", "Asisten Apoteker",
          "Teknisi Jaringan Komputer", "Staf Pengolah Data (Data Entry)"
        ],
        rekomendasiJurusan: [
          "Kedokteran", "Kedokteran Hewan", "Farmasi", "Biologi / Kimia Murni", "Fisika / Astronomi",
          "Ilmu Komputer / Informatika", "Data Science", "Psikologi Klinis", "Statistika", "Kriminologi"
        ],
        rekomendasiProfesi: [
          "Dokter / Ahli Bedah", "Apoteker", "Ilmuwan / Peneliti Sains", "Data Scientist", "Psikolog Klinis",
          "Analis Sistem Komputer", "Ahli Forensik", "Aktuaris", "Ahli Gizi / Dietisien", "Dosen / Peneliti Akademik"
        ],
        trenPekerjaan: "Saat ini, dunia teknologi dan kesehatan sangat mendambakan talenta Data Scientist (AI & Machine Learning) dan Peneliti Sains Medis untuk mengolah big data dan menciptakan inovasi yang mutakhir."
      },
      'Artistic': {
        karakteristik: [
          "Memiliki dorongan kuat untuk mengekspresikan orisinalitas, kreativitas, dan emosi.",
          "Sangat tidak menyukai struktur yang kaku, rutinitas berulang, atau aturan yang membatasi imajinasi.",
          "Peka terhadap estetika dan mampu melihat sesuatu dari perspektif yang tidak lazim (out of the box)."
        ],
        saranPengembangan: [
          "Bangun portofolio karya (tulisan, desain, seni pertunjukan) sejak dini sebagai rekam jejak.",
          "Belajar menerima kritik objektif terhadap karya Anda tanpa menganggapnya sebagai serangan personal.",
          "Gabungkan kreativitas Anda dengan keterampilan manajemen waktu agar *deadline* tetap terpenuhi."
        ],
        rekomendasiJurusanSMK: [
          "SMK Desain Komunikasi Visual (DKV)", "SMK Animasi / Multimedia", "SMK Tata Busana (Fashion)",
          "SMK Seni Musik / Karawitan", "SMA Peminatan Bahasa & Budaya"
        ],
        rekomendasiProfesiSMK: [
          "Desainer Grafis Pemula", "Animator / Ilustrator Muda", "Penjahit / Asisten Desainer",
          "Kru Produksi Video", "Asisten Fotografer"
        ],
        rekomendasiJurusan: [
          "Desain Komunikasi Visual (DKV)", "Seni Rupa Murni", "Desain Interior", "Sastra & Bahasa", "Jurnalistik / Penyiaran",
          "Seni Musik / Karawitan", "Seni Tari / Teater", "Desain Fashion", "Ilmu Komunikasi", "Fotografi / Videografi"
        ],
        rekomendasiProfesi: [
          "Desainer Grafis / UI/UX", "Penulis / Copywriter", "Arsitek Interior", "Musisi / Komposer", "Content Creator / Youtuber",
          "Sutradara / Produser", "Jurnalis / Reporter", "Desainer Pakaian (Fashion Designer)", "Fotografer Profesional", "Aktor / Seniman"
        ],
        trenPekerjaan: "Dengan meledaknya industri digital kreatif, profesi spesifik seperti UI/UX Designer dan Content Creator menjadi incaran utama banyak perusahaan rintisan (startup) dan agensi media global."
      },
      'Social': {
        karakteristik: [
          "Sangat empatik, kooperatif, dan digerakkan oleh idealisme untuk membantu perkembangan orang lain.",
          "Mendapatkan energi dari interaksi sosial dan diskusi yang bermakna (meaningful conversations).",
          "Lebih mengutamakan kesejahteraan kolektif dan keharmonisan dibandingkan pencapaian teknis."
        ],
        saranPengembangan: [
          "Terlibat dalam program kerelawanan (volunteering), pendampingan teman sebaya, atau organisasi sosial.",
          "Pelajari batasan emosional (emotional boundaries) agar tidak *burnout* karena menyerap terlalu banyak emosi orang lain.",
          "Asah kemampuan *public speaking* dan mediasi untuk memperluas dampak positif Anda."
        ],
        rekomendasiJurusanSMK: [
          "SMK Keperawatan Sosial", "SMK Usaha Perjalanan Wisata", "SMK Pekerjaan Sosial",
          "SMK Tata Kecantikan", "SMA Peminatan IPS"
        ],
        rekomendasiProfesiSMK: [
          "Asisten Perawat / Caregiver", "Pemandu Wisata Lokal", "Resepsionis / Customer Service",
          "Pendamping Sosial Masyarakat", "Stylist / Make-up Artist"
        ],
        rekomendasiJurusan: [
          "Pendidikan / Keguruan", "Keperawatan", "Bimbingan dan Konseling", "Ilmu Hubungan Internasional", "Ilmu Kesehatan Masyarakat",
          "Pekerjaan Sosial / Ilmu Kesejahteraan Sosial", "Sosiologi", "Psikologi Pendidikan", "Ilmu Perpustakaan", "Pariwisata / Hospitality"
        ],
        rekomendasiProfesi: [
          "Guru / Dosen", "Perawat / Bidan", "Konselor Sekolah", "HRD (Human Resource Development)", "Pekerja Sosial",
          "Terapis Wicara / Fisioterapis", "Diplomat / Staf Kedutaan", "Pemandu Wisata", "Penyuluh Kesehatan", "Pelatih / Instruktur (Trainer)"
        ],
        trenPekerjaan: "Meskipun kecerdasan buatan berkembang pesat, empati manusia tak tergantikan. Terapis Kesehatan Mental (Psikolog/Konselor) serta Profesional HRD sangat dicari untuk menjaga kesejahteraan psikologis pekerja modern."
      },
      'Enterprising': {
        karakteristik: [
          "Ambisius, percaya diri, dan memiliki insting kepemimpinan serta persuasi yang dominan.",
          "Menyukai tantangan, kompetisi, dan berani mengambil risiko yang diperhitungkan (calculated risks).",
          "Berorientasi pada pencapaian target, keuntungan, dan ekspansi pengaruh."
        ],
        saranPengembangan: [
          "Inisiasi proyek kewirausahaan kecil-kecilan atau ambil peran ketua dalam organisasi.",
          "Latih kecerdasan emosional (EQ) agar ambisi Anda tidak menekan rekan kerja, melainkan memotivasi mereka.",
          "Pelajari manajemen keuangan dasar dan strategi negosiasi etis."
        ],
        rekomendasiJurusanSMK: [
          "SMK Bisnis Daring dan Pemasaran", "SMK Perhotelan", "SMK Tata Niaga",
          "SMK Manajemen Logistik", "SMA Peminatan IPS"
        ],
        rekomendasiProfesiSMK: [
          "Tenaga Penjualan (Sales)", "Staf Pemasaran Digital Pemula", "Pramuniaga / Kasir",
          "Asisten Event Organizer (EO)", "Wirausahawan Muda"
        ],
        rekomendasiJurusan: [
          "Ilmu Hukum", "Manajemen Bisnis", "Pemasaran (Marketing)", "Ilmu Komunikasi (Public Relations)", "Kewirausahaan",
          "Ekonomi Pembangunan", "Ilmu Administrasi Bisnis", "Ilmu Politik & Pemerintahan", "Manajemen Perhotelan", "Manajemen Olahraga"
        ],
        rekomendasiProfesi: [
          "Pengusaha / CEO", "Pengacara / Jaksa", "Manajer Pemasaran (CMO)", "Konsultan Bisnis", "Politikus / Pejabat Publik",
          "Public Relations (Humas)", "Agen Real Estat / Properti", "Event Organizer (EO)", "Manajer Penjualan (Sales Manager)", "Pialang Saham / Broker"
        ],
        trenPekerjaan: "Dalam iklim bisnis yang hiper-kompetitif saat ini, Manajer Pemasaran (khususnya Digital Marketing) dan Pengusaha Inovatif (Startup Founder) memegang peranan sangat krusial dalam menggerakkan roda ekonomi."
      },
      'Conventional': {
        karakteristik: [
          "Sangat terorganisir, presisi, berorientasi pada detail, dan menyukai keteraturan sistem.",
          "Unggul dalam mengelola data, administrasi, dan memastikan kepatuhan terhadap standar operasional.",
          "Dapat diandalkan, efisien, dan memberikan rasa aman/stabil dalam dinamika tim."
        ],
        saranPengembangan: [
          "Kuasai *software* pengolah data (Excel tingkat lanjut) atau sistem manajemen basis data.",
          "Belajarlah beradaptasi dan tetap tenang ketika menghadapi situasi tak terduga yang merusak rencana awal.",
          "Ambil peran sebagai bendahara atau sekretaris proyek untuk mengasah akurasi profesional Anda."
        ],
        rekomendasiJurusanSMK: [
          "SMK Akuntansi & Keuangan Lembaga", "SMK Otomatisasi Tata Kelola Perkantoran", "SMK Perbankan",
          "SMK Bisnis Manajemen", "SMA Peminatan IPS"
        ],
        rekomendasiProfesiSMK: [
          "Staf Administrasi Kantor", "Asisten Akuntan", "Teller / Staf Perbankan Dasar",
          "Staf Gudang / Inventory", "Operator Komputer"
        ],
        rekomendasiJurusan: [
          "Akuntansi", "Administrasi Publik / Administrasi Perkantoran", "Sistem Informasi", "Matematika / Aktuaria", "Perpajakan",
          "Manajemen Rantai Pasok (Logistik)", "Ilmu Ekonomi", "Statistika Terapan", "Ilmu Kearsipan", "Manajemen Keuangan"
        ],
        rekomendasiProfesi: [
          "Akuntan / Auditor", "Analis Keuangan", "Administrator Kantor", "Petugas Pajak", "Staf Rekam Medis",
          "Analis Data (Data Analyst)", "Quality Control (QC)", "Pustakawan / Arsiparis", "Manajer Logistik", "Teller / Staf Perbankan"
        ],
        trenPekerjaan: "Setiap perusahaan yang berskala global saat ini sangat bersandar pada Analis Data Keuangan dan Manajer Rantai Pasok (Supply Chain/Logistik) untuk menjaga efisiensi operasional e-commerce yang masif."
      }
    };
    return narratives[topCategory] || null;
  }

  if (testType === 'Minat & Bakat') {
    const narratives = {
      'Sains & Analitik': {
        karakteristik: [
          "Ketertarikan kuat pada pemecahan masalah intelektual, eksperimen, dan penemuan fakta baru.",
          "Cenderung menggunakan logika dan metodologi ilmiah dalam menghadapi situasi yang belum diketahui.",
          "Lebih menghargai observasi empiris dan data kuantitatif dibandingkan opini subyektif."
        ],
        saranPengembangan: [
          "Latih kemampuan Anda dengan mengikuti kompetisi sains, olimpiade, atau proyek riset sekolah.",
          "Gali lebih dalam literatur teknologi dan sains untuk memperluas cakrawala pengetahuan analitik Anda.",
          "Cobalah berdiskusi dengan ahli atau guru bidang eksakta untuk mendapatkan bimbingan akademis terarah."
        ]
      },
      'Seni & Kreativitas': {
        karakteristik: [
          "Memiliki minat mendalam terhadap ekspresi estetika, desain visual, musik, atau sastra.",
          "Menemukan kepuasan batin saat bisa menciptakan karya orisinal yang mewakili perasaan atau ide kompleks.",
          "Kurang menyukai rutinitas kaku dan sangat menghargai kebebasan berimajinasi."
        ],
        saranPengembangan: [
          "Bangun portofolio karya kreatif secara konsisten sebagai modal awal meniti karir profesional.",
          "Belajar menerima kritik konstruktif untuk mematangkan konsep estetika Anda.",
          "Jejaki peluang kolaborasi dengan kreator lain untuk menghasilkan karya lintas disiplin."
        ]
      },
      'Sosial & Pelayanan': {
        karakteristik: [
          "Menemukan makna hidup dari membantu, mendidik, atau menyembuhkan orang lain.",
          "Memiliki empati bawaan yang tinggi dan mampu mendengarkan serta memahami emosi orang di sekitar.",
          "Memilih lingkungan kerja yang kolaboratif dan berorientasi pada kesejahteraan kolektif."
        ],
        saranPengembangan: [
          "Libatkan diri secara aktif dalam kegiatan kerelawanan, organisasi sosial, atau bimbingan sebaya.",
          "Pelajari teknik manajemen emosi agar tidak mudah mengalami 'burnout' saat membantu orang lain.",
          "Kembangkan keterampilan komunikasi interpersonal untuk menjadi fasilitator atau konselor yang efektif."
        ]
      },
      'Bisnis & Kepemimpinan': {
        karakteristik: [
          "Sangat bersemangat menghadapi kompetisi, tantangan target, dan memengaruhi kelompok.",
          "Memiliki minat yang jelas pada negosiasi, kewirausahaan, dan manajemen proyek strategis.",
          "Percaya diri berbicara di depan umum dan berani mengambil risiko yang terukur."
        ],
        saranPengembangan: [
          "Ambil peran kepemimpinan di OSIS atau kepanitiaan acara untuk melatih insting manajerial.",
          "Mulai proyek wirausaha kecil-kecilan untuk memahami dinamika keuntungan dan risiko nyata.",
          "Pertajam etika bisnis dan kecerdasan emosional agar kepemimpinan Anda disegani, bukan ditakuti."
        ]
      },
      'Organisasi & Keteraturan': {
        karakteristik: [
          "Menyukai aktivitas yang menuntut ketelitian tinggi, pemrosesan data, dan manajemen arsip.",
          "Sangat menghargai struktur, kepatuhan pada prosedur baku, dan ketepatan waktu.",
          "Mampu memberikan stabilitas dan efisiensi administratif dalam berbagai dinamika proyek."
        ],
        saranPengembangan: [
          "Tingkatkan keahlian teknis menggunakan perangkat lunak akuntansi, spreadsheet, atau manajemen data.",
          "Ambil tanggung jawab sebagai sekretaris atau bendahara dalam organisasi untuk mengasah presisi.",
          "Belajarlah untuk sedikit fleksibel saat rencana mendadak berubah di luar kendali Anda."
        ]
      },
      'Fisik & Praktikal': {
        karakteristik: [
          "Menyukai aktivitas lapangan yang melibatkan motorik kasar, perakitan mekanik, atau alam bebas.",
          "Lebih mudah belajar melalui praktik langsung (hands-on) daripada teori tekstual.",
          "Cenderung pragmatis dan lebih menghargai hasil karya yang berwujud nyata dan fungsional."
        ],
        saranPengembangan: [
          "Kembangkan keterampilan vokasional (seperti otomotif, kriya, atau teknik mesin) lewat kursus terapan.",
          "Seimbangkan aktivitas fisik Anda dengan menjaga stamina dan keselamatan kerja (K3).",
          "Jangan abaikan aspek teoretis sepenuhnya; pahami konsep dasarnya agar praktik Anda lebih optimal."
        ]
      }
    };
    return narratives[topCategory] || null;
  }

  return null;
}

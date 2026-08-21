// Data Simulasi PTN dan Jurusan (Daya Tampung, Peminat, Passing Grade)
// Data ini digunakan untuk memberikan rekomendasi spesifik pada hasil tes RIASEC

export const ptnData = {
  // === REALISTIC ===
  "Teknik Mesin": [
    { univ: "Institut Teknologi Bandung (ITB)", passingGrade: "82.5%", dayaTampung: 120, peminat: 2450 },
    { univ: "Universitas Indonesia (UI)", passingGrade: "80.0%", dayaTampung: 80, peminat: 1800 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "78.5%", dayaTampung: 100, peminat: 1950 }
  ],
  "Teknik Sipil": [
    { univ: "Institut Teknologi Sepuluh Nopember (ITS)", passingGrade: "79.0%", dayaTampung: 150, peminat: 2100 },
    { univ: "Universitas Diponegoro (Undip)", passingGrade: "76.5%", dayaTampung: 180, peminat: 2500 },
    { univ: "Universitas Brawijaya (UB)", passingGrade: "75.0%", dayaTampung: 200, peminat: 2800 }
  ],
  "Teknik Pertambangan": [
    { univ: "Institut Teknologi Bandung (ITB)", passingGrade: "84.0%", dayaTampung: 100, peminat: 2600 },
    { univ: "Universitas Hasanuddin (Unhas)", passingGrade: "74.0%", dayaTampung: 80, peminat: 1200 },
    { univ: "UPN Veteran Yogyakarta", passingGrade: "75.5%", dayaTampung: 150, peminat: 1800 }
  ],

  // === INVESTIGATIVE ===
  "Pendidikan Dokter (Kedokteran)": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "89.5%", dayaTampung: 150, peminat: 4500 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "88.0%", dayaTampung: 175, peminat: 4200 },
    { univ: "Universitas Airlangga (Unair)", passingGrade: "87.0%", dayaTampung: 200, peminat: 3900 }
  ],
  "Teknik Informatika / Ilmu Komputer": [
    { univ: "Institut Teknologi Bandung (ITB)", passingGrade: "88.5%", dayaTampung: 180, peminat: 5100 },
    { univ: "Universitas Indonesia (UI)", passingGrade: "86.5%", dayaTampung: 150, peminat: 4800 },
    { univ: "Institut Teknologi Sepuluh Nopember (ITS)", passingGrade: "85.0%", dayaTampung: 200, peminat: 4200 }
  ],
  "Farmasi": [
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "83.5%", dayaTampung: 150, peminat: 3100 },
    { univ: "Universitas Padjadjaran (Unpad)", passingGrade: "82.0%", dayaTampung: 120, peminat: 2900 },
    { univ: "Universitas Airlangga (Unair)", passingGrade: "81.5%", dayaTampung: 140, peminat: 2700 }
  ],

  // === ARTISTIC ===
  "Desain Komunikasi Visual (DKV)": [
    { univ: "Institut Teknologi Bandung (ITB) - FSRD", passingGrade: "81.0%", dayaTampung: 150, peminat: 2800 },
    { univ: "Institut Seni Indonesia (ISI) Yogyakarta", passingGrade: "77.5%", dayaTampung: 120, peminat: 1900 },
    { univ: "Universitas Sebelas Maret (UNS)", passingGrade: "76.0%", dayaTampung: 80, peminat: 1500 }
  ],
  "Ilmu Komunikasi": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "85.5%", dayaTampung: 100, peminat: 3500 },
    { univ: "Universitas Padjadjaran (Unpad)", passingGrade: "84.0%", dayaTampung: 150, peminat: 4100 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "84.5%", dayaTampung: 90, peminat: 3200 }
  ],
  "Sastra & Bahasa": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "79.5%", dayaTampung: 80, peminat: 1800 },
    { univ: "Universitas Sanata Dharma", passingGrade: "75.0%", dayaTampung: 150, peminat: 1200 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "78.0%", dayaTampung: 60, peminat: 1500 }
  ],
  "Jurnalistik / Penyiaran": [
    { univ: "Universitas Padjadjaran (Unpad)", passingGrade: "81.0%", dayaTampung: 100, peminat: 2200 },
    { univ: "Universitas Brawijaya (UB)", passingGrade: "78.5%", dayaTampung: 120, peminat: 1900 },
    { univ: "UIN Syarif Hidayatullah", passingGrade: "75.0%", dayaTampung: 80, peminat: 1300 }
  ],

  // === SOCIAL ===
  "Psikologi": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "86.0%", dayaTampung: 180, peminat: 4200 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "85.5%", dayaTampung: 220, peminat: 4500 },
    { univ: "Universitas Diponegoro (Undip)", passingGrade: "83.0%", dayaTampung: 250, peminat: 3800 }
  ],
  "Ilmu Hubungan Internasional": [
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "84.5%", dayaTampung: 80, peminat: 2900 },
    { univ: "Universitas Indonesia (UI)", passingGrade: "85.0%", dayaTampung: 60, peminat: 2500 },
    { univ: "Universitas Padjadjaran (Unpad)", passingGrade: "82.5%", dayaTampung: 120, peminat: 3100 }
  ],
  "Keperawatan": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "78.0%", dayaTampung: 120, peminat: 2100 },
    { univ: "Universitas Airlangga (Unair)", passingGrade: "77.5%", dayaTampung: 150, peminat: 2400 },
    { univ: "Universitas Brawijaya (UB)", passingGrade: "76.0%", dayaTampung: 180, peminat: 2700 }
  ],

  // === ENTERPRISING ===
  "Manajemen Bisnis": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "87.0%", dayaTampung: 150, peminat: 5200 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "86.5%", dayaTampung: 180, peminat: 4800 },
    { univ: "Institut Teknologi Bandung (ITB) - SBM", passingGrade: "88.0%", dayaTampung: 240, peminat: 4500 }
  ],
  "Ilmu Hukum": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "85.0%", dayaTampung: 300, peminat: 4900 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "84.5%", dayaTampung: 280, peminat: 4200 },
    { univ: "Universitas Diponegoro (Undip)", passingGrade: "83.0%", dayaTampung: 400, peminat: 5100 }
  ],
  "Kewirausahaan": [
    { univ: "Universitas Brawijaya (UB)", passingGrade: "79.0%", dayaTampung: 120, peminat: 1800 },
    { univ: "Universitas Binus (Swasta Setara)", passingGrade: "77.0%", dayaTampung: 300, peminat: 2200 },
    { univ: "Universitas Pendidikan Indonesia (UPI)", passingGrade: "76.5%", dayaTampung: 100, peminat: 1500 }
  ],

  // === CONVENTIONAL ===
  "Akuntansi": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "86.5%", dayaTampung: 150, peminat: 4300 },
    { univ: "Universitas Gadjah Mada (UGM)", passingGrade: "85.0%", dayaTampung: 180, peminat: 3900 },
    { univ: "Universitas Airlangga (Unair)", passingGrade: "83.5%", dayaTampung: 200, peminat: 3500 }
  ],
  "Ilmu Administrasi Fiskal / Pajak": [
    { univ: "Universitas Indonesia (UI)", passingGrade: "82.0%", dayaTampung: 80, peminat: 1900 },
    { univ: "Universitas Brawijaya (UB)", passingGrade: "79.5%", dayaTampung: 150, peminat: 2100 },
    { univ: "Politeknik Keuangan Negara (STAN)", passingGrade: "89.0%", dayaTampung: 500, peminat: 15000 }
  ],
  "Statistika": [
    { univ: "Institut Teknologi Sepuluh Nopember (ITS)", passingGrade: "81.5%", dayaTampung: 120, peminat: 2100 },
    { univ: "Universitas Padjadjaran (Unpad)", passingGrade: "80.0%", dayaTampung: 100, peminat: 1800 },
    { univ: "Universitas Brawijaya (UB)", passingGrade: "79.0%", dayaTampung: 150, peminat: 2300 }
  ]
};

export function getPTNDataForMajor(major) {
  if (ptnData[major]) return ptnData[major];
  
  const keys = Object.keys(ptnData);
  const match = keys.find(k => major.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(major.toLowerCase()));
  
  if (match) return ptnData[match];
  return null;
}

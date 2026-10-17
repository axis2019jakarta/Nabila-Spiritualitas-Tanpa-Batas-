export interface ScientificFormulaDetail {
  id: string;
  title: string;
  category: 'Mineralogi Al-Biruni' | 'Geofisika Radar' | 'Arkeometri Karbon';
  formulaLaTeX: string;
  bookSource: string;
  scholarName: string;
  purpose: string;
  variableDefinitions: {
    symbol: string;
    name: string;
    unit: string;
    description: string;
  }[];
  stepByStepDerivation: string[];
  exampleProblem: {
    problemStatement: string;
    givenValues: Record<string, number>;
    calculationSteps: string[];
    finalResult: string;
    scientificConclusion: string;
  };
}

export const SCIENTIFIC_FORMULAS: ScientificFormulaDetail[] = [
  {
    id: 'al-biruni-hydrostatic',
    title: 'Rumus Neraca Hidrostatika Al-Biruni (Kepadatan Logam Mulia)',
    category: 'Mineralogi Al-Biruni',
    formulaLaTeX: 'ρ = m_udara / (m_udara - m_air) × ρ_air',
    bookSource: "Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir (Abu Rayhan Al-Biruni)",
    scholarName: 'Abu Rayhan Al-Biruni (973–1048 M)',
    purpose: 'Menentukan kemurnian emas murni secara presisi matematis tanpa merusak atau melebur sampel.',
    variableDefinitions: [
      {
        symbol: 'm_udara',
        name: 'Massa Sampel di Udara',
        unit: 'gram (g)',
        description: 'Berat benda saat ditimbang di atas neraca konvensional dalam udara terbuka.',
      },
      {
        symbol: 'm_air',
        name: 'Massa Sampel di Air',
        unit: 'gram (g)',
        description: 'Berat semu benda saat dicelupkan sepenuhnya dan melayang di dalam bejana air.',
      },
      {
        symbol: 'ρ_air',
        name: 'Massa Jenis Air Murni',
        unit: 'g/cm³',
        description: 'Kerapatan fluida air pada suhu standar 20°C (bernilai 1,00 g/cm³).',
      },
      {
        symbol: 'ρ',
        name: 'Massa Jenis Spesifik Sampel',
        unit: 'g/cm³',
        description: 'Hasil kerapatan atomik mineral yang diuji untuk identifikasi unsur murni.',
      },
    ],
    stepByStepDerivation: [
      '1. Menurut Prinsip Archimedes & Eksperimen Al-Biruni: Gaya apung ke atas (Fa) setara dengan berat fluida yang dipindahkan: Fa = m_udara - m_air.',
      '2. Karena massa jenis fluida air adalah ρ_air = 1,00 g/cm³, maka volume air yang dipindahkan adalah V = (m_udara - m_air) / ρ_air.',
      '3. Berdasarkan definisi fisika, massa jenis zat adalah perbandingan massa terhadap volume: ρ = m_udara / V.',
      '4. Substitusikan nilai V ke dalam persamaan utama: ρ = m_udara / ((m_udara - m_air) / ρ_air) = [m_udara / (m_udara - m_air)] × ρ_air.',
      '5. Bandingkan nilai ρ dengan tabel konstanta Al-Biruni (Emas Murni = 19,32 g/cm³, Pirit = 5,01 g/cm³).',
    ],
    exampleProblem: {
      problemStatement:
        'Sebuah batu berkilau kuning keemasan ditemukan di tepi sungai dengan berat di udara m_udara = 57,96 gram. Ketika dimasukkan ke dalam bejana air hidrostatik, timbangan menunjukkan m_air = 54,96 gram. Berapakah massa jenisnya dan apakah benda itu emas murni?',
      givenValues: {
        m_udara: 57.96,
        m_air: 54.96,
        ρ_air: 1.0,
      },
      calculationSteps: [
        'Hitung volume fluida yang dipindahkan: V = m_udara - m_air = 57,96 - 54,96 = 3,00 cm³.',
        'Hitung massa jenis spesifik: ρ = 57,96 / 3,00 = 19,32 g/cm³.',
      ],
      finalResult: 'ρ = 19,32 g/cm³',
      scientificConclusion:
        'Sampel tersebut terbukti 100% Emas Murni 24 Karat (Au). Nilai massa jenisnya tepat identik dengan perhitungan Al-Biruni dan standar fisika modern.',
    },
  },
  {
    id: 'radar-velocity-depth',
    title: 'Rumus Kecepatan & Kedalaman Gelombang Radar Geofisika (GPR)',
    category: 'Geofisika Radar',
    formulaLaTeX: 'v = c / √εr  |  d = (v × t) / 2',
    bookSource: 'Prinsip Geofisika Eksplorasi Bawah Permukaan & Sensorik NASA',
    scholarName: 'Pengembangan Gelombang Elektromagnetik Maxwell & Geofisika Modern',
    purpose: 'Menghitung kedalaman lapisan batuan atau urat kuarsa di dalam bumi berdasarkan waktu pantul pulsa radar.',
    variableDefinitions: [
      {
        symbol: 'c',
        name: 'Kecepatan Cahaya di Ruang Hampa',
        unit: 'm/ns (meter/nanodetik)',
        description: 'Konstanta kecepatan rambat gelombang elektromagnetik (0,30 m/ns atau 300.000 km/s).',
      },
      {
        symbol: 'εr',
        name: 'Permitivitas Dielektrik Relatif Batuan',
        unit: 'tanpa satuan',
        description: 'Resistensi batuan terhadap medan listrik (Kuarsa = 4,5; Batuan Beku = 6,0; Tanah Basah = 15).',
      },
      {
        symbol: 'v',
        name: 'Kecepatan Gelombang dalam Batuan',
        unit: 'm/ns',
        description: 'Kecepatan gelombang radar saat merambat menembus material geologi.',
      },
      {
        symbol: 't',
        name: 'Waktu Tempuh Pulsa Bolak-Balik (TWTT)',
        unit: 'nanodetik (ns)',
        description: 'Waktu yang dicatat antena sejak pulsa ditembakkan hingga gema pantulannya kembali.',
      },
      {
        symbol: 'd',
        name: 'Kedalaman Anomali Lapisan Bumi',
        unit: 'meter (m)',
        description: 'Jarak vertikal dari antena pemancar ke batas diskontinuitas batuan di bawah tanah.',
      },
    ],
    stepByStepDerivation: [
      '1. Gelombang elektromagnetik radar merambat lebih lambat di dalam materi padat dibandingkan di ruang hampa sesuai indeks bias n = √εr.',
      '2. Kecepatan rambat dihitung dengan rumus: v = c / √εr.',
      '3. Pulsa radar menempuh perjalanan bolak-balik (pergi dari permukaan ke lapisan dasar dan kembali ke antena permukaan), sehingga total jarak lintasan gelombang adalah 2d = v × t.',
      '4. Menghasilkan rumus kedalaman absolut anomali batuan: d = (v × t) / 2.',
    ],
    exampleProblem: {
      problemStatement:
        'Sebuah antena radar GPR 400 MHz di atas lapisan batuan andesit vulkanik (εr = 6,25) merekam gema pantulan anomali urat kuarsa dengan waktu tempuh t = 80 nanodetik (ns). Pada kedalaman berapakah urat kuarsa tersebut berada?',
      givenValues: {
        c: 0.3,
        εr: 6.25,
        t: 80,
      },
      calculationSteps: [
        'Hitung kecepatan gelombang radar dalam andesit: v = 0,30 / √6,25 = 0,30 / 2,5 = 0,12 m/ns.',
        'Hitung kedalaman vertikal: d = (0,12 m/ns × 80 ns) / 2 = 9,60 / 2 = 4,80 meter.',
      ],
      finalResult: 'd = 4,80 meter di bawah tanah',
      scientificConclusion:
        'Lapisan batas urat kuarsa terdeteksi berada pada kedalaman 4,80 meter. Ahli geologi dapat merencanakan pemboran dangkal untuk verifikasi sampel.',
    },
  },
  {
    id: 'radiocarbon-c14',
    title: 'Rumus Peluruhan Radiokarbon C-14 untuk Penanggalan Artefak',
    category: 'Arkeometri Karbon',
    formulaLaTeX: 't = -8267 × ln(N / N₀)',
    bookSource: 'Metodologi Penanggalan Arkeometrik & Sejarah Peradaban Kuno',
    scholarName: 'Willard Libby (Penemu Penanggalan Karbon, Peraih Nobel Fisika)',
    purpose: 'Menentukan usia sejarah artefak purba (kayu peti prasasti, perkamen naskah, kain kuno) secara absolut.',
    variableDefinitions: [
      {
        symbol: 'N₀',
        name: 'Aktivitas Isotop Karbon-14 Awal',
        unit: 'dpm/g (disintegrasi/menit/gram)',
        description: 'Kandungan karbon-14 radioaktif saat organisme hidup masih bernapas dan menyerap atmosfer.',
      },
      {
        symbol: 'N',
        name: 'Aktivitas Isotop Karbon-14 Sisa',
        unit: 'dpm/g',
        description: 'Kandungan karbon-14 yang tersisa di laboratorium pada saat artefak ditemukan sekarang.',
      },
      {
        symbol: 't₁/₂',
        name: 'Waktu Paruh Karbon-14',
        unit: 'tahun',
        description: 'Konstanta waktu paruh peluruhan nuklir C-14 sebesar 5.730 tahun.',
      },
      {
        symbol: 't',
        name: 'Usia Sejarah Peninggalan',
        unit: 'tahun yang lalu (BP)',
        description: 'Lama waktu yang telah berlalu sejak benda organik tersebut berhenti hidup.',
      },
    ],
    stepByStepDerivation: [
      '1. Hukum peluruhan radioaktif universal: N(t) = N₀ × e^(-λt).',
      '2. Hubungan konstanta peluruhan λ dengan waktu paruh: λ = ln(2) / t₁/₂ = 0,69315 / 5730 ≈ 1,2097 × 10^(-4) tahun^(-1).',
      '3. Transformasi logaritmik natural: ln(N / N₀) = -λt.',
      '4. Selesaikan untuk variabel waktu t: t = -(1 / λ) × ln(N / N₀) = -(5730 / ln(2)) × ln(N / N₀) ≈ -8267 × ln(N / N₀).',
    ],
    exampleProblem: {
      problemStatement:
        'Sisa kayu dari kerangka peti prasasti kuno dianalisis di laboratorium spektrometri massa akselerator (AMS). Hasilnya menunjukkan rasio isotop C-14 tersisa tinggal 85,2% dari kadar awal (N/N₀ = 0,852). Berapakah usia peti kuno tersebut?',
      givenValues: {
        ratio: 0.852,
      },
      calculationSteps: [
        'Hitung logaritma natural rasio: ln(0,852) = -0,16017.',
        'Hitung usia artefak: t = -8267 × (-0,16017) = +1.324 tahun yang lalu.',
      ],
      finalResult: 't ≈ 1.324 Tahun yang lalu (± 702 Masehi)',
      scientificConclusion:
        'Artefak tersebut secara ilmiah berasal dari abad ke-7 hingga ke-8 Masehi, bertepatan dengan era Kerajaan Sriwijaya dan Dinasti Umayyah kuno.',
    },
  },
];

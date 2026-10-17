import { MineralProperty } from '../types';

export const GOLD_MINERAL_SPECS: MineralProperty = {
  name: 'Emas Murni (Native Gold)',
  scientificFormula: 'Au (Aurum - Unsur Kimia Golongan 11, Nomor Atom 79)',
  density: '19,32 g/cm³ (Sangat padat & berat, 2,5x lebih padat dari besi)',
  hardnessMohs: '2,5 – 3,0 Skala Mohs (Cukup lunak, dapat digores tembaga murni)',
  colorStreak: 'Kuning keemasan berkilau, goresan pada porselen tetap berwarna kuning emas berkilau',
  magneticResponse: 'Diamagnetik (Sama sekali tidak tertarik oleh magnet ferit maupun neodymium)',
  scientificDetectionMethod: 'Survei Geolistrik Resistivitas, Ground Penetrating Radar (GPR), Spektrometer XRF Portabel, Alat Deteksi Logam Induksi Pulsa (Pulse Induction), dan Uji Dulang (Panning Stream Sediment).',
  historicalRecord: 'Tercatat dalam peradaban tertua sejak 4000 SM di Mesopotamia dan Mesir Kuno, serta dicatat dalam risalah Al-Biruni dan Ibnu Sina.',
  scholarReference: "Al-Biruni dalam Kitab al-Jamahir fi Ma'rifat al-Jawahir menguji berat jenis emas murni dengan bejana kerucut pengukur perpindahan air, membuktikan kemurniannya tanpa merusak batuan.",
  distinguishingFeatures: [
    'Duktilitas Ekstrem: 1 gram emas murni dapat ditempa menjadi lembaran tipis seluas 1 meter persegi.',
    'Tahan Korosi & Asam: Tidak bereaksi dengan oksigen, air, atau asam tunggal (hanya larut dalam Aqua Regia / air raja).',
    'Kilau Abadi (Luster): Tidak pernah pudar atau berkarat meskipun terpendam jutaan tahun di lumpur atau air laut.',
    'Konduktivitas Tinggi: Penghantar panas dan listrik luar biasa stabil.'
  ]
};

export const PYRITE_COMPARISON = {
  name: 'Pirit / Pyrite (Dikenal sebagai "Fool\'s Gold" atau Emas Semu)',
  scientificFormula: 'FeS₂ (Besi Disulfida)',
  density: '4,9 – 5,2 g/cm³ (Jauh lebih ringan dari emas asli)',
  hardnessMohs: '6,0 – 6,5 Skala Mohs (Sangat keras, tidak bisa digores koin, rapuh dan mudah pecah)',
  colorStreak: 'Goresan pada keramik berwarna hitam kehijauan atau cokelat gelap (berbeda total dari emas)',
  magneticResponse: 'Paramagnetik lemah atau tidak magnetik (jika dipanaskan mengeluarkan bau belerang)',
  distinguishingNotice: 'Sering menipu orang awam karena bentuk kristal kubus berkilau keemasan, namun secara ilmiah tidak bernilai mulia.'
};

export const REALITY_SENSOR_FACTS = [
  {
    title: 'Kemampuan Antena GPS Ponsel',
    fact: 'GPS pada ponsel pintar Android adalah receiver pasif frekuensi radio (L1 1575.42 MHz & L5 1176.45 MHz) dari satelit di orbit bumi. GPS hanya membaca garis lintang (latitude) dan bujur (longitude) di permukaan bumi, dan TIDAK MEMILIKI daya tembus tanah untuk mendeteksi unsur kimia atau logam di bawah kaki kita.'
  },
  {
    title: 'Kemampuan Sensor Kompas (Magnetometer)',
    fact: 'Chip magnetometer ponsel hanya membaca orientasi medan magnetik bumi (sekitar 30–60 mikrotesla) untuk menunjukkan arah utara/selatan. Karena emas murni bersifat diamagnetik (menolak medan magnet secara sangat lemah), sensor kompas ponsel mustahil mendeteksi emas murni.'
  },
  {
    title: 'Bagaimana Geolog & Ilmuwan Menemukan Emas Secara Nyata',
    fact: 'Para ahli geologi profesional menggunakan pemetaan stratigrafi lapangan, pengambilan sampel inti bor (core drilling), analisis laboratorium geokimia (ICP-MS, assaying), serta peralatan elektromagnetik industri berdaya tinggi (VLF & Pulse Induction Metal Detectors) yang beroperasi langsung beberapa sentimeter di atas permukaan tanah.'
  }
];

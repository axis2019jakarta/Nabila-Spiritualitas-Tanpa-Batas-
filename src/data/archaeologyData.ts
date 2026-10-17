import { RelicDiscovery } from '../types';

export const RELIC_DISCOVERIES: RelicDiscovery[] = [
  {
    id: 'dinar-islamic',
    title: 'Koin Emas Dinar & Dirham Kuno Peradaban Islam',
    period: 'Kekhalifahan Umayyah & Abbasiyah (Abad 7–13 M)',
    estimatedAge: '± 800 – 1.300 Tahun yang lalu',
    archaeologicalMethod: 'Survei numismatik arkeologi bawah tanah, analisis komposisi XRF logam mulia, dan pembacaan epigrafi kaligrafi kufik kuno.',
    scientificSignificance: 'Membuktikan rute perdagangan maritim global antar benua yang menghubungkan Timur Tengah, Persia, India, dan kepulauan Nusantara kuno.',
    historicalContext: 'Koin dinar dicetak pertama kali pada masa Khalifah Abdul Malik bin Marwan dengan mencantumkan syahadat dan tahun hijriyah, menjadi standar mata uang paling stabil dalam sejarah dunia.',
    protectionEthic: 'Setiap temuan koin atau guci kuno wajib dilaporkan ke Balai Pelestarian Cagar Budaya (BPCB) untuk konservasi ilmiah dan edukasi generasi mendatang.'
  },
  {
    id: 'prasasti-nusantara',
    title: 'Prasasti Batu & Lempengan Tembaga (Tamra Prasasti)',
    period: 'Kerajaan Mataram Kuno, Sriwijaya, & Majapahit (Abad 7–14 M)',
    estimatedAge: '± 700 – 1.400 Tahun yang lalu',
    archaeologicalMethod: 'Epigrafi paleografi, transliterasi aksara Pallawa/Kawi kuno, serta penanggalan stratigrafi batuan vulkanik.',
    scientificSignificance: 'Memberikan catatan tertulis primer tentang penetapan tanah sima (perdikan), sistem hukum, pengelolaan air waduk kuno, dan tata kelola masyarakat.',
    historicalContext: 'Membuktikan tingginya tingkat peradaban literasi dan arsitektur leluhur Nusantara dalam tata kelola lingkungan dan toleransi kemanusiaan.',
    protectionEthic: 'Merusak atau memperjualbelikan prasasti melanggar Undang-Undang Perlindungan Cagar Budaya dan menghilangkan kepingan memori bangsa.'
  },
  {
    id: 'perhiasan-megalitik',
    title: 'Manik-manik Kaca & Perhiasan Emas Pra-Sejarah',
    period: 'Zaman Perunggu-Besi & Megalitikum (500 SM – 300 M)',
    estimatedAge: '± 1.800 – 2.500 Tahun yang lalu',
    archaeologicalMethod: 'Ekskavasi grid sistematis, flotasi tanah, dan penanggalan radiokarbon AMS (Accelerator Mass Spectrometry).',
    scientificSignificance: 'Menyingkap teknologi metalurgi awal dan sistem pemakaman bekal kubur masyarakat purba yang menghormati siklus kehidupan.',
    historicalContext: 'Menunjukkan bahwa nenek moyang telah memiliki kemampuan metalurgi tinggi serta hubungan pertukaran budaya lintas samudra.',
    protectionEthic: 'Ekskavasi hanya boleh dilakukan oleh tim arkeolog berlisensi untuk mencatat posisi lapisan tanah (in-situ) yang tak tergantikan.'
  }
];

export const ARCHAEOLOGY_METHODS = [
  {
    name: 'Metode Stratigrafi Lapisan Tanah',
    description: 'Ilmu membaca lapisan sedimen bumi. Semakin dalam lapisan tanah yang tidak terganggu, semakin tua usia artefak yang berada di dalamnya (Hukum Superposisi).'
  },
  {
    name: 'Penanggalan Radiokarbon C-14',
    description: 'Mengukur peluruhan isotop karbon-14 pada sisa-sisa organik (kayu, tulang, serat tekstil kuno) untuk menentukan usia tepat hingga 50.000 tahun silam.'
  },
  {
    name: 'Teknologi LiDAR & Penginderaan Jauh',
    description: 'Pemindaian laser udara berakurasi tinggi yang mampu menembus kanopi hutan lebat untuk memetakan kontur kota kuno dan saluran air purba yang terkubur.'
  },
  {
    name: 'Georadar & Magnetometri Arkeologi',
    description: 'Memancarkan pulsa elektromagnetik ke dalam tanah untuk memetakan perbedaan anomali fisik tanpa harus merusak struktur bangunan kuno di bawah tanah.'
  }
];

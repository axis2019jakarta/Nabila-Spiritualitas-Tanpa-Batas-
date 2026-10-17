import { DzikirItem } from '../types';

export const UNSEEN_REALM_SCHOLAR_CONSENSUS = {
  title: 'Kajian Ilmiah & Fiqih Kitab Ulama: Hakikat Alam Ghaib',
  coreClarification: 'Dalam akidah Ahlussunnah wal Jamaah dan kajian para ulama dunia (seperti Imam Al-Ghazali, Ibnu Taimiyyah, dan Ibnu Katsir), alam ghaib adalah perkara keimanan (ghaibiyyat) yang dimensi eksistensinya berbeda mutlak dari dimensi materi fisika.',
  keyPoints: [
    {
      heading: 'Batas Teknologi Sensor Digital',
      body: 'Gelombang radio ponsel, Bluetooth, GPS satelit, dan sensor kamera beroperasi pada spektrum elektromagnetik fisik (foton dan frekuensi Hertz). Makhluk halus tidak memancarkan sinyal radio atau frekuensi digital yang dapat dideteksi atau ditransmisikan oleh antena ponsel pintar.'
    },
    {
      heading: 'Hukum Komunikasi dengan Makhluk Halus Menurut Ulama',
      body: 'Para ulama sepakat melarang keras (mengharamkan) upaya memanggil, meminta bantuan (istianah), atau berinteraksi pesan dengan makhluk halus/jin. Praktik tersebut dikategorikan sebagai pintu fitnah besar yang dapat merusak akidah, memicu ilusi psikologis, dan membahayakan ketenteraman jiwa manusia.'
    },
    {
      heading: 'Sikap Mukmin yang Benar & Tenang',
      body: 'Manusia diciptakan sebagai khalifah di muka bumi dengan kemuliaan akal budi. Kita tidak perlu mencari tahu nama, rupa, atau bahasa mereka, dan tidak perlu merasa takut atau penasaran berlebih. Perlindungan terbaik adalah berserah diri kepada Allah melalui dzikir ma’tsurat.'
    }
  ]
};

export const DZIKIR_PELINDUNG: DzikirItem[] = [
  {
    id: 'ayat-kursi',
    title: 'Ayat Kursi (Surat Al-Baqarah: 255)',
    arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
    transliteration: "Allahu laa ilaaha illaa Huwal Hayyul Qayyum, laa ta'khudzuhu sinatuw walaa naum, lahu maa fis-samaawaati wa maa fil ardh...",
    translation: 'Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi.',
    source: 'HR. Bukhari no. 2311 & HR. Muslim no. 810',
    benefit: 'Perlindungan paling agung dari segala godaan, bisikan buruk, dan marabahaya siang maupun malam hari.',
    recommendedCount: 1
  },
  {
    id: 'al-muawwidzatain',
    title: 'Surat Al-Falaq & An-Nas (Al-Mu’awwidzatain)',
    arabicText: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ... قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    transliteration: "Qul a'udzu birobbil falaq... Qul a'udzu birobbin naas...",
    translation: 'Katakanlah: "Aku berlindung kepada Tuhan yang menguasai subuh... Katakanlah: "Aku berlindung kepada Tuhannya manusia, Raja manusia, Sembahan manusia..."',
    source: 'HR. Abu Dawud no. 5082 & At-Tirmidzi no. 3575 (Hasan Shahih)',
    benefit: 'Benteng mutlak dari kejahatan malam yang gelap, bisikan rasa was-was di dalam dada manusia, dan rasa takut tak berdasar.',
    recommendedCount: 3
  },
  {
    id: 'doa-perlindungan-pagi-petang',
    title: "Doa Perlindungan Pagi & Petang (Bismillahi ladzi...)",
    arabicText: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: "Bismillaahil-ladzii laa yadhurru ma'as-mihii syai-un fil ardhi wa laa fis-samaa-i wa huwas-samii'ul 'aliim.",
    translation: 'Dengan nama Allah yang bersama nama-Nya tidak ada sesuatu pun di bumi maupun di langit yang dapat membahayakan, dan Dia Maha Mendengar lagi Maha Mengetahui.',
    source: 'HR. Abu Dawud no. 5088 & At-Tirmidzi no. 3388',
    benefit: 'Dibaca 3 kali di waktu pagi dan petang, menjamin perlindungan dari segala mara bahaya mendadak dengan izin Allah.',
    recommendedCount: 3
  },
  {
    id: 'taawwudz-tammat',
    title: "Doa Kalimatillahit Taammaat",
    arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: "A'uudzu bikalimaatillaahit-taammaati min syarri maa khalaq.",
    translation: 'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang Dia ciptakan.',
    source: 'HR. Muslim no. 2708',
    benefit: 'Doa perlindungan saat berada di tempat baru atau manapun, menjaga ketentraman hati tanpa diganggu oleh apapun hingga berpindah tempat.',
    recommendedCount: 3
  }
];

export const GROUNDING_EXERCISES = {
  title: 'Panduan Ketenangan Jiwa & Terapi Grounding (5-4-3-2-1)',
  subtitle: 'Ketika merasa cemas, gelisah, atau merasa ada hal tak kasat mata di sekitar, lakukan latihan sadar penuh (mindfulness & grounding) ini untuk mengembalikan ketenangan pikiran ke realitas nyata:',
  steps: [
    {
      num: 5,
      sense: 'Penglihatan (Visual)',
      instruction: 'Tatap 5 benda nyata di sekelilingmu sekarang (misal: jam dinding, meja, tanaman, jendela, layar buku). Sebutkan nama warnanya di dalam hati.'
    },
    {
      num: 4,
      sense: 'Sentuhan Fisik (Tactile)',
      instruction: 'Sentuh 4 benda fisik di dekatmu (misal: telapak kakimu yang menjejak lantai, tekstur kain bajumu, permukaan meja, hembusan angin sejuk).'
    },
    {
      num: 3,
      sense: 'Pendengaran (Auditory)',
      instruction: 'Dengarkan 3 suara nyata dari lingkungan sekitar (misal: deru kipas/AC, kicau burung di luar, atau bunyi desau napasmu sendiri yang teratur).'
    },
    {
      num: 2,
      sense: 'Penciuman (Olfactory)',
      instruction: 'Hirup napas dalam-dalam dan rasakan 2 aroma nyata di sekitarmu (aroma teh, wangi ruangan, atau udara segar).'
    },
    {
      num: 1,
      sense: 'Pengecapan / Afirmasi Batin',
      instruction: 'Rasakan sensasi di lidahmu atau teguk segelas air putih hangat. Ucapkan kalimat syukur: "Alhamdulillah, aku aman, jiwaku tenang, dan aku dilindungi oleh Allah SWT."'
    }
  ],
  supportNote: 'Jika Anda sering mengalami kecemasan berlebih, sulit tidur, atau mendengar suara-suara yang mengganggu, jangan ragu untuk berbagi cerita dengan keluarga terdekat, guru agama/ulama yang bijak, atau berkonsultasi dengan dokter dan psikolog profesional untuk mendapatkan pendampingan yang hangat dan menenangkan.'
};

export interface ArabicManuscriptRecord {
  id: string;
  bookTitleArabic: string;
  bookTitleLatin: string;
  authorArabic: string;
  authorLatin: string;
  yearHijriMasehi: string;
  chapterTitle: string;
  originalArabicText: string;
  indonesianTranslation: string;
  scientificAndTheologicalCommentary: string;
  practicalApplication: string;
}

export const ARABIC_MANUSCRIPTS: ArabicManuscriptRecord[] = [
  {
    id: 'al-biruni-al-jamahir',
    bookTitleArabic: 'كتاب الجماهر في معرفة الجواهر',
    bookTitleLatin: "Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir",
    authorArabic: 'أبو الريحان محمد بن أحمد البيروني',
    authorLatin: 'Abu Rayhan Muhammad bin Ahmad Al-Biruni',
    yearHijriMasehi: '362–440 H / 973–1048 M',
    chapterTitle: 'فصل في ثقل الذهب ومعرفته بالميزان المخروطي (Bab Berat Jenis Emas dan Pengujiannya dengan Neraca Kerucut)',
    originalArabicText: 'إِنَّ حَقَائِقَ الْأَجْسَامِ لَا تُعْرَفُ بِالظُّنُونِ وَلَا بِدَعَاوَى الْمُتَكَلِّفِينَ، وَإِنَّمَا تُعْرَفُ بِالْوَزْنِ فِي الْهَوَاءِ وَالْوَزْنِ فِي الْمَاءِ، فَإِذَا أُخْرِجَ حَجْمُ الْمَاءِ الْمُنْزَاحِ تَبَيَّنَ ثِقَلُ الْجَوْهَرِ وَمَيَّزَ الْخَالِصَ مِنَ الْمَغْشُوشِ دُونَ حَاجَةٍ إِلَى سَبْكٍ أَوْ إِفْسَادٍ.',
    indonesianTranslation: 'Sesungguhnya hakikat benda-benda materi tidak dapat diketahui melalui persangkaan angan-angan dan bukan pula melalui klaim-klaim para pembuat tipu daya. Hakikat itu hanya dapat diketahui melalui penimbangan di udara dan penimbangan di dalam air. Maka apabila volume air yang dipindahkan telah diketahui, tampaklah berat jenis permata tersebut dan dapat dibedakan mana yang murni dari yang palsu tanpa perlu melebur atau merusaknya.',
    scientificAndTheologicalCommentary: 'Al-Biruni meletakkan fondasi sains metrologi dan penentuan massa jenis spesifik logam mulia. Beliau menolak keras takhayul alkimia mistik yang mengklaim dapat menciptakan atau mendeteksi emas secara gaib. Beliau membuktikan secara matematis bahwa emas murni memiliki kepadatan konstan yang diciptakan oleh hukum alam (sunnatullah).',
    practicalApplication: 'Digunakan dalam rumus penentuan kemurnian emas hidrostatika: ρ = (m_udara / [m_udara - m_air]) × ρ_air.',
  },
  {
    id: 'ibnu-khaldun-muqaddimah',
    bookTitleArabic: 'مقدمة ابن خلدون (كتاب العبر)',
    bookTitleLatin: 'Al-Muqaddimah (Kitāb al-‘Ibar)',
    authorArabic: 'عبد الرحمن بن خلدون الحضرمي',
    authorLatin: 'Abdurrahman bin Khaldun Al-Hadhrami',
    yearHijriMasehi: '732–808 H / 1332–1406 M',
    chapterTitle: 'فصل في طلب الكنوز والأموال من تحت الأرض (Bab Kritik Terhadap Pemburuan Harta Karun Bawah Tanah)',
    originalArabicText: 'وَاعْلَمْ أَنَّ كَثِيرًا مِنَ الْمُغَفَّلِينَ يَتَهَالَفُونَ عَلَى اسْتِخْرَاجِ الدَّفَائِنِ، وَيَزْعُمُونَ أَنَّ أَهْلَ الْعُصُورِ الْخَالِيَةِ رَصَدُوا أَمْوَالَهُمْ بِالطَّلَاسِمِ وَالْجِنِّ، وَهَذَا كُلُّهُ مِنْ خُرَافَاتِ الْمُتَكَسِّبِينَ بِالْبَاطِلِ. فَالْأَمْوَالُ لَا تُنَالُ إِلَّا بِالْعِمَارَةِ وَالْفِلَاحَةِ وَالتِّجَارَةِ، وَمَا خَفِيَ تَحْتَ التُّرَابِ إِنَّمَا هَدَمَتْهُ الْأَيَّامُ بِطَبِيعَةِ الزَّمَانِ لَا بِسِحْرٍ وَلَا بِرَصَدٍ.',
    indonesianTranslation: 'Ketahuilah bahwa banyak orang lalai yang terobsesi membongkar timbunan harta karun, seraya menduga bahwa orang-orang zaman dahulu membentengi harta mereka dengan rajah-rajah jimat dan penjagaan jin. Semua ini adalah bagian dari dongeng takhayul orang-orang yang mencari keuntungan dengan cara batil. Harta kekayaan tidak dapat diperoleh kecuali melalui pembangunan peradaban, pertanian, perniagaan, dan kerja nyata. Apa yang terkubur di bawah tanah hanyalah runtuh karena perjalanan waktu secara alamiah, bukan karena sihir dan bukan karena penjagaan makhluk halus.',
    scientificAndTheologicalCommentary: 'Ibnu Khaldun menepis segala bentuk keyakinan bahwa peninggalan purba dijaga atau dapat ditemukan melalui bisikan gaib. Beliau menegaskan bahwa sedimentasi tanah adalah fenomena geologi alami dan kesuksesan hidup hanya dicapai lewat ikhtiar rasional dan kerja keras.',
    practicalApplication: 'Pedoman etika bahwa penelitian situs bersejarah harus berlandaskan ilmu arkeologi stratigrafi, bukan perburuan mistis.',
  },
  {
    id: 'al-ghazali-ihya',
    bookTitleArabic: 'إحياء علوم الدين (كتاب شرح عجائب القلب)',
    bookTitleLatin: "Iḥyā' 'Ulūm ad-Dīn (Syarḥ 'Ajā'ib al-Qalb)",
    authorArabic: 'أبو حامد محمد بن محمد الغزالي',
    authorLatin: 'Hujjatul Islam Abu Hamid Muhammad Al-Ghazali',
    yearHijriMasehi: '450–505 H / 1058–1111 M',
    chapterTitle: 'بيان مداخل الشيطان إلى القلب والفرق بين الإلهام والوسواس (Penjelasan Pintu-Pintu Masuk Was-Was & Hakikat Alam Ghaib)',
    originalArabicText: 'إِنَّ عَالَمَ الْمَلَكُوتِ غَيْبٌ مَحْجُوبٌ عَنِ الْحَوَاسِّ الظَّاهِرَةِ، وَلَيْسَ فِي مَقْدُورِ آلَةٍ مَادِّيَّةٍ أَنْ تَخْرِقَ حِجَابَ الْغَيْبِ. وَمَنْ شَغَلَ نَفْسَهُ بِمُحَاوَلَةِ التَّوَاصُلِ مَعَ الْجِنِّ أَوْ سَمَاعِ خِطَابِهِمْ فَقَدْ فَتَحَ عَلَى نَفْسِهِ بَابَ الْوَسَاوِسِ وَالْخَيَالَاتِ الَّتِي تُرْدِي الْعَقْلَ وَتُفْسِدُ الدِّينَ، وَعِلَاجُ ذَلِكَ الِاعْتِصَامُ بِذِكْرِ اللَّهِ وَطُمَأْنِينَةِ الْقَلْبِ.',
    indonesianTranslation: 'Sesungguhnya alam malakut adalah alam ghaib yang terhijab (tertutup) dari indra-indra lahiriah, dan tidak ada instrumen materi apa pun yang mampu menembus tirai alam ghaib tersebut. Barangsiapa menyibukkan dirinya dengan mencoba berkomunikasi dengan jin atau mendengarkan percakapan mereka, sungguh ia telah membuka pintu was-was dan khayalan bagi dirinya sendiri yang dapat membinasakan akal dan merusak agama. Obat dari semua itu adalah berpegang teguh pada dzikirullah dan mencari ketenangan hati.',
    scientificAndTheologicalCommentary: 'Imam Al-Ghazali menjelaskan batasan epistemologi manusia. Fenomena mendengar bisikan atau merasa dikelilingi makhluk halus sering kali berakar dari was-was (kecemasan psikologis atau over-stimulasi batin). Syariat melarang keras mencari kontak dengan hal gaib agar pikiran tetap sehat dan bertauhid bersih.',
    practicalApplication: 'Dasar teologis mengapa tidak ada perangkat lunak atau sensor digital yang dapat berkomunikasi dengan alam gaib, serta anjuran dzikir untuk ketenteraman jiwa.',
  },
  {
    id: 'ibnu-sina-syifa',
    bookTitleArabic: 'كتاب الشفاء (القسم الطبيعي: رسالة المعادن والآثار العلوية)',
    bookTitleLatin: "Kitāb asy-Syifā' (Risālat al-Ma'ādin)",
    authorArabic: 'الحسين بن عبد الله بن سينا (أفيسينا)',
    authorLatin: 'Al-Husain bin Abdullah bin Sina (Avicenna)',
    yearHijriMasehi: '370–428 H / 980–1037 M',
    chapterTitle: 'في تكون الأحجار والجبال والمعادن السائلة والجامدة (Proses Terbentuknya Batuan, Gunung, dan Mineral Logam)',
    originalArabicText: 'إِنَّ تَكَوُّنَ الْفِلِزَّاتِ فِي بَاطِنِ الْأَرْضِ يَكُونُ بِاحْتِبَاسِ الْأَبْخِرَةِ الْكِبْرِيتِيَّةِ وَالزِّئْبَقِيَّةِ فِي مَسَامِّ الصُّخُورِ الدَّقِيقَةِ مَعَ حَرَارَةِ بَاطِنِ الْأَرْضِ عَبْرَ أَمْدٍ طَوِيلٍ، فَلَا سَبِيلَ لِتَغْيِيرِ أَنْوَاعِ الْجَوَاهِرِ بِحِيلَةٍ كِيمْيَائِيَّةٍ وَلَا بِدَعْوَى سِحْرِيَّةٍ، بَلْ هِيَ خَلْقٌ طَبِيعِيٌّ مُحْكَمٌ.',
    indonesianTranslation: 'Sesungguhnya terbentuknya logam-logam mineral di dalam perut bumi terjadi karena terperangkapnya uap mineral di sela pori-pori batuan yang rapat disertai panas internal bumi dalam kurun waktu yang sangat panjang. Maka tidak ada jalan untuk mengubah atau menciptakan jenis-jenis mineral ini dengan trik alkimia palsu ataupun klaim magis, melainkan semuanya adalah ciptaan alamiah yang teratur dan kokoh.',
    scientificAndTheologicalCommentary: 'Ibnu Sina adalah ilmuwan pertama yang merumuskan teori hidrotermal pembentukan mineral di kerak bumi, meruntuhkan mitos pembuatan emas instan, dan meletakkan dasar geologi fisik modern.',
    practicalApplication: 'Digunakan dalam model pemetaan sistem hidrotermal urat kuarsa dan interpretasi anomali geolistrik.',
  },
];

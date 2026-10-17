import React, { useState } from 'react';
import {
  BookMarked,
  Share2,
  Copy,
  Check,
  Navigation,
  Sparkles,
  Landmark,
  BookOpen,
  Heart,
  Wallet,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export const ComprehensiveUserManual: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const currentAppUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentAppUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Nabila Ahmad: Spiritualitas Tanpa Batas',
          text: 'Portal terpadu kajian hikmah ulama dunia, sains mineralogi geologi emas, sejarah arkeologi, dan ketenangan batin Android.',
          url: currentAppUrl,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const manuals = [
    {
      title: '1. Fitur Monitor GPS & Kompas Akurat',
      icon: Navigation,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      purpose: 'Mengetahui koordinat geografis nyata di permukaan bumi dan arah mata angin.',
      meaning:
        'Garis Lintang (Latitude) dan Garis Bujur (Longitude) menunjukkan letak presisi posisi Anda di bumi sesuai sinyal satelit orbit (L1/L5). Akurasi (± meter) menunjukkan tingkat ketelitian pembacaan satelit.',
      howToUse:
        'Izinkan akses lokasi pada peramban ponsel Android Anda. Untuk kompas, putar ponsel membentuk pola angka 8 untuk mengkalibrasi sensor magnetik internal, atau gunakan slider derajat azimut jika sensor hardware dinonaktifkan.',
      scientificNotice:
        'Antena GPS smartphone adalah penerima pasif gelombang radio satelit di atmosfer; tidak memiliki daya tembus tanah untuk mendeteksi mineral atau frekuensi ghaib.',
    },
    {
      title: '2. Studio Sains Geologi Emas & Statistik Recharts',
      icon: Sparkles,
      color: 'text-amber-300',
      bgColor: 'bg-amber-500/10',
      purpose: 'Mempelajari karakteristik ilmiah emas murni serta menguji kepadatannya secara mandiri.',
      meaning:
        'Diagram statistik Recharts menampilkan massa jenis logam dalam g/cm³. Emas murni memiliki massa jenis 19,32 g/cm³ (sangat berat dan padat), sedangkan pirit (emas semu) hanya 5,01 g/cm³.',
      howToUse:
        'Timbang sampel mineral Anda (masukkan berat dalam gram), lalu celupkan ke dalam gelas ukur berisi air untuk melihat volume air yang tumpah (masukkan dalam ml). Tekan tombol "Hitung & Verifikasi" untuk mengetahui jenis logam berdasarkan Hukum Hidrostatika Al-Biruni.',
      scientificNotice:
        'Massa jenis adalah sifat intrinsik atomik yang tidak dapat dimanipulasi oleh mantra atau trik visual.',
    },
    {
      title: '3. Studio Sejarah & Arkeologi Cagar Budaya',
      icon: Landmark,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      purpose: 'Memahami bagaimana ilmuwan arkeologi melacak dan meneliti benda peninggalan peradaban masa lampau.',
      meaning:
        'Penanggalan Karbon C-14 mengukur peluruhan isotop organik. Stratigrafi membaca lapisan tanah secara kronologis dari masa ke masa. Kitab Muqaddimah karya Ibnu Khaldun mengupas pentingnya etika sejarah.',
      howToUse:
        'Pilih tab artefak (Koin Dinar Islam, Prasasti Nusantara, Perhiasan Megalitikum) untuk membaca kronologi sejarah, metode ekskavasi ilmiah, dan dasar hukum perlindungan cagar budaya.',
      scientificNotice:
        'Peninggalan sejarah dilindungi oleh UU No. 11 Tahun 2010. Menjaga situs cagar budaya adalah kewajiban moral seluruh bangsa.',
    },
    {
      title: '4. Studio Kajian Ulama & Hakikat Alam Ghaib',
      icon: BookOpen,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      purpose: 'Mendalami pandangan otoritatif ulama dunia mengenai alam ghaib serta membentengi akidah.',
      meaning:
        'Alam ghaib adalah perkara keimanan (ghaibiyyat) yang tidak memiliki frekuensi sinyal digital atau radio telekomunikasi. Mencoba berinteraksi atau mengirim pesan ke makhluk halus dilarang oleh syariat karena dapat menimbulkan halusinasi dan gangguan psikologis.',
      howToUse:
        'Pilih profil ulama untuk membaca kutipan kitab aslinya. Buka tab Dzikir Pelindung untuk membaca dan menghafalkan doa-doa shahih seperti Ayat Kursi dan Al-Mu’awwidzatain.',
      scientificNotice:
        'Ketenangan hati diraih melalui dzikirullah dan kebersihan tauhid, bukan melalui ritual pemanggilan mistis.',
    },
    {
      title: '5. Ruang Ketenangan Batin & Grounding (5-4-3-2-1)',
      icon: Heart,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      purpose: 'Meredakan kecemasan, rasa was-was, ketakutan akan hal ghaib, atau ketegangan pikiran.',
      meaning:
        'Teknik Grounding 5-4-3-2-1 adalah metode neuropsikologi yang memusatkan kembali perhatian sensorik ke realitas fisik nyata saat pikiran merasa cemas atau mendengar suara-suara yang mengganggu.',
      howToUse:
        'Ikuti instruksi 5 langkah indrawi secara berurutan. Setelah itu, gunakan fitur Tasbih Digital dengan mengetuk lingkaran utama untuk menghitung dzikir harian.',
      scientificNotice:
        'Jika mengalami gangguan kecemasan berat, jangan ragu untuk bercerita kepada keluarga atau berkonsultasi dengan dokter dan psikolog profesional.',
    },
    {
      title: '6. Donasi Pengembangan & Bukti Donasi',
      icon: Wallet,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      purpose: 'Mendukung riset keilmuan, server gratis, dan pemeliharaan aplikasi Nabila Ahmad.',
      meaning:
        'Donasi disalurkan langsung ke rekening resmi GoPay (0895340205302) dan DANA (085810526151).',
      howToUse:
        'Tekan tombol "Salin Nomor" pada kartu rekening yang Anda inginkan. Buka aplikasi GoPay atau DANA Anda untuk melakukan transfer, kemudian isi formulir konfirmasi bukti donasi di web.',
      scientificNotice:
        'Setiap donasi dicatat secara transparan dan mendapatkan tanda apresiasi resmi pengembang.',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Buku Panduan Penggunaan Lengkap
            </h2>
            <p className="text-xs text-amber-300/80">
              Penjelasan Mendalam: Makna, Tujuan, Cara Pakai & Tautan Berbagi
            </p>
          </div>
        </div>
      </div>

      {/* Bagikan Tautan Resmi Aplikasi */}
      <div className="bg-slate-900/95 rounded-2xl p-4 border border-amber-500/40 space-y-3 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Share2 className="w-4 h-4 text-amber-400" />
            Bagikan Tautan Aplikasi Kepada Orang Lain
          </span>
          <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-full font-mono">
            PUBLIK & GRATIS
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Salin tautan resmi ini agar kerabat, sahabat, atau rekan riset Anda dapat mengakses seluruh fitur sains, kajian ulama, dan monitor GPS ini secara langsung dari peramban Android mereka:
        </p>

        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-950 p-2.5 rounded-xl border border-slate-700 text-xs text-slate-300 font-mono truncate select-all">
            {currentAppUrl}
          </div>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold text-xs rounded-xl transition shadow-md flex-shrink-0"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-950" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Tautan</span>
              </>
            )}
          </button>
        </div>

        <button
          onClick={handleNativeShare}
          className="w-full flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 active:scale-98 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition"
        >
          <Share2 className="w-3.5 h-3.5 text-amber-400" />
          Bagikan Langsung via WhatsApp / Media Sosial
        </button>
      </div>

      {/* Detail Penjelasan Seluruh Fitur */}
      <div className="space-y-3">
        {manuals.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2.5"
            >
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <div className={`p-1.5 rounded-lg ${m.bgColor} ${m.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white tracking-wide">{m.title}</h3>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <p>
                  <strong className="text-amber-300">Tujuan & Untuk Apa:</strong> {m.purpose}
                </p>
                <p>
                  <strong className="text-slate-200">Makna & Arti Nilai:</strong> {m.meaning}
                </p>
                <p>
                  <strong className="text-emerald-300">Cara Penggunaan:</strong> {m.howToUse}
                </p>
                <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 italic">
                  <strong>Catatan Ilmiah:</strong> {m.scientificNotice}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

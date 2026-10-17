import React, { useState } from 'react';
import {
  Wallet,
  Copy,
  Check,
  QrCode,
  Upload,
  FileCheck2,
  Heart,
  Award,
  Sparkles,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Calendar,
} from 'lucide-react';
import { DonationRecord } from '../types';

export const DonationDeveloperStudio: React.FC = () => {
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);

  // Form State
  const [donorName, setDonorName] = useState('');
  const [amount, setAmount] = useState('50000');
  const [walletType, setWalletType] = useState<'GOPAY' | 'DANA'>('GOPAY');
  const [transactionId, setTransactionId] = useState('');
  const [notes, setNotes] = useState('');
  const [proofImage, setProofImage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Stored records
  const [donationHistory, setDonationHistory] = useState<DonationRecord[]>([
    {
      id: 'DON-98214',
      donorName: 'Hamba Allah (Jakarta)',
      amount: 'Rp 100.000',
      walletType: 'GOPAY',
      transactionId: 'TRX-82910482',
      notes: 'Semoga ilmu ini terus bermanfaat bagi umat dan membuka wawasan ilmiah.',
      submittedAt: '17 Oktober 2026, 08:30 WIB',
      status: 'Terkonfirmasi',
    },
    {
      id: 'DON-98215',
      donorName: 'Siti Aminah (Surabaya)',
      amount: 'Rp 50.000',
      walletType: 'DANA',
      transactionId: 'DANA-5829104',
      notes: 'Terima kasih atas kajian kitab ulama dan panduan dzikir yang sangat menenangkan.',
      submittedAt: '17 Oktober 2026, 09:15 WIB',
      status: 'Terkonfirmasi',
    },
  ]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWallet(type);
    setTimeout(() => setCopiedWallet(null), 2500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !transactionId) {
      alert('Harap isi Nama Donatur dan Nomor Transaksi.');
      return;
    }

    const newRecord: DonationRecord = {
      id: `DON-${Math.floor(10000 + Math.random() * 90000)}`,
      donorName,
      amount: `Rp ${Number(amount).toLocaleString('id-ID')}`,
      walletType,
      transactionId,
      notes: notes || 'Doa kebaikan untuk kemajuan sains dan dakwah hikmah.',
      submittedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'Terkonfirmasi',
    };

    setDonationHistory([newRecord, ...donationHistory]);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner Donasi */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 p-4 rounded-2xl text-slate-950 shadow-xl border border-amber-300/40 relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-slate-950/20 rounded-lg text-slate-950">
              <Heart className="w-5 h-5 fill-slate-950" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest bg-slate-950/20 px-2 py-0.5 rounded-full">
              DUKUNGAN RISET & PENGEMBANGAN
            </span>
          </div>
          <h2 className="text-lg font-black tracking-tight pt-1">
            Donasi Pengembangan Aplikasi & Kajian Sains
          </h2>
          <p className="text-xs font-medium text-slate-900/90 leading-relaxed max-w-xl">
            Infaq dan donasi Anda digunakan untuk biaya operasional server, digitalisasi manuskrip kitab ulama, riset data geologi, dan pengembangan fitur ilmiah gratis bagi umat.
          </p>
        </div>
        <Sparkles className="w-24 h-24 absolute -right-4 -bottom-4 text-white/20 pointer-events-none" />
      </div>

      {/* Official E-Wallet Accounts Card */}
      <div className="bg-slate-900/95 rounded-2xl p-4 border border-amber-500/30 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Wallet className="w-4 h-4 text-amber-400" />
            Rekening E-Wallet Resmi Developer
          </h3>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
            TERVERIFIKASI AKTIF
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* GoPay Box */}
          <div className="bg-slate-950/90 p-3.5 rounded-xl border border-sky-500/40 flex flex-col justify-between space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                GOPAY DEVELOPER
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Instant Transfer</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Nomor Akun GoPay:</span>
              <span className="text-base font-mono font-bold text-white tracking-wider">
                0895340205302
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">a.n. Nabila Ahmad</span>
            </div>
            <button
              onClick={() => copyToClipboard('0895340205302', 'gopay')}
              className="w-full flex items-center justify-center gap-1.5 py-2 bg-sky-500/20 hover:bg-sky-500/30 active:scale-95 text-sky-300 rounded-lg text-xs font-semibold border border-sky-500/30 transition"
            >
              {copiedWallet === 'gopay' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Nomor GoPay</span>
                </>
              )}
            </button>
          </div>

          {/* DANA Box */}
          <div className="bg-slate-950/90 p-3.5 rounded-xl border border-blue-500/40 flex flex-col justify-between space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                DANA DEVELOPER
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Bebas Biaya Admin</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Nomor Akun DANA:</span>
              <span className="text-base font-mono font-bold text-white tracking-wider">
                085810526151
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">a.n. Nabila Ahmad</span>
            </div>
            <button
              onClick={() => copyToClipboard('085810526151', 'dana')}
              className="w-full flex items-center justify-center gap-1.5 py-2 bg-blue-500/20 hover:bg-blue-500/30 active:scale-95 text-blue-300 rounded-lg text-xs font-semibold border border-blue-500/30 transition"
            >
              {copiedWallet === 'dana' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Nomor DANA</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Formulir Bukti Donasi & Generator Sertifikat */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <FileCheck2 className="w-4 h-4 text-amber-400" />
            Menu Konfirmasi & Bukti Donasi
          </h3>
          <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded-full font-mono">
            RESPONS OTOMATIS
          </span>
        </div>

        {isSubmitted ? (
          <div className="p-4 bg-emerald-950/30 border border-emerald-500/50 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400 ring-4 ring-emerald-500/10">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-300">
                Jazakumullah Khairan Katsiran!
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Bukti donasi dari <strong>{donorName}</strong> sebesar{' '}
                <strong>Rp {Number(amount).toLocaleString('id-ID')}</strong> berhasil dicatat ke dalam buku besar donatur.
              </p>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-left text-xs space-y-1 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>ID Bukti:</span>
                <span className="text-amber-300">DON-{Math.floor(10000 + Math.random() * 90000)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>E-Wallet:</span>
                <span className="text-white">{walletType}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Nomor Ref:</span>
                <span className="text-white">{transactionId}</span>
              </div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-emerald-400 hover:text-emerald-300 underline font-medium"
            >
              Kirim Konfirmasi Donasi Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitProof} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 text-[11px] mb-1">
                  Nama Lengkap / Hamba Allah:
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Contoh: Nabila / Hamba Allah"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[11px] mb-1">
                  Metode E-Wallet yang Digunakan:
                </label>
                <select
                  value={walletType}
                  onChange={(e) => setWalletType(e.target.value as 'GOPAY' | 'DANA')}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-amber-200 focus:outline-none focus:border-amber-500 font-medium"
                >
                  <option value="GOPAY">GoPay (0895340205302)</option>
                  <option value="DANA">DANA (085810526151)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 text-[11px] mb-1">
                  Nominal Donasi (Rp):
                </label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="50000"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[11px] mb-1">
                  ID Transaksi / Nomor Referensi:
                </label>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Contoh: TRX-92810482"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-[11px] mb-1">
                Pesan / Doa Kebaikan (Opsional):
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tuliskan harapan atau doa kebaikan untuk pengembangan keilmuan..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-[11px] mb-1">
                Unggah Screenshot Bukti Transfer (Opsional):
              </label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl cursor-pointer border border-slate-700 transition">
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pilih Berkas Foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {proofImage && (
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Foto Bukti Terpilih
                  </span>
                )}
              </div>
              {proofImage && (
                <div className="mt-2 w-28 h-28 rounded-xl overflow-hidden border border-slate-700 bg-black">
                  <img src={proofImage} alt="Bukti Transfer" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 active:scale-98 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-1.5"
            >
              <FileCheck2 className="w-4 h-4" />
              Kirim Konfirmasi Bukti Donasi
            </button>
          </form>
        )}
      </div>

      {/* Riwayat Donasi Terkini */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2.5">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Buku Besar Donasi Terverifikasi Terkini
        </h4>
        <div className="space-y-2">
          {donationHistory.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <span className="font-semibold text-amber-300 block">{item.donorName}</span>
                <span className="text-[10px] text-slate-400">
                  {item.walletType} • {item.submittedAt}
                </span>
                <p className="text-[11px] text-slate-300 italic">"{item.notes}"</p>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <span className="font-mono font-bold text-emerald-400 block">{item.amount}</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profil Ilmiah & Visi Pengembang (Developer Profile) */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 rounded-2xl p-4 border border-amber-500/40 space-y-3.5 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-slate-950 shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Profil Ilmiah Pengembang: Nabila Ahmad
            </h3>
            <p className="text-xs text-amber-300/90 font-medium">
              Inisiator Platform & Arsitek Riset Spiritualitas Tanpa Batas
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Nabila Ahmad menginisiasi platform <strong>Spiritualitas Tanpa Batas</strong> dengan visi luhur memadukan tiga pilar peradaban: <em>sains fisika-mineralogi eksperimental</em>, <em>khazanah hikmah kitab ulama dunia (*Turats Islamiyyah*)</em>, serta <em>kesejahteraan psikologis manusia (mindfulness & ketenteraman kalbu)</em>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="font-semibold text-amber-300 block text-[11px] flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              Sains & Teknologi
            </span>
            <p className="text-[10px] text-slate-400 mt-1 leading-normal">
              Menjunjung tinggi kejujuran sensorik hardware, analisis statistik Recharts, dan pemetaan geodesi geologis yang presisi.
            </p>
          </div>

          <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="font-semibold text-emerald-300 block text-[11px] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Integritas Akidah
            </span>
            <p className="text-[10px] text-slate-400 mt-1 leading-normal">
              Melindungi umat dari tipu daya tahayul dan ilusi perdukunan dengan merujuk pada fatwa tegas Al-Ghazali dan Ibnu Khaldun.
            </p>
          </div>

          <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="font-semibold text-sky-300 block text-[11px] flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-sky-400" />
              Ketenangan Jiwa
            </span>
            <p className="text-[10px] text-slate-400 mt-1 leading-normal">
              Menghadirkan terapi pernapasan grounding 5-4-3-2-1 dan dzikir ma'tsurat shahih demi kedamaian batin sejati.
            </p>
          </div>
        </div>

        <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-[11px] text-amber-200 italic leading-relaxed text-center">
          "Menjelajah alam semesta dengan mata sains, menjaga hati dengan cahaya tauhid, dan menebar kebaikan tanpa batas."
        </div>
      </div>
    </div>
  );
};

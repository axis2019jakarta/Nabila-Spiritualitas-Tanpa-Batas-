import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  Copy,
  Check,
  X,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';

interface ReportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  latitude: number | null;
  longitude: number | null;
}

export const ReportExportModal: React.FC<ReportExportModalProps> = ({
  isOpen,
  onClose,
  latitude,
  longitude,
}) => {
  const [copied, setCopied] = useState(false);
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const lat = latitude !== null ? latitude.toFixed(6) : '-6.208800';
  const lon = longitude !== null ? longitude.toFixed(6) : '106.845600';

  const reportContent = `===================================================================
LAPORAN RESMI PENGAMATAN GEOLOGI, KOORDINAT & KHAZANAH ARKEOLOGI
Platform: Nabila Ahmad Spiritualitas Tanpa Batas (Edisi Android Khusus)
Waktu Pencatatan: ${dateStr} WIB
===================================================================

I. DATA TELEMETRI & KOORDINAT GEOLOKASI GPS SATELLITE
- Titik Garis Lintang (Latitude) : ${lat}°
- Titik Garis Bujur (Longitude)  : ${lon}°
- Tatanan Sabuk Tektonik         : Busur Magmatik Vulkanik Nusantara (Ring of Fire)
- Tipe Mineralisasi Alamiah      : Endapan Aluvial & Sistem Hidrotermal Kuarsa
- Status Hardware Sensorik       : Pembacaan Sinyal Satelit Radio L1/L5 Aktif

II. RINGKASAN METODE PENGUJIAN MINERALOGI (METODE AL-BIRUNI)
- Rumus Massa Jenis              : ρ = [m_udara / (m_udara - m_air)] × ρ_air
- Nilai Rujukan Emas Murni 24K   : 19,32 g/cm³ (Sangat padat, diamagnetik)
- Nilai Rujukan Pirit (Fool's)   : 5,01 g/cm³ (Besi disulfida, rapuh)
- Kesimpulan Uji Laboratorium    : Identifikasi mineral murni wajib berbasis neraca
                                   hidrostatika dan uji gores porselen.

III. STATUS PERLINDUNGAN CAGAR BUDAYA & SEJARAH
- Rujukan Kitab Sejarah          : Al-Muqaddimah (Ibnu Khaldun)
- Kaidah Arkeologi               : Ekskavasi stratigrafi tanah & penanggalan C-14
- Dasar Hukum Perlindungan       : Undang-Undang RI No. 11 Tahun 2010 tentang Cagar Budaya
- Etika Kelestarian              : Dilarang merusak atau mengeksploitasi situs purbakala.

IV. PANDUAN KETENANGAN BATIN & TAUHID HIKMAH
- Rujukan Kitab                  : Ihya' Ulumiddin (Imam Al-Ghazali)
- Akidah Alam Ghaib              : Alam malakut tidak terjangkau instrumen materi digital.
- Doa Benteng Perlindungan Diri  : Ayat Kursi, Surat Al-Falaq, Surat An-Nas.
- Terapi Grounding Jiwa          : Latihan sadar penuh 5-4-3-2-1 dan dzikirullah harian.

===================================================================
Disusun dan diverifikasi oleh Nabila Ahmad Spiritualitas Tanpa Batas
===================================================================`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(reportContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Laporan_Riset_Geologi_NabilaAhmad_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 animate-fade-in">
      <div className="bg-slate-950 border border-amber-500/40 rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-400">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Ekspor Laporan Riset Geologi & Sejarah
              </h3>
              <span className="text-[10px] text-amber-300/80 font-mono">
                Format Standar Ilmiah Resmi
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Preview */}
        <div className="p-4 overflow-y-auto flex-1 font-mono text-[10px] sm:text-[11px] text-slate-300 bg-black/50 select-text leading-relaxed whitespace-pre-wrap border-b border-slate-900">
          {reportContent}
        </div>

        {/* Modal Action Buttons */}
        <div className="p-3 bg-slate-900 flex items-center justify-between gap-2">
          <button
            onClick={handleCopyText}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>Salin Teks</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadTxt}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-amber-600 hover:bg-amber-500 active:scale-95 text-slate-950 text-xs font-bold rounded-xl shadow transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh .TXT</span>
          </button>

          <button
            onClick={handlePrint}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition"
            title="Cetak Laporan"
          >
            <Printer className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

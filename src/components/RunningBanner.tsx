import React from 'react';
import { Sparkles, Radio } from 'lucide-react';

export const RunningBanner: React.FC = () => {
  const marqueeText =
    "✨ Selamat Datang di Nabila Ahmad: Spiritualitas Tanpa Batas ✦ Portal Integrasi Khazanah Hikmah Ulama Dunia ✦ Sains Mineralogi & Geologi Kepadatan Emas (Recharts Analitik) ✦ Monitor Koordinat Geolokasi GPS Nyata Android ✦ Studio Sejarah & Arkeologi Cagar Budaya ✦ Panduan Ketenangan Batin & Dzikir Ma'tsurat Shahih ✦ Dukung Pengembangan Aplikasi Melalui Menu Donasi Developer (GoPay & DANA) ✦ Menyatukan Kejernihan Sains & Keagungan Spiritualitas ✦";

  return (
    <div className="w-full bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b border-amber-500/40 py-2 overflow-hidden relative select-none shadow-sm">
      <div className="flex items-center gap-2 px-3 absolute left-0 top-0 bottom-0 bg-gradient-to-r from-amber-950 via-amber-950 to-transparent z-10 pointer-events-none">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300 font-mono hidden sm:inline-block">
          LIVE INFO
        </span>
      </div>

      {/* Marquee Content */}
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="inline-block animate-marquee pl-20 sm:pl-28 text-[11px] font-medium text-amber-200 tracking-wide">
          {marqueeText} &nbsp;&nbsp;&nbsp;&nbsp; {marqueeText}
        </div>
      </div>
    </div>
  );
};

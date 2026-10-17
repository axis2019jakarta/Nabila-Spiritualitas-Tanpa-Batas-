import React, { useState } from 'react';
import { Heart, Activity, RotateCcw, Sparkles, PhoneCall, HelpCircle, CheckCircle } from 'lucide-react';
import { GROUNDING_EXERCISES } from '../data/spiritualPeaceData';

export const GroundingPeaceStudio: React.FC = () => {
  // Tasbih Counter State
  const [tasbihCount, setTasbihCount] = useState<number>(0);
  const [tasbihZikir, setTasbihZikir] = useState<string>('Subhanallah');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const zikirOptions = [
    { label: 'Subhānallāh (Maha Suci Allah)', key: 'Subhanallah' },
    { label: 'Alhamdulillāh (Segala Puji Bagi Allah)', key: 'Alhamdulillah' },
    { label: 'Allāhu Akbar (Allah Maha Besar)', key: 'Allahu Akbar' },
    { label: 'Astaghfirullāh (Aku Mohon Ampun)', key: 'Astaghfirullah' },
    { label: 'Lā hawla wa lā quwwata illā billāh', key: 'La hawla' }
  ];

  const handleTasbihTap = () => {
    // Android haptic feedback if supported
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(25);
      } catch {
        // Ignore if not permitted
      }
    }
    setTasbihCount((prev) => prev + 1);
  };

  const handleResetTasbih = () => {
    setTasbihCount(0);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/30">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Ruang Ketenangan Batin & Grounding
            </h2>
            <p className="text-xs text-emerald-300/80">
              Latihan Menenangkan Pikiran, Dzikir Harian & Kesejahteraan Jiwa
            </p>
          </div>
        </div>
      </div>

      {/* Digital Tasbih Counter with Android Touch Feel */}
      <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 text-center space-y-4 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            Tasbih Digital Pengingat Hati
          </span>
          <button
            onClick={handleResetTasbih}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>

        {/* Selected Zikir Selector */}
        <select
          value={tasbihZikir}
          onChange={(e) => setTasbihZikir(e.target.value)}
          className="w-full bg-slate-950 text-xs text-amber-200 border border-slate-700 rounded-xl px-3 py-2 text-center focus:outline-none focus:border-amber-500 font-medium"
        >
          {zikirOptions.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Big Tap Area */}
        <div className="py-2">
          <button
            onClick={handleTasbihTap}
            className="w-40 h-40 mx-auto rounded-full bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/40 border-4 border-amber-500/40 shadow-inner flex flex-col items-center justify-center active:scale-95 transition-transform duration-100 group select-none ring-4 ring-slate-800"
          >
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
              Sentuh Untuk Menghitung
            </span>
            <span className="text-4xl font-extrabold font-mono text-amber-300 my-1 group-active:text-white transition">
              {tasbihCount}
            </span>
            <span className="text-[10px] text-emerald-400/80">
              Putaran: {Math.floor(tasbihCount / 33)} | Sisa: {tasbihCount % 33}/33
            </span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400 italic">
          "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram." (QS. Ar-Ra'd: 28)
        </p>
      </div>

      {/* 5-4-3-2-1 Sensory Grounding Exercise */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-emerald-500/30 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Latihan Grounding Realitas (5-4-3-2-1)
          </h3>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
            PSIKOLOGI & MINDFULNESS
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {GROUNDING_EXERCISES.subtitle}
        </p>

        {/* Step-by-step interactive card */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono text-xs">
                {GROUNDING_EXERCISES.steps[currentStepIndex].num}
              </span>
              Langkah {5 - currentStepIndex} dari 5: {GROUNDING_EXERCISES.steps[currentStepIndex].sense}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Fokus Sadar Penuh
            </span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed p-3 bg-slate-900/70 rounded-xl border border-slate-800">
            {GROUNDING_EXERCISES.steps[currentStepIndex].instruction}
          </p>

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 disabled:opacity-40 transition"
            >
              Sebelumnya
            </button>
            <div className="flex gap-1">
              {GROUNDING_EXERCISES.steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentStepIndex ? 'bg-amber-400 w-4' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentStepIndex((prev) =>
                  Math.min(GROUNDING_EXERCISES.steps.length - 1, prev + 1)
                )
              }
              disabled={currentStepIndex === GROUNDING_EXERCISES.steps.length - 1}
              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-40 transition font-medium"
            >
              Langkah Lanjut
            </button>
          </div>
        </div>
      </div>

      {/* Mental Health Support / Caring Empowering Box */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950/40 p-4 rounded-2xl border border-indigo-500/30 space-y-2.5">
        <div className="flex items-center gap-2 text-indigo-300">
          <PhoneCall className="w-4 h-4 text-indigo-400 flex-shrink-0" />
          <h4 className="text-xs font-bold uppercase tracking-wider">
            Dukungan Sahabat & Bantuan Profesional
          </h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {GROUNDING_EXERCISES.supportNote}
        </p>
        <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
          <span>Kesehatan mental dan ketenangan batin Anda adalah prioritas utama.</span>
          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
        </div>
      </div>
    </div>
  );
};

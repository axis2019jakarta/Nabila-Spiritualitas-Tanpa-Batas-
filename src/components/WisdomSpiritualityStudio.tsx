import React, { useState } from 'react';
import { BookOpen, ShieldCheck, HeartHandshake, Compass, Sparkles, Feather } from 'lucide-react';
import { SCHOLAR_INSIGHTS } from '../data/scholarData';
import { UNSEEN_REALM_SCHOLAR_CONSENSUS, DZIKIR_PELINDUNG } from '../data/spiritualPeaceData';

export const WisdomSpiritualityStudio: React.FC = () => {
  const [selectedScholarId, setSelectedScholarId] = useState<string>(SCHOLAR_INSIGHTS[1].id); // default to Al-Ghazali
  const [activeDzikirId, setActiveDzikirId] = useState<string>(DZIKIR_PELINDUNG[0].id);

  const activeScholar =
    SCHOLAR_INSIGHTS.find((s) => s.id === selectedScholarId) || SCHOLAR_INSIGHTS[0];

  const activeDzikir =
    DZIKIR_PELINDUNG.find((d) => d.id === activeDzikirId) || DZIKIR_PELINDUNG[0];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
            <Feather className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Studio Kajian Ulama & Hakikat Alam Ghaib
            </h2>
            <p className="text-xs text-amber-300/80">
              Kajian Kitab Para Ulama Ahli Hikmah Dunia & Doa Perlindungan Shahih
            </p>
          </div>
        </div>
      </div>

      {/* Islamic Scholar Consensus on Unseen Realm */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-amber-500/30 space-y-3">
        <div className="flex items-center gap-2 text-amber-300 border-b border-slate-800 pb-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            {UNSEEN_REALM_SCHOLAR_CONSENSUS.title}
          </h3>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {UNSEEN_REALM_SCHOLAR_CONSENSUS.coreClarification}
        </p>

        <div className="space-y-2.5">
          {UNSEEN_REALM_SCHOLAR_CONSENSUS.keyPoints.map((pt, idx) => (
            <div key={idx} className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs">
              <span className="font-semibold text-amber-300 block mb-1">
                {pt.heading}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{pt.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Classical Scholars Insight Carousel / Tabs */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Khazanah Pemikiran Ulama & Ilmuwan Dunia
          </h3>
          <span className="text-[10px] text-amber-400/80 font-mono">LITERATUR ASLI</span>
        </div>

        {/* Scholar Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
          {SCHOLAR_INSIGHTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedScholarId(s.id)}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap font-medium transition text-[11px] ${
                selectedScholarId === s.id
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {s.scholarName.split(' ')[0]} {s.scholarName.split(' ')[1] || ''}
            </button>
          ))}
        </div>

        {/* Active Scholar Card */}
        <div className="space-y-2.5 text-xs">
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-300 text-sm">
                {activeScholar.scholarName}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">{activeScholar.era}</span>
            </div>
            <div className="mt-1 text-[11px] font-serif-title text-amber-200/90">
              {activeScholar.bookTitle}
            </div>
            <div className="mt-2 text-slate-300 text-[11px] leading-relaxed">
              {activeScholar.summary}
            </div>
          </div>

          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 space-y-1.5">
            <span className="font-semibold text-slate-300 block text-[11px]">
              Analisis Mendalam & Korelasi Ilmiah:
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {activeScholar.detailedAnalysis}
            </p>
          </div>

          <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 space-y-1.5">
            <span className="font-semibold text-amber-300 block text-[11px] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Nasihat Hikmah Terpilih:
            </span>
            {activeScholar.coreQuotes.map((q, idx) => (
              <p key={idx} className="text-[11px] italic text-amber-100/90 border-l-2 border-amber-500/40 pl-2 my-1">
                "{q}"
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Authentic Protective Dzikir Section */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Dzikir & Doa Benteng Perlindungan Diri
          </h3>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
            SHAHIH
          </span>
        </div>

        {/* Dzikir Tabs */}
        <div className="grid grid-cols-2 gap-1.5 text-xs">
          {DZIKIR_PELINDUNG.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDzikirId(d.id)}
              className={`p-2 rounded-xl border text-left transition text-[11px] font-medium truncate ${
                activeDzikirId === d.id
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                  : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {d.title.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Dzikir Display Card */}
        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 text-center">
          <span className="text-xs font-semibold text-emerald-400 block">{activeDzikir.title}</span>

          {/* Arabic Text with custom Amiri Font */}
          <div className="font-arabic text-xl sm:text-2xl text-amber-100 leading-loose py-2 px-1 text-right sm:text-center select-text">
            {activeDzikir.arabicText}
          </div>

          <div className="text-[11px] text-amber-300/80 italic text-left">
            "{activeDzikir.transliteration}"
          </div>

          <div className="text-[11px] text-slate-300 text-left bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 leading-relaxed">
            <strong>Artinya:</strong> {activeDzikir.translation}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900">
            <span><strong>Sumber:</strong> {activeDzikir.source}</span>
            <span className="text-emerald-400 font-semibold">Anjuran: {activeDzikir.recommendedCount}x</span>
          </div>
        </div>
      </div>
    </div>
  );
};

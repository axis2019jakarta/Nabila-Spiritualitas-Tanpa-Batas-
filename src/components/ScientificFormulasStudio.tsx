import React, { useState } from 'react';
import {
  Binary,
  Calculator,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileText,
  RotateCcw,
} from 'lucide-react';
import { SCIENTIFIC_FORMULAS, ScientificFormulaDetail } from '../data/scientificFormulasData';
import { ARABIC_MANUSCRIPTS, ArabicManuscriptRecord } from '../data/arabicClassicalBooksData';

export const ScientificFormulasStudio: React.FC = () => {
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>(SCIENTIFIC_FORMULAS[0].id);
  const [selectedManuscriptId, setSelectedManuscriptId] = useState<string>(ARABIC_MANUSCRIPTS[0].id);

  // Al-Biruni Calculator Inputs
  const [mUdara, setMUdara] = useState<number>(57.96);
  const [mAir, setMAir] = useState<number>(54.96);

  // Radar GPR Calculator Inputs
  const [dielectric, setDielectric] = useState<number>(6.25);
  const [twtt, setTwtt] = useState<number>(80);

  // Carbon C-14 Calculator Inputs
  const [c14RatioPercent, setC14RatioPercent] = useState<number>(85.2);

  const activeFormula =
    SCIENTIFIC_FORMULAS.find((f) => f.id === selectedFormulaId) || SCIENTIFIC_FORMULAS[0];

  const activeManuscript =
    ARABIC_MANUSCRIPTS.find((m) => m.id === selectedManuscriptId) || ARABIC_MANUSCRIPTS[0];

  // Dynamic calculations
  // 1. Al-Biruni
  const deltaM = mUdara - mAir;
  const calculatedDensity = deltaM > 0 ? (mUdara / deltaM).toFixed(2) : '0';

  // 2. Radar GPR
  const velocity = dielectric > 0 ? (0.3 / Math.sqrt(dielectric)).toFixed(3) : '0';
  const calculatedDepth =
    dielectric > 0 ? ((parseFloat(velocity) * twtt) / 2).toFixed(2) : '0';

  // 3. Carbon C-14
  const ratioDecimal = c14RatioPercent / 100;
  const calculatedAge =
    ratioDecimal > 0 && ratioDecimal < 1
      ? Math.round(-8267 * Math.log(ratioDecimal))
      : 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Studio Rumus Ilmiah & Manuskrip Kitab Arab
            </h2>
            <p className="text-xs text-amber-300/80">
              Formulasi Matematis Presisi, Penurunan Rumus & Naskah Arab Ulama Klasik
            </p>
          </div>
        </div>
      </div>

      {/* Formula Selector Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
        {SCIENTIFIC_FORMULAS.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFormulaId(f.id)}
            className={`px-3 py-2 rounded-xl border whitespace-nowrap font-medium transition ${
              selectedFormulaId === f.id
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {f.title.split('(')[0]}
          </button>
        ))}
      </div>

      {/* Active Formula Mathematical Presentation */}
      <div className="bg-slate-900/95 rounded-2xl p-4 border border-amber-500/30 space-y-3.5 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-amber-400" />
            {activeFormula.title}
          </span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
            {activeFormula.category}
          </span>
        </div>

        {/* Big LaTeX-style Formula Display Box */}
        <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/40 text-center space-y-1.5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
            Persamaan Matematis Utama:
          </span>
          <div className="text-xl sm:text-2xl font-mono font-bold text-amber-300 tracking-wide">
            {activeFormula.formulaLaTeX}
          </div>
          <p className="text-[11px] text-slate-400 italic">
            Sumber: {activeFormula.bookSource} — {activeFormula.scholarName}
          </p>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          <strong>Tujuan Matematis:</strong> {activeFormula.purpose}
        </p>

        {/* Variables Table */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
            Daftar Variabel & Satuan Fisika:
          </span>
          <div className="grid grid-cols-1 gap-1.5">
            {activeFormula.variableDefinitions.map((v, i) => (
              <div
                key={i}
                className="p-2.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs flex items-center justify-between"
              >
                <div>
                  <span className="font-mono font-bold text-amber-300 mr-2">{v.symbol}</span>
                  <span className="text-slate-200">{v.name}</span>
                  <span className="text-slate-400 text-[10px] block mt-0.5">{v.description}</span>
                </div>
                <span className="text-[10px] bg-slate-900 border border-slate-700 text-amber-200 px-2 py-0.5 rounded-md font-mono flex-shrink-0 ml-2">
                  {v.unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Derivation */}
        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
          <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider block flex items-center gap-1.5">
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            Langkah-Langkah Penurunan Rumus & Cara Menyelesaikannya:
          </span>
          <div className="space-y-1 text-xs text-slate-300">
            {activeFormula.stepByStepDerivation.map((step, idx) => (
              <p key={idx} className="text-[11px] leading-relaxed text-slate-300 pl-2 border-l-2 border-amber-500/30">
                {step}
              </p>
            ))}
          </div>
        </div>

        {/* Live Step-by-Step Solver for each formula */}
        <div className="p-3 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 rounded-xl border border-amber-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Kalkulator Penyelesaian Interaktif:
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">LANGSUNG HITUNG</span>
          </div>

          {activeFormula.id === 'al-biruni-hydrostatic' && (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 text-[10px] mb-1">Massa di Udara (m_udara):</label>
                  <input
                    type="number"
                    value={mUdara}
                    onChange={(e) => setMUdara(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] mb-1">Massa di Air (m_air):</label>
                  <input
                    type="number"
                    value={mAir}
                    onChange={(e) => setMAir(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                  />
                </div>
              </div>

              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                <div>Volume air dipindahkan: V = {mUdara} - {mAir} = {deltaM.toFixed(2)} cm³</div>
                <div>Massa jenis: ρ = {mUdara} / {deltaM.toFixed(2)} = <strong className="text-amber-300 text-sm">{calculatedDensity} g/cm³</strong></div>
                <div className="text-[10px] text-emerald-400 pt-1">
                  Kesimpulan: {parseFloat(calculatedDensity) >= 19.0 && parseFloat(calculatedDensity) <= 19.5 ? 'Cocok dengan Emas Murni 24K' : parseFloat(calculatedDensity) >= 4.5 && parseFloat(calculatedDensity) <= 5.5 ? 'Pirit / Emas Semu (Bukan Emas)' : 'Mineral / Paduan Logam Campuran'}
                </div>
              </div>
            </div>
          )}

          {activeFormula.id === 'radar-velocity-depth' && (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 text-[10px] mb-1">Permitivitas Dielektrik (εr):</label>
                  <input
                    type="number"
                    value={dielectric}
                    onChange={(e) => setDielectric(parseFloat(e.target.value) || 1)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] mb-1">Waktu Pantul TWTT (ns):</label>
                  <input
                    type="number"
                    value={twtt}
                    onChange={(e) => setTwtt(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                  />
                </div>
              </div>

              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                <div>Kecepatan gelombang: v = 0.3 / √{dielectric} = {velocity} m/ns</div>
                <div>Kedalaman anomali: d = ({velocity} × {twtt}) / 2 = <strong className="text-cyan-300 text-sm">{calculatedDepth} meter</strong> di bawah tanah</div>
              </div>
            </div>
          )}

          {activeFormula.id === 'radiocarbon-c14' && (
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 text-[10px] mb-1">
                  Sisa Aktivitas Karbon C-14 (%):
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={c14RatioPercent}
                  onChange={(e) => setC14RatioPercent(parseFloat(e.target.value) || 100)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono"
                />
              </div>

              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                <div>Rasio peluruhan: N / N₀ = {(c14RatioPercent / 100).toFixed(4)}</div>
                <div>Usia Sejarah: t = -8267 × ln({(c14RatioPercent / 100).toFixed(4)}) = <strong className="text-amber-300 text-sm">{calculatedAge.toLocaleString('id-ID')} Tahun yang lalu</strong></div>
                <div className="text-[10px] text-slate-400">
                  Perkiraan Penanggalan Kalender: Sekitar tahun {new Date().getFullYear() - calculatedAge} Masehi.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rujukan Manuskrip Kitab Ulama Arab Dunia Lengkap */}
      <div className="bg-slate-900/95 rounded-2xl p-4 border border-slate-800 space-y-3.5 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Khazanah Kitab Asli Ulama Arab & Terjemahan
          </h3>
          <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-full font-mono">
            MANUSKRIP OTENTIK
          </span>
        </div>

        {/* Manuscript selector pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
          {ARABIC_MANUSCRIPTS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedManuscriptId(m.id)}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap font-medium text-[11px] transition ${
                selectedManuscriptId === m.id
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {m.authorLatin.split(' ')[0]} ({m.bookTitleLatin.split(' ')[0]} {m.bookTitleLatin.split(' ')[1]})
            </button>
          ))}
        </div>

        {/* Manuscript Content Card */}
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-300 text-sm">
                {activeManuscript.bookTitleLatin}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {activeManuscript.yearHijriMasehi}
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              Penulis: <strong>{activeManuscript.authorLatin}</strong> ({activeManuscript.authorArabic})
            </div>
            <div className="text-[11px] text-amber-200/90 font-medium pt-1">
              {activeManuscript.chapterTitle}
            </div>
          </div>

          {/* Arabic Calligraphy Text Box */}
          <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 text-right select-text">
            <span className="text-[10px] text-amber-400 block text-left mb-2 font-mono uppercase tracking-wider">
              Naskah Arab Asli (Matan Kitab Berharakat):
            </span>
            <p className="font-arabic text-lg sm:text-xl text-amber-100 leading-loose">
              {activeManuscript.originalArabicText}
            </p>
          </div>

          {/* Indonesian Translation */}
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
              Terjemahan Bahasa Indonesia Resmi:
            </span>
            <p className="text-slate-200 text-[11px] leading-relaxed italic">
              "{activeManuscript.indonesianTranslation}"
            </p>
          </div>

          {/* Scientific and Theological Analysis */}
          <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-bold text-amber-300 block">
              Analisis Ilmiah & Relevansi Sains Modern:
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {activeManuscript.scientificAndTheologicalCommentary}
            </p>
            <div className="text-[10px] text-emerald-400 pt-1">
              <strong>Penerapan Nyata:</strong> {activeManuscript.practicalApplication}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

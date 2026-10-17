import React, { useState } from 'react';
import { Sparkles, Calculator, BookOpen, Search, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { GOLD_MINERAL_SPECS, PYRITE_COMPARISON } from '../data/scienceGoldData';
import { MineralDensityChart } from './MineralDensityChart';
import { GeophysicalRadarSimulator } from './GeophysicalRadarSimulator';

interface GoldGeologyStudioProps {
  latitude?: number | null;
  longitude?: number | null;
}

export const GoldGeologyStudio: React.FC<GoldGeologyStudioProps> = ({
  latitude = null,
  longitude = null,
}) => {
  // Calculator state for Al-Biruni's Hydrostatic Density Test
  const [massGrams, setMassGrams] = useState<string>('38.6');
  const [volumeMl, setVolumeMl] = useState<string>('2.0');
  const [testResult, setTestResult] = useState<{
    density: number;
    conclusion: string;
    status: 'gold' | 'pyrite' | 'silver' | 'stone' | 'unknown';
    detail: string;
  } | null>({
    density: 19.3,
    conclusion: 'Emas Murni (Native 24K Gold)',
    status: 'gold',
    detail: 'Massa jenis mendekati 19,32 g/cm³. Sesuai dengan pengujian hidrostatik Al-Biruni.',
  });

  const runDensityTest = () => {
    const m = parseFloat(massGrams);
    const v = parseFloat(volumeMl);
    if (isNaN(m) || isNaN(v) || v <= 0 || m <= 0) {
      return;
    }
    const d = parseFloat((m / v).toFixed(2));

    if (d >= 18.5 && d <= 19.6) {
      setTestResult({
        density: d,
        conclusion: 'Sangat Cocok dengan Emas Murni 24 Karat',
        status: 'gold',
        detail: 'Massa jenis 19,3 g/cm³ membuktikan kepadatannya yang tinggi. Tidak bereaksi dengan asam tunggal dan bersifat diamagnetik.',
      });
    } else if (d >= 14.5 && d <= 17.5) {
      setTestResult({
        density: d,
        conclusion: 'Paduan Emas (14K – 18K Gold Alloy)',
        status: 'gold',
        detail: 'Massa jenis menunjukkan campuran emas dengan perak atau tembaga untuk perhiasan tahan aus.',
      });
    } else if (d >= 4.5 && d <= 5.5) {
      setTestResult({
        density: d,
        conclusion: 'Pirit (Pyrite - Fool\'s Gold)',
        status: 'pyrite',
        detail: 'Perhatian: Ini bukan emas. Ini adalah besi disulfida (FeS₂). Uji gores keramik akan menghasilkan warna hitam kehijauan.',
      });
    } else if (d >= 9.8 && d <= 11.0) {
      setTestResult({
        density: d,
        conclusion: 'Perak Murni (Silver - Ag)',
        status: 'silver',
        detail: 'Massa jenis perak murni berkisar 10,49 g/cm³.',
      });
    } else if (d >= 2.3 && d <= 3.2) {
      setTestResult({
        density: d,
        conclusion: 'Batuan Kuarsa / Silika Umum',
        status: 'stone',
        detail: 'Batuan kerak bumi biasa yang sering mengandung urat kuarsa tempat terbentuknya butiran emas mikro.',
      });
    } else {
      setTestResult({
        density: d,
        conclusion: 'Mineral / Logam Tak Teridentifikasi',
        status: 'unknown',
        detail: 'Massa jenis ini memerlukan pengujian spektrometri laboratorium geokimia (XRF).',
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Studio Sains Geologi & Deteksi Emas
            </h2>
            <p className="text-xs text-amber-300/80">
              Kajian Ilmiah Mineralogi, Kitab Al-Biruni, Radar Geofisika & Visualisasi Statistik Recharts
            </p>
          </div>
        </div>
      </div>

      {/* Geophysical Radar Simulator & NASA Telemetry */}
      <GeophysicalRadarSimulator latitude={latitude} longitude={longitude} />

      {/* Recharts Statistical Visualization Component */}
      <MineralDensityChart latitude={latitude} longitude={longitude} />

      {/* Interactive Al-Biruni Hydrostatic Density Lab */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-amber-500/30 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Uji Massa Jenis Fisik (Metode Al-Biruni)
          </span>
          <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/20">
            METODE ILMIAH
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Metode terverifikasi paling akurat dalam sejarah sains untuk membedakan emas asli dari batu pirit emas semu tanpa merusak sampel:
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-slate-400 text-[11px] mb-1">
              Massa Sampel (Gram):
            </label>
            <input
              type="number"
              value={massGrams}
              onChange={(e) => setMassGrams(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-500"
              placeholder="Contoh: 38.6"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-[11px] mb-1">
              Volume Air Tumpah (ml / cm³):
            </label>
            <input
              type="number"
              value={volumeMl}
              onChange={(e) => setVolumeMl(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-amber-500"
              placeholder="Contoh: 2.0"
            />
          </div>
        </div>

        <button
          onClick={runDensityTest}
          className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 active:scale-98 text-slate-950 font-bold text-xs rounded-xl shadow-md transition"
        >
          Hitung & Verifikasi Karakteristik Mineral
        </button>

        {testResult && (
          <div
            className={`p-3 rounded-xl border text-xs space-y-1.5 ${
              testResult.status === 'gold'
                ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                : testResult.status === 'pyrite'
                ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                : 'bg-slate-950/80 border-slate-800 text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold flex items-center gap-1.5">
                {testResult.status === 'gold' ? (
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                )}
                {testResult.conclusion}
              </span>
              <span className="font-mono font-bold text-sm">
                ρ = {testResult.density} g/cm³
              </span>
            </div>
            <p className="text-[11px] leading-relaxed opacity-90">{testResult.detail}</p>
          </div>
        )}
      </div>

      {/* Classical Scholar & Science Deep Dive */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-amber-300 border-b border-slate-800 pb-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            Kajian Kitab Al-Biruni & Sejarah Mineralogi
          </h3>
        </div>

        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs space-y-2">
          <span className="font-semibold text-amber-300 block">
            Kitab al-Jamāhir fī Ma'rifat al-Jawāhir (Abu Rayhan Al-Biruni)
          </span>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Pada abad ke-11 Masehi, Al-Biruni merancang bejana berbentuk kerucut khusus untuk mengukur volume air yang tumpah saat logam dimasukkan. Dengan ketelitian luar biasa, Al-Biruni mencatat massa jenis emas adalah <strong>19,05 g/cm³</strong>, membantah dongeng alkimia kuno dan menetapkan standar sains modern.
          </p>
          <div className="p-2.5 bg-amber-500/5 border-l-2 border-amber-500 text-[11px] italic text-amber-200">
            "Pengetahuan tentang hakikat zat tidak dapat diperoleh melalui klaim gaib atau sulap kata-kata, melainkan dengan timbangan neraca yang adil dan perhitungan matematis."
          </div>
        </div>
      </div>

      {/* Physical Comparison: Native Gold vs Pyrite */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Ciri-Ciri Fisik: Emas Asli vs Pirit (Emas Semu)
        </h3>

        <div className="space-y-2 text-xs">
          <div className="p-3 bg-amber-950/20 rounded-xl border border-amber-600/30">
            <span className="font-bold text-amber-300 block mb-1">
              {GOLD_MINERAL_SPECS.name} ({GOLD_MINERAL_SPECS.scientificFormula})
            </span>
            <ul className="space-y-1 text-[11px] text-slate-300 list-disc list-inside">
              <li><strong>Massa Jenis:</strong> {GOLD_MINERAL_SPECS.density}</li>
              <li><strong>Kekerasan:</strong> {GOLD_MINERAL_SPECS.hardnessMohs} (Lunak, bisa ditempa)</li>
              <li><strong>Goresan Uji:</strong> Kuning keemasan berkilau</li>
              <li><strong>Sifat Magnetik:</strong> {GOLD_MINERAL_SPECS.magneticResponse}</li>
            </ul>
          </div>

          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="font-bold text-slate-300 block mb-1">
              {PYRITE_COMPARISON.name} ({PYRITE_COMPARISON.scientificFormula})
            </span>
            <ul className="space-y-1 text-[11px] text-slate-400 list-disc list-inside">
              <li><strong>Massa Jenis:</strong> {PYRITE_COMPARISON.density} (Hampir 4x lebih ringan dari emas)</li>
              <li><strong>Kekerasan:</strong> {PYRITE_COMPARISON.hardnessMohs} (Sangat keras, mudah rapuh hancur)</li>
              <li><strong>Goresan Uji:</strong> {PYRITE_COMPARISON.colorStreak}</li>
              <li><strong>Sifat Magnetik:</strong> {PYRITE_COMPARISON.magneticResponse}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Real Scientific Exploration Equipment */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
          <Search className="w-4 h-4 text-cyan-400" />
          Peralatan Deteksi Nyata yang Digunakan Ahli Geologi
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Dalam dunia nyata, eksplorasi geologi dan pertambangan legal menggunakan instrumen geofisika bersertifikat:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
            <span className="font-semibold text-cyan-300 block text-[11px]">1. Pulse Induction Metal Detector</span>
            <span className="text-slate-400 text-[10px]">Alat deteksi medan induksi elektromagnetik yang diayunkan beberapa cm di atas tanah untuk mendeteksi nugget logam.</span>
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
            <span className="font-semibold text-cyan-300 block text-[11px]">2. Ground Penetrating Radar (GPR)</span>
            <span className="text-slate-400 text-[10px]">Memancarkan pulsa gelombang mikro radar ke dalam tanah untuk memetakan rongga dan diskontinuitas lapisan batuan.</span>
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
            <span className="font-semibold text-cyan-300 block text-[11px]">3. Portable XRF Spectrometer</span>
            <span className="text-slate-400 text-[10px]">Alat tembak sinar-X fluoresensi portabel untuk menganalisis kadar persen unsur emas (Au) pada batuan dalam hitungan detik.</span>
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
            <span className="font-semibold text-cyan-300 block text-[11px]">4. Survei Geolistrik Resistivitas</span>
            <span className="text-slate-400 text-[10px]">Mengalirkan arus listrik searah ke dalam tanah untuk mendeteksi zona urat kuarsa hidrotermal pembawa mineralisasi.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

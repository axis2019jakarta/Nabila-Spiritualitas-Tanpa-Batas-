import React, { useState, useEffect } from 'react';
import { Radio, Satellite, Globe, Layers, Eye, ShieldAlert, Cpu, Activity } from 'lucide-react';

interface GeophysicalRadarSimulatorProps {
  latitude: number | null;
  longitude: number | null;
}

export const GeophysicalRadarSimulator: React.FC<GeophysicalRadarSimulatorProps> = ({
  latitude,
  longitude,
}) => {
  const [radarAngle, setRadarAngle] = useState(0);
  const [selectedDepthLayer, setSelectedDepthLayer] = useState<number>(0);
  const [signalFrequency, setSignalFrequency] = useState<'400MHz' | '900MHz' | '100MHz'>('400MHz');

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarAngle((prev) => (prev + 3) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const subsurfaceLayers = [
    {
      name: 'Lapisan 0 – 2m: Tanah Humus & Sedimen Aluvial',
      dielectric: 'εr = 12 – 18',
      penetration: 'Sangat baik untuk detektor VLF/PI induksi permukaan',
      scientificFact: 'Lapisan tempat sedimen pasir sungai purba mengendap, tempat pengujian dulang emas aluvial dilakukan.',
    },
    {
      name: 'Lapisan 2 – 6m: Lempung & Kerikil Vulkanik',
      dielectric: 'εr = 8 – 12',
      penetration: 'Meredam gelombang radar frekuensi tinggi (atenuasi konduktif)',
      scientificFact: 'Lapisan lempung menahan air tanah. Memerlukan geolistrik tahanan jenis (resistivitas) untuk pemetaan.',
    },
    {
      name: 'Lapisan 6 – 15m: Urat Kuarsa Hidrotermal (Zona Mineralisasi)',
      dielectric: 'εr = 4.5 – 6.0',
      penetration: 'Anomali resistivitas tinggi terdeteksi oleh georadar profesional',
      scientificFact: 'Zona retakan batuan tempat fluida hidrotermal purba mengendapkan silika dan butiran mikro emas native.',
    },
    {
      name: 'Lapisan > 15m: Batuan Beku Andesit / Basaltik (Bedrock)',
      dielectric: 'εr = 6.0 – 8.5',
      penetration: 'Memerlukan seismik refraksi atau pemboran inti (core drilling)',
      scientificFact: 'Fondasi batuan vulkanik kerak bumi di sepanjang busur pegunungan Pasifik dan Nusantara.',
    },
  ];

  return (
    <div className="bg-slate-900/95 rounded-2xl p-4 border border-cyan-500/30 space-y-4 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Simulator Radar Geofisika & Telemetri Satelit (GPR)
            </h3>
            <p className="text-[10px] text-cyan-300/80">
              Prinsip Kerja Ground Penetrating Radar & Penginderaan Jauh NASA
            </p>
          </div>
        </div>
        <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-mono">
          EDUKASI SAINS
        </span>
      </div>

      {/* Radar Screen Visualizer */}
      <div className="relative w-full h-56 bg-slate-950 rounded-xl border border-cyan-900/60 overflow-hidden flex items-center justify-center shadow-inner">
        {/* Radar Concentric Grid Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full border border-cyan-500/20" />
          <div className="w-32 h-32 rounded-full border border-cyan-500/20" />
          <div className="w-48 h-48 rounded-full border border-cyan-500/30" />
          <div className="w-full h-[1px] bg-cyan-500/15" />
          <div className="h-full w-[1px] bg-cyan-500/15" />
        </div>

        {/* Rotating Radar Sweep Line */}
        <div
          className="absolute w-24 h-24 origin-bottom-right top-4 left-4 sm:top-4 sm:left-12 pointer-events-none"
          style={{
            transform: `rotate(${radarAngle}deg)`,
            transformOrigin: '100% 100%',
          }}
        >
          <div className="w-full h-full bg-gradient-to-tl from-cyan-400/40 via-cyan-500/10 to-transparent clip-radar-sweep" />
        </div>

        {/* Target Echo Points (Geophysical anomalies in bedrock) */}
        <div className="absolute top-12 right-16 flex items-center gap-1.5 text-[9px] text-cyan-300 font-mono bg-cyan-950/80 px-2 py-1 rounded-md border border-cyan-500/40 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Anomali Dielektrik Kuarsa (6.2m)</span>
        </div>

        <div className="absolute bottom-10 left-12 flex items-center gap-1.5 text-[9px] text-amber-300 font-mono bg-amber-950/80 px-2 py-1 rounded-md border border-amber-500/40">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Diskontinuitas Batuan Dasar (14.8m)</span>
        </div>

        {/* Center Origin Node */}
        <div className="w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20 z-10 animate-ping-slow" />

        {/* Telemetry HUD overlays */}
        <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-400/80">
          SCAN: 360° GPR PULSE <br />
          FREQ: {signalFrequency}
        </div>

        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-cyan-400/80 text-right">
          LAT: {latitude !== null ? latitude.toFixed(4) : '-6.2088'}° <br />
          LON: {longitude !== null ? longitude.toFixed(4) : '106.8456'}°
        </div>
      </div>

      {/* Frequency Toggle Controls */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px] flex items-center gap-1">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          Frekuensi Antena Radar:
        </span>
        <div className="flex gap-1.5">
          {(['100MHz', '400MHz', '900MHz'] as const).map((freq) => (
            <button
              key={freq}
              onClick={() => setSignalFrequency(freq)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition ${
                signalFrequency === freq
                  ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-200 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {freq}
            </button>
          ))}
        </div>
      </div>

      {/* Subsurface Stratigraphic Selector */}
      <div className="space-y-2">
        <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          Penampang Lapisan Geologi Bawah Permukaan
        </span>

        <div className="grid grid-cols-2 gap-1.5">
          {subsurfaceLayers.map((layer, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDepthLayer(idx)}
              className={`p-2 rounded-xl border text-left transition text-[11px] ${
                selectedDepthLayer === idx
                  ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200 font-semibold'
                  : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {layer.name.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Selected Layer Analysis */}
        <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-amber-300">
              {subsurfaceLayers[selectedDepthLayer].name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
              {subsurfaceLayers[selectedDepthLayer].dielectric}
            </span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            {subsurfaceLayers[selectedDepthLayer].scientificFact}
          </p>
          <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-900">
            <strong>Karakteristik Penetrasi:</strong> {subsurfaceLayers[selectedDepthLayer].penetration}
          </div>
        </div>
      </div>

      {/* NASA & Satellite Clarification Box */}
      <div className="bg-gradient-to-r from-slate-950 to-cyan-950/40 p-3.5 rounded-xl border border-cyan-500/30 text-xs space-y-2">
        <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
          <Satellite className="w-4 h-4 text-cyan-400" />
          <span>Fakta Ilmiah Satelit Penginderaan Jauh NASA & Geologi</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Satelit NASA (seperti SRTM, Landsat, dan Terra/ASTER) mengorbit pada ketinggian 400–700 kilometer di luar angkasa. Satelit ini memotret spektrum inframerah gelombang pendek (SWIR) untuk memetakan indeks alterasi batuan skala regional (kilometer), namun <strong>TIDAK DAPAT</strong> mendeteksi butiran emas terkubur secara mikro, artefak bawah tanah dari angkasa, ataupun entitas ghaib.
        </p>
        <p className="text-[10px] text-cyan-400 italic">
          Kajian mineralogi dan penemuan arkeologi nyata di bumi selalu membutuhkan kerja lapangan langsung, pengambilan sampel batuan, dan verifikasi laboratorium resmi.
        </p>
      </div>
    </div>
  );
};

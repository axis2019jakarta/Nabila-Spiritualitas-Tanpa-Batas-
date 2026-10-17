import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';
import { Layers, MapPin, Info, ArrowUpRight, Filter } from 'lucide-react';
import { MineralDensityStat } from '../types';

interface MineralDensityChartProps {
  latitude: number | null;
  longitude: number | null;
}

const ALL_MINERAL_STATS: MineralDensityStat[] = [
  {
    mineral: 'Platina (Pt)',
    density: 21.45,
    category: 'Logam Mulia Utama',
    color: '#e2e8f0',
    description: 'Logam mulia paling padat dan tahan korosi ekstrim di alam.',
  },
  {
    mineral: 'Emas Murni (Au)',
    density: 19.32,
    category: 'Logam Mulia Utama',
    color: '#f59e0b',
    description: 'Massa jenis sangat tinggi (19,32 g/cm³). Sesuai kitab Al-Biruni.',
  },
  {
    mineral: 'Raksa (Hg)',
    density: 13.53,
    category: 'Logam Transisi',
    color: '#94a3b8',
    description: 'Logam cair pada suhu kamar, sering digunakan keliru dalam penambangan.',
  },
  {
    mineral: 'Timbal (Pb)',
    density: 11.34,
    category: 'Logam Transisi',
    color: '#64748b',
    description: 'Logam berat beracun dengan massa jenis tinggi.',
  },
  {
    mineral: 'Perak (Ag)',
    density: 10.49,
    category: 'Logam Mulia Utama',
    color: '#cbd5e1',
    description: 'Logam mulia dengan konduktivitas listrik dan termal tertinggi.',
  },
  {
    mineral: 'Tembaga (Cu)',
    density: 8.96,
    category: 'Logam Transisi',
    color: '#ea580c',
    description: 'Sering berasosiasi dengan endapan tembaga-emas porfiri.',
  },
  {
    mineral: 'Besi Murni (Fe)',
    density: 7.87,
    category: 'Logam Transisi',
    color: '#64748b',
    description: 'Unsur logam feromagnetik utama di inti dan kerak bumi.',
  },
  {
    mineral: 'Pirit (FeS₂)',
    density: 5.01,
    category: 'Emas Semu / Sulfida',
    color: '#f43f5e',
    description: 'Fool\'s Gold: Kristal kubus berkilau namun hampir 4x lebih ringan dari emas!',
  },
  {
    mineral: 'Rata-rata Kerak Bumi',
    density: 2.70,
    category: 'Batuan Kerak',
    color: '#10b981',
    description: 'Kepadatan rata-rata litosfer batuan kerak bumi tempat kita berpijak.',
  },
  {
    mineral: 'Kuarsa (SiO₂)',
    density: 2.65,
    category: 'Batuan Kerak',
    color: '#38bdf8',
    description: 'Mineral pembentuk urat kuarsa hidrotermal pembawa butiran emas.',
  },
];

export const MineralDensityChart: React.FC<MineralDensityChartProps> = ({
  latitude,
  longitude,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredData =
    filterCategory === 'all'
      ? ALL_MINERAL_STATS
      : filterCategory === 'gold_pyrite'
      ? ALL_MINERAL_STATS.filter(
          (m) =>
            m.mineral.includes('Emas') ||
            m.mineral.includes('Pirit') ||
            m.mineral.includes('Kerak')
        )
      : ALL_MINERAL_STATS.filter((m) => m.category === filterCategory);

  // Determine regional geological zone from coordinates
  const isIndonesiaRegion =
    latitude !== null &&
    longitude !== null &&
    latitude >= -11.5 &&
    latitude <= 6.5 &&
    longitude >= 95.0 &&
    longitude <= 141.5;

  const geologicalZoneInfo = isIndonesiaRegion
    ? {
        zoneName: 'Jalur Busur Vulkanik Magmatik Nusantara (Ring of Fire)',
        tectonicSetting: 'Subduksi Lempeng Indo-Australia & Eurasia',
        mineralizationType: 'Endapan Hidrotermal Epitermal & Porfiri Kuarsa',
        scientificFact:
          'Zona geologis ini secara ilmiah memiliki potensi pembentukan urat kuarsa pembawa mineralisasi emas hidrotermal di kedalaman 500–2.000 meter di bawah permukaan bumi.',
      }
    : {
        zoneName: 'Litosfer Kerak Benua Global',
        tectonicSetting: 'Zona Kerak Benua Stabil (Continental Shield)',
        mineralizationType: 'Sedimentasi Aluvial & Batuan Kristalin Metamorf',
        scientificFact:
          'Kepadatan batuan rata-rata permukaan berkisar 2,65 – 2,75 g/cm³. Diperlukan pemetaan stratigrafi dan geofisika berlisensi untuk verifikasi bawah tanah.',
      };

  return (
    <div className="bg-slate-900/95 rounded-2xl p-4 border border-amber-500/30 space-y-4 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Visualisasi Statistik Kepadatan Mineral (Recharts)
            </h3>
            <p className="text-[10px] text-amber-300/80">
              Perbandingan Densitas Ilmiah (g/cm³) Terkait Lokasi Koordinat GPS
            </p>
          </div>
        </div>
      </div>

      {/* GPS Geological Context Card */}
      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-amber-300 flex items-center gap-1.5 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            Konteks Geologi Sesuai GPS Pengguna
          </span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
            {latitude !== null && longitude !== null
              ? `${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`
              : 'GPS Mode Referensi'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
          <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 block text-[10px]">Tatanan Tektonik:</span>
            <span className="text-slate-200 font-medium">{geologicalZoneInfo.zoneName}</span>
          </div>
          <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 block text-[10px]">Tipe Mineralisasi Bumi:</span>
            <span className="text-slate-200 font-medium">{geologicalZoneInfo.mineralizationType}</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 leading-relaxed pt-1">
          {geologicalZoneInfo.scientificFact}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
        <Filter className="w-3 h-3 text-slate-400 flex-shrink-0" />
        <button
          onClick={() => setFilterCategory('all')}
          className={`px-2.5 py-1 rounded-lg border whitespace-nowrap transition ${
            filterCategory === 'all'
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-medium'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Semua Mineral (10)
        </button>
        <button
          onClick={() => setFilterCategory('gold_pyrite')}
          className={`px-2.5 py-1 rounded-lg border whitespace-nowrap transition ${
            filterCategory === 'gold_pyrite'
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-medium'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Emas vs Pirit (Fokus)
        </button>
        <button
          onClick={() => setFilterCategory('Logam Mulia Utama')}
          className={`px-2.5 py-1 rounded-lg border whitespace-nowrap transition ${
            filterCategory === 'Logam Mulia Utama'
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-medium'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Hanya Logam Mulia
        </button>
      </div>

      {/* Recharts Bar Chart Container */}
      <div className="w-full h-64 bg-slate-950/90 p-2 rounded-xl border border-slate-800/90">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 24, bottom: 8 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 24]}
              stroke="#64748b"
              tick={{ fontSize: 10, fill: '#94a3b8' }}
              unit=" g/cm³"
            />
            <YAxis
              type="category"
              dataKey="mineral"
              stroke="#64748b"
              tick={{ fontSize: 10, fill: '#cbd5e1' }}
              width={85}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload as MineralDensityStat;
                  return (
                    <div className="bg-slate-900 border border-amber-500/40 p-2.5 rounded-xl shadow-xl text-xs space-y-1">
                      <p className="font-bold text-amber-300">{data.mineral}</p>
                      <p className="text-white font-mono">
                        Densitas: <strong>{data.density} g/cm³</strong>
                      </p>
                      <p className="text-[10px] text-slate-400">{data.description}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <ReferenceLine
              x={2.7}
              stroke="#10b981"
              strokeDasharray="3 3"
              label={{
                value: 'Kerak Bumi (2.7)',
                position: 'top',
                fill: '#10b981',
                fontSize: 9,
              }}
            />
            <ReferenceLine
              x={19.32}
              stroke="#f59e0b"
              strokeDasharray="2 2"
              label={{
                value: 'Emas (19.32)',
                position: 'top',
                fill: '#f59e0b',
                fontSize: 9,
              }}
            />
            <Bar dataKey="density" radius={[0, 6, 6, 0]}>
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend & Scientific Insights */}
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 bg-amber-950/20 rounded-lg border border-amber-500/30 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
          <span className="text-amber-200">
            <strong>Emas (19,32):</strong> 7,15x lipat lebih padat dari batuan kerak bumi rata-rata.
          </span>
        </div>
        <div className="p-2 bg-rose-950/20 rounded-lg border border-rose-500/30 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 flex-shrink-0" />
          <span className="text-rose-200">
            <strong>Pirit (5,01):</strong> Terbukti secara fisika hampir 4x lebih ringan dari emas asli.
          </span>
        </div>
      </div>
    </div>
  );
};

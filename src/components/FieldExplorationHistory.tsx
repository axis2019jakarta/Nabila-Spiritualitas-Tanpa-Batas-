import React, { useState, useEffect } from 'react';
import {
  History,
  Save,
  Trash2,
  MapPin,
  FileText,
  Calendar,
  Layers,
  Sparkles,
  Download,
} from 'lucide-react';
import { FieldLogEntry } from '../types';

interface FieldExplorationHistoryProps {
  currentLatitude: number | null;
  currentLongitude: number | null;
}

const DEFAULT_LOGS: FieldLogEntry[] = [
  {
    id: 'LOG-001',
    timestamp: '17 Okt 2026, 09:30 WIB',
    latitude: -6.2088,
    longitude: 106.8456,
    altitude: 28,
    geologicalZone: 'Cekungan Alluvial Pantai Utara Jawa',
    observationNotes:
      'Pengamatan sedimen lempung pasiran dan kuarsa aluvial. Tidak ada anomali magnetik ekstrem.',
    rockTypeObserved: 'Batupasir Kuarsa & Kerikil Vulkanik',
    studyReflection:
      'Merenungi keindahan ciptaan bumi dan membaca doa perlindungan pagi.',
  },
  {
    id: 'LOG-002',
    timestamp: '15 Okt 2026, 14:15 WIB',
    latitude: -6.6542,
    longitude: 106.5218,
    altitude: 450,
    geologicalZone: 'Zona Busur Magmatik Vulkanik Terobosan Kuarsa',
    observationNotes:
      'Singkapan batuan andesit teralterasi propilitik dengan urat kuarsa halus.',
    rockTypeObserved: 'Andesit Terkloritasi & Pirit Diseminasi',
    studyReflection:
      'Mengingat nasihat Al-Biruni: pirit berkilau namun ringan, berbeda nyata dari emas murni.',
  },
];

export const FieldExplorationHistory: React.FC<FieldExplorationHistoryProps> = ({
  currentLatitude,
  currentLongitude,
}) => {
  const [logs, setLogs] = useState<FieldLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem('nabila_exploration_logs');
      return saved ? JSON.parse(saved) : DEFAULT_LOGS;
    } catch {
      return DEFAULT_LOGS;
    }
  });

  const [notes, setNotes] = useState('');
  const [rockType, setRockType] = useState('Batupasir Aluvial');
  const [reflection, setReflection] = useState('Dzikir perlindungan & tadabbur alam');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('nabila_exploration_logs', JSON.stringify(logs));
    } catch (e) {
      console.error(e);
    }
  }, [logs]);

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: FieldLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }) + ' WIB',
      latitude: currentLatitude !== null ? parseFloat(currentLatitude.toFixed(6)) : -6.2088,
      longitude: currentLongitude !== null ? parseFloat(currentLongitude.toFixed(6)) : 106.8456,
      altitude: 25,
      geologicalZone: 'Zona Pengamatan Pengguna Aktif',
      observationNotes: notes || 'Pencatatan lapangan koordinat GPS dan kondisi geologis permukaan.',
      rockTypeObserved: rockType,
      studyReflection: reflection,
    };

    setLogs([newEntry, ...logs]);
    setNotes('');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDeleteLog = (id: string) => {
    if (confirm('Hapus catatan riwayat pengamatan ini?')) {
      setLogs(logs.filter((item) => item.id !== id));
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'riwayat_eksplorasi_nabila_ahmad.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Penyimpanan Riwayat Pengamatan Lapangan
              </h2>
              <p className="text-xs text-amber-300/80">
                Log Catatan Koordinat GPS, Pengamatan Batuan & Tadabbur Alam
              </p>
            </div>
          </div>
          <button
            onClick={handleExportJSON}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 text-xs flex items-center gap-1.5 transition"
            title="Ekspor Data Riwayat JSON"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Ekspor</span>
          </button>
        </div>
      </div>

      {/* Form Tambah Catatan Riwayat Baru */}
      <div className="bg-slate-900/95 rounded-2xl p-4 border border-amber-500/30 space-y-3 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Save className="w-4 h-4 text-amber-400" />
            Rekam Titik Pengamatan Baru
          </h3>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
            GPS: {currentLatitude !== null ? currentLatitude.toFixed(4) : '-6.2088'}°,{' '}
            {currentLongitude !== null ? currentLongitude.toFixed(4) : '106.8456'}°
          </span>
        </div>

        <form onSubmit={handleAddLog} className="space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 text-[11px] mb-1">
                Tipe Batuan / Karakteristik Fisik Diamati:
              </label>
              <select
                value={rockType}
                onChange={(e) => setRockType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500 font-medium"
              >
                <option value="Batupasir Aluvial & Kuarsa">Batupasir Aluvial & Kuarsa</option>
                <option value="Batuan Beku Andesit Vulkanik">Batuan Beku Andesit Vulkanik</option>
                <option value="Urat Kuarsa Terkristalisasi">Urat Kuarsa Terkristalisasi</option>
                <option value="Batuan Sedimen Lempung">Batuan Sedimen Lempung</option>
                <option value="Pirit Emas Semu (Fool's Gold)">Pirit Emas Semu (Fool's Gold)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 text-[11px] mb-1">
                Refleksi Hikmah / Dzikir Pengiring:
              </label>
              <input
                type="text"
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Contoh: Tadabbur ciptaan Allah & membaca Ayat Kursi"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-[11px] mb-1">
              Catatan Pengamatan Lapangan / Kondisi Sekitar:
            </label>
            <textarea
              rows={2}
              required
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tuliskan catatan kondisi topografi, tekstur tanah, atau keadaan geografis sekitar..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 active:scale-98 text-slate-950 font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            Simpan Catatan ke Memori Penyimpanan
          </button>

          {saveSuccess && (
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center text-xs text-emerald-300">
              Catatan pengamatan berhasil disimpan ke memori lokal peramban!
            </div>
          )}
        </form>
      </div>

      {/* Daftar Riwayat Tersimpan */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="font-semibold text-slate-300">
            Daftar Catatan Riwayat Lapangan ({logs.length})
          </span>
          <span className="font-mono text-[10px]">Tersimpan di Penyimpanan Lokal</span>
        </div>

        {logs.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2 text-xs"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {item.id} • {item.geologicalZone}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 font-mono">{item.timestamp}</span>
                <button
                  onClick={() => handleDeleteLog(item.id)}
                  className="p-1 hover:text-rose-400 text-slate-500 transition"
                  title="Hapus Catatan"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-mono">
              <div>Koordinat: {item.latitude}°, {item.longitude}°</div>
              <div>Ketinggian: {item.altitude} mdpl</div>
            </div>

            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 space-y-1">
              <span className="font-semibold text-slate-300 block text-[11px]">
                Batuan Diamati: <span className="text-cyan-300 font-normal">{item.rockTypeObserved}</span>
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {item.observationNotes}
              </p>
            </div>

            <div className="p-2 bg-emerald-500/5 rounded-lg border border-emerald-500/20 text-[11px] text-emerald-300 italic flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>{item.studyReflection}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

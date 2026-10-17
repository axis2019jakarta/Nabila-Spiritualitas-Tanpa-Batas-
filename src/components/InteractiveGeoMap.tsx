import React, { useState } from 'react';
import {
  MapPin,
  Layers,
  Landmark,
  Compass,
  Info,
  Shield,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { HERITAGE_MAP_SITES } from '../data/mapHeritageData';
import { HeritageSiteMapMarker } from '../types';

interface InteractiveGeoMapProps {
  userLatitude: number | null;
  userLongitude: number | null;
}

// Calculate distance in km using Haversine formula
function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export const InteractiveGeoMap: React.FC<InteractiveGeoMapProps> = ({
  userLatitude,
  userLongitude,
}) => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(HERITAGE_MAP_SITES[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredSites =
    filterCategory === 'all'
      ? HERITAGE_MAP_SITES
      : HERITAGE_MAP_SITES.filter((s) => s.category === filterCategory);

  const selectedSite =
    HERITAGE_MAP_SITES.find((s) => s.id === selectedSiteId) || HERITAGE_MAP_SITES[0];

  const userLat = userLatitude ?? -6.2088;
  const userLon = userLongitude ?? 106.8456;

  const distanceToSelected = calculateDistanceKm(
    userLat,
    userLon,
    selectedSite.latitude,
    selectedSite.longitude
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Peta Informasi Geologi & Cagar Budaya
            </h2>
            <p className="text-xs text-amber-300/80">
              Detail Stratigrafi Kedalaman, Ciri Lapisan, Artefak & Sejarah Realistis
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
        <button
          onClick={() => setFilterCategory('all')}
          className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition ${
            filterCategory === 'all'
              ? 'bg-amber-500/20 border-amber-500/60 text-amber-200 font-semibold'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Semua Titik Situs ({HERITAGE_MAP_SITES.length})
        </button>
        <button
          onClick={() => setFilterCategory('Situs Cagar Budaya')}
          className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition ${
            filterCategory === 'Situs Cagar Budaya'
              ? 'bg-amber-500/20 border-amber-500/60 text-amber-200 font-semibold'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Cagar Budaya
        </button>
        <button
          onClick={() => setFilterCategory('Zona Formasi Geologis')}
          className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition ${
            filterCategory === 'Zona Formasi Geologis'
              ? 'bg-amber-500/20 border-amber-500/60 text-amber-200 font-semibold'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Formasi Geologi Emas
        </button>
      </div>

      {/* Interactive Map Visual Representation */}
      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 relative overflow-hidden shadow-inner">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2 border-b border-slate-900 pb-1.5">
          <span className="font-mono text-[10px] text-amber-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            RADAR PETA INDONESIA & SABUK VULKANIK
          </span>
          <span className="text-[10px] font-mono">
            GPS SAYA: {userLat.toFixed(2)}°, {userLon.toFixed(2)}°
          </span>
        </div>

        {/* Simplified Archipelago Map Canvas */}
        <div className="relative w-full h-44 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl border border-slate-800/80 p-2 flex items-center justify-center">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-15 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-amber-500/30" />
            ))}
          </div>

          {/* SVG Map of Indonesia Island Ridges */}
          <svg
            viewBox="95 -11 46 18"
            className="w-full h-full stroke-slate-700/60 fill-slate-800/40"
          >
            {/* Sumatera Arc */}
            <path
              d="M 95.3 5.5 L 98.6 2.8 L 102.5 -0.5 L 105.8 -4.8 L 104.5 -5.2 L 97.2 2.1 Z"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="0.25"
            />
            {/* Jawa Arc */}
            <path
              d="M 106.0 -6.0 L 108.5 -6.8 L 112.5 -7.8 L 114.5 -8.2 L 113.8 -7.5 L 106.8 -5.8 Z"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="0.25"
            />
            {/* Kalimantan Arc */}
            <path
              d="M 109.0 4.0 L 117.0 4.2 L 117.5 -3.5 L 111.0 -3.0 Z"
              fill="#0f172a"
              stroke="#1e293b"
              strokeWidth="0.25"
            />
            {/* Sulawesi Arc */}
            <path
              d="M 119.5 1.5 L 124.5 1.2 L 122.5 -5.5 L 120.0 -4.5 Z"
              fill="#0f172a"
              stroke="#1e293b"
              strokeWidth="0.25"
            />
          </svg>

          {/* User's GPS Location Marker Pin */}
          <div
            className="absolute z-20 flex flex-col items-center pointer-events-none"
            style={{
              left: `${Math.min(90, Math.max(10, ((userLon - 95) / 46) * 100))}%`,
              top: `${Math.min(85, Math.max(15, ((-userLat + 6) / 18) * 100))}%`,
            }}
          >
            <span className="w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-500/30 animate-pulse" />
            <span className="text-[8px] bg-cyan-950 text-cyan-200 px-1 rounded font-mono font-bold mt-0.5">
              Posisi Saya
            </span>
          </div>

          {/* Map Site Markers */}
          {filteredSites.map((site) => {
            const isSelected = site.id === selectedSiteId;
            const leftPct = Math.min(92, Math.max(8, ((site.longitude - 95) / 46) * 100));
            const topPct = Math.min(88, Math.max(12, ((-site.latitude + 6) / 18) * 100));

            return (
              <button
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group transition-transform active:scale-95"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                }}
              >
                <div
                  className={`flex flex-col items-center ${
                    isSelected ? 'scale-125 z-30' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 drop-shadow-md ${
                      isSelected
                        ? 'text-amber-400 fill-amber-400'
                        : site.category === 'Zona Formasi Geologis'
                        ? 'text-rose-400 fill-rose-400/40'
                        : 'text-amber-300 fill-amber-300/40'
                    }`}
                  />
                  <span
                    className={`text-[8px] px-1 py-0.2 rounded font-mono whitespace-nowrap shadow ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-900/90 text-slate-300'
                    }`}
                  >
                    {site.name.split(' ')[0]} {site.name.split(' ')[1] || ''}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Site Selector Cards */}
      <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
        {filteredSites.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedSiteId(s.id)}
            className={`p-2 rounded-xl border whitespace-nowrap text-left transition flex-shrink-0 ${
              selectedSiteId === s.id
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-200'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="font-semibold block text-[11px]">{s.name}</span>
            <span className="text-[10px] text-slate-400 block">{s.province}</span>
          </button>
        ))}
      </div>

      {/* Selected Site Detailed Information Sheet */}
      <div className="bg-slate-900/95 rounded-2xl p-4 border border-amber-500/30 space-y-3.5 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div>
            <h3 className="text-sm font-bold text-amber-300">{selectedSite.name}</h3>
            <span className="text-[11px] text-slate-400">
              {selectedSite.province} • {selectedSite.category}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block">Jarak dari GPS Saya:</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              ± {distanceToSelected.toLocaleString('id-ID')} km
            </span>
          </div>
        </div>

        {/* Detailed Answers to user questions */}
        <div className="space-y-2.5 text-xs">
          {/* Kedalaman Berapa */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 block mb-0.5 text-[11px]">
              1. Kedalaman Berapa (Stratigrafi Geologi):
            </span>
            <p className="text-slate-200 text-[11px] leading-relaxed">
              {selectedSite.estimatedDepth}
            </p>
          </div>

          {/* Bagaimana Tandanya */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 block mb-0.5 text-[11px]">
              2. Bagaimana Tanda-Tandanya di Lapisan Bumi:
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {selectedSite.stratigraphySigns}
            </p>
          </div>

          {/* Bendanya Apa */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-emerald-300 block mb-0.5 text-[11px]">
              3. Bendanya Apa yang Ditemukan Para Peneliti:
            </span>
            <p className="text-slate-200 text-[11px] leading-relaxed">
              {selectedSite.artifactFound}
            </p>
          </div>

          {/* Sejarahnya Bagaimana */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-200 block mb-0.5 text-[11px]">
              4. Sejarah Peradaban & Kajian Ilmiah:
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {selectedSite.historicalContext}
            </p>
            <p className="text-slate-400 text-[10px] pt-1">
              <strong>Uji Ilmiah:</strong> {selectedSite.scientificAnalysis}
            </p>
          </div>

          {/* Apa yang Didapatkan & Status Hukum */}
          <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/30 text-emerald-200 space-y-1">
            <span className="font-bold block text-[11px] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              5. Apa yang Didapatkan & Status Hukum Resmi:
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Hasil penelitian memberikan data primer peradaban, nilai sejarah luhur bangsa, dan perlindungan penuh negara di bawah <strong>{selectedSite.officialStatus}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

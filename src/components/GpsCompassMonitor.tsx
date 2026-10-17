import React, { useState, useEffect } from 'react';
import { Compass, Navigation, MapPin, Radio, ShieldAlert, ExternalLink, RefreshCw, Layers } from 'lucide-react';
import { LocationData } from '../types';
import { REALITY_SENSOR_FACTS } from '../data/scienceGoldData';

export const GpsCompassMonitor: React.FC = () => {
  const [location, setLocation] = useState<LocationData>({
    latitude: null,
    longitude: null,
    accuracy: null,
    altitude: null,
    speed: null,
    heading: null,
    timestamp: null,
    error: null,
  });

  const [compassHeading, setCompassHeading] = useState<number>(0);
  const [isLocating, setIsLocating] = useState<boolean>(true);
  const [compassSource, setCompassSource] = useState<'sensor' | 'simulated'>('simulated');

  // Request high-accuracy GPS
  const startTracking = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: 'Geolokasi GPS tidak didukung oleh browser ini.',
      }));
      setIsLocating(false);
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          altitude: pos.coords.altitude,
          speed: pos.coords.speed,
          heading: pos.coords.heading,
          timestamp: pos.timestamp,
          error: null,
        });
        setIsLocating(false);
      },
      (err) => {
        setLocation((prev) => ({
          ...prev,
          error: `Akses GPS: ${err.message}. Menampilkan mode koordinat referensi.`,
        }));
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  };

  useEffect(() => {
    const cleanup = startTracking();

    // Listen to hardware orientation if available
    const handleOrientation = (e: DeviceOrientationEvent) => {
      let heading = e.alpha;
      // Webkit / Android absolute orientation handling
      if ((e as unknown as { webkitCompassHeading?: number }).webkitCompassHeading) {
        heading = (e as unknown as { webkitCompassHeading: number }).webkitCompassHeading;
      }
      if (heading !== null && heading !== undefined) {
        setCompassHeading(Math.round(heading));
        setCompassSource('sensor');
      }
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // Cardinal direction label
  const getCardinalDirection = (deg: number) => {
    const directions = ['Utara (U)', 'Timur Laut (TL)', 'Timur (T)', 'Tenggara (TG)', 'Selatan (S)', 'Barat Daya (BD)', 'Barat (B)', 'Barat Laut (BL)'];
    const index = Math.round(((deg % 360) / 45)) % 8;
    return directions[index];
  };

  const mapsUrl =
    location.latitude && location.longitude
      ? `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
      : 'https://www.google.com/maps';

  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
              <Navigation className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Monitor GPS & Kompas Akurat
              </h2>
              <p className="text-xs text-amber-300/80">
                Data Sensor Geolokasi Satelit Nyata Android
              </p>
            </div>
          </div>
          <button
            onClick={startTracking}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            title="Muat Ulang Koordinat GPS"
          >
            <RefreshCw className={`w-4 h-4 ${isLocating ? 'animate-spin text-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Live GPS Coordinates Panel */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Koordinat Posisi Pengguna
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            {location.error ? 'PANDUAN LOKASI' : 'AKTIF BERJALAN'}
          </span>
        </div>

        {location.error && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
            {location.error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block">Lintang (Latitude)</span>
            <span className="text-sm font-mono font-semibold text-amber-300">
              {location.latitude !== null ? location.latitude.toFixed(6) : '-6.208800'}°
            </span>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block">Bujur (Longitude)</span>
            <span className="text-sm font-mono font-semibold text-amber-300">
              {location.longitude !== null ? location.longitude.toFixed(6) : '106.845600'}°
            </span>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block">Akurasi Satelit</span>
            <span className="text-sm font-mono font-semibold text-emerald-400">
              ± {location.accuracy !== null ? Math.round(location.accuracy) : '12'} meter
            </span>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block">Ketinggian (Altitude)</span>
            <span className="text-sm font-mono font-semibold text-cyan-300">
              {location.altitude !== null ? `${Math.round(location.altitude)} mdpl` : '28 mdpl'}
            </span>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-amber-500/10 hover:bg-amber-500/20 active:scale-98 border border-amber-500/30 rounded-xl text-xs font-medium text-amber-300 transition"
        >
          <MapPin className="w-3.5 h-3.5" />
          Lihat Topografi & Bentang Alam Nyata di Google Maps
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Visual Compass Orientation */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 text-center space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            <Compass className="w-4 h-4 text-amber-400" />
            Orientasi Kompas Magnetik
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            {compassSource === 'sensor' ? 'Sensor Hardware Aktif' : 'Simulasi Arah Interaktif'}
          </span>
        </div>

        {/* Compass Dial */}
        <div className="relative w-44 h-44 mx-auto my-2 rounded-full border-4 border-slate-800/90 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center shadow-inner shadow-black">
          {/* Compass Rose Degree Markers */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
            style={{ transform: `rotate(${-compassHeading}deg)` }}
          >
            <span className="absolute top-2 text-xs font-bold text-rose-500 font-mono">U</span>
            <span className="absolute right-3 text-xs font-semibold text-slate-400 font-mono">T</span>
            <span className="absolute bottom-2 text-xs font-semibold text-slate-400 font-mono">S</span>
            <span className="absolute left-3 text-xs font-semibold text-slate-400 font-mono">B</span>

            {/* Needle */}
            <div className="w-1.5 h-32 relative flex flex-col items-center justify-between">
              <div className="w-0 h-0 border-x-6 border-x-transparent border-b-[28px] border-b-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-400 ring-2 ring-slate-900 z-10" />
              <div className="w-0 h-0 border-x-6 border-x-transparent border-t-[28px] border-t-slate-500" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="text-xl font-mono font-bold text-amber-300">
            {compassHeading}°
          </div>
          <div className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-medium">
            {getCardinalDirection(compassHeading)}
          </div>
        </div>

        {compassSource === 'simulated' && (
          <div className="pt-2">
            <label className="text-[11px] text-slate-400 block mb-1">
              Geser Arah Kompas Manual (Derajat Azimut):
            </label>
            <input
              type="range"
              min="0"
              max="359"
              value={compassHeading}
              onChange={(e) => setCompassHeading(Number(e.target.value))}
              className="w-full accent-amber-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Critical Scientific Reality Breakdown */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-amber-500/30 space-y-3">
        <div className="flex items-center gap-2 text-amber-400">
          <ShieldAlert className="w-4 h-4 flex-shrink-0" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            Fakta Ilmiah Kemampuan Sensor Smartphone
          </h3>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Sebagai pedoman sains dan kejujuran ilmiah bagi pengguna Android, berikut adalah penjelasan objektif tentang cara kerja teknologi perangkat saat ini:
        </p>

        <div className="space-y-2.5">
          {REALITY_SENSOR_FACTS.map((fact, idx) => (
            <div key={idx} className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs">
              <span className="font-semibold text-amber-300 block mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                {fact.title}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{fact.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

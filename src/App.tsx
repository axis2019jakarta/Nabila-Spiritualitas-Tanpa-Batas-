import React, { useState, useEffect } from 'react';
import {
  Navigation,
  Sparkles,
  Landmark,
  BookOpen,
  Heart,
  Wallet,
  BookMarked,
  Share2,
} from 'lucide-react';
import { ActiveTab, LocationData } from './types';
import { AndroidFrame } from './components/AndroidFrame';
import { RunningBanner } from './components/RunningBanner';
import { GpsCompassMonitor } from './components/GpsCompassMonitor';
import { GoldGeologyStudio } from './components/GoldGeologyStudio';
import { RelicsHistoryStudio } from './components/RelicsHistoryStudio';
import { WisdomSpiritualityStudio } from './components/WisdomSpiritualityStudio';
import { GroundingPeaceStudio } from './components/GroundingPeaceStudio';
import { DonationDeveloperStudio } from './components/DonationDeveloperStudio';
import { ComprehensiveUserManual } from './components/ComprehensiveUserManual';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('gps-monitor');
  const [coords, setCoords] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });

  // Track GPS in parent so both GpsCompassMonitor and GoldGeologyStudio have coordinates
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        () => {
          // Default reference coords (Indonesia centroid)
          setCoords({
            latitude: -6.2088,
            longitude: 106.8456,
          });
        },
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const tabLabels: Record<ActiveTab, string> = {
    'gps-monitor': 'GPS & Kompas Real-Time',
    'gold-geology': 'Studio Sains Geologi Emas',
    'archaeology': 'Studio Arkeologi & Sejarah',
    'spiritual-wisdom': 'Kajian Ulama & Hakikat Ghaib',
    'grounding-peace': 'Ruang Ketenangan Batin',
    'donation-developer': 'Donasi & Profil Developer',
    'user-manual': 'Buku Panduan Lengkap',
  };

  const navItems = [
    {
      id: 'gps-monitor' as ActiveTab,
      label: 'GPS & Arah',
      icon: Navigation,
    },
    {
      id: 'gold-geology' as ActiveTab,
      label: 'Sains Emas',
      icon: Sparkles,
    },
    {
      id: 'archaeology' as ActiveTab,
      label: 'Arkeologi',
      icon: Landmark,
    },
    {
      id: 'spiritual-wisdom' as ActiveTab,
      label: 'Kajian Ulama',
      icon: BookOpen,
    },
    {
      id: 'grounding-peace' as ActiveTab,
      label: 'Ketenangan',
      icon: Heart,
    },
    {
      id: 'donation-developer' as ActiveTab,
      label: 'Donasi',
      icon: Wallet,
    },
    {
      id: 'user-manual' as ActiveTab,
      label: 'Panduan',
      icon: BookMarked,
    },
  ];

  return (
    <AndroidFrame activeTabTitle={tabLabels[activeTab]}>
      {/* Running Marquee Banner Welcome & Features */}
      <RunningBanner />

      {/* Main Dynamic Content Area */}
      <div className="space-y-4 pt-2">
        {activeTab === 'gps-monitor' && <GpsCompassMonitor />}
        {activeTab === 'gold-geology' && (
          <GoldGeologyStudio latitude={coords.latitude} longitude={coords.longitude} />
        )}
        {activeTab === 'archaeology' && <RelicsHistoryStudio />}
        {activeTab === 'spiritual-wisdom' && <WisdomSpiritualityStudio />}
        {activeTab === 'grounding-peace' && <GroundingPeaceStudio />}
        {activeTab === 'donation-developer' && <DonationDeveloperStudio />}
        {activeTab === 'user-manual' && <ComprehensiveUserManual />}
      </div>

      {/* Android Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 px-1.5 py-1.5 flex items-center justify-between z-30 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all ${
                isActive
                  ? 'text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 scale-110 shadow-sm'
                    : 'text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] mt-0.5 tracking-tight truncate max-w-[48px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </AndroidFrame>
  );
}

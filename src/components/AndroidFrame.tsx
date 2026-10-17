import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Battery, Wifi, Signal } from 'lucide-react';

interface AndroidFrameProps {
  children: React.ReactNode;
  activeTabTitle: string;
}

export const AndroidFrame: React.FC<AndroidFrameProps> = ({ children, activeTabTitle }) => {
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Check if on mobile screen already
    const isMobileDevice = window.innerWidth <= 768;
    setIsPhoneFrame(!isMobileDevice); // Default to frame on large screens, native on phone

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start text-slate-100 selection:bg-amber-500/30">
      {/* Top utility bar for desktop/tablet users to switch view */}
      <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between z-30 sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400/50" />
          <h1 className="text-sm font-semibold tracking-wide text-amber-200">
            Nabila Ahmad Spiritualitas Tanpa Batas
          </h1>
          <span className="hidden sm:inline-block text-xs bg-amber-950/70 border border-amber-600/40 text-amber-300 px-2 py-0.5 rounded-full font-mono">
            Edisi Android Khusus
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPhoneFrame(!isPhoneFrame)}
            className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700 transition"
            title="Ganti Mode Tampilan Layar Android"
          >
            {isPhoneFrame ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Layar Penuh</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Bingkai Android</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Body: Either inside an Android Frame or Full Mobile Width */}
      <main
        className={`w-full flex justify-center py-0 ${
          isPhoneFrame ? 'sm:py-6 sm:px-4' : ''
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            isPhoneFrame
              ? 'max-w-[420px] rounded-[42px] border-[10px] border-slate-800/90 shadow-2xl shadow-amber-900/20 bg-slate-950 overflow-hidden relative ring-1 ring-slate-700/60'
              : 'max-w-2xl bg-slate-950 min-h-screen'
          }`}
        >
          {/* Android Status Bar Simulation */}
          <div className="w-full bg-slate-950/95 backdrop-blur-md px-5 pt-3 pb-2 flex items-center justify-between text-xs text-slate-400 border-b border-slate-900 sticky top-0 z-20 select-none">
            <div className="font-medium text-slate-200 tracking-tight text-xs flex items-center gap-1.5">
              <span>{currentTime || '09:56'}</span>
              <span className="text-[10px] text-amber-400 font-mono">● 5G</span>
            </div>

            {/* Android Camera Notch Dot */}
            <div className="w-3.5 h-3.5 bg-black rounded-full ring-2 ring-slate-800/80 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Wifi className="w-3.5 h-3.5" />
              <Signal className="w-3.5 h-3.5" />
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-400">98%</span>
                <Battery className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
              </div>
            </div>
          </div>

          {/* Subheader / Active Section Bar */}
          <div className="px-4 py-2.5 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border-b border-slate-800/60 flex items-center justify-between">
            <div className="text-xs font-medium text-amber-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{activeTabTitle}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              GPS SATELLITE: ACTIVE
            </span>
          </div>

          {/* Dynamic Content */}
          <div className="p-3 sm:p-4 pb-28">{children}</div>

          {/* Android Navigation Pill Bar at bottom */}
          <div className="w-full py-2 flex justify-center bg-slate-950/90 backdrop-blur sticky bottom-0 z-10 pointer-events-none">
            <div className="w-32 h-1 bg-slate-600/60 rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Heart,
  Bell,
  X,
  Volume2,
  CheckCircle,
  HelpCircle,
  Shield,
  Coffee,
  Eye,
  MessageCircle,
} from 'lucide-react';
import { ActiveTab } from '../types';

interface EducationalCompanionBubbleProps {
  onNavigateTab: (tab: ActiveTab) => void;
}

const COMPANION_MESSAGES = [
  {
    topic: 'Ketenangan Jiwa & Kesejahteraan',
    icon: Heart,
    text: 'Assalamu’alaikum! Jangan lupa istirahatkan mata sejenak, rilekskan bahu, dan tarik napas dalam-dalam. Kedamaian hatimu adalah hal yang paling berharga.',
    suggestedAction: 'Latihan Grounding 5-4-3-2-1',
    targetTab: 'grounding-peace' as ActiveTab,
  },
  {
    topic: 'Edukasi Sains Geologi',
    icon: Sparkles,
    text: 'Tahukah kamu? Abu Rayhan Al-Biruni pada abad ke-11 membuktikan bahwa emas asli dan pirit semu dapat dibedakan dengan neraca air secara ilmiah.',
    suggestedAction: 'Buka Studio Rumus Al-Biruni',
    targetTab: 'scientific-formulas' as ActiveTab,
  },
  {
    topic: 'Peringatan Kesehatan & Hidrasi',
    icon: Coffee,
    text: 'Pengingat Rehat: Sudah cukup minum air putih hari ini? Menjaga tubuh tetap bugar dan terhidrasi membantu pikiran tetap jernih dan segar.',
    suggestedAction: 'Tadabbur & Dzikir Harian',
    targetTab: 'spiritual-wisdom' as ActiveTab,
  },
  {
    topic: 'Integritas Akidah & Sains',
    icon: Shield,
    text: 'Ingatlah selalu, sensor gadget hanya membaca sinyal satelit di angkasa. Alam ghaib adalah rahasia Allah, bentengi jiwamu dengan dzikir ma’tsurat shahih.',
    suggestedAction: 'Lihat Doa Perlindungan Diri',
    targetTab: 'spiritual-wisdom' as ActiveTab,
  },
];

export const EducationalCompanionBubble: React.FC<EducationalCompanionBubbleProps> = ({
  onNavigateTab,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [hasNotification, setHasNotification] = useState(true);

  // Periodic notification alert rotation every 45 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % COMPANION_MESSAGES.length);
      setHasNotification(true);
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  const activeMsg = COMPANION_MESSAGES[messageIndex];
  const Icon = activeMsg.icon;

  return (
    <div className="fixed bottom-16 right-4 sm:right-8 z-40 flex flex-col items-end">
      {/* Expanded Dialogue Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-xl border border-amber-500/50 rounded-2xl shadow-2xl p-4 text-xs space-y-3 animate-fade-in text-slate-100 ring-1 ring-amber-500/20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              {/* Avatar circle */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-300 to-amber-200 ring-2 ring-amber-400 p-0.5 flex items-center justify-center shadow-md">
                <span className="text-[10px] font-bold text-slate-950 font-serif">NA</span>
              </div>
              <div>
                <span className="font-bold text-amber-200 block text-xs">
                  Nabila (Pendamping Hikmah)
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Edukator Sains & Ketenangan
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeMsg.topic}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {activeMsg.text}
            </p>
          </div>

          <button
            onClick={() => {
              onNavigateTab(activeMsg.targetTab);
              setIsOpen(false);
            }}
            className="w-full py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition"
          >
            {activeMsg.suggestedAction}
          </button>

          <div className="text-[10px] text-slate-400 italic text-center pt-1 border-t border-slate-900">
            "Jika Anda merasa lelah atau cemas, luangkan waktu bercerita dengan orang terdekat."
          </div>
        </div>
      )}

      {/* Floating Avatar Bubble Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNotification(false);
        }}
        className="group relative flex items-center justify-center active:scale-95 transition-transform"
        title="Buka Pendamping Edukasi Nabila"
      >
        {/* Glowing pulse rings */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-rose-400 to-amber-600 opacity-70 blur-sm group-hover:opacity-100 transition animate-pulse" />

        {/* Realistic Avatar Graphic */}
        <div className="relative w-12 h-12 rounded-full bg-slate-950 ring-2 ring-amber-400 shadow-xl overflow-hidden flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-tr from-amber-950 via-slate-900 to-amber-900 flex items-center justify-center">
            {/* Elegant stylized avatar silhouette */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-gradient-to-b from-amber-200 to-amber-300 ring-1 ring-amber-100/50 shadow" />
              <div className="w-7 h-4 rounded-t-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 mt-0.5" />
            </div>
          </div>
        </div>

        {/* Notification Alert Badge */}
        {hasNotification && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-slate-950 animate-bounce">
            !
          </span>
        )}
      </button>
    </div>
  );
};

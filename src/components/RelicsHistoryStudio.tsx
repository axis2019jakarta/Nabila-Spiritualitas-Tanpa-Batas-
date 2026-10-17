import React, { useState } from 'react';
import { Landmark, Scroll, Compass, Shield, BookCheck, History, Info } from 'lucide-react';
import { RELIC_DISCOVERIES, ARCHAEOLOGY_METHODS } from '../data/archaeologyData';

export const RelicsHistoryStudio: React.FC = () => {
  const [selectedRelicId, setSelectedRelicId] = useState<string>(RELIC_DISCOVERIES[0].id);

  const selectedRelic =
    RELIC_DISCOVERIES.find((r) => r.id === selectedRelicId) || RELIC_DISCOVERIES[0];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 p-4 rounded-2xl border border-amber-500/20">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/30">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Studio Sejarah & Khazanah Arkeologi
            </h2>
            <p className="text-xs text-amber-300/80">
              Kajian Peninggalan Peradaban Masa Lampau & Metode Ekskavasi Ilmiah
            </p>
          </div>
        </div>
      </div>

      {/* Relic Selector Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
        {RELIC_DISCOVERIES.map((relic) => (
          <button
            key={relic.id}
            onClick={() => setSelectedRelicId(relic.id)}
            className={`px-3 py-2 rounded-xl border whitespace-nowrap font-medium transition ${
              selectedRelicId === relic.id
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-200'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {relic.title.split(' ')[0]} {relic.title.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* Selected Relic Details */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
            <Scroll className="w-4 h-4 text-amber-400" />
            {selectedRelic.title}
          </h3>
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 font-mono">
            {selectedRelic.period}
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block mb-0.5">Perkiraan Usia Sejarah</span>
            <span className="text-amber-200 font-semibold">{selectedRelic.estimatedAge}</span>
          </div>

          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block mb-0.5">Konteks Sejarah & Peradaban</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">{selectedRelic.historicalContext}</p>
          </div>

          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 text-[11px] block mb-0.5">Metode Identifikasi Arkeologis Nyata</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">{selectedRelic.archaeologicalMethod}</p>
          </div>

          <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/30 text-emerald-200">
            <span className="font-semibold block mb-0.5 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Etika & Hukum Pelestarian Cagar Budaya
            </span>
            <p className="text-[11px] leading-relaxed">{selectedRelic.protectionEthic}</p>
          </div>
        </div>
      </div>

      {/* Ibnu Khaldun: Critique of Treasure Hunting in Muqaddimah */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-amber-300 border-b border-slate-800 pb-2">
          <History className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            Kritik Ibnu Khaldun: Ilusi Harta Karun (Kitab Muqaddimah)
          </h3>
        </div>

        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-2">
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Dalam mahakaryanya <em>Al-Muqaddimah</em>, pakar sosiologi dan sejarawan dunia Islam <strong>Ibnu Khaldun</strong> secara khusus mengkritik fenomena masyarakat yang terobsesi mencari harta karun peninggalan purba dengan cara-cara mistik:
          </p>

          <div className="p-2.5 bg-amber-500/10 border-l-2 border-amber-500 rounded-r-lg text-amber-200 text-[11px] italic leading-relaxed">
            "Harta benda bangsa-bangsa terdahulu terkubur akibat runtuhnya bangunan, timbunan debu, banjir, dan pergeseran tanah sepanjang ribuan tahun, bukan karena jimat atau perlindungan jin. Mengandalkan keajaiban tanpa kerja nyata adalah tanda hilangnya akal budi produktif."
          </div>

          <p className="text-slate-400 text-[10px]">
            Ibnu Khaldun mengajarkan bahwa peninggalan sejarah hendaknya dipelajari sebagai hikmah peradaban (ibrah), bukan untuk memuaskan keserakahan duniawi.
          </p>
        </div>
      </div>

      {/* Modern Archaeological Scientific Methods */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-slate-200 border-b border-slate-800 pb-2">
          <BookCheck className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            Metodologi Sains Ekskavasi & Penanggalan Modern
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs">
          {ARCHAEOLOGY_METHODS.map((method, idx) => (
            <div key={idx} className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <span className="font-semibold text-cyan-300 block mb-0.5">{method.name}</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Law and Heritage Notice */}
      <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
        <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed">
          Di Indonesia, perlindungan peninggalan bersejarah diatur ketat dalam Undang-Undang No. 11 Tahun 2010 tentang Cagar Budaya. Setiap benda cagar budaya milik bangsa dilindungi dan dilarang dirusak atau diperjualbelikan secara ilegal.
        </p>
      </div>
    </div>
  );
};

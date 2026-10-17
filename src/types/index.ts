/**
 * Types for Nabila Ahmad Spiritualitas Tanpa Batas application
 */

export type ActiveTab = 
  | 'gps-monitor' 
  | 'gold-geology' 
  | 'archaeology' 
  | 'spiritual-wisdom' 
  | 'grounding-peace'
  | 'donation-developer'
  | 'user-manual';

export interface LocationData {
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  altitude: number | null;
  speed: number | null;
  heading: number | null;
  timestamp: number | null;
  error?: string | null;
}

export interface ScholarInsight {
  id: string;
  scholarName: string;
  era: string;
  bookTitle: string;
  topic: string;
  summary: string;
  detailedAnalysis: string;
  scientificRelevance: string;
  coreQuotes: string[];
}

export interface MineralProperty {
  name: string;
  scientificFormula: string;
  density: string;
  hardnessMohs: string;
  colorStreak: string;
  magneticResponse: string;
  scientificDetectionMethod: string;
  historicalRecord: string;
  scholarReference: string;
  distinguishingFeatures: string[];
}

export interface RelicDiscovery {
  id: string;
  title: string;
  period: string;
  estimatedAge: string;
  archaeologicalMethod: string;
  scientificSignificance: string;
  historicalContext: string;
  protectionEthic: string;
}

export interface DzikirItem {
  id: string;
  title: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  source: string;
  benefit: string;
  recommendedCount: number;
}

export interface MineralDensityStat {
  mineral: string;
  density: number; // in g/cm³
  category: 'Logam Mulia Utama' | 'Logam Transisi' | 'Emas Semu / Sulfida' | 'Batuan Kerak';
  color: string;
  description: string;
}

export interface DonationRecord {
  id: string;
  donorName: string;
  amount: string;
  walletType: 'GOPAY' | 'DANA';
  transactionId: string;
  notes: string;
  submittedAt: string;
  status: 'Terkonfirmasi' | 'Sedang Diverifikasi';
}

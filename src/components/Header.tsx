import React from 'react';
import { Flame, Clock, CheckCircle2, MessageSquareCode, Award } from 'lucide-react';
import { UserProgress } from '../types/growth';

interface HeaderProps {
  progress: UserProgress;
  onOpenAiMentor: () => void;
  activeView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  onOpenAiMentor,
  activeView,
  onNavigate,
}) => {
  const completedCount = progress.completedDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3.5 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              30 Days to Growth Marketer
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              · Ngô Ngọc Lâm
            </span>
          </div>
          <p className="text-xs text-slate-400 hidden md:block">
            From Brand & Communication → Growth Marketing · IVIE Capstone
          </p>
        </button>
      </div>

      {/* Zone 2: Fast Navigation Text Links */}
      <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeView === 'dashboard' ? 'text-emerald-400 font-semibold' : ''
          }`}
        >
          Tổng quan
        </button>
        <button
          onClick={() => onNavigate('curriculum')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeView === 'curriculum' ? 'text-emerald-400 font-semibold' : ''
          }`}
        >
          Lộ trình 30 ngày
        </button>
        <button
          onClick={() => onNavigate('experiment-lab')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeView === 'experiment-lab' ? 'text-emerald-400 font-semibold' : ''
          }`}
        >
          Experiment Lab
        </button>
        <button
          onClick={() => onNavigate('analytics')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeView === 'analytics' ? 'text-emerald-400 font-semibold' : ''
          }`}
        >
          Analytics & Phễu
        </button>
        <button
          onClick={() => onNavigate('portfolio')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeView === 'portfolio' ? 'text-emerald-400 font-semibold' : ''
          }`}
        >
          Case Study IVIE
        </button>
        <button
          onClick={() => onNavigate('interview-prep')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeView === 'interview-prep' ? 'text-emerald-400 font-semibold' : ''
          }`}
        >
          50 Câu Phỏng vấn
        </button>
      </nav>

      {/* Zone 3: Stats & AI Mentor Trigger */}
      <div className="flex items-center gap-3">
        {/* Streak & Stats */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/60">
          <div className="flex items-center gap-1.5 text-amber-400" title="Daily Learning Streak">
            <Flame className="w-3.5 h-3.5 fill-amber-400/20 text-amber-400" />
            <span className="font-semibold tabular-nums">{progress.streak} ngày streak</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1.5 text-emerald-400" title="Hoàn thành 30 ngày">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold tabular-nums">{completedCount}/30 ngày ({progressPercent}%)</span>
          </div>
        </div>

        {/* AI Mentor Button */}
        <button
          onClick={onOpenAiMentor}
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
        >
          <MessageSquareCode className="w-4 h-4" />
          <span>Lâm's Growth Mentor</span>
        </button>
      </div>
    </header>
  );
};

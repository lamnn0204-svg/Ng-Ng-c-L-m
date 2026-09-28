import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  FlaskConical,
  BarChart3,
  FileEdit,
  Briefcase,
  HelpCircle,
  FileSpreadsheet,
  Building2,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { UserProgress } from '../types/growth';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string, dayNumber?: number) => void;
  progress: UserProgress;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  onNavigate,
  progress,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: 'Overview' },
    { id: 'curriculum', label: 'Curriculum (30 Ngày)', icon: BookOpen, badge: `Day ${progress.currentDay}` },
    { id: 'ivie-hub', label: 'Case IVIE – Bác sĩ ơi', icon: Building2 },
    { id: 'experiment-lab', label: 'Growth Experiment Lab', icon: FlaskConical, badge: '12 tests' },
    { id: 'analytics', label: 'Analytics & Phễu giả lập', icon: BarChart3 },
    { id: 'exercises', label: 'Bài tập & Mentor Review', icon: FileEdit, badge: 'Lvl 1–6' },
    { id: 'portfolio', label: 'Capstone Portfolio (21 mục)', icon: Briefcase, badge: 'CV Ready' },
    { id: 'interview-prep', label: 'Interview Prep & 50 Q&A', icon: HelpCircle, badge: 'Cheat Sheet' },
    { id: 'metrics', label: 'Growth Metrics Cheat Sheet', icon: FileSpreadsheet },
  ];

  return (
    <aside className="w-64 shrink-0 bg-slate-950/80 border-r border-slate-800 flex flex-col justify-between h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* User Badge */}
        <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
              NL
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white truncate">Ngô Ngọc Lâm</p>
              <p className="text-[11px] text-slate-400 truncate">Brand & Comms → Growth</p>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Tiến độ học tập</span>
            <span className="text-emerald-400 font-semibold">{progress.completedDays.length}/30 ngày</span>
          </div>
          <div className="mt-1.5 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${(progress.completedDays.length / 30) * 100}%` }}
            />
          </div>
        </div>

        {/* Primary Navigation */}
        <nav className="space-y-1">
          <p className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Học tập & Thực hành
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick jump to Today */}
        <div className="p-3 bg-gradient-to-br from-emerald-950/30 to-slate-900/40 rounded-xl border border-emerald-500/20">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bài học hôm nay</span>
          </div>
          <p className="text-[11px] text-slate-300 mt-1 font-medium">
            Ngày {progress.currentDay}: Tiếp tục bài giảng
          </p>
          <button
            onClick={() => onNavigate('curriculum', progress.currentDay)}
            className="mt-2 w-full py-1.5 px-3 text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer"
          >
            Vào học Ngày {progress.currentDay}
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-800/80 text-[11px] text-slate-400">
        <p className="font-medium text-slate-300">IVIE – Bác sĩ ơi Case</p>
        <p className="mt-0.5 text-[10px] leading-relaxed">
          40% Theory · 60% Practice · Simulated Data
        </p>
      </div>
    </aside>
  );
};

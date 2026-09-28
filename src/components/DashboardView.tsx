import React from 'react';
import {
  Compass,
  TrendingUp,
  Zap,
  Repeat,
  DollarSign,
  FlaskConical,
  Target,
  BarChart3,
  Briefcase,
  Award,
  CheckCircle2,
  Clock,
  Flame,
  ArrowRight,
  Sparkles,
  BookOpen,
  FileCheck,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';
import { UserProgress } from '../types/growth';
import { PHASES_DATA } from '../data/phasesData';
import { ALL_CURRICULUM_DAYS } from '../data/curriculumData';

interface DashboardViewProps {
  progress: UserProgress;
  onNavigateToDay: (day: number) => void;
  onNavigate: (view: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  onNavigateToDay,
  onNavigate,
}) => {
  const currentDayData = ALL_CURRICULUM_DAYS.find((d) => d.day === progress.currentDay) || ALL_CURRICULUM_DAYS[0];
  const completedCount = progress.completedDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  // Icon mapping for phases
  const getPhaseIcon = (id: number) => {
    switch (id) {
      case 1: return Compass;
      case 2: return TrendingUp;
      case 3: return Zap;
      case 4: return Repeat;
      case 5: return DollarSign;
      case 6: return FlaskConical;
      case 7: return Target;
      case 8: return BarChart3;
      case 9: return Briefcase;
      case 10: return Award;
      default: return Sparkles;
    }
  };

  const currentPhase = PHASES_DATA.find((p) => progress.currentDay >= p.startDay && progress.currentDay <= p.endDay) || PHASES_DATA[0];

  const MILESTONE_OUTPUTS = [
    { id: 1, title: 'Growth Model v1 & KPI Tree', day: 3, done: progress.completedDays.includes(3) },
    { id: 2, title: 'Acquisition Channel Matrix & Paid Funnel', day: 6, done: progress.completedDays.includes(6) },
    { id: 3, title: 'Activation Framework & Onboarding Drop-off', day: 9, done: progress.completedDays.includes(9) },
    { id: 4, title: 'Retention Matrix, Cohort Heatmap & CRM', day: 14, done: progress.completedDays.includes(14) },
    { id: 5, title: 'Monetization Canvas & Unit Economics', day: 17, done: progress.completedDays.includes(17) },
    { id: 6, title: '10+ High-Impact Experiments Backlog', day: 21, done: progress.completedDays.includes(21) },
    { id: 7, title: 'IVIE 90-Day Growth Strategy & Roadmap', day: 25, done: progress.completedDays.includes(25) },
    { id: 8, title: 'Event Taxonomy & Growth Dashboard', day: 27, done: progress.completedDays.includes(27) },
    { id: 9, title: 'IVIE Case Study Capstone (21 mục hoàn chỉnh)', day: 29, done: progress.completedDays.includes(29) },
    { id: 10, title: 'Interview Cheat Sheet & Elevator Pitch', day: 30, done: progress.completedDays.includes(30) },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-16">
      {/* Top Welcome & Career Goal Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 p-6 sm:p-8">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Chương trình Huấn luyện Cá nhân 30 Ngày · Ngô Ngọc Lâm</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              From Brand & Communication → Growth Marketer
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mục tiêu tối thượng: Xây dựng năng lực thực chiến toàn phễu (Acquisition → Activation → Retention → Revenue → Referral) và hoàn thiện <strong className="text-emerald-300 font-semibold">Bản Case Study Tăng trưởng IVIE – Bác sĩ ơi</strong> hoàn chỉnh để ứng tuyển thành công các vị trí Growth Marketing Executive / Performance & Growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => onNavigateToDay(progress.currentDay)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span>Tiếp tục học: Ngày {progress.currentDay}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Xem Case Study IVIE (21 mục)</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Tiến độ chương trình</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white tabular-nums">{progressPercent}%</span>
            <span className="text-xs text-slate-400">({completedCount}/30 ngày)</span>
          </div>
          <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Chuỗi ngày liên tục</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-amber-400 tabular-nums">{progress.streak}</span>
            <span className="text-xs text-slate-400">ngày streak 🔥</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Duy trì học 9:30 sáng mỗi ngày</p>
        </div>

        <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Thời lượng học tập</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white tabular-nums">{progress.studyHours}h</span>
            <span className="text-xs text-slate-400">tổng cộng</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">40% Lý thuyết · 60% Thực hành</p>
        </div>

        <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Portfolio Outputs</span>
            <Award className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-purple-300 tabular-nums">
              {MILESTONE_OUTPUTS.filter((m) => m.done).length}/10
            </span>
            <span className="text-xs text-slate-400">milestones</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Sẵn sàng đính kèm CV</p>
        </div>
      </div>

      {/* Mindset Transition Map: Brand & Comms vs Growth Marketing */}
      <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Bản đồ Chuyển dịch Năng lực: Brand & Comms → Growth Marketing</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Phát huy thế mạnh kể chuyện (Storytelling & Empathy) đồng thời làm chủ tư duy Dữ liệu toàn phễu
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 self-start">
            Skill Shift Framework
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">01. Phạm vi phễu (Scope)</span>
            </div>
            <div className="text-xs space-y-1">
              <p className="text-rose-400 line-through">Brand: Chỉ Top of Funnel (Awareness, Reach, Sentiment)</p>
              <p className="text-emerald-400 font-semibold">Growth: Full Funnel AARRR (Acquisition → Retention → Revenue)</p>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Bạn sẽ chịu trách nhiệm đo lường từng nấc chuyển đổi từ lúc tải app đến khi khám và tái khám.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">02. Thước đo thành công (Metrics)</span>
            </div>
            <div className="text-xs space-y-1">
              <p className="text-rose-400 line-through">Brand: Lượt xem, Likes, Share of Voice (Vanity)</p>
              <p className="text-emerald-400 font-semibold">Growth: CAC, LTV, Activation Rate, Retention D30 (Actionable)</p>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mọi chỉ số đều gắn liền với đơn vị kinh tế (Unit Economics) và tác động kinh doanh thực tế.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">03. Cách thức làm việc (Methodology)</span>
            </div>
            <div className="text-xs space-y-1">
              <p className="text-rose-400 line-through">Brand: Theo chiến dịch lớn 3-6 tháng, khó đo tác động lẻ</p>
              <p className="text-emerald-400 font-semibold">Growth: Thử nghiệm khoa học liên tục (Continuous Sprints)</p>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Đặt giả thuyết → Chạy A/B test → Đo lường ý nghĩa thống kê → Scale, Kill hoặc Iterate.
            </p>
          </div>
        </div>
      </div>

      {/* Today's Learning Card */}
      <div className="p-6 bg-gradient-to-br from-emerald-950/20 via-slate-900 to-slate-900 rounded-2xl border border-emerald-500/30 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              {progress.currentDay}
            </div>
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                {currentPhase.title} · Ngày {progress.currentDay}
              </span>
              <h3 className="text-lg font-bold text-white">
                {currentDayData.title}
              </h3>
            </div>
          </div>
          <button
            onClick={() => onNavigateToDay(progress.currentDay)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Bắt đầu học ngay</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 italic">
          "{currentDayData.tagline}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Morning Schedule */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Buổi Sáng (9:30 – 11:30) · Kiến thức cốt lõi</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">2 tiếng</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              {currentDayData.schedule.slice(0, 4).map((slot, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[11px] font-mono text-slate-400 shrink-0">{slot.time}</span>
                  <span className="truncate">{slot.activity}: {slot.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evening Output */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>Buổi Tối · Thực hành & Output IVIE</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">60% Practice</span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p className="font-semibold text-white">Sản phẩm đầu ra (Output of the Day):</p>
              <p className="text-emerald-300 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 font-medium">
                {currentDayData.eveningPractice.requiredOutput}
              </p>
              <p className="text-[11px] text-slate-400">
                Nhiệm vụ: {currentDayData.eveningPractice.task1}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 10 Phases Roadmap Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-emerald-400" />
            <span>Chương trình Huấn luyện 30 Ngày (10 Phases)</span>
          </h2>
          <span className="text-xs text-slate-400">
            Click vào từng phase để xem chi tiết
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PHASES_DATA.map((phase) => {
            const Icon = getPhaseIcon(phase.id);
            const isCurrent = progress.currentDay >= phase.startDay && progress.currentDay <= phase.endDay;
            const isCompleted = phase.endDay <= completedCount;
            const completedInPhase = progress.completedDays.filter(
              (d) => d >= phase.startDay && d <= phase.endDay
            ).length;
            const totalInPhase = phase.endDay - phase.startDay + 1;

            return (
              <div
                key={phase.id}
                onClick={() => onNavigateToDay(phase.startDay)}
                className={`p-5 rounded-xl border transition-all cursor-pointer group ${
                  isCurrent
                    ? 'bg-slate-900 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20'
                    : isCompleted
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : isCompleted
                          ? 'bg-slate-800 text-emerald-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-400">{phase.dayRange}</span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            Đang học
                          </span>
                        )}
                        {isCompleted && (
                          <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Đã xong
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {phase.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    {completedInPhase}/{totalInPhase} ngày
                  </span>
                </div>

                <p className="mt-2.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {phase.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-medium truncate max-w-[280px]">
                    🎯 {phase.milestoneOutput}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors flex items-center gap-1">
                    Xem bài học
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 10 Milestone Outputs Tracker */}
      <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Hồ sơ Đầu ra Portfolio (10 Milestones sau 30 Ngày)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Mỗi module kết thúc đều tạo ra một sản phẩm cụ thể ứng dụng trực tiếp vào IVIE – Bác sĩ ơi
            </p>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 cursor-pointer"
          >
            <span>Xem tài liệu tổng hợp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {MILESTONE_OUTPUTS.map((output) => (
            <div
              key={output.id}
              onClick={() => onNavigateToDay(output.day)}
              className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  output.done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-200 truncate group-hover:text-emerald-300 transition-colors">
                    {output.title}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Ngày {output.day} · IVIE Output
                  </p>
                </div>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                output.done ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'
              }`}>
                {output.done ? 'Hoàn thành' : 'Đang thực hiện'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

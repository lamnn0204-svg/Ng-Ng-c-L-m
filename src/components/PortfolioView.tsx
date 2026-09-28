import React, { useState } from 'react';
import {
  Briefcase,
  Copy,
  Check,
  Printer,
  ChevronRight,
  Sparkles,
  Download,
  Building2,
  Share2,
} from 'lucide-react';
import { IVIE_CASE_STUDY_SECTIONS } from '../data/ivieCaseStudyData';

export const PortfolioView: React.FC = () => {
  const [activeSectionNum, setActiveSectionNum] = useState<string>('01');
  const [copied, setCopied] = useState(false);

  const activeSection = IVIE_CASE_STUDY_SECTIONS.find((s) => s.number === activeSectionNum) || IVIE_CASE_STUDY_SECTIONS[0];

  const handleCopyCurrentSection = () => {
    const textToCopy = `IVIE – BÁC SĨ ƠI GROWTH MARKETING CASE STUDY\nPhần ${activeSection.number}: ${activeSection.title}\n${activeSection.subtitle}\n\n${activeSection.content}\n\nKey Takeaways:\n${activeSection.keyTakeaways.map((t) => `• ${t}`).join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-24">
      {/* Header Banner */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Briefcase className="w-4 h-4" />
            <span>Executive Capstone Portfolio · 21 Phân mục Chuẩn Quốc tế</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            IVIE – Bác sĩ ơi: Comprehensive Growth Marketing Case Study
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Tác phẩm hoàn chỉnh phục vụ hồ sơ ứng tuyển vị trí Growth Marketing / Performance & Growth Marketer. Toàn bộ 21 phân mục từ bối cảnh kinh doanh, chẩn đoán phễu, thử nghiệm thực chiến đến lộ trình 90 ngày.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyCurrentSection}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã sao chép!' : 'Copy Mục này'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>In / Xuất PDF</span>
          </button>
        </div>
      </div>

      {/* Main Grid: 21 Sections Sidebar + Detailed View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Navigation Index (Left) */}
        <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 space-y-3 h-[750px] overflow-y-auto scrollbar-thin">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-2">
            Mục lục 21 Phân mục Case Study
          </span>

          <div className="space-y-1">
            {IVIE_CASE_STUDY_SECTIONS.map((sec) => {
              const isActive = sec.number === activeSectionNum;
              return (
                <button
                  key={sec.number}
                  onClick={() => setActiveSectionNum(sec.number)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold shrink-0">
                      {sec.number}.
                    </span>
                    <span className="truncate">{sec.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Section Reader (Right) */}
        <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Phân mục {activeSection.number} / 21 · {activeSection.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Author: Ngô Ngọc Lâm
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeSection.number}. {activeSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              {activeSection.subtitle}
            </p>
          </div>

          {/* Metric Highlights if present */}
          {activeSection.simulatedMetrics && activeSection.simulatedMetrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeSection.simulatedMetrics.map((m, i) => (
                <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-0.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">{m.label}</span>
                  <span className="text-base font-bold font-mono text-emerald-400">{m.value}</span>
                  <span className="text-[10px] text-slate-400 block">{m.note}</span>
                </div>
              ))}
            </div>
          )}

          {/* Body Content */}
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line space-y-4">
            {activeSection.content}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Điểm đúc rút cốt lõi (Key Strategic Takeaways):</span>
            </span>
            <ul className="text-xs text-slate-200 space-y-1.5 list-disc pl-5">
              {activeSection.keyTakeaways.map((point, idx) => (
                <li key={idx} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </div>

          {/* Pagination Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                const currentIdx = IVIE_CASE_STUDY_SECTIONS.findIndex((s) => s.number === activeSectionNum);
                if (currentIdx > 0) setActiveSectionNum(IVIE_CASE_STUDY_SECTIONS[currentIdx - 1].number);
              }}
              disabled={activeSectionNum === '01'}
              className="text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer"
            >
              ← Mục trước
            </button>
            <span className="text-xs font-mono text-slate-400">
              {activeSection.number} of 21
            </span>
            <button
              onClick={() => {
                const currentIdx = IVIE_CASE_STUDY_SECTIONS.findIndex((s) => s.number === activeSectionNum);
                if (currentIdx < IVIE_CASE_STUDY_SECTIONS.length - 1) setActiveSectionNum(IVIE_CASE_STUDY_SECTIONS[currentIdx + 1].number);
              }}
              disabled={activeSectionNum === '21'}
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300 disabled:opacity-30 cursor-pointer"
            >
              Mục tiếp theo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

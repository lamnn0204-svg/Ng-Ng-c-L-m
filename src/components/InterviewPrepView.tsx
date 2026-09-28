import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  Building2,
  Copy,
  Check,
  Award,
} from 'lucide-react';
import { INTERVIEW_QUESTIONS } from '../data/interviewData';
import { InterviewQuestionItem } from '../types/growth';

export const InterviewPrepView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedQId, setExpandedQId] = useState<number | null>(1);
  const [copiedPitch, setCopiedPitch] = useState(false);

  const categories = [
    'All',
    'Career Transition',
    'IVIE Healthcare Case',
    'Mindset & Fundamentals',
    'Funnel & Metrics',
    'Retention & CRM',
    'Experimentation & Data',
  ];

  const filteredQuestions = INTERVIEW_QUESTIONS.filter((q) => {
    const matchCat = selectedCategory === 'All' || q.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.sampleAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const sampleElevatorPitch = `Chào anh/chị, tôi là Ngô Ngọc Lâm. Tôi có nền tảng vững chắc về Brand Marketing, Communication và Campaign Strategy, nơi tôi đã rèn luyện năng lực thấu cảm tâm lý sâu sắc và kỹ năng kể câu chuyện thương hiệu chạm đến cảm xúc khách hàng.

Khi chuyển hướng sang Growth Marketing, tôi không vứt bỏ nền tảng đó, mà đã biến nó thành lợi thế cạnh tranh độc bản: Tôi kết hợp sự thấu hiểu tâm lý con người với phương pháp luận dữ liệu khoa học toàn phễu (Full-funnel AARRR) và hệ thống thử nghiệm liên tục (Continuous Experimentation). 

Trong dự án thực chiến gần đây nhất với IVIE – Bác sĩ ơi, tôi đã tự tay xây dựng Bản Thiết Kế Chiến Lược Tăng Trưởng 90 ngày: Chẩn đoán 3 điểm nghẽn rớt phễu Onboarding, thiết kế 12 thử nghiệm ICE/RICE, xây dựng hệ thống CRM Zalo ZNS tự động hóa lịch tái khám giúp tăng Month 1 Retention từ 14.5% lên 24%, và mô hình hóa North Star Metric đạt 7.000 ca khám/tuần.

Tôi tin rằng một Growth Marketer xuất sắc không chỉ biết đọc số liệu kỹ thuật khô khan, mà phải là người biết đặt ra những giả thuyết tăng trưởng sắc bén từ sự thấu hiểu sâu sắc người dùng. Đó chính là giá trị mà tôi có thể mang lại ngay lập tức cho tổ chức!`;

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(sampleElevatorPitch);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-24">
      {/* Header Banner */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Award className="w-4 h-4" />
            <span>Career Acceleration & Interview Mastery</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Growth Marketing Interview Cheat Sheet (50 Q&A Thực chiến)
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Trang bị câu trả lời điểm 10, cấu trúc khung tư duy (Framework), và cách kể câu chuyện chuyển dịch độc bản từ Brand & Communication sang Growth Marketing cho Ngô Ngọc Lâm.
          </p>
        </div>
      </div>

      {/* ELEVATOR PITCH WORKSHOP CARD */}
      <div className="p-6 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-900 rounded-2xl border border-emerald-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Kịch bản Giới thiệu Bản thân 90 Giây (Elevator Pitch 10/10)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Công thức: Nền tảng Brand/Comms vững chắc + Năng lực Dữ liệu toàn phễu + Bằng chứng Case Study IVIE thực chiến
            </p>
          </div>
          <button
            onClick={handleCopyPitch}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
          >
            {copiedPitch ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedPitch ? 'Đã sao chép pitch!' : 'Copy Kịch bản'}</span>
          </button>
        </div>

        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line space-y-2">
          {sampleElevatorPitch}
        </div>
      </div>

      {/* Search & Categories Bar */}
      <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo câu hỏi hoặc từ khóa phỏng vấn..."
            className="w-full pl-9 pr-4 py-2 bg-slate-950 text-slate-100 rounded-lg border border-slate-700 text-xs focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 50 Questions Accordion List */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const isExpanded = expandedQId === q.id;
          return (
            <div
              key={q.id}
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden transition-all shadow-sm"
            >
              {/* Question Header */}
              <div
                onClick={() => setExpandedQId(isExpanded ? null : q.id)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">
                      CÂU {q.id}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {q.category}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {q.question}
                  </h3>
                </div>

                <div className="shrink-0 mt-1">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Detailed Breakdown */}
              {isExpanded && (
                <div className="p-5 sm:p-6 bg-slate-950/80 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm">
                  {/* Interviewer Intent */}
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-0.5">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      🎯 Ý đồ của Người phỏng vấn (Interviewer Intent):
                    </span>
                    <p className="text-slate-300 leading-relaxed italic">
                      {q.interviewerIntent}
                    </p>
                  </div>

                  {/* Framework */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                      Cấu trúc Trả lời Khuyến nghị (Answer Framework):
                    </span>
                    <p className="text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed font-mono text-xs">
                      {q.answerFramework}
                    </p>
                  </div>

                  {/* Sample Answer */}
                  <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Câu trả lời Mẫu Chuẩn mực (Sample 10/10 Answer):
                    </span>
                    <p className="text-slate-100 leading-relaxed whitespace-pre-line">
                      "{q.sampleAnswer}"
                    </p>
                  </div>

                  {/* IVIE Healthcare Angle */}
                  <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Góc nhìn Thực chiến IVIE – Bác sĩ ơi:</span>
                    </span>
                    <p className="text-slate-300 leading-relaxed font-mono text-xs">
                      {q.ivieHealthcareAngle}
                    </p>
                  </div>

                  {/* Pitfalls to Avoid */}
                  {q.pitfallsToAvoid && q.pitfallsToAvoid.length > 0 && (
                    <div className="p-3 bg-rose-950/20 rounded-lg border border-rose-500/30 space-y-1 text-xs">
                      <span className="font-bold text-rose-400 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Những lỗi thường gặp cần tránh tuyệt đối:</span>
                      </span>
                      <ul className="text-rose-200 list-disc pl-5 space-y-0.5">
                        {q.pitfallsToAvoid.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

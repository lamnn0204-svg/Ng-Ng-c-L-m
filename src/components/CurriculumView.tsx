import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Send,
  Building2,
  AlertTriangle,
  Lightbulb,
  Bookmark,
  Share2,
  Check,
} from 'lucide-react';
import { DayLesson, UserProgress } from '../types/growth';
import { ALL_CURRICULUM_DAYS } from '../data/curriculumData';
import { PHASES_DATA } from '../data/phasesData';

interface CurriculumViewProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
  progress: UserProgress;
  onToggleCompleteDay: (day: number) => void;
  onSaveReflection: (day: number, data: { learned: string; unclear: string; keyInsight: string; actionableStep: string }) => void;
  onSaveSubmission: (day: number, content: string) => void;
  onToggleBookmark: (day: number) => void;
  onOpenAiMentorWithPrompt?: (prompt: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  selectedDay,
  onSelectDay,
  progress,
  onToggleCompleteDay,
  onSaveReflection,
  onSaveSubmission,
  onToggleBookmark,
  onOpenAiMentorWithPrompt,
}) => {
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<number | 'all'>('all');
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<Record<string, boolean>>({});

  // Local state for reflection
  const existingReflection = progress.reflections[selectedDay] || {
    learned: '',
    unclear: '',
    keyInsight: '',
    actionableStep: '',
  };
  const [reflectionForm, setReflectionForm] = useState(existingReflection);

  // Local state for exercise submission
  const existingSubmission = progress.exerciseSubmissions[selectedDay]?.content || '';
  const [submissionContent, setSubmissionContent] = useState(existingSubmission);
  const [isSavedSubmission, setIsSavedSubmission] = useState(false);
  const [isSavedReflection, setIsSavedReflection] = useState(false);

  // Sync state when selectedDay changes
  React.useEffect(() => {
    const curRefl = progress.reflections[selectedDay] || {
      learned: '',
      unclear: '',
      keyInsight: '',
      actionableStep: '',
    };
    setReflectionForm(curRefl);

    const curSub = progress.exerciseSubmissions[selectedDay]?.content || '';
    setSubmissionContent(curSub);

    setSelectedQuizAnswers({});
    setShowQuizResults({});
    setIsSavedSubmission(false);
    setIsSavedReflection(false);
  }, [selectedDay, progress]);

  const currentLesson: DayLesson = ALL_CURRICULUM_DAYS.find((d) => d.day === selectedDay) || ALL_CURRICULUM_DAYS[0];
  const currentPhase = PHASES_DATA.find((p) => p.id === currentLesson.phaseId) || PHASES_DATA[0];
  const isCompleted = progress.completedDays.includes(selectedDay);
  const isBookmarked = progress.bookmarkedDays?.includes(selectedDay);

  const filteredDays = selectedPhaseFilter === 'all'
    ? ALL_CURRICULUM_DAYS
    : ALL_CURRICULUM_DAYS.filter((d) => d.phaseId === selectedPhaseFilter);

  const handleSelectQuizOption = (quizId: string, optionIdx: number) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [quizId]: optionIdx }));
    setShowQuizResults((prev) => ({ ...prev, [quizId]: true }));
  };

  const handleSaveReflection = () => {
    onSaveReflection(selectedDay, reflectionForm);
    setIsSavedReflection(true);
    setTimeout(() => setIsSavedReflection(false), 2500);
  };

  const handleSaveSubmission = () => {
    onSaveSubmission(selectedDay, submissionContent);
    setIsSavedSubmission(true);
    setTimeout(() => setIsSavedSubmission(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-24">
      {/* 30-Day Strip & Phase Filter */}
      <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>Lộ trình Học tập 30 Ngày (Daily Curriculum)</span>
            </h1>
            <p className="text-xs text-slate-400">
              Chọn ngày bất kỳ để vào bài học chi tiết, làm quiz và hoàn thiện output cho IVIE
            </p>
          </div>

          {/* Phase Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Lọc theo Phase:</span>
            <select
              value={selectedPhaseFilter}
              onChange={(e) => setSelectedPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="bg-slate-950 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="all">Tất cả 10 Phases (30 Ngày)</option>
              {PHASES_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} ({p.dayRange})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Days Horizontal Scroll List */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          {filteredDays.map((d) => {
            const isDone = progress.completedDays.includes(d.day);
            const isSelected = d.day === selectedDay;
            return (
              <button
                key={d.day}
                onClick={() => onSelectDay(d.day)}
                className={`flex flex-col items-center justify-center min-w-[58px] py-2 px-1 rounded-xl text-center transition-all cursor-pointer border shrink-0 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md font-bold'
                    : isDone
                    ? 'bg-slate-800/80 text-emerald-400 border-emerald-500/40 hover:bg-slate-800'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="text-[10px] uppercase font-mono tracking-tighter">Ngày</span>
                <span className="text-base font-bold tabular-nums">{d.day}</span>
                {isDone ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Daily Learning View Container */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        {/* Day Header Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                NGÀY {currentLesson.day} / 30
              </span>
              <span>·</span>
              <span className="text-slate-300 font-sans">{currentPhase.title}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {currentLesson.title}
            </h2>
            <p className="text-sm text-slate-300 italic">
              "{currentLesson.tagline}"
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleBookmark(selectedDay)}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={isBookmarked ? 'Đã lưu bài học' : 'Lưu lại bài học'}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleCompleteDay(selectedDay)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Đã hoàn thành ngày này' : 'Đánh dấu hoàn thành'}</span>
            </button>
          </div>
        </div>

        {/* Objective Callout */}
        <div className="px-6 sm:px-8 py-4 bg-emerald-950/20 border-b border-emerald-500/20 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-white">Mục tiêu hôm nay (Today's Objective): </span>
            <span className="text-slate-200 leading-relaxed">{currentLesson.objective}</span>
          </div>
        </div>

        {/* Day Content Sections */}
        <div className="p-6 sm:p-8 space-y-10">
          {/* SECTION 1: MORNING SCHEDULE (9:30 - 11:30) */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>BUỔI SÁNG: HỌC KIẾN THỨC MỚI (09:30 – 11:30)</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">40% Theory · 2 Giờ</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {currentLesson.schedule.map((slot, idx) => (
                <div key={idx} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
                  <span className="text-[11px] font-mono text-amber-400 font-bold block">{slot.time}</span>
                  <p className="text-xs font-semibold text-white truncate">{slot.activity}</p>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{slot.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: 1. LEARN (CORE CONCEPTS) */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>1. LEARN & UNDERSTAND: Bản chất & Cơ chế hoạt động</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Lý thuyết thực chiến</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Khái niệm Cốt lõi (Core Concept)
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentLesson.learn.coreConcept}
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Vì sao quan trọng (Why It Matters)
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentLesson.learn.whyItMatters}
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                  Nó hoạt động như thế nào (How It Works)
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentLesson.learn.howItWorks}
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
                  Khi nào sử dụng & Chỉ số liên quan
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2">
                  {currentLesson.learn.whenToUse}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentLesson.learn.relevantMetrics.map((metric, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: FRAMEWORK & FORMULA */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>2. FRAMEWORK: {currentLesson.framework.name}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Khung tư duy chuẩn mực</span>
            </div>

            <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-700/80 font-mono text-xs sm:text-sm text-emerald-300">
                <span className="text-slate-400 select-none block text-[11px] mb-1">Cấu trúc / Công thức:</span>
                {currentLesson.framework.formulaOrStructure}
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentLesson.framework.explanation}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Các lỗi thường gặp (Common Mistakes):</span>
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                  {currentLesson.framework.commonMistakes.map((mistake, i) => (
                    <li key={i} className="leading-relaxed">{mistake}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: IVIE CASE STUDY APPLICATION */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>3. APPLY TO IVIE – BÁC SĨ ƠI: Case Study Xuyên suốt</span>
              </h3>
              {currentLesson.ivieApplication.isSimulated && (
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Simulated Data – Dùng cho mục đích học tập
                </span>
              )}
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-950/20 to-slate-950 rounded-xl border border-emerald-500/30 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Bối cảnh bài toán tại IVIE:
                </span>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                  {currentLesson.ivieApplication.problemContext}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Các bước triển khai can thiệp:
                </span>
                <div className="space-y-2">
                  {currentLesson.ivieApplication.applicationSteps.map((step, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-200">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300">
                <span className="text-slate-400 text-[10px] block uppercase mb-1">Mô phỏng dữ liệu kết quả:</span>
                {currentLesson.ivieApplication.simulatedExample}
              </div>
            </div>
          </section>

          {/* SECTION 5: INTERACTIVE QUIZ */}
          {currentLesson.quiz && currentLesson.quiz.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <span>4. QUIZ: Kiểm tra nhận thức nhanh (11:15 – 11:30)</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">Instant Feedback</span>
              </div>

              <div className="space-y-4">
                {currentLesson.quiz.map((q, qIdx) => {
                  const selectedOpt = selectedQuizAnswers[q.id];
                  const hasAnswered = showQuizResults[q.id];
                  const isCorrect = selectedOpt === q.correctIndex;

                  return (
                    <div key={q.id} className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                      <p className="text-sm font-semibold text-white">
                        Câu {qIdx + 1}: {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          let btnStyle = 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700';

                          if (hasAnswered) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'bg-emerald-950/60 text-emerald-300 border-emerald-500 font-semibold';
                            } else if (isOptionSelected) {
                              btnStyle = 'bg-rose-950/60 text-rose-300 border-rose-500';
                            } else {
                              btnStyle = 'bg-slate-900/40 text-slate-400 border-slate-800';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuizOption(q.id, optIdx)}
                              disabled={hasAnswered}
                              className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {hasAnswered && optIdx === q.correctIndex && (
                                <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div className={`p-3 rounded-lg border text-xs leading-relaxed space-y-1 ${
                          isCorrect ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200' : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                        }`}>
                          <p className="font-bold">
                            {isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác!'}
                          </p>
                          <p>{q.explanation}</p>
                          <p className="text-slate-400 italic font-mono text-[11px]">
                            Góc nhìn IVIE: {q.ivieContext}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* SECTION 6: EVENING PRACTICE & OUTPUT OF THE DAY */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5. BUỔI TỐI: THỰC HÀNH TẠO OUTPUT (60% Practice)</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Không chỉ học vẹt</span>
            </div>

            <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  3 Nhiệm vụ Thực hành Tối nay:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="font-bold text-emerald-400 shrink-0">Task 1:</span>
                    <span>{currentLesson.eveningPractice.task1}</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="font-bold text-emerald-400 shrink-0">Task 2:</span>
                    <span>{currentLesson.eveningPractice.task2}</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="font-bold text-emerald-400 shrink-0">Task 3:</span>
                    <span>{currentLesson.eveningPractice.task3}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/30 space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  🎯 SẢN PHẨM ĐẦU RA BẮT BUỘC (OUTPUT OF THE DAY):
                </span>
                <p className="text-sm font-bold text-white">
                  {currentLesson.eveningPractice.requiredOutput}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  💡 Gợi ý Mentor: {currentLesson.eveningPractice.hint}
                </p>
              </div>

              {/* Submission Box */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-300 block">
                  Nộp bài tập thực hành / Ghi chép Output của bạn:
                </label>
                <textarea
                  rows={4}
                  value={submissionContent}
                  onChange={(e) => setSubmissionContent(e.target.value)}
                  placeholder="Gõ bài làm, sơ đồ phân tích hoặc ghi chép giải pháp của bạn cho IVIE tại đây..."
                  className="w-full p-3 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 leading-relaxed"
                />
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onOpenAiMentorWithPrompt) {
                        onOpenAiMentorWithPrompt(
                          `Chào Mentor, tôi đang làm bài tập Ngày ${selectedDay}: "${currentLesson.title}".\nNhiệm vụ: ${currentLesson.eveningPractice.requiredOutput}\nĐây là bản thảo bài làm của tôi:\n"${submissionContent || 'Chưa viết'}"\nNhờ Mentor chấm bài theo thang 0-10, chỉ ra điểm đúng, điểm sai, đặt câu hỏi phản biện Socratic và đưa ra phiên bản cải thiện cho IVIE!`
                        );
                      }
                    }}
                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Nhờ Lâm's Growth Mentor chấm & phản biện bài này</span>
                  </button>

                  <button
                    onClick={handleSaveSubmission}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSavedSubmission ? 'Đã lưu thành công!' : 'Lưu bài làm'}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: REFLECTION JOURNAL */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>6. REFLECTION JOURNAL: Đúc rút & Phản tỉnh cá nhân</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Daily Journal</span>
            </div>

            <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-emerald-400 block">
                  1. Tôi đã học được gì quan trọng hôm nay?
                </label>
                <textarea
                  rows={2}
                  value={reflectionForm.learned}
                  onChange={(e) => setReflectionForm({ ...reflectionForm, learned: e.target.value })}
                  placeholder="Ghi lại kiến thức mới tiếp thu..."
                  className="w-full p-2.5 bg-slate-900 text-slate-100 rounded-lg border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-rose-400 block">
                  2. Điều gì tôi vẫn còn băn khoăn / chưa hiểu rõ?
                </label>
                <textarea
                  rows={2}
                  value={reflectionForm.unclear}
                  onChange={(e) => setReflectionForm({ ...reflectionForm, unclear: e.target.value })}
                  placeholder="Điểm nghẽn tư duy hoặc thắc mắc cần hỏi Mentor..."
                  className="w-full p-2.5 bg-slate-900 text-slate-100 rounded-lg border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-amber-400 block">
                  3. Insight quan trọng nhất rút ra cho IVIE là gì?
                </label>
                <textarea
                  rows={2}
                  value={reflectionForm.keyInsight}
                  onChange={(e) => setReflectionForm({ ...reflectionForm, keyInsight: e.target.value })}
                  placeholder="Góc nhìn mới về sản phẩm y tế..."
                  className="w-full p-2.5 bg-slate-900 text-slate-100 rounded-lg border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-blue-400 block">
                  4. Tôi sẽ áp dụng hành động gì cụ thể tiếp theo?
                </label>
                <textarea
                  rows={2}
                  value={reflectionForm.actionableStep}
                  onChange={(e) => setReflectionForm({ ...reflectionForm, actionableStep: e.target.value })}
                  placeholder="Hành động cụ thể ngày mai..."
                  className="w-full p-2.5 bg-slate-900 text-slate-100 rounded-lg border border-slate-800 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="md:col-span-2 flex justify-end pt-1">
                <button
                  onClick={handleSaveReflection}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  {isSavedReflection ? 'Đã lưu sổ tay phản tỉnh!' : 'Lưu Reflection'}
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 8: CURATED RESOURCES */}
          {currentLesson.resources && currentLesson.resources.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                  <span>7. TÀI NGUYÊN HỌC TẬP CHỌN LỌC (Top 1–3 Resources)</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">Reforge, CXL & Amplitude</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentLesson.resources.map((res, i) => (
                  <div key={i} className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {res.source}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {res.difficulty} · ~{res.estMinutes} phút
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {res.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      💡 Cần học gì từ đây: {res.keyTakeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Career CV Highlighting */}
          <div className="p-4 bg-slate-950/90 rounded-xl border border-slate-800 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              🎯
            </div>
            <div className="text-xs space-y-1">
              <span className="font-bold text-white">Cách đưa kỹ năng này vào CV / Phỏng vấn:</span>
              <p className="text-slate-300 leading-relaxed font-mono">
                {currentPhase.careerValue}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => onSelectDay(Math.max(1, selectedDay - 1))}
            disabled={selectedDay === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              selectedDay === 1
                ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-400'
                : 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Ngày trước (Ngày {selectedDay - 1})</span>
          </button>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            Ngày {selectedDay} / 30 · {isCompleted ? '✓ Hoàn thành' : 'Đang học'}
          </span>

          <button
            onClick={() => onSelectDay(Math.min(30, selectedDay + 1))}
            disabled={selectedDay === 30}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              selectedDay === 30
                ? 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-400'
                : 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500'
            }`}
          >
            <span>Ngày tiếp theo (Ngày {selectedDay + 1})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

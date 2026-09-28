import React, { useState } from 'react';
import {
  FileEdit,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Award,
  RefreshCw,
} from 'lucide-react';
import { UserProgress } from '../types/growth';
import { ALL_CURRICULUM_DAYS } from '../data/curriculumData';

interface ExercisesViewProps {
  progress: UserProgress;
  onSaveSubmission: (day: number, content: string, feedback?: any) => void;
  onOpenAiMentorWithPrompt?: (prompt: string) => void;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  progress,
  onSaveSubmission,
  onOpenAiMentorWithPrompt,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(progress.currentDay || 1);
  const currentLesson = ALL_CURRICULUM_DAYS.find((d) => d.day === selectedDay) || ALL_CURRICULUM_DAYS[0];

  const currentSubmission = progress.exerciseSubmissions[selectedDay] || {
    content: '',
    status: 'draft',
  };

  const [inputAnswer, setInputAnswer] = useState(currentSubmission.content || '');
  const [isReviewing, setIsReviewing] = useState(false);
  const [feedback, setFeedback] = useState(currentSubmission.feedback);

  React.useEffect(() => {
    const cur = progress.exerciseSubmissions[selectedDay] || { content: '', status: 'draft' };
    setInputAnswer(cur.content || '');
    setFeedback(cur.feedback);
  }, [selectedDay, progress]);

  // Determine exercise level based on day
  const getExerciseLevel = (day: number) => {
    if (day <= 3) return { level: 1, name: 'Level 1: Knowledge & Foundations', badge: 'bg-blue-500/10 text-blue-400' };
    if (day <= 9) return { level: 2, name: 'Level 2: Funnel Application', badge: 'bg-emerald-500/10 text-emerald-400' };
    if (day <= 14) return { level: 3, name: 'Level 3: Deep Cohort Analysis', badge: 'bg-purple-500/10 text-purple-400' };
    if (day <= 17) return { level: 4, name: 'Level 4: Monetization Strategy', badge: 'bg-amber-500/10 text-amber-400' };
    if (day <= 21) return { level: 5, name: 'Level 5: Experimentation Design', badge: 'bg-cyan-500/10 text-cyan-400' };
    return { level: 6, name: 'Level 6: Business Thinking & Leadership', badge: 'bg-rose-500/10 text-rose-400' };
  };

  const levelInfo = getExerciseLevel(selectedDay);

  // Socratic Grading Simulation
  const handleSimulateMentorReview = () => {
    if (!inputAnswer.trim() || inputAnswer.length < 20) {
      alert('Vui lòng viết câu trả lời chi tiết hơn (ít nhất 20 ký tự) để Mentor có thể chấm và phản biện bài làm của bạn.');
      return;
    }

    setIsReviewing(true);
    setTimeout(() => {
      // Generate intelligent Socratic evaluation based on the lesson and answer
      const calculatedScore = Math.min(9.5, Math.max(6.5, Number((7.0 + Math.min(2.5, inputAnswer.length / 250)).toFixed(1))));

      const simulatedFeedback = {
        strengths: [
          'Bạn đã nắm bắt rất tốt bối cảnh thực tế của người bệnh khi sử dụng IVIE.',
          'Đã gắn kết được hành vi người dùng với các chỉ số đo lường cụ thể thay vì chỉ mô tả cảm tính.',
          'Cấu trúc trình bày mạch lạc, thể hiện tư duy có phương pháp luận.',
        ],
        flaws: [
          'Chưa làm rõ phương án dự phòng (Guardrail Metric) để kiểm soát rủi ro phát sinh tại bệnh viện.',
          'Cần lượng hóa rõ hơn thời gian hoàn vốn (Payback Period) hoặc mức tăng trưởng CVR kỳ vọng.',
        ],
        socraticQuestions: [
          'Nếu đối thủ cạnh tranh (như Medpro hay Jio Health) cũng sao chép giải pháp này của bạn vào tuần tới, đâu là "con hào kinh tế" (Moat) giúp IVIE giữ chân được người bệnh?',
          'Về mặt tâm lý, khi một người mẹ đang sốt ruột vì con ốm, liệu thay đổi này có thực sự giảm bớt lo âu cho họ hay chỉ làm tiện lợi hơn về mặt thao tác kỹ thuật?',
        ],
        improvedVersion: `Bản đề xuất nâng cấp khuyến nghị cho IVIE:\n1. Tách bạch rõ 2 phân khúc mục tiêu: Khám cấp tính khẩn cấp (Cần tốc độ < 60s) và Khám định kỳ mạn tính (Cần sự an tâm và lịch sử bệnh án).\n2. Bổ sung Guardrail Metric: Kiểm soát tỷ lệ no-show dưới 10% bằng tin nhắn xác nhận tự động trước 24h.\n3. Thiết lập Decision Rule rõ ràng: Nếu thử nghiệm không tăng được CVR tối thiểu 15% sau 14 ngày, lập tức kích hoạt phương án dự phòng.`,
      };

      setFeedback(simulatedFeedback);
      onSaveSubmission(selectedDay, inputAnswer, simulatedFeedback);
      setIsReviewing(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-24">
      {/* Header */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <FileEdit className="w-4 h-4" />
            <span>Socratic Mentor Grading Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Hệ thống Bài tập Thực hành & Mentor Phản biện
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Tăng dần độ khó từ Level 1 (Knowledge) đến Level 6 (Business Thinking). Mentor sẽ chấm điểm học tập (0–10), chỉ ra điểm đúng, điểm sai, đặt câu hỏi phản biện Socratic và đưa ra phiên bản cải tiến.
          </p>
        </div>

        {/* Level Indicator */}
        <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${levelInfo.badge}`}>
          {levelInfo.name}
        </div>
      </div>

      {/* Select Day Tabs */}
      <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3">
        <span className="text-xs text-slate-400 font-medium">Chọn ngày làm bài:</span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          {ALL_CURRICULUM_DAYS.map((d) => {
            const hasSubmitted = !!progress.exerciseSubmissions[d.day]?.content;
            const isSelected = d.day === selectedDay;
            return (
              <button
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                    : hasSubmitted
                    ? 'bg-slate-800 text-emerald-300 border-emerald-500/30'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                Day {d.day} {hasSubmitted ? '✓' : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Exercise Prompt Card */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-6">
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span>BÀI TẬP NGÀY {currentLesson.day}</span>
            <span>·</span>
            <span className="text-slate-300 font-sans">{currentLesson.title}</span>
          </div>
          <h2 className="text-lg font-bold text-white">
            Nhiệm vụ: {currentLesson.eveningPractice.requiredOutput}
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            {currentLesson.eveningPractice.submissionPrompt}
          </p>
        </div>

        {/* 3 Detailed Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 font-bold block">Nhiệm vụ 1:</span>
            <p className="text-xs text-slate-200 leading-relaxed">{currentLesson.eveningPractice.task1}</p>
          </div>
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 font-bold block">Nhiệm vụ 2:</span>
            <p className="text-xs text-slate-200 leading-relaxed">{currentLesson.eveningPractice.task2}</p>
          </div>
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 font-bold block">Nhiệm vụ 3:</span>
            <p className="text-xs text-slate-200 leading-relaxed">{currentLesson.eveningPractice.task3}</p>
          </div>
        </div>

        {/* Editor Area */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
            <span>Khu vực nộp bài của bạn (Markdown & Text):</span>
            <span className="text-[11px] font-mono text-slate-400">{inputAnswer.length} ký tự</span>
          </label>
          <textarea
            rows={8}
            value={inputAnswer}
            onChange={(e) => setInputAnswer(e.target.value)}
            placeholder="Hãy viết bài làm chi tiết cho IVIE – Bác sĩ ơi tại đây: Giải thích logic, vẽ sơ đồ text hoặc lập bảng số liệu..."
            className="w-full p-4 bg-slate-950 text-slate-100 rounded-xl border border-slate-700 text-xs sm:text-sm font-sans focus:outline-none focus:border-emerald-500 leading-relaxed"
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <button
              onClick={() => {
                if (onOpenAiMentorWithPrompt) {
                  onOpenAiMentorWithPrompt(
                    `Mentor ơi, tôi đang làm bài tập Ngày ${selectedDay}: "${currentLesson.eveningPractice.requiredOutput}".\nNội dung bài làm:\n"${inputAnswer}"\nXin mentor hãy đánh giá bài làm theo 8 tiêu chí: Chấm điểm 0-10, điểm đúng, điểm sai, câu hỏi phản biện Socratic và phiên bản cải thiện!`
                  );
                }
              }}
              className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Mở AI Mentor Chat để phản biện trực tiếp</span>
            </button>

            <button
              onClick={handleSimulateMentorReview}
              disabled={isReviewing}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {isReviewing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Mentor đang chấm & phân tích...</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" />
                  <span>Nộp bài & Chấm phản biện Socratic</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mentor Evaluation Card */}
        {feedback && (
          <div className="mt-6 p-6 bg-slate-950 rounded-2xl border border-emerald-500/30 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  Đánh giá từ Lâm's Growth Mentor
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="text-xs text-slate-400">Điểm đánh giá học tập:</span>
                <span className="text-lg font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  8.5 / 10
                </span>
              </div>
            </div>

            {/* Strengths & Flaws */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  ✓ Điểm đúng & Đáng khen ngợi:
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                  {feedback.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                  ✗ Điểm thiếu sót & Cần cải thiện:
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                  {feedback.flaws.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Socratic Challenge Questions */}
            <div className="p-4 bg-amber-950/20 rounded-xl border border-amber-500/30 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>Câu hỏi Phản biện Socratic (Thách thức tư duy của bạn):</span>
              </span>
              <div className="space-y-2 pt-1">
                {feedback.socraticQuestions.map((q, i) => (
                  <div key={i} className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs sm:text-sm text-slate-200 italic">
                    "{q}"
                  </div>
                ))}
              </div>
            </div>

            {/* Improved Version */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Phiên bản Cải thiện Mẫu (Model Answer for IVIE):
              </span>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 font-mono whitespace-pre-line leading-relaxed">
                {feedback.improvedVersion}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

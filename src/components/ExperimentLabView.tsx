import React, { useState } from 'react';
import {
  FlaskConical,
  Plus,
  Filter,
  CheckCircle2,
  XCircle,
  PlayCircle,
  AlertCircle,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  BarChart2,
  Sliders,
  X,
} from 'lucide-react';
import { Experiment } from '../types/growth';

interface ExperimentLabViewProps {
  experiments: Experiment[];
  onSaveExperiment: (experiment: Experiment) => void;
  onOpenAiMentorWithPrompt?: (prompt: string) => void;
}

export const ExperimentLabView: React.FC<ExperimentLabViewProps> = ({
  experiments,
  onSaveExperiment,
  onOpenAiMentorWithPrompt,
}) => {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('all');
  const [expandedExpId, setExpandedExpId] = useState<string | null>(experiments[0]?.id || null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExp, setEditingExp] = useState<Partial<Experiment> | null>(null);

  const statuses = ['All', 'Backlog', 'Prioritized', 'Running', 'Completed', 'Validated', 'Invalidated', 'Iterate'];
  const stages = ['All', 'Acquisition', 'Activation', 'Retention', 'Monetization', 'Referral'];

  const filteredExperiments = experiments.filter((exp) => {
    const matchStatus = selectedStatusFilter.toLowerCase() === 'all' || exp.status.toLowerCase() === selectedStatusFilter.toLowerCase();
    const matchStage = selectedStageFilter.toLowerCase() === 'all' || exp.targetFunnelStage.toLowerCase() === selectedStageFilter.toLowerCase();
    return matchStatus && matchStage;
  });

  const getStatusBadge = (status: Experiment['status']) => {
    switch (status) {
      case 'Validated':
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">✓ Validated</span>;
      case 'Running':
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">▶ Running</span>;
      case 'Prioritized':
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">★ Prioritized</span>;
      case 'Completed':
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">✓ Completed</span>;
      case 'Invalidated':
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">✕ Invalidated</span>;
      case 'Iterate':
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">⟳ Iterate</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">○ Backlog</span>;
    }
  };

  const handleOpenCreateModal = () => {
    setEditingExp({
      id: `exp-${Date.now()}`,
      name: '',
      status: 'Backlog',
      targetFunnelStage: 'Activation',
      problem: '',
      insight: '',
      hypothesis: '',
      targetSegment: 'Bệnh nhân IVIE',
      proposedChange: '',
      primaryMetric: 'Booking Conversion Rate (%)',
      secondaryMetric: '',
      guardrailMetric: 'No-show rate (< 12%)',
      expectedResult: '',
      durationWeeks: 2,
      ice: { impact: 7, confidence: 7, ease: 7, score: 7.0 },
      rice: { reach: 10000, impact: 2, confidence: 80, effort: 2, score: 8000 },
      decisionRule: 'Nếu Primary Metric tăng >= 15% với p < 0.05, triển khai 100%.',
      createdAt: new Date().toISOString().split('T')[0],
    });
    setIsModalOpen(true);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExp || !editingExp.name || !editingExp.hypothesis) return;

    // Recalculate scores
    const iceScore = Number((((editingExp.ice?.impact || 5) + (editingExp.ice?.confidence || 5) + (editingExp.ice?.ease || 5)) / 3).toFixed(1));
    const riceScore = Math.round(
      ((editingExp.rice?.reach || 1000) * (editingExp.rice?.impact || 1) * ((editingExp.rice?.confidence || 80) / 100)) / (editingExp.rice?.effort || 1)
    );

    const completeExp: Experiment = {
      ...editingExp,
      ice: {
        impact: editingExp.ice?.impact || 5,
        confidence: editingExp.ice?.confidence || 5,
        ease: editingExp.ice?.ease || 5,
        score: iceScore,
      },
      rice: {
        reach: editingExp.rice?.reach || 1000,
        impact: editingExp.rice?.impact || 1,
        confidence: editingExp.rice?.confidence || 80,
        effort: editingExp.rice?.effort || 1,
        score: riceScore,
      },
    } as Experiment;

    onSaveExperiment(completeExp);
    setIsModalOpen(false);
    setEditingExp(null);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-24">
      {/* Header Banner */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <FlaskConical className="w-4 h-4" />
            <span>Continuous Experimentation System</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Growth Experiment Lab (Phòng Thí nghiệm Tăng trưởng)
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Vận hành cỗ máy thử nghiệm khoa học cho IVIE – Bác sĩ ơi: Từ giả thuyết, chấm điểm ICE/RICE, chỉ số bảo hộ (Guardrail Metrics) đến quy tắc ra quyết định (Scale / Kill / Iterate).
          </p>
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Tạo Thử nghiệm Mới</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Trạng thái:</span>
          </span>
          <div className="flex flex-wrap gap-1">
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatusFilter(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedStatusFilter.toLowerCase() === st.toLowerCase()
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Tầng phễu:</span>
          <select
            value={selectedStageFilter}
            onChange={(e) => setSelectedStageFilter(e.target.value)}
            className="bg-slate-950 text-slate-200 text-xs px-2.5 py-1 rounded-lg border border-slate-700 cursor-pointer"
          >
            {stages.map((stg) => (
              <option key={stg} value={stg}>{stg}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Experiment List */}
      <div className="space-y-4">
        {filteredExperiments.length === 0 ? (
          <div className="p-8 text-center text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800">
            Không tìm thấy thử nghiệm nào phù hợp với bộ lọc hiện tại.
          </div>
        ) : (
          filteredExperiments.map((exp) => {
            const isExpanded = expandedExpId === exp.id;
            return (
              <div
                key={exp.id}
                className="bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden transition-all shadow-sm"
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedExpId(isExpanded ? null : exp.id)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1.5 flex-1 min-w-0 pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {getStatusBadge(exp.status)}
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {exp.targetFunnelStage}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        ICE: {exp.ice.score}/10 · RICE: {exp.rice.score.toLocaleString()}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300">
                      {exp.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-[11px] text-slate-400 font-mono">Chỉ số đo lường:</p>
                      <p className="text-xs font-semibold text-emerald-300 truncate max-w-[200px]">
                        {exp.primaryMetric}
                      </p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details: 15 Fields */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-950/80 border-t border-slate-800/80 space-y-5 text-xs sm:text-sm">
                    {/* Problem & Insight */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                          Vấn đề (Problem Statement):
                        </span>
                        <p className="text-slate-200 leading-relaxed">{exp.problem}</p>
                      </div>
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                          Sự thật ngầm hiểu (Customer Insight):
                        </span>
                        <p className="text-slate-200 leading-relaxed">{exp.insight}</p>
                      </div>
                    </div>

                    {/* Scientific Hypothesis */}
                    <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-1.5">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                        Giả thuyết Tăng trưởng Chuẩn mực (Growth Hypothesis):
                      </span>
                      <p className="text-slate-100 font-medium leading-relaxed italic">
                        "{exp.hypothesis}"
                      </p>
                    </div>

                    {/* Change & Segment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Thay đổi can thiệp (Proposed Change):
                        </span>
                        <p className="text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed">
                          {exp.proposedChange}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Phân khúc mục tiêu (Target Segment):
                        </span>
                        <p className="text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed">
                          {exp.targetSegment}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Trio */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[11px] font-mono text-emerald-400 font-bold block mb-1">
                          Primary Metric:
                        </span>
                        <p className="text-xs font-semibold text-white">{exp.primaryMetric}</p>
                        <p className="text-[10px] text-slate-400 mt-1">Kỳ vọng: {exp.expectedResult}</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[11px] font-mono text-blue-400 font-bold block mb-1">
                          Secondary Metric:
                        </span>
                        <p className="text-xs font-semibold text-white">{exp.secondaryMetric || 'N/A'}</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-rose-500/30 bg-rose-950/10">
                        <span className="text-[11px] font-mono text-rose-400 font-bold block mb-1">
                          Guardrail Metric:
                        </span>
                        <p className="text-xs font-semibold text-rose-200">{exp.guardrailMetric}</p>
                      </div>
                    </div>

                    {/* Scores & Decision Rule */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-slate-300 block">
                          Bảng điểm ưu tiên (Scoring):
                        </span>
                        <div className="flex items-center gap-6 font-mono text-xs">
                          <div>
                            <span className="text-slate-400 block text-[10px]">ICE SCORE</span>
                            <span className="text-sm font-bold text-emerald-400">{exp.ice.score}/10</span>
                            <span className="text-[10px] text-slate-400 block">
                              (I:{exp.ice.impact} C:{exp.ice.confidence} E:{exp.ice.ease})
                            </span>
                          </div>
                          <div className="border-l border-slate-800 pl-4">
                            <span className="text-slate-400 block text-[10px]">RICE SCORE</span>
                            <span className="text-sm font-bold text-emerald-400">{exp.rice.score.toLocaleString()}</span>
                            <span className="text-[10px] text-slate-400 block">
                              (R:{exp.rice.reach} I:{exp.rice.impact} C:{exp.rice.confidence}% E:{exp.rice.effort}w)
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                          Quy tắc ra quyết định (Decision Rule):
                        </span>
                        <p className="text-slate-200 leading-relaxed font-mono text-xs">
                          {exp.decisionRule}
                        </p>
                      </div>
                    </div>

                    {/* Actual Result & Learnings (if any) */}
                    {exp.actualResult && (
                      <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
                          Kết quả & Bài học Thực tế (Actual Learning):
                        </span>
                        <p className="text-slate-200 leading-relaxed font-semibold">
                          {exp.actualResult}
                        </p>
                        {exp.learning && (
                          <p className="text-xs text-slate-300 italic">
                            💡 Rút ra: {exp.learning}
                          </p>
                        )}
                        {exp.nextAction && (
                          <p className="text-xs font-mono text-emerald-400">
                            → Hành động tiếp theo: {exp.nextAction}
                          </p>
                        )}
                      </div>
                    )}

                    {/* AI Challenge Trigger */}
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => {
                          if (onOpenAiMentorWithPrompt) {
                            onOpenAiMentorWithPrompt(
                              `Hãy phản biện thử nghiệm này của tôi:\n- Tên: ${exp.name}\n- Giả thuyết: ${exp.hypothesis}\n- Primary Metric: ${exp.primaryMetric}\n- Guardrail Metric: ${exp.guardrailMetric}\nTheo Mentor, thử nghiệm này có điểm yếu nào về mặt thống kê, tâm lý người bệnh hay quy định y tế không?`
                            );
                          }
                        }}
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Hỏi Mentor phản biện thử nghiệm này</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Modal for Creating New Experiment */}
      {isModalOpen && editingExp && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-emerald-400" />
                <span>Tạo Thử nghiệm Tăng trưởng Mới cho IVIE</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Tên Thử nghiệm:</label>
                <input
                  type="text"
                  required
                  value={editingExp.name || ''}
                  onChange={(e) => setEditingExp({ ...editingExp, name: e.target.value })}
                  placeholder="Ví dụ: Nút gọi video khẩn cấp cho Bác sĩ Nhi..."
                  className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Tầng phễu:</label>
                  <select
                    value={editingExp.targetFunnelStage || 'Activation'}
                    onChange={(e) => setEditingExp({ ...editingExp, targetFunnelStage: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                  >
                    <option value="Acquisition">Acquisition</option>
                    <option value="Activation">Activation</option>
                    <option value="Retention">Retention</option>
                    <option value="Monetization">Monetization</option>
                    <option value="Referral">Referral</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Trạng thái:</label>
                  <select
                    value={editingExp.status || 'Backlog'}
                    onChange={(e) => setEditingExp({ ...editingExp, status: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                  >
                    <option value="Backlog">Backlog</option>
                    <option value="Prioritized">Prioritized</option>
                    <option value="Running">Running</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Vấn đề & Insight người dùng:</label>
                <textarea
                  rows={2}
                  required
                  value={editingExp.problem || ''}
                  onChange={(e) => setEditingExp({ ...editingExp, problem: e.target.value })}
                  placeholder="Nêu nỗi đau của bệnh nhân hoặc tỷ lệ rớt phễu..."
                  className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Giả thuyết Tăng trưởng (Hypothesis):</label>
                <textarea
                  rows={3}
                  required
                  value={editingExp.hypothesis || ''}
                  onChange={(e) => setEditingExp({ ...editingExp, hypothesis: e.target.value })}
                  placeholder="Nếu chúng tôi [Thay đổi] cho [Phân khúc], chúng tôi kỳ vọng [Primary Metric] sẽ tăng [Expected Lift] vì [Lý do tâm lý]..."
                  className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Primary Metric:</label>
                  <input
                    type="text"
                    required
                    value={editingExp.primaryMetric || ''}
                    onChange={(e) => setEditingExp({ ...editingExp, primaryMetric: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Guardrail Metric:</label>
                  <input
                    type="text"
                    required
                    value={editingExp.guardrailMetric || ''}
                    onChange={(e) => setEditingExp({ ...editingExp, guardrailMetric: e.target.value })}
                    className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                  />
                </div>
              </div>

              {/* RICE Sliders */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 block">Chấm điểm RICE Score:</span>
                <div className="grid grid-cols-4 gap-2 text-[11px]">
                  <div>
                    <label className="text-slate-400 block">Reach (users):</label>
                    <input
                      type="number"
                      value={editingExp.rice?.reach || 5000}
                      onChange={(e) => setEditingExp({
                        ...editingExp,
                        rice: { ...editingExp.rice!, reach: Number(e.target.value) }
                      })}
                      className="w-full p-1.5 bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block">Impact (0.5–3):</label>
                    <input
                      type="number"
                      step="0.5"
                      value={editingExp.rice?.impact || 2}
                      onChange={(e) => setEditingExp({
                        ...editingExp,
                        rice: { ...editingExp.rice!, impact: Number(e.target.value) }
                      })}
                      className="w-full p-1.5 bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block">Confidence (%):</label>
                    <input
                      type="number"
                      value={editingExp.rice?.confidence || 80}
                      onChange={(e) => setEditingExp({
                        ...editingExp,
                        rice: { ...editingExp.rice!, confidence: Number(e.target.value) }
                      })}
                      className="w-full p-1.5 bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block">Effort (weeks):</label>
                    <input
                      type="number"
                      step="0.5"
                      value={editingExp.rice?.effort || 2}
                      onChange={(e) => setEditingExp({
                        ...editingExp,
                        rice: { ...editingExp.rice!, effort: Number(e.target.value) }
                      })}
                      className="w-full p-1.5 bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Quy tắc ra quyết định (Decision Rule):</label>
                <input
                  type="text"
                  required
                  value={editingExp.decisionRule || ''}
                  onChange={(e) => setEditingExp({ ...editingExp, decisionRule: e.target.value })}
                  placeholder="Ví dụ: Nếu CVR tăng >= 12% với p < 0.05 và No-show < 10%, sẽ scale 100%..."
                  className="w-full p-2.5 bg-slate-950 text-white rounded-lg border border-slate-700"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg cursor-pointer"
                >
                  Lưu Thử nghiệm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

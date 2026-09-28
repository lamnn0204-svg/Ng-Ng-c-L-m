import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Sparkles,
} from 'lucide-react';
import { GROWTH_METRICS } from '../data/metricsData';
import { MetricItem } from '../types/growth';

export const MetricsCheatSheetView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Acquisition', 'Activation', 'Retention', 'Engagement', 'Monetization', 'Experiment'];

  const filteredMetrics = GROWTH_METRICS.filter((metric) => {
    const matchCat = selectedCategory === 'All' || metric.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = metric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      metric.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      metric.formula.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-24">
      {/* Header */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Growth Engineering Knowledge Base</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Growth Metrics Cheat Sheet (Từ điển Chỉ số Tăng trưởng)
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Tất cả các chỉ số quan trọng từ Acquisition, Activation, Retention, Engagement, Monetization đến Experimentation với công thức chuẩn, ví dụ thực tế và các lỗi thường gặp trong bối cảnh IVIE – Bác sĩ ơi.
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên chỉ số (CAC, LTV, CVR, D30...), định nghĩa, công thức..."
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

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMetrics.length === 0 ? (
          <div className="col-span-2 p-8 text-center text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800">
            Không tìm thấy chỉ số nào khớp với từ khóa tìm kiếm.
          </div>
        ) : (
          filteredMetrics.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-4 hover:border-slate-700 transition-colors shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Standard Formula</span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.name}
                </h3>

                {/* Formula Box */}
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-emerald-300">
                  <span className="text-slate-400 text-[10px] block uppercase mb-0.5">Công thức:</span>
                  {item.formula}
                </div>

                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong>Định nghĩa:</strong> {item.definition}
                </p>

                <div className="text-xs text-slate-300 space-y-1">
                  <span className="font-semibold text-slate-400 block">Khi nào sử dụng:</span>
                  <p>{item.whenToUse}</p>
                </div>

                {/* IVIE Example Box */}
                <div className="p-3 bg-emerald-950/20 rounded-lg border border-emerald-500/30 text-xs space-y-1">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Áp dụng vào IVIE – Bác sĩ ơi:</span>
                  </span>
                  <p className="text-slate-200 leading-relaxed font-mono text-[11px]">
                    {item.ivieExample}
                  </p>
                </div>
              </div>

              {/* Common Mistake Alert */}
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-rose-300 flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-400" />
                <span>
                  <strong>Lỗi thường gặp:</strong> {item.commonMistakes}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

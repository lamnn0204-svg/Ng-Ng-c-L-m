import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Repeat,
  DollarSign,
  AlertTriangle,
  Sliders,
  Database,
  ArrowRight,
  Info,
} from 'lucide-react';
import {
  SIMULATED_FUNNEL_STEPS,
  SIMULATED_COHORT_DATA,
  SIMULATED_TRACKING_TAXONOMY,
} from '../data/analyticsSimulatedData';

export const AnalyticsDashboardView: React.FC = () => {
  // Simulator state
  const [trafficVolume, setTrafficVolume] = useState<number>(50000);
  const [installRate, setInstallRate] = useState<number>(20); // 20%
  const [onboardingRate, setOnboardingRate] = useState<number>(18); // 18%
  const [repeatRate, setRepeatRate] = useState<number>(22); // 22%
  const [takeRateFee, setTakeRateFee] = useState<number>(35000); // 35,000 VND

  // Derived calculations
  const totalInstalls = Math.round((trafficVolume * installRate) / 100);
  const activatedBookings = Math.round((totalInstalls * onboardingRate) / 100);
  const repeatBookings = Math.round((activatedBookings * repeatRate) / 100);
  const totalWeeklyConsultations = activatedBookings + repeatBookings;
  const projectedWeeklyRevenue = totalWeeklyConsultations * takeRateFee;

  const getHeatmapColor = (value: number) => {
    if (value >= 30) return 'bg-emerald-600/40 text-emerald-200 border-emerald-500/50';
    if (value >= 20) return 'bg-emerald-700/30 text-emerald-300 border-emerald-600/40';
    if (value >= 15) return 'bg-emerald-800/20 text-emerald-400 border-emerald-700/30';
    if (value >= 10) return 'bg-amber-800/20 text-amber-300 border-amber-700/30';
    return 'bg-slate-900 text-slate-400 border-slate-800';
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-24">
      {/* Top Banner with Clear Disclaimer */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4" />
              <span>Product Analytics & Growth Telemetry</span>
            </span>
            <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
              Simulated Data – Dùng cho mục đích học tập
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            IVIE Growth Dashboard & Chẩn đoán Phễu Dữ liệu
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Bảng điều khiển trực quan hóa phễu Onboarding, ma trận Cohort Retention 8 tuần, Cây chỉ số North Star Metric và từ điển sự kiện Event Tracking chuẩn quốc tế.
          </p>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Weekly Consultations (NSM)</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold font-mono text-white tabular-nums">4.200</p>
          <span className="text-[11px] text-emerald-400 font-mono">+12.4% vs tuần trước</span>
        </div>

        <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Activation Rate (TTV)</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-2xl font-bold font-mono text-white tabular-nums">7.2%</p>
          <span className="text-[11px] text-amber-400 font-mono">Mục tiêu 90 ngày: 14.5%</span>
        </div>

        <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Month 1 Retention (M1)</span>
            <Repeat className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl font-bold font-mono text-white tabular-nums">14.5%</p>
          <span className="text-[11px] text-emerald-400 font-mono">Tăng từ 10.2% sau ZNS</span>
        </div>

        <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Blended CAC</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold font-mono text-white tabular-nums">135.000đ</p>
          <span className="text-[11px] text-slate-400 font-mono">LTV: 450.000đ (3.3x)</span>
        </div>
      </div>

      {/* SECTION 1: FUNNEL DROP-OFF ANALYSIS */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              <span>Phân tích Phễu Onboarding 6 Bước (Funnel Drop-off Analysis)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Quy mô mẫu: 10.000 lượt tải app ban đầu · Tìm kiếm các lỗ hổng rò rỉ chuyển đổi lớn nhất
            </p>
          </div>
          <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20">
            3 Điểm Nghẽn Chí Mạng (Bottlenecks)
          </span>
        </div>

        {/* Funnel Visualizer */}
        <div className="space-y-3">
          {SIMULATED_FUNNEL_STEPS.map((step) => {
            const widthPct = Math.max(10, step.conversionFromStart);
            return (
              <div key={step.step} className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{step.name}</span>
                    {step.isBottleneck && (
                      <span className="text-[10px] font-mono text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                        <AlertTriangle className="w-3 h-3" />
                        Điểm nghẽn rớt {step.dropoffRate}%
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 font-mono text-xs">
                    <span className="text-slate-300 font-bold tabular-nums">
                      {step.users.toLocaleString()} users ({step.conversionFromStart}%)
                    </span>
                    {step.dropoffUsers > 0 && (
                      <span className="text-rose-400 tabular-nums">
                        - {step.dropoffUsers.toLocaleString()} ({step.dropoffRate}% drop)
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      step.isBottleneck ? 'bg-gradient-to-r from-amber-500 to-rose-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Takeaways */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs space-y-1.5">
          <p className="font-bold text-white">Chẩn đoán từ dữ liệu phễu (Growth Diagnostics):</p>
          <p className="text-slate-300">
            • <strong>Rò rỉ lớn nhất 1 (Bước 3):</strong> Bắt buộc nhập OTP trước khi khám phá làm mất 3.400 người dùng (40%). Giải pháp: Dỡ bỏ sign-up wall, áp dụng Progressive Onboarding.
          </p>
          <p className="text-slate-300">
            • <strong>Rò rỉ lớn nhất 2 (Bước 6):</strong> Bắt buộc thanh toán trước tiền viện phí khiến 55% người chốt lịch bỏ cuộc. Giải pháp: Thêm tùy chọn giữ chỗ thanh toán tại viện.
          </p>
        </div>
      </div>

      {/* SECTION 2: 8-WEEK COHORT RETENTION HEATMAP */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Repeat className="w-5 h-5 text-emerald-400" />
              <span>Ma trận Cohort Retention 8 Tuần (Cohort Heatmap)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Quan sát theo hàng ngang (vòng đời) và theo cột dọc (sự tiến bộ của sản phẩm qua các bản cập nhật)
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400">
            *Tuần 4 T8/26: Ra mắt Zalo ZNS nhắc lịch
          </span>
        </div>

        {/* Cohort Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-2.5 font-semibold">Cohort</th>
                <th className="p-2.5 font-semibold text-right">Size</th>
                <th className="p-2.5 font-semibold text-center">Day 0</th>
                <th className="p-2.5 font-semibold text-center">Day 1</th>
                <th className="p-2.5 font-semibold text-center">Day 7</th>
                <th className="p-2.5 font-semibold text-center">Day 14</th>
                <th className="p-2.5 font-semibold text-center">Day 30</th>
                <th className="p-2.5 font-semibold text-center">Day 60</th>
              </tr>
            </thead>
            <tbody>
              {SIMULATED_COHORT_DATA.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-800/60 hover:bg-slate-800/30">
                  <td className="p-2.5 text-white font-medium whitespace-nowrap">{row.cohort}</td>
                  <td className="p-2.5 text-right text-slate-300 tabular-nums">{row.size.toLocaleString()}</td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 rounded bg-emerald-600/40 text-emerald-200 border border-emerald-500/40 tabular-nums">
                      100%
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 rounded border tabular-nums ${getHeatmapColor(row.day1)}`}>
                      {row.day1}%
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 rounded border tabular-nums ${getHeatmapColor(row.day7)}`}>
                      {row.day7}%
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 rounded border tabular-nums ${getHeatmapColor(row.day14)}`}>
                      {row.day14}%
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 rounded border tabular-nums ${getHeatmapColor(row.day30)}`}>
                      {row.day30}%
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-1 rounded border tabular-nums ${getHeatmapColor(row.day60)}`}>
                      {row.day60}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
          <p className="font-bold text-white">Cách đọc bảng phân tích này khi phỏng vấn:</p>
          <p>
            • Nhìn vào cột <strong>Day 30 (từ trên xuống dưới)</strong>: Con số tăng liên tục từ 10.2% lên 24.8%. Đây là bằng chứng thép chứng minh tính năng Zalo ZNS và Onboarding mới đã "nhấc bổng" đường cong retention qua từng thế hệ.
          </p>
        </div>
      </div>

      {/* SECTION 3: INTERACTIVE NORTH STAR METRIC SIMULATOR */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-emerald-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-emerald-400" />
              <span>Interactive KPI Tree Simulator (Mô phỏng Đòn bẩy Tăng trưởng)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Kéo các thanh trượt Input Metrics để quan sát tác động lan truyền đến North Star Metric & Doanh thu
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Dynamic Model
          </span>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Lưu lượng truy cập (Weekly Qualified Traffic):</span>
                <span className="font-bold font-mono text-emerald-400">{trafficVolume.toLocaleString()} visitors</span>
              </div>
              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={trafficVolume}
                onChange={(e) => setTrafficVolume(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Tỷ lệ Cài đặt App (Visitor-to-Install CVR):</span>
                <span className="font-bold font-mono text-emerald-400">{installRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={installRate}
                onChange={(e) => setInstallRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Tỷ lệ Kích hoạt Khám đầu (Activation Rate):</span>
                <span className="font-bold font-mono text-emerald-400">{onboardingRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                step="1"
                value={onboardingRate}
                onChange={(e) => setOnboardingRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Tỷ lệ Bệnh nhân Tái khám (Repeat Booking Rate):</span>
                <span className="font-bold font-mono text-emerald-400">{repeatRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="1"
                value={repeatRate}
                onChange={(e) => setRepeatRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Output Box */}
          <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">
            <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
              Dự phóng Kết quả Tăng trưởng Hàng tuần
            </span>

            <div className="space-y-3">
              <div>
                <span className="text-xs text-slate-400 block">Weekly Completed Consultations (NSM):</span>
                <span className="text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  {totalWeeklyConsultations.toLocaleString()} ca khám/tuần
                </span>
                <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                  ({activatedBookings.toLocaleString()} ca mới + {repeatBookings.toLocaleString()} ca tái khám)
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-slate-400 block">Doanh thu Phí dịch vụ Ước tính:</span>
                <span className="text-xl font-bold font-mono text-white tabular-nums">
                  {projectedWeeklyRevenue.toLocaleString()} VNĐ / tuần
                </span>
                <span className="text-[11px] text-slate-400 font-mono block">
                  (~ {((projectedWeeklyRevenue * 4) / 1000000).toFixed(0)} triệu VNĐ / tháng)
                </span>
              </div>
            </div>

            <p className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20 italic">
              💡 Thử nghiệm: Chỉ cần tăng Activation Rate từ 7% lên 18%, số ca khám thành công tăng hơn gấp đôi mà không cần chi thêm tiền mua traffic!
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: EVENT TRACKING TAXONOMY */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-400" />
              <span>Event Tracking Taxonomy (Bảng Chuẩn hóa Đo lường Sự kiện)</span>
            </h2>
            <p className="text-xs text-slate-400">
              Quy chuẩn đặt tên Object_Action syntax phục vụ GA4, Amplitude & AppsFlyer
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            10 Cốt lõi
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="p-2.5">Event Name</th>
                <th className="p-2.5">Phễu</th>
                <th className="p-2.5">Hành động kích hoạt (Trigger)</th>
                <th className="p-2.5">Parameters (Thuộc tính đính kèm)</th>
              </tr>
            </thead>
            <tbody>
              {SIMULATED_TRACKING_TAXONOMY.map((item, i) => (
                <tr key={i} className="border-b border-slate-800/60 hover:bg-slate-800/30">
                  <td className="p-2.5 font-mono text-emerald-400 font-bold">{item.eventName}</td>
                  <td className="p-2.5 font-mono text-slate-300">{item.funnelStage}</td>
                  <td className="p-2.5 text-slate-300 leading-relaxed">{item.triggerDescription}</td>
                  <td className="p-2.5 font-mono text-[11px] text-slate-400">
                    {item.parameters.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {
  Building2,
  ShieldCheck,
  Users,
  Stethoscope,
  HeartPulse,
  Activity,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface IvieDeepDiveViewProps {
  onNavigateToPortfolio: () => void;
}

export const IvieDeepDiveView: React.FC<IvieDeepDiveViewProps> = ({
  onNavigateToPortfolio,
}) => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-24">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Building2 className="w-4 h-4" />
            <span>Case Study Xuyên suốt 30 Ngày</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            IVIE – Bác sĩ ơi: Hồ sơ Sản phẩm & Bối cảnh Tăng trưởng
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Nền tảng Y tế Số hàng đầu kết nối bệnh nhân với hơn 50 bệnh viện tuyến đầu và 2.000 bác sĩ chuyên khoa sâu tại Việt Nam. Toàn bộ bài học lý thuyết trong bootcamp đều được áp dụng trực tiếp vào sản phẩm này.
          </p>
        </div>

        <button
          onClick={onNavigateToPortfolio}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors cursor-pointer shrink-0"
        >
          <span>Xem Case Study 21 mục</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* DATA TRANSPARENCY PROTOCOL BANNER (Rule XIV) */}
      <div className="p-5 bg-amber-950/20 rounded-2xl border border-amber-500/40 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Nguyên tắc Minh bạch Dữ liệu (Data Transparency Protocol)</span>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed">
          Theo nguyên tắc trung thực nghề nghiệp và bảo mật thông tin doanh nghiệp, toàn bộ dữ liệu trong chương trình được phân loại minh bạch thành 4 cấp độ:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1 text-xs font-mono">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">01. REAL DATA</span>
            <span className="text-slate-300 text-[11px]">Thông tin công khai của IVIE (tên viện, danh sách bác sĩ, tính năng thực).</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-blue-400 font-bold block mb-1">02. ASSUMPTION</span>
            <span className="text-slate-300 text-[11px]">Các giả định học thuật về thị trường y tế số tại Việt Nam.</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-purple-400 font-bold block mb-1">03. HYPOTHESIS</span>
            <span className="text-slate-300 text-[11px]">Các giả thuyết thử nghiệm tăng trưởng do học viên tự thiết kế.</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold block mb-1">04. SIMULATED DATA</span>
            <span className="text-slate-300 text-[11px]">Dữ liệu số liệu phễu/cohort giả lập chuẩn hóa phục vụ học tập.</span>
          </div>
        </div>
      </div>

      {/* 4 Core Services Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-emerald-400" />
          <span>4 Trụ cột Dịch vụ Cốt lõi của IVIE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>1. Đặt lịch khám tại Bệnh viện (Hospital Booking)</span>
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Dịch vụ Mũi nhọn
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Giải quyết nỗi đau chen lấn tại viện công: Bệnh nhân chọn đúng bác sĩ, đăng ký ngày giờ khám, nhận mã số thứ tự điện tử ưu tiên và chỉ dẫn quầy tiếp đón riêng của IVIE tại sảnh viện.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Đối tác: Bệnh viện Hữu nghị Việt Đức, Bệnh viện Bạch Mai, Bệnh viện E, Bệnh viện ĐH Y...
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>2. Tư vấn Bác sĩ Trực tuyến 24/7 (Telemedicine)</span>
              </h3>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                Tăng trưởng Cao
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Gọi video 1-1 với bác sĩ chuyên khoa sâu: Hỗ trợ khẩn cấp lúc nửa đêm cho trẻ nhỏ, tư vấn da liễu qua hình ảnh, tư vấn tâm lý và giải đáp chỉ định xét nghiệm hậu khám.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Cam kết: Kết nối bác sĩ trực trong 5 phút · Đơn thuốc điện tử hợp chuẩn Bộ Y tế.
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <span>3. Hồ sơ Sức khỏe Gia đình (Electronic Health Records)</span>
              </h3>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                Động cơ Giữ chân
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Chiếc két sắt y tế trọn đời: Lưu trữ kết quả xét nghiệm máu, phim chụp X-quang/MRI, sổ tiêm chủng của con và tiền sử dị ứng thuốc cho cả 3 thế hệ trong gia đình.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Giá trị: Tạo rào cản chuyển đổi (Switching Cost) cực cao, gắn bó trọn đời với nền tảng.
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-amber-400" />
                <span>4. Dịch vụ Y tế Bổ trợ tại nhà (Home Care & Testing)</span>
              </h3>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                Gia tăng LTV
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Điều dưỡng đến lấy mẫu xét nghiệm tận nhà lúc 6h30 sáng trước giờ đi làm, giao thuốc theo đơn hỏa tốc trong 2 giờ, và gói hội viên gia đình chăm sóc sức khỏe chủ động.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Đòn bẩy: Biên lợi nhuận gộp 35%, tăng giá trị đơn hàng trung bình (AOV) từ 200k lên 480k.
            </div>
          </div>
        </div>
      </div>

      {/* Target Personas */}
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-400" />
          <span>3 Chân dung Khách hàng Trọng tâm (Core Target Personas)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">Persona 1: Mẹ Bỉm Mai</span>
              <span className="text-[11px] font-mono text-slate-400">29 tuổi · Hà Nội</span>
            </div>
            <p className="text-xs text-slate-200">
              Có con 18 tháng tuổi. Nhu cầu lớn nhất là bác sĩ Nhi trực đêm tư vấn sốt và theo dõi sổ tiêm chủng định kỳ.
            </p>
            <span className="text-[11px] text-emerald-300 font-mono block">
              Dịch vụ: Telemedicine ban đêm + Sổ tiêm
            </span>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400">Persona 2: Anh Tuấn</span>
              <span className="text-[11px] font-mono text-slate-400">34 tuổi · TP.HCM</span>
            </div>
            <p className="text-xs text-slate-200">
              Đặt lịch khám tim mạch và cơ xương khớp cho bố mẹ 65 tuổi ở quê. Cần sự hướng dẫn tiếp đón chu đáo tại bệnh viện.
            </p>
            <span className="text-[11px] text-blue-300 font-mono block">
              Dịch vụ: Đặt khám viện công + Tiếp đón O2O
            </span>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-400">Persona 3: Chị Hương</span>
              <span className="text-[11px] font-mono text-slate-400">27 tuổi · Dân văn phòng</span>
            </div>
            <p className="text-xs text-slate-200">
              Bận rộn giờ hành chính. Cần tư vấn da liễu ngoài giờ và xét nghiệm máu lấy mẫu tại nhà sáng sớm.
            </p>
            <span className="text-[11px] text-purple-300 font-mono block">
              Dịch vụ: Khám online ngoài giờ + Xét nghiệm nhà
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

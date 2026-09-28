import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquareCode,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Lightbulb,
  Building2,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';
import { UserProgress } from '../types/growth';

interface Message {
  id: string;
  sender: 'mentor' | 'user';
  text: string;
  timestamp: string;
  isSocraticPrompt?: boolean;
}

interface AiMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  initialPrompt?: string;
}

export const AiMentorModal: React.FC<AiMentorModalProps> = ({
  isOpen,
  onClose,
  progress,
  initialPrompt,
}) => {
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'mentor',
      text: `Chào Ngô Ngọc Lâm! Tôi là Growth Mentor cá nhân của bạn.\n\nTôi ở đây để đồng hành cùng bạn trong hành trình 30 ngày chuyển dịch từ Brand & Communication sang Growth Marketing thực chiến, lấy sản phẩm IVIE – Bác sĩ ơi làm case study cốt lõi.\n\n💡 Nguyên tắc làm việc của tôi:\n1. Tôi sẽ không vội đưa cho bạn đáp án có sẵn nếu bạn chưa tự mình động não.\n2. Tôi sẽ dùng phương pháp Socratic để đặt câu hỏi gợi mở, thử thách các giả định và giúp bạn tự tìm ra câu trả lời.\n3. Mọi bài học và chỉ số chúng ta thảo luận đều phải quy chiếu về bài toán thực tế của IVIE.\n\nHôm nay bạn đang học Ngày ${progress.currentDay}. Bạn muốn thảo luận về điểm nghẽn nào, hay muốn tôi phản biện một giả thuyết tăng trưởng nào?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Activation của IVIE nên là gì?',
    'Phản biện bài tập thực hành hôm nay của tôi',
    'Làm sao để giải thích chuyển từ Brand sang Growth khi phỏng vấn?',
    'Mock Interview: Hãy phỏng vấn tôi một câu hỏi tình huống về IVIE!',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Intelligent Socratic Response Generator based on query keywords
    setTimeout(() => {
      let mentorResponse = '';
      const lower = query.toLowerCase();

      if (lower.includes('activation') && lower.includes('ivie')) {
        mentorResponse = `Trước khi chúng ta cùng nhau chốt một Activation Event chính thức cho IVIE, tôi muốn đặt ngược lại cho Lâm một câu hỏi phản biện Socratic:\n\n🤔 "Theo bạn, hành động cụ thể nào của người bệnh trên ứng dụng IVIE – Bác sĩ ơi chứng minh họ đã thực sự NHẬN ĐƯỢC GIÁ TRỊ CỐT LÕI (Experienced Value) đầu tiên, chứ không chỉ là hoàn thành một thủ tục kỹ thuật như gõ số điện thoại hay nhập mã OTP?"\n\nHãy thử đối chiếu 3 hành vi sau và cho tôi biết cái nào mới là Aha Moment thật sự:\n1. Đăng ký tài khoản thành công.\n2. Tìm kiếm và bấm xem hồ sơ một bác sĩ Nhi.\n3. Đặt lịch khám và nhận được phiếu khám có số thứ tự ưu tiên hoặc kết nối cuộc gọi video trực tuyến với bác sĩ.\n\nTheo Lâm, tại sao hành vi số 3 mới tạo ra sự cam kết tâm lý cao nhất?`;
      } else if (lower.includes('phản biện') || lower.includes('chấm bài')) {
        mentorResponse = `Rất tốt! Tinh thần dám đưa giải pháp ra để bị phản biện chính là phẩm chất số 1 của một Growth Marketer thực thụ.\n\nĐể tôi chấm và thử thách bài làm của bạn:\n\n✓ Điểm mạnh:\n- Bạn đã nắm được vấn đề rớt phễu tại bước Onboarding.\n- Giả thuyết có tính định lượng và gắn với chỉ số chuyển đổi.\n\n⚠️ Điểm cần tôi phản biện (Socratic Challenge):\n1. "Bạn đề xuất dỡ bỏ màn hình đăng ký OTP để người dùng tự do xem lịch bác sĩ trước. Vậy bạn sẽ xử lý thế nào với rủi ro người dùng đặt lịch ảo (spam booking) làm kín lịch của bác sĩ mà không đến khám?"\n2. "Đâu là Guardrail Metric bạn sẽ cài đặt để phát hiện sớm việc hệ thống bị tấn công spam lịch hẹn?"\n\nHãy chia sẻ cách bạn thiết lập hàng rào bảo vệ (Guardrail) cho giải pháp này nhé!`;
      } else if (lower.includes('brand') && lower.includes('growth')) {
        mentorResponse = `Đây là câu hỏi cốt tử trong buổi phỏng vấn của Lâm! Tuyệt đối không bao giờ nói: "Em thấy làm Brand chán quá nên muốn đổi sang Growth" hay "Em muốn học chạy ads".\n\nHãy đóng khung câu chuyện của bạn theo công thức Superpower:\n\n"Em xuất thân từ Brand & Communication, nơi em đã tôi luyện năng lực thấu cảm tâm lý sâu sắc và kỹ năng kể chuyện thương hiệu. Khi chuyển sang Growth, em nhận ra hầu hết mọi thử nghiệm thất bại là do thiếu sự thấu hiểu người dùng thật. Kết hợp thế mạnh thấu cảm của Brand với phương pháp luận dữ liệu toàn phễu (Full-funnel AARRR) và tư duy thử nghiệm khoa học đã giúp em tạo ra những giả thuyết tăng trưởng có tỷ lệ chiến thắng cao hơn hẳn."\n\nLâm hãy thử nói lại đoạn này bằng văn phong tự nhiên nhất của mình xem nào!`;
      } else if (lower.includes('mock interview') || lower.includes('phỏng vấn')) {
        mentorResponse = `Được rồi! Hãy bắt đầu Mock Interview ngay bây giờ.\n\nTôi đang đóng vai Head of Growth tại IVIE và đây là câu hỏi phỏng vấn dành cho bạn:\n\n🎯 "Chào Lâm, dữ liệu tuần qua cho thấy 44% người dùng đã chọn xong bác sĩ và giờ khám nhưng lại bỏ cuộc ở bước thanh toán trước tiền viện phí. Nếu bạn là Growth Lead, bạn sẽ đưa ra 2 giả thuyết nào để tháo gỡ điểm nghẽn này và bạn sẽ thiết kế A/B test như thế nào?"\n\nXin mời bạn trả lời theo đúng khung: Insight → Hypothesis → Proposed Change → Primary & Guardrail Metrics!`;
      } else {
        mentorResponse = `Câu hỏi rất hay! Để cùng giải quyết vấn đề này theo tư duy Growth cho IVIE:\n\n1. Đầu tiên, hãy xác định xem vấn đề này thuộc tầng nào trong phễu AARRR (Acquisition, Activation, Retention, Revenue hay Referral)?\n2. Thứ hai, bạn có thể đo lường nó bằng chỉ số định lượng nào (Primary Metric)?\n3. Và quan trọng nhất: Người bệnh có thực sự cảm thấy yên tâm và được giải quyết nỗi đau hay không?\n\nBạn nghĩ sao về góc nhìn này trong bối cảnh sản phẩm IVIE?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `men-${Date.now()}`,
          sender: 'mentor',
          text: mentorResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-3xl w-full h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">Lâm's Growth Mentor</h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Socratic Mode Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Instructional Designer · Career Coach · IVIE Growth Specialist
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-thin shrink-0">
          <span className="text-[10px] uppercase font-mono text-slate-400 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Gợi ý:
          </span>
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(p)}
              className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-800 shrink-0 transition-colors cursor-pointer truncate max-w-[240px]"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Messages List Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
          {messages.map((msg) => {
            const isMentor = msg.sender === 'mentor';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isMentor ? 'justify-start' : 'justify-end'}`}
              >
                {isMentor && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    GM
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    isMentor
                      ? 'bg-slate-950 border border-slate-800 text-slate-100 rounded-tl-sm'
                      : 'bg-emerald-600 text-white rounded-tr-sm font-medium'
                  }`}
                >
                  {msg.text}
                  <span className={`text-[10px] block mt-1.5 font-mono ${isMentor ? 'text-slate-400' : 'text-emerald-200'}`}>
                    {msg.timestamp}
                  </span>
                </div>
                {!isMentor && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    NL
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 pl-9">
              <Bot className="w-4 h-4 animate-pulse text-emerald-400" />
              <span>Mentor đang suy ngẫm câu hỏi phản biện...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Đặt câu hỏi, nộp giả thuyết, hoặc nhờ Mentor phản biện về IVIE..."
              className="flex-1 p-2.5 bg-slate-900 text-white rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] text-slate-400 mt-1.5 text-center font-mono">
            Lâm's Growth Mentor luôn đặt câu hỏi Socratic trước khi đưa ra gợi ý chuyên môn.
          </p>
        </div>
      </div>
    </div>
  );
};

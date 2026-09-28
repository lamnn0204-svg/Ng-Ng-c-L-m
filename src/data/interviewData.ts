import { InterviewQuestionItem } from '../types/growth';

export const INTERVIEW_QUESTIONS: InterviewQuestionItem[] = [
  // Category 1: Mindset & Fundamentals
  {
    id: 1,
    category: 'Mindset & Fundamentals',
    question: 'Theo bạn, sự khác biệt căn bản nhất giữa một Marketer truyền thống và một Growth Marketer là gì?',
    interviewerIntent: 'Đánh giá xem ứng viên có thực sự hiểu bản chất của Growth hay chỉ xem Growth như một cái mác mới cho người chạy ads.',
    answerFramework: 'So sánh trên 4 trục: Phạm vi trách nhiệm phễu (Top-of-funnel vs Full-funnel), Phương pháp luận (Campaign-based vs Continuous Experimentation), Định hướng dữ liệu (Vanity vs Business Metrics), và Sự gắn kết với Sản phẩm (External Marketing vs Product-led Growth).',
    sampleAnswer: 'Marketer truyền thống thường tập trung vào phần trên của phễu (Awareness, Brand Sentiment) theo từng chiến dịch có điểm bắt đầu và kết thúc. Ngược lại, Growth Marketer chịu trách nhiệm toàn phễu (Acquisition, Activation, Retention, Revenue, Referral). Chúng tôi vận hành theo chu kỳ sprint thử nghiệm khoa học hàng tuần, tối ưu hóa các đòn bẩy sản phẩm để gia tăng giá trị kinh doanh dài hạn dựa trên dữ liệu định lượng.',
    ivieHealthcareAngle: 'Tại IVIE, một Marketer truyền thống sẽ hài lòng khi MV ca nhạc giới thiệu app đạt 1 triệu view. Một Growth Marketer sẽ chỉ quan tâm có bao nhiêu người thực sự đặt lịch khám đầu tiên thành công và có quay lại tái khám sau 30 ngày hay không.',
    pitfallsToAvoid: [
      'Chỉ trả lời "Growth Marketer biết chạy ads rẻ hơn hoặc biết code".',
      'Chê bai Brand Marketing vô dụng thay vì nhận ra Brand và Growth bổ trợ lẫn nhau.',
    ],
  },
  {
    id: 2,
    category: 'Mindset & Fundamentals',
    question: 'North Star Metric (NSM) là gì? Nếu là Growth Marketer của IVIE – Bác sĩ ơi, bạn sẽ chọn NSM là gì và tại sao?',
    interviewerIntent: 'Kiểm tra tư duy chiến lược, khả năng xác định giá trị cốt lõi của sản phẩm và tư duy tránh các chỉ số bề nổi (Vanity Metrics).',
    answerFramework: 'Định nghĩa NSM (Giao thoa giữa Giá trị người dùng nhận được và Lợi ích kinh doanh bền vững) → Đề xuất NSM cho IVIE → Phân tích vì sao không chọn Doanh thu thuần hay Lượt tải app.',
    sampleAnswer: 'North Star Metric là chỉ số then chốt ghi nhận khoảnh khắc người dùng trải nghiệm được giá trị cốt lõi giải quyết nỗi đau của họ. Với IVIE, tôi đề xuất NSM là "Weekly Completed Consultations" (WCC - Số ca tư vấn & khám bệnh thành công hàng tuần). Chỉ số này phản ánh đồng thời: Bệnh nhân nhận được giải pháp y tế thực tế, Bác sĩ được tối ưu hóa lịch trực, và IVIE phát sinh doanh thu từ phí dịch vụ.',
    ivieHealthcareAngle: 'Không chọn "Số lượt tải app" vì đó là vanity metric. Không chọn "Doanh thu hàng tháng" vì doanh thu là lagging metric không phản ánh được chất lượng dịch vụ y tế hay sự hài lòng của bệnh nhân.',
    pitfallsToAvoid: [
      'Chọn chỉ số doanh thu thuần túy mà không giải thích được mối liên kết với trải nghiệm người dùng.',
      'Chọn chỉ số quá dễ thao túng (như số lượt tìm kiếm bác sĩ).',
    ],
  },
  {
    id: 3,
    category: 'Mindset & Fundamentals',
    question: 'Hãy giải thích khái niệm "The Leaky Bucket" (Thùng nước thủng) và cách bạn xử lý khi ngân sách tiếp thị bị cắt giảm?',
    interviewerIntent: 'Kiểm tra nguyên tắc ưu tiên Retention trước Acquisition trong tư duy tăng trưởng.',
    answerFramework: 'Ẩn dụ thùng nước thủng (Đáy thùng là Retention, Nước rót vào là Acquisition) → Tác động khi cắt ngân sách → Chiến lược tập trung vá đáy thùng trước khi mở rộng.',
    sampleAnswer: 'Nếu sản phẩm có tỷ lệ rời bỏ cao (thùng thủng đáy), mọi chi phí đổ vào quảng cáo tải app đều bị lãng phí. Khi ngân sách tiếp thị bị cắt giảm, thay vì cố gắng tìm traffic giá rẻ, tôi sẽ dồn 80% nỗ lực vào: 1. Tối ưu Onboarding để nâng Activation Rate; 2. Triển khai CRM tự động để chăm sóc và tái kích hoạt tệp người dùng cũ có sẵn; 3. Xây dựng vòng lặp chia sẻ tự nhiên để có organic traffic.',
    ivieHealthcareAngle: 'Bệnh nhân đã khám tại IVIE có chi phí tái khám rẻ hơn 5 lần so với việc chạy quảng cáo tìm bệnh nhân mới toanh. Tối ưu hóa chu kỳ tái khám tự động qua Zalo là cách tốt nhất để tăng trưởng khi bị cắt ngân sách.',
    pitfallsToAvoid: [
      'Đề xuất chạy quảng cáo trên các kênh giá rẻ không có chất lượng.',
      'Hoảng loạn và cắt giảm toàn bộ các thử nghiệm sản phẩm.',
    ],
  },
  {
    id: 4,
    category: 'Mindset & Fundamentals',
    question: 'Input Metric khác Output Metric như thế nào? Cho ví dụ cụ thể tại IVIE.',
    interviewerIntent: 'Đánh giá khả năng phân rã mục tiêu vĩ mô thành các hành vi vi mô có thể hành động được (Actionable Drivers).',
    answerFramework: 'Định nghĩa Output (Kết quả sau cùng, Lagging, không thể tác động trực tiếp) vs Input (Hành vi đầu vào, Leading, có thể can thiệp được hàng ngày) → Minh họa bằng mối quan hệ hàm số.',
    sampleAnswer: 'Output Metric là kết quả sau cùng mà doanh nghiệp muốn thấy (như Doanh thu hay Số ca khám thành công). Bạn không thể ra lệnh cho doanh thu tăng vào ngày mai. Bạn chỉ có thể tác động vào các Input Metrics: số bác sĩ có lịch trống, tỷ lệ form đặt khám không lỗi, hoặc thời gian phản hồi tin nhắn của điều dưỡng.',
    ivieHealthcareAngle: 'Tại IVIE: Output = Weekly Completed Bookings. Inputs gồm: 1. Số lượt tìm kiếm theo chuyên khoa; 2. Tỷ lệ hồ sơ bác sĩ có lịch khám mở; 3. Tỷ lệ hoàn thành bước chọn giờ khám; 4. Tỷ lệ cuộc gọi nhắc hẹn thành công.',
    pitfallsToAvoid: [
      'Giao Output Metric làm KPI hàng ngày cho nhân viên cấp thực thi.',
      'Không chứng minh được mối liên hệ nhân quả giữa Input và Output.',
    ],
  },
  {
    id: 5,
    category: 'Mindset & Fundamentals',
    question: 'Product-led Growth (PLG) là gì và có thể áp dụng PLG cho một ứng dụng y tế như IVIE như thế nào?',
    interviewerIntent: 'Kiểm tra hiểu biết về xu hướng tăng trưởng dựa trên giá trị tự thân của sản phẩm thay vì chỉ dựa vào Sales/Marketing đẩy.',
    answerFramework: 'Định nghĩa PLG (Sản phẩm tự thúc đẩy việc thu hút, kích hoạt và giữ chân người dùng) → Áp dụng vào sản phẩm y tế vốn có rào cản tâm lý cao.',
    sampleAnswer: 'PLG là chiến lược lấy chính trải nghiệm sản phẩm làm động cơ tăng trưởng chính. Tại IVIE, PLG được hiện thực hóa qua: 1. Trải nghiệm không rào cản (cho tra cứu triệu chứng và xem lịch bác sĩ không cần đăng nhập); 2. Giá trị tích lũy (Hồ sơ bệnh án điện tử cả gia đình tiện lợi đến mức người dùng tự cài và mời người thân dùng chung); 3. Kết quả xét nghiệm trả tự động qua app kích thích người bệnh mở app nhiều lần.',
    ivieHealthcareAngle: 'Tính năng Sổ tiêm chủng điện tử tự động tính ngày tiêm nhắc lại cho bé là một tính năng PLG kinh điển: Bản thân tính năng tự nhắc người mẹ quay lại dùng app mà IVIE không tốn 1 đồng quảng cáo nào.',
    pitfallsToAvoid: [
      'Nghĩ rằng PLG là cắt bỏ hoàn toàn đội ngũ Marketing.',
      'Áp dụng PLG một cách máy móc cho các ca bệnh hiểm nghèo cần sự tư vấn con người trực tiếp.',
    ],
  },

  // Category 2: Funnel & Metrics
  {
    id: 6,
    category: 'Funnel & Metrics',
    question: 'Hãy giải thích công thức tính Unit Economics (LTV và CAC). Tỷ lệ LTV:CAC lành mạnh là bao nhiêu?',
    interviewerIntent: 'Đo lường năng lực tài chính và khả năng đánh giá tính khả thi kinh tế của ứng viên.',
    answerFramework: 'Công thức CAC → Công thức LTV (Dựa trên ARPU, Gross Margin, Lifespan/Churn) → Tỷ lệ vàng LTV:CAC (>= 3:1) và Thời gian hoàn vốn (Payback Period < 12 tháng).',
    sampleAnswer: 'CAC là tổng chi phí để có 1 khách hàng mới tạo giá trị. LTV là tổng lợi nhuận gộp ước tính khách hàng mang lại trong suốt vòng đời: LTV = (ARPU × Gross Margin %) / Churn Rate. Một tỷ lệ lành mạnh là LTV:CAC >= 3:1 với thời gian thu hồi vốn dưới 12 tháng. Nếu < 1:1, doanh nghiệp đang đốt tiền lỗ; nếu > 5:1, có thể công ty đang đầu tư quá thận trọng và bỏ lỡ cơ hội mở rộng quy mô.',
    ivieHealthcareAngle: 'Với IVIE, nếu một bệnh nhân khám bệnh mùa vụ chỉ dùng 1 lần (LTV thấp), CAC phải được kiểm soát rất chặt chẽ (< 50k). Nhưng với bệnh nhân mạn tính (tiểu đường, tim mạch) khám hàng tháng, LTV có thể đạt 800k, cho phép IVIE chấp nhận CAC lên tới 200k.',
    pitfallsToAvoid: [
      'Tính LTV bằng Doanh thu thuần thay vì Lợi nhuận gộp.',
      'Tính CAC bằng cách chia cho lượt tải app thay vì khách hàng trả phí thực tế.',
    ],
  },
  {
    id: 7,
    category: 'Funnel & Metrics',
    question: 'Nếu tỷ lệ chuyển đổi (CVR) của phễu đặt khám IVIE đột ngột giảm 35% trong tuần qua, bạn sẽ tiến hành điều tra như thế nào?',
    interviewerIntent: 'Kiểm tra kỹ năng giải quyết vấn đề (Problem Solving) và tư duy chẩn đoán dữ liệu có hệ thống.',
    answerFramework: 'Phương pháp phân rã chẩn đoán: 1. Xác thực dữ liệu (Tracking bug?) → 2. Phân rã theo bước phễu (Bước nào bị gãy?) → 3. Phân khúc (Segment drill-down: iOS/Android, Kênh nào, Khu vực nào?) → 4. Kiểm tra yếu tố ngoại cảnh (Lễ tết, đối thủ, thời tiết).',
    sampleAnswer: 'Tôi sẽ tiếp cận theo 4 bước điều tra logic: Bước 1: Kiểm tra tính toàn vẹn của dữ liệu (Tracking bug, lỗi SDK cập nhật bản mới). Bước 2: Bóc tách phễu từng bước để khoanh vùng điểm rớt cụ thể (rớt ở trang tìm kiếm, trang chọn lịch, hay cổng thanh toán?). Bước 3: Cắt lát dữ liệu theo phân khúc (Chỉ bị trên iOS hay cả Android? Kênh quảng cáo nào bị giảm chất lượng?). Bước 4: Kiểm tra sự cố hệ thống (Cổng thanh toán lỗi? Bác sĩ nghỉ lễ hàng loạt?).',
    ivieHealthcareAngle: 'Trong y tế, một nguyên nhân thực tế rất phổ biến là bệnh viện đối tác đột ngột thay đổi lịch trực của các bác sĩ trưởng khoa hoặc cổng thanh toán ngân hàng bảo trì.',
    pitfallsToAvoid: [
      'Vội vã kết luận do đội chạy quảng cáo làm kém.',
      'Đề xuất chạy thêm ads để bù vào số lượng sụt giảm mà không tìm nguyên nhân gốc.',
    ],
  },
  {
    id: 8,
    category: 'Funnel & Metrics',
    question: 'Sự khác biệt giữa Blended CAC và Paid CAC là gì? Khi nào nên sử dụng chỉ số nào?',
    interviewerIntent: 'Đánh giá khả năng nhìn nhận chi phí tiếp thị trung thực, không tự lừa dối bản thân bằng organic traffic.',
    answerFramework: 'Định nghĩa Paid CAC (Chỉ tính chi phí ads / Người dùng từ kênh trả phí) vs Blended CAC (Tổng chi phí / Toàn bộ người dùng mới kể cả organic).',
    sampleAnswer: 'Paid CAC = Chi phí quảng cáo / Khách hàng trực tiếp mang về từ quảng cáo. Blended CAC = Tổng chi phí tiếp thị / Toàn bộ khách hàng mới (cả trả phí lẫn tự nhiên). Khi tối ưu từng kênh và quyết định tăng/giảm ngân sách (Bid/Budget), bạn BẮT BUỘC phải dùng Paid CAC. Khi báo cáo sức khỏe tài chính tổng thể lên Hội đồng quản trị, bạn dùng Blended CAC.',
    ivieHealthcareAngle: 'Nếu IVIE được truyền thông tự nhiên nhắc đến trên thời sự VTV và lượng tải app tự nhiên tăng vọt, Blended CAC sẽ giảm rất đẹp. Nhưng nếu Marketer dựa vào đó để báo cáo rằng chiến dịch Facebook Ads đang chạy rất rẻ là tự lừa dối mình.',
    pitfallsToAvoid: [
      'Dùng Blended CAC để biện minh cho việc tăng ngân sách cho một kênh quảng cáo đang có Paid CAC bị lỗ.',
    ],
  },
  {
    id: 9,
    category: 'Funnel & Metrics',
    question: 'Aha Moment là gì? Làm thế nào bạn xác định được Aha Moment cho ứng dụng IVIE bằng dữ liệu?',
    interviewerIntent: 'Kiểm tra năng lực phân tích dữ liệu hành vi tương quan (Correlation analysis) để tìm ra điểm kích hoạt.',
    answerFramework: 'Định nghĩa Aha Moment → Phương pháp phân tích dữ liệu 2 bước (Tìm hành vi tương quan cao nhất với Retention D30) → Đề xuất giả thuyết Aha Moment cho IVIE.',
    sampleAnswer: 'Aha Moment là khoảnh khắc người dùng lần đầu tiên nếm trải giá trị cốt lõi giải quyết vấn đề của họ. Để xác định bằng dữ liệu, tôi sẽ chia người dùng thành 2 nhóm: Nhóm còn giữ chân sau 30 ngày (Retained) vs Nhóm đã rời bỏ (Churned). Sau đó, phân tích hồi quy hành vi trong 72 giờ đầu tiên để tìm ra hành động có tương quan nhân quả mạnh nhất với việc ở lại.',
    ivieHealthcareAngle: 'Tại IVIE, giả thuyết Aha Moment là: Người bệnh "Xem được danh sách lịch trống của bác sĩ kèm viện phí minh bạch trong vòng 60 giây" HOẶC "Nhận được số thứ tự khám ưu tiên tại bệnh viện".',
    pitfallsToAvoid: [
      'Đoán mò Aha Moment dựa trên cảm tính cá nhân mà không có dữ liệu đối chiếu.',
      'Nhầm lẫn giữa hành động mang tính thủ tục (như đăng ký tài khoản) với Aha Moment.',
    ],
  },
  {
    id: 10,
    category: 'Funnel & Metrics',
    question: 'Time-to-Value (TTV) là gì? Bạn có những chiến thuật nào để giảm TTV cho một bệnh nhân mới trên IVIE?',
    interviewerIntent: 'Đánh giá khả năng tối ưu hóa trải nghiệm người dùng và giảm bớt ma sát nhận thức trong Onboarding.',
    answerFramework: 'Định nghĩa TTV → Tác động của TTV đến CVR → 3 chiến thuật giảm TTV cụ thể.',
    sampleAnswer: 'Time-to-Value là thời gian người dùng phải bỏ ra từ lúc tiếp cận đến khi nhận được giá trị đầu tiên. Để giảm TTV trên IVIE, tôi sẽ áp dụng 3 chiến thuật: 1. Progressive Profiling: Cho phép tìm kiếm triệu chứng và xem lịch bác sĩ ngay lập tức, không bắt đăng ký trước; 2. Smart Defaults: Tự động định vị bệnh viện gần nhất và gợi ý các bác sĩ hàng đầu theo khoa phổ biến; 3. 1-Click Social/OTP Login siêu tốc.',
    ivieHealthcareAngle: 'Một người đang có con sốt cao không thể ngồi đọc 5 màn hình giới thiệu tính năng. Rút ngắn TTV từ 5 phút xuống 60 giây là yếu tố quyết định cứu vãn tỷ lệ kích hoạt.',
    pitfallsToAvoid: [
      'Bắt buộc người dùng điền đầy đủ bảo hiểm y tế và số CCCD trước khi cho họ thấy danh sách bác sĩ.',
    ],
  },

  // Category 3: Retention & CRM
  {
    id: 11,
    category: 'Retention & CRM',
    question: 'Làm thế nào để xây dựng một chiến lược giữ chân (Retention Strategy) cho một sản phẩm có tần suất sử dụng không thường xuyên như IVIE?',
    interviewerIntent: 'Kiểm tra khả năng giải quyết nghịch lý lớn nhất của ngành y tế số: Người khỏe mạnh không muốn vào app y tế mỗi ngày.',
    answerFramework: 'Xác định Natural Frequency (Theo quý/năm) → Chiến lược 2 trụ cột: 1. Tối ưu hóa Retention theo chu kỳ tự nhiên (Tái khám, Mùa bệnh); 2. Mở rộng tần suất bằng tính năng giá trị gia tăng (Sức khỏe phòng ngừa, Hồ sơ gia đình, Đơn thuốc).',
    sampleAnswer: 'Khác với mạng xã hội cần DAU cao, sản phẩm y tế có tần suất tự nhiên theo chu kỳ phát bệnh hoặc tái khám (2-4 lần/năm). Chiến lược giữ chân của IVIE gồm: 1. Chăm sóc đúng chu kỳ tự nhiên: Tự động nhắc lịch tái khám theo đơn bác sĩ qua Zalo; 2. Tạo tính năng neo giữ giá trị (Investment): Sổ lưu trữ tiền sử bệnh án cả gia đình và lịch tiêm chủng của con; 3. Tính năng theo dõi bệnh mạn tính: Nhắc uống thuốc và ghi nhận chỉ số huyết áp/đường huyết hàng tuần.',
    ivieHealthcareAngle: 'Đừng cố ép người khỏe mạnh mở app xem tin tức. Hãy biến IVIE thành một chiếc két sắt lưu trữ hồ sơ y tế mà họ luôn an tâm mở ra khi cần.',
    pitfallsToAvoid: [
      'Đề xuất gửi thông báo đẩy 3 lần mỗi ngày để tăng DAU một cách khiên cưỡng.',
      'Xem Day 1 Retention thấp là một thất bại đối với sản phẩm đặt khám bệnh viện.',
    ],
  },
  {
    id: 12,
    category: 'Retention & CRM',
    question: 'Hãy giải thích cách đọc một bảng Cohort Retention Matrix và cách bạn dùng nó để đánh giá chất lượng một kênh Marketing?',
    interviewerIntent: 'Kiểm tra kỹ năng đọc bảng phân tích số liệu nâng cao.',
    answerFramework: 'Cấu trúc ma trận Cohort (Hàng ngang = Thời gian tồn tại, Cột dọc = Các thế hệ theo tháng/tuần) → Cách so sánh kênh Marketing theo Cohort.',
    sampleAnswer: 'Đọc theo hàng ngang cho thấy sự suy giảm người dùng theo thời gian của một nhóm (xem đường cong có đi ngang không). Đọc theo cột dọc cho thấy sự tiến bộ của sản phẩm qua các thế hệ. Để đánh giá kênh Marketing, tôi sẽ chia Cohort theo Kênh thu hút (ví dụ: Cohort Google Search vs Cohort TikTok Voucher). Kênh nào có tỷ lệ Retention Month 3 phẳng ở mức cao hơn chính là kênh mang lại người dùng chất lượng cao thực sự.',
    ivieHealthcareAngle: 'Cohort người dùng từ mã QR tại cổng bệnh viện Bạch Mai thường có Retention D30 đạt trên 30%, trong khi Cohort từ quà tặng game TikTok chỉ đạt dưới 3%. Bảng Cohort giúp IVIE phân bổ ngân sách chuẩn xác.',
    pitfallsToAvoid: [
      'Chỉ so sánh các kênh bằng CPA mà bỏ qua tỷ lệ Retention Cohort của kênh đó.',
    ],
  },
  {
    id: 13,
    category: 'Retention & CRM',
    question: 'Mô hình RFM (Recency, Frequency, Monetary) được áp dụng như thế nào trong chiến lược phân khúc CRM của IVIE?',
    interviewerIntent: 'Đánh giá năng lực cá nhân hóa hành trình khách hàng dựa trên dữ liệu lịch sử giao dịch.',
    answerFramework: 'Định nghĩa 3 trục R, F, M trong bối cảnh y tế → 3 phân khúc tiêu biểu (Champions, At-Risk, Dormant) → Hành động CRM tương ứng.',
    sampleAnswer: 'Trong y tế: R là số ngày kể từ lần khám gần nhất; F là số lần khám/sử dụng dịch vụ trong năm; M là tổng giá trị viện phí/dịch vụ phát sinh qua app. Tôi sẽ phân loại thành các nhóm: 1. Champions (R thấp, F cao): Tặng quyền ưu tiên và bác sĩ chuyên trách; 2. At-Risk (F cao nhưng R đã quá xa): Khách hàng trung thành có dấu hiệu bỏ đi, gửi tin nhắn thăm hỏi sức khỏe chuyên biệt; 3. Hibernating (R xa, F thấp): Kích hoạt theo mùa dịch bệnh.',
    ivieHealthcareAngle: 'Một bệnh nhân từng đặt khám tim mạch 4 lần (F cao) nhưng 90 ngày qua không thấy quay lại (R thấp) là tín hiệu At-Risk nghiêm trọng. Đội ngũ CS cần gọi điện thăm hỏi tình trạng sức khỏe ngay.',
    pitfallsToAvoid: [
      'Gửi một thông điệp khuyến mãi đại trà cho toàn bộ cơ sở dữ liệu (Blast email/SMS).',
    ],
  },
  {
    id: 14,
    category: 'Retention & CRM',
    question: 'Win-back Campaign (Chiến dịch Hồi sinh người dùng ngủ đông) cho ứng dụng y tế cần lưu ý những nguyên tắc đạo đức và kỹ thuật nào?',
    interviewerIntent: 'Kiểm tra sự tinh tế, thấu cảm đạo đức nghề y và kỹ thuật tự động hóa CRM.',
    answerFramework: 'Nguyên tắc thông điệp (Chuyên môn, thấu cảm, không sỗ sàng) → Kênh tiếp cận (Zalo ZNS/SMS) → Kích hoạt theo ngữ cảnh (Contextual Triggers).',
    sampleAnswer: 'Khách hàng y tế có tâm lý nhạy cảm. Chiến dịch Win-back tuyệt đối không được dùng ngôn từ giật gân, đe dọa bệnh tật hoặc giảm giá xả hàng như thương mại điện tử. Thông điệp phải xuất phát từ sự quan tâm y khoa chu đáo (ví dụ: nhắc kiểm tra định kỳ, khảo sát hồi phục sau phác đồ điều trị). Về mặt kỹ thuật, nên dùng Zalo ZNS có gắn deep-link đưa thẳng vào lịch hẹn với chính bác sĩ đã từng điều trị cho họ.',
    ivieHealthcareAngle: 'Một tin nhắn Zalo: "Bác sĩ Nam nhắn hỏi: Đợt thuốc điều trị viêm xoang vừa rồi của bạn đã đỡ chưa? Bạn có thể gửi ảnh tái khám miễn phí tại đây" có tỷ lệ chuyển đổi cao gấp 10 lần một voucher giảm giá 50k vô cớ.',
    pitfallsToAvoid: [
      'Spam tin nhắn đe dọa sức khỏe gây hoang mang cho người dùng.',
      'Gửi sai thông tin chuyên khoa mà người bệnh đã từng khám.',
    ],
  },

  // Category 4: Experimentation & Data
  {
    id: 15,
    category: 'Experimentation & Data',
    question: 'Làm thế nào để xây dựng một Growth Hypothesis chuẩn khoa học thay vì chỉ là một ý tưởng cảm tính?',
    interviewerIntent: 'Kiểm tra tư duy logic và tính kỷ luật trong nghiên cứu thực nghiệm.',
    answerFramework: 'Công thức 5 thành phần: Căn cứ dữ liệu (Insight) → Hành động can thiệp (Change) → Đối tượng mục tiêu (Segment) → Chỉ số đo lường & Mức tăng kỳ vọng (Primary Metric & Expected Lift) → Cơ chế tâm lý học hành vi (Psychological Mechanism).',
    sampleAnswer: 'Một giả thuyết chuẩn khoa học phải có cấu trúc logic kiểm chứng được: "Dựa trên quan sát dữ liệu [Insight], nếu chúng tôi triển khai [Thay đổi cụ thể] cho [Phân khúc mục tiêu], chúng tôi kỳ vọng [Chỉ số chính] sẽ tăng [Mức tăng %] trong vòng [Thời gian], bởi vì [Cơ chế tâm lý hành vi giải thích]". Nếu thiếu bất kỳ thành phần nào, nó chỉ là một ý kiến cá nhân.',
    ivieHealthcareAngle: '"Dựa trên dữ liệu 44% rớt phễu ở bước thanh toán trước, nếu chúng tôi bổ sung tùy chọn \'Giữ chỗ trước - Trả tiền tại viện\', chúng tôi kỳ vọng tỷ lệ hoàn tất đặt khám sẽ tăng 30%, vì nó triệt tiêu nỗi sợ mất tiền của người bệnh khi chưa gặp bác sĩ".',
    pitfallsToAvoid: [
      'Nói những câu mơ hồ như: "Tôi nghĩ đổi giao diện cho đẹp thì người ta sẽ thích hơn".',
    ],
  },
  {
    id: 16,
    category: 'Experimentation & Data',
    question: 'Khung ICE và RICE khác nhau như thế nào? Khi nào bạn chọn RICE thay vì ICE?',
    interviewerIntent: 'Đánh giá khả năng lượng hóa và thiết lập thứ tự ưu tiên cho danh mục thử nghiệm.',
    answerFramework: 'Công thức ICE (Impact, Confidence, Ease) vs RICE (Reach, Impact, Confidence, Effort) → Sự khác biệt của biến số Reach → Khi nào dùng cái nào.',
    sampleAnswer: 'ICE là khung chấm điểm nhanh (1-10 cho mỗi tiêu chí), rất phù hợp cho giai đoạn đầu, các ý tưởng tiếp thị tăng trưởng linh hoạt cần tốc độ. RICE bổ sung thêm biến số Reach (đo bằng số lượng người dùng thực tế chịu ảnh hưởng) và chia cho Effort (tính bằng tuần nhân lực). Tôi dùng RICE khi làm việc với đội ngũ Kỹ sư sản phẩm để phân bổ nguồn lực lập trình lớn, tránh việc ưu tiên một tính năng tốn nhiều công sức nhưng chỉ phục vụ một tập người dùng quá nhỏ.',
    ivieHealthcareAngle: 'Một tính năng tối ưu trang chủ có Reach 100.000 users sẽ có điểm RICE vượt trội so với một tính năng chỉ xuất hiện ở trang chuyên khoa sâu có Reach 500 users, dù cả hai có cùng mức Impact kỳ vọng.',
    pitfallsToAvoid: [
      'Cho điểm Confidence bằng 100% dựa trên trực giác mà không có số liệu chứng minh.',
    ],
  },
  {
    id: 17,
    category: 'Experimentation & Data',
    question: 'Chỉ số bảo hộ (Guardrail Metric) là gì? Hãy cho 2 ví dụ về Guardrail Metrics trong các thử nghiệm tăng trưởng của IVIE.',
    interviewerIntent: 'Đo lường sự chín chắn trong nghề, khả năng ngăn chặn các chiến thuật tối ưu hóa ngắn hạn gây hại cho doanh nghiệp.',
    answerFramework: 'Định nghĩa Guardrail Metric (Chỉ số kiểm soát không được suy giảm trong khi Primary Metric tăng) → 2 ví dụ thực tế trong ngành y tế.',
    sampleAnswer: 'Guardrail Metric là chỉ số ranh giới an toàn, đảm bảo rằng việc tối ưu hóa chỉ số thành công chính (Primary Metric) không làm tổn hại đến chất lượng dịch vụ, uy tín thương hiệu hoặc tính bền vững của doanh nghiệp. Trong thử nghiệm tăng trưởng, nếu Primary Metric tăng nhưng Guardrail Metric bị vi phạm, thử nghiệm đó coi như thất bại.',
    ivieHealthcareAngle: 'Ví dụ 1: Thử nghiệm gửi SMS nhắc hẹn để tăng tỷ lệ đến khám (Primary) nhưng phải theo dõi Tỷ lệ chặn tin nhắn / Khiếu nại spam (Guardrail). Ví dụ 2: Thử nghiệm tăng tốc độ đặt khám nhưng phải bảo vệ Tỷ lệ hủy lịch khám / Bùng lịch khám (No-show Rate) không được vượt quá 12%.',
    pitfallsToAvoid: [
      'Chỉ chăm chú vào một chỉ số duy nhất mà bỏ qua các tác động phụ tiêu cực lên toàn hệ thống.',
    ],
  },
  {
    id: 18,
    category: 'Experimentation & Data',
    question: 'Lỗi "Peeking Problem" trong A/B Testing là gì và tại sao nó lại nguy hiểm?',
    interviewerIntent: 'Kiểm tra kiến thức thống kê thực thụ của người làm thử nghiệm dữ liệu.',
    answerFramework: 'Định nghĩa Peeking Problem (Kiểm tra kết quả liên tục hàng ngày và dừng test ngay khi p < 0.05) → Cơ chế xác suất sai lầm loại I (False Positive) → Giải pháp phòng tránh.',
    sampleAnswer: 'Peeking Problem xảy ra khi Marketer liên tục theo dõi kết quả A/B test mỗi ngày và quyết định dừng thử nghiệm sớm ngay khi thấy p-value vừa chạm ngưỡng < 0.05. Về mặt thống kê, các biến động ngẫu nhiên trong những ngày đầu rất dễ tạo ra tín hiệu giả. Việc dừng test sớm làm tăng xác suất sai lầm loại 1 (kết luận bản B thắng trong khi thực tế không phải) từ 5% lên tới hơn 30%.',
    ivieHealthcareAngle: 'Hành vi đặt khám y tế có tính chu kỳ tuần mạnh mẽ (đầu tuần khám đông, cuối tuần giảm). Một A/B test trên IVIE bắt buộc phải chạy trọn vẹn ít nhất 1-2 chu kỳ tuần đầy đủ (14 ngày) bất kể p-value có đẹp sớm đến đâu.',
    pitfallsToAvoid: [
      'Thừa nhận mình thường xuyên dừng test sau 2-3 ngày để tiết kiệm ngân sách.',
    ],
  },

  // Category 5: IVIE Healthcare Case
  {
    id: 19,
    category: 'IVIE Healthcare Case',
    question: 'Nếu được giao nhiệm vụ tăng gấp đôi số ca tư vấn video (Telemedicine) trên IVIE trong 90 ngày, bạn sẽ triển khai chiến lược như thế nào?',
    interviewerIntent: 'Kiểm tra khả năng tổng hợp toàn bộ tư duy thành một kế hoạch hành động chiến lược thực tế.',
    answerFramework: 'Phân tích phương trình tăng trưởng Telemedicine → Xác định điểm nghẽn lớn nhất (Cung vs Cầu vs Ma sát) → Lộ trình 3 giai đoạn (Fix Onboarding → Launch High-demand niches → Retention CRM).',
    sampleAnswer: 'Tôi sẽ tiếp cận theo 3 giai đoạn: 1. Tháng 1: Tối ưu điểm kích hoạt — Ra mắt tính năng "Tư vấn Nhi & Da liễu Khẩn cấp phản hồi dưới 5 phút" trong khung giờ đêm (20h-24h) để giải quyết nhu cầu cấp thiết nhất; 2. Tháng 2: Triển khai chiến lược Bán chéo — Tích hợp tư vấn online tiếp nối cho 100% bệnh nhân sau khi khám trực tiếp tại bệnh viện đối tác; 3. Tháng 3: Mở rộng gói Hội viên gia đình 149k/tháng để tạo doanh thu định kỳ và tăng tần suất khám.',
    ivieHealthcareAngle: 'Nhu cầu khám online lớn nhất nằm ở Nhi khoa (sốt đêm), Da liễu (xem tổn thương qua ảnh/video) và Tâm lý. Tập trung vào 3 chuyên khoa mũi nhọn này sẽ mang lại 80% kết quả tăng trưởng.',
    pitfallsToAvoid: [
      'Đề xuất chạy quảng cáo chung chung cho tất cả các khoa bệnh.',
      'Bỏ qua bài toán đảm bảo nguồn cung bác sĩ sẵn sàng trực tuyến.',
    ],
  },
  {
    id: 20,
    category: 'IVIE Healthcare Case',
    question: 'Rào cản lớn nhất của người dùng Việt Nam khi đặt khám bệnh viện qua ứng dụng là gì và bạn giải quyết nó bằng Growth như thế nào?',
    interviewerIntent: 'Đo lường sự am hiểu tâm lý người tiêu dùng nội địa và thấu cảm văn hóa y tế Việt Nam.',
    answerFramework: 'Chỉ ra nỗi sợ thực tế (Sợ đến viện vẫn phải xếp hàng lấy số lại, sợ mất tiền, sợ không gặp đúng bác sĩ đầu ngành) → Các giải pháp sản phẩm và truyền thông giải tỏa nỗi lo.',
    sampleAnswer: 'Rào cản lớn nhất là "Sự nghi ngờ về giá trị thực tế tại bệnh viện" — Người bệnh sợ rằng dù đã đặt lịch trên app, khi đến viện công vẫn phải chen chúc xếp hàng lại từ đầu hoặc bác sĩ giáo sư bận mổ không có mặt. Giải pháp của tôi: 1. Đặt quầy tiếp đón độc quyền của IVIE ngay sảnh viện với biển chỉ dẫn rõ ràng; 2. Cung cấp số thứ tự khám điện tử ưu tiên hiển thị thời gian dự kiến vào phòng khám; 3. Cam kết hoàn tiền 100% nếu bệnh nhân phải chờ quá 30 phút.',
    ivieHealthcareAngle: 'Xây dựng niềm tin bằng sự kết hợp O2O (Online to Offline): Trải nghiệm mượt mà trên app phải được bảo chứng bằng sự chăm sóc ân cần của điều dưỡng IVIE ngay tại cửa phòng khám.',
    pitfallsToAvoid: [
      'Cho rằng giá khám đắt là rào cản lớn nhất (thực tế người bệnh sẵn sàng trả tiền để không phải chờ đợi và được gặp bác sĩ giỏi).',
    ],
  },

  // Category 6: Career Transition (Brand -> Growth)
  {
    id: 21,
    category: 'Career Transition',
    question: 'Bạn xuất thân từ Brand & Communication, tại sao chúng tôi nên chọn bạn cho vị trí Growth Marketing thay vì một người có nền tảng Kỹ thuật hoặc Performance thuần túy?',
    interviewerIntent: 'Cơ hội vàng để ứng viên trình bày Elevator Pitch và định vị lợi thế cạnh tranh độc bản của mình.',
    answerFramework: 'Công thức Superpower: Nền tảng Thấu cảm & Kể chuyện sâu sắc (Brand) + Năng lực Tư duy Dữ liệu & Thử nghiệm khoa học (Growth) = Marketer toàn diện.',
    sampleAnswer: 'Những người làm Kỹ thuật hoặc Performance thuần túy thường rất giỏi đọc số nhưng lại thiếu sự thấu cảm sâu sắc với tâm lý khách hàng và khả năng kể câu chuyện thương hiệu chạm tới cảm xúc. Một chiến dịch tăng trưởng hay một giả thuyết thử nghiệm xuất sắc luôn bắt đầu từ một User Insight sâu sắc — đây chính là thế mạnh cốt lõi tôi đã rèn luyện qua nhiều năm làm Brand & Comms. Kết hợp nền tảng thấu hiểu con người đó với phương pháp luận dữ liệu toàn phễu và hệ thống thử nghiệm khoa học, tôi có thể mang lại sự tăng trưởng bền vững vừa đạt mục tiêu số liệu, vừa nâng tầm tài sản thương hiệu của công ty.',
    ivieHealthcareAngle: 'Trong ngành y tế, dữ liệu khô khan không thể thuyết phục được người bệnh đang lo âu. Cần sự thấu cảm của người làm Brand để viết nên những thông điệp an tâm, kết hợp với tư duy Growth để đo lường chuyển đổi chính xác từng nấc phễu.',
    pitfallsToAvoid: [
      'Tự ti về quá khứ làm Brand của mình.',
      'Cố gượng ép chứng minh mình là một lập trình viên siêu đẳng.',
    ],
  },
  {
    id: 22,
    category: 'Career Transition',
    question: 'Sau khi hoàn thành Case Study tăng trưởng cho IVIE – Bác sĩ ơi, bài học lớn nhất bạn rút ra về mặt tư duy là gì?',
    interviewerIntent: 'Đánh giá khả năng tự phản tỉnh (Self-reflection) và sự trưởng thành về mặt nhận thức nghề nghiệp.',
    answerFramework: 'Chuyển đổi từ "Tập trung vào Hoạt động (Output-focused)" sang "Tập trung vào Kết quả kinh doanh (Outcome-focused)" và vẻ đẹp của sự kỷ luật trong thử nghiệm.',
    sampleAnswer: 'Bài học lớn nhất của tôi là sự từ bỏ cái tôi cảm tính để lắng nghe sự thật từ dữ liệu. Trước đây khi làm Brand, tôi thường say mê những ý tưởng truyền thông hoành tráng nhưng mơ hồ về hiệu quả. Khi xây dựng Case Study IVIE, tôi nhận ra một thay đổi nhỏ nhưng chạm đúng điểm ma sát — như dỡ bỏ bước bắt buộc nhập OTP trước khi xem lịch bác sĩ — có thể mang lại đòn bẩy kinh doanh lớn gấp nhiều lần một chiến dịch quảng cáo tiền tỷ. Tăng trưởng thực sự là sự kỷ luật hàng ngày trong việc lắng nghe người dùng, đặt giả thuyết và liên tục học hỏi từ thất bại.',
    ivieHealthcareAngle: 'Sản phẩm y tế không cần những lời hứa hoa mỹ; nó cần sự tiện lợi không ma sát và sự tin cậy tuyệt đối tại từng điểm chạm.',
    pitfallsToAvoid: [
      'Nói những bài học sáo rỗng trên sách vở mà không gắn liền với trải nghiệm xây dựng case study thực tế.',
    ],
  },
];

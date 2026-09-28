export interface CaseStudySection {
  number: string;
  title: string;
  subtitle: string;
  category: 'Foundation & Diagnosis' | 'Funnel Deep-Dive' | 'Strategy & Monetization' | 'Execution & Impact';
  content: string;
  keyTakeaways: string[];
  simulatedMetrics?: { label: string; value: string; note: string }[];
}

export const IVIE_CASE_STUDY_SECTIONS: CaseStudySection[] = [
  {
    number: '01',
    title: 'Business Context (Bối cảnh Kinh doanh Y tế số)',
    subtitle: 'Tổng quan thị trường Chăm sóc Sức khỏe Số (Digital Health) tại Việt Nam',
    category: 'Foundation & Diagnosis',
    content: `Thị trường Y tế Số (HealthTech) tại Việt Nam đang ở giai đoạn bước ngoặt chuyển đổi số mạnh mẽ với quy mô dự kiến vượt 1.5 tỷ USD vào năm 2027. Tình trạng quá tải nghiêm trọng tại các bệnh viện công lập tuyến trung ương (bệnh nhân phải xếp hàng từ 4h–5h sáng, chờ đợi 4–6 tiếng để có 5 phút khám bệnh) tạo ra một "nỗi đau" (pain point) nhức nhối trong xã hội.

IVIE – Bác sĩ ơi định vị là nền tảng y tế số tiên phong kết nối người bệnh với hệ sinh thái y tế toàn diện: hơn 50 bệnh viện tuyến đầu (Bệnh viện Hữu nghị Việt Đức, Bệnh viện Bạch Mai, Bệnh viện E, Bệnh viện Đại học Y Hà Nội...) và mạng lưới hơn 2.000 bác sĩ chuyên khoa sâu trên cả nước.

Tuy nhiên, sau giai đoạn bùng nổ nhận diện thương hiệu ban đầu thông qua các chiến dịch truyền thông đại chúng, IVIE đối mặt với thách thức tăng trưởng chung của ngành: Chi phí thu hút người dùng mới (CAC) ngày càng đắt đỏ trong khi tỷ lệ kích hoạt và giữ chân người dùng sau ca khám đầu tiên còn chưa tương xứng với tiềm năng.`,
    keyTakeaways: [
      'Nhu cầu khám chữa bệnh chất lượng cao không xếp hàng là cực kỳ cấp bách.',
      'Rào cản lớn nhất nằm ở thói quen khám bệnh truyền thống và sự e ngại công nghệ của người dân.',
      'Cần chuyển dịch từ truyền thông thương hiệu thuần túy sang chiến lược tăng trưởng toàn phễu dựa trên dữ liệu.',
    ],
    simulatedMetrics: [
      { label: 'Thị trường tiềm năng (TAM)', value: '1.5 Tỷ USD', note: 'Quy mô HealthTech Việt Nam 2027' },
      { label: 'Mạng lưới bệnh viện', value: '50+ Viện đầu ngành', note: 'Bạch Mai, Việt Đức, E, ĐH Y...' },
      { label: 'Đội ngũ bác sĩ', value: '2.000+ Chuyên gia', note: 'Bác sĩ chuyên khoa I, II, PGS, TS' },
    ],
  },
  {
    number: '02',
    title: 'Product Context (Bối cảnh Sản phẩm IVIE – Bác sĩ ơi)',
    subtitle: 'Kiến trúc giải pháp và các dịch vụ trọng tâm của nền tảng',
    category: 'Foundation & Diagnosis',
    content: `IVIE – Bác sĩ ơi vận hành theo mô hình Nền tảng Y tế Đa diện (Multi-sided Health Platform) phục vụ 3 nhóm đối tượng: Bệnh nhân, Bác sĩ và Cơ sở Y tế.

Sản phẩm cung cấp 4 trụ cột dịch vụ cốt lõi:
1. Đặt lịch khám tại viện (Hospital Fast-track Booking): Đăng ký trước số thứ tự khám tại viện công/tư, thanh toán phí tiện ích, chọn đúng chuyên gia.
2. Tư vấn Bác sĩ từ xa (Telemedicine Video Consultations): Kết nối video 1-1 với bác sĩ chuyên khoa 24/7, nhận tư vấn sơ bộ và chỉ dẫn dùng thuốc.
3. Hồ sơ Sức khỏe Điện tử (Personal Health Records): Lưu trữ trọn đời kết quả xét nghiệm, phim chụp X-quang/MRI, đơn thuốc và lịch sử bệnh án cho cả gia đình.
4. Dịch vụ Y tế Gia đình bổ trợ: Lấy mẫu xét nghiệm tại nhà, giao thuốc theo đơn tận cửa, nhắc lịch tiêm chủng trẻ em.`,
    keyTakeaways: [
      'Sản phẩm giải quyết chu trình khép kín: Khám bệnh → Xét nghiệm → Đơn thuốc → Quản lý sau khám.',
      'Sức mạnh độc quyền của IVIE nằm ở sự tích hợp sâu với hệ thống phần mềm quản lý bệnh viện (HIS/EMR) của các viện công lớn.',
    ],
  },
  {
    number: '03',
    title: 'Target User & Jobs-To-Be-Done (Chân dung Người dùng & JTBD)',
    subtitle: 'Thấu cảm sâu sắc nỗi đau và động lực của 3 nhóm khách hàng chủ lực',
    category: 'Foundation & Diagnosis',
    content: `Khảo sát hành vi người dùng chỉ ra 3 phân khúc (Personas) đóng góp 85% tổng lưu lượng giao dịch của IVIE:

1. Persona 1: "Mẹ Bỉm Thông Thái" (Mai, 29 tuổi, Hà Nội - Có con 18 tháng tuổi)
- JTBD: Khi con sốt cao đột ngột lúc nửa đêm, tôi muốn kết nối ngay với bác sĩ Viện Nhi trong 5 phút mà không phải bế con đi viện trong mưa gió, để tôi an tâm biết cách hạ sốt chuẩn xác và theo dõi dấu hiệu nguy hiểm.
- Nỗi đau: Lo sợ con co giật, hoang mang trước các lời khuyên trái chiều trên mạng xã hội.

2. Persona 2: "Người Con Hiếu Thảo" (Tuấn, 34 tuổi, TP.HCM - Có cha mẹ 65 tuổi ở quê)
- JTBD: Khi bố mẹ ở quê cần đi khám tim mạch và khớp tại viện đầu ngành ở thủ đô, tôi muốn đặt lịch trước đích danh Giáo sư uy tín và có nhân viên hướng dẫn tại viện, để bố mẹ tôi không phải chen lấn từ sáng sớm và tôi hoàn thành trọn vẹn chữ hiếu dù bận công việc.
- Nỗi đau: Bố mẹ sợ đông đúc, không rành công nghệ điện thoại, thủ tục bảo hiểm phức tạp.

3. Persona 3: "Dân Văn Phòng Bận Rộn" (Hương, 27 tuổi, Nhân viên Marketing)
- JTBD: Khi có triệu chứng da liễu hoặc tiêu hóa âm ỉ, tôi muốn tranh thủ giờ nghỉ trưa gọi video cho bác sĩ và nhận thuốc giao tận công ty, để giải quyết bệnh kịp thời mà không phải xin nghỉ phép cả ngày đi viện.`,
    keyTakeaways: [
      'Động lực sử dụng trong y tế mang tính cảm xúc cực kỳ cao: Sự an tâm, Bảo vệ người thân yêu và Tiết kiệm thời gian.',
      'Thiết kế sản phẩm phải cá nhân hóa theo từng JTBD thay vì tiếp cận cào bằng.',
    ],
  },
  {
    number: '04',
    title: 'Core Problem Statement (Định nghĩa Điểm nghẽn Cốt lõi)',
    subtitle: 'Hiện tượng "Thùng nước thủng": Chi phí cao nhưng chuyển đổi sâu bị tắc nghẽn',
    category: 'Foundation & Diagnosis',
    content: `Dựa trên phân tích dữ liệu toàn diện (Dữ liệu giả lập chuẩn hóa phục vụ học tập), IVIE đang đối mặt với bài toán tăng trưởng điển hình:

"Mặc dù các chiến dịch tiếp thị mang lại lượng cài đặt ứng dụng (App Installs) ấn tượng với chi phí hợp lý (~25.000đ/install), nhưng tỷ lệ rớt phễu (Drop-off) tại các bước tiếp theo quá cao:
- 40% người dùng bỏ cuộc ngay ở bước đăng ký tài khoản bắt buộc mã OTP ban đầu.
- Chỉ 7.2% người cài app thực hiện thành công ca đặt khám đầu tiên trong 30 ngày (Activation Rate thấp).
- 44% người dùng bỏ dở ở bước thanh toán trước tiền khám do e ngại và thiếu tin tưởng.
- Tỷ lệ giữ chân người dùng sau 30 ngày (Month 1 Retention) chỉ đạt 14.5% đối với nhóm khám cấp tính.

Hệ quả: Chi phí thực tế để có được 1 bệnh nhân hoàn tất ca khám (CAC) bị đội lên tới 135.000đ – 180.000đ, trong khi biên lợi nhuận phí tiện ích trên mỗi lượt khám ban đầu chỉ từ 25.000đ – 40.000đ, gây áp lực tài chính nghiêm trọng lên mô hình tăng trưởng."`,
    keyTakeaways: [
      'Vấn đề không nằm ở Top-of-Funnel (Lượt cài app vẫn tốt), mà nằm ở Activation và Retention.',
      'Sự ma sát trong luồng trải nghiệm Onboarding và rào cản thanh toán trước là 2 nguyên nhân cốt lõi gây rò rỉ.',
    ],
  },
  {
    number: '05',
    title: 'Growth Goal (Mục tiêu Tăng trưởng Chiến lược 90 Ngày)',
    subtitle: 'Các chỉ tiêu định lượng rõ ràng gắn liền với hiệu quả kinh doanh',
    category: 'Foundation & Diagnosis',
    content: `Mục tiêu tăng trưởng 90 ngày của IVIE được thiết lập dựa trên nguyên tắc SMART, tập trung vào việc tối ưu hóa hiệu quả kinh tế đơn vị (Unit Economics) thay vì chạy theo số lượng tải app ảo:

1. North Star Metric Target: Nâng số ca khám bệnh & tư vấn thành công hàng tuần (Weekly Completed Consultations - WCC) từ 4.200 lên 7.000 ca/tuần (+66.7% tăng trưởng).
2. Activation Rate Target: Nâng tỷ lệ người dùng mới hoàn tất ca khám đầu tiên từ 7.2% lên 14.5% (Tăng gấp đôi hiệu quả chuyển đổi Onboarding).
3. Retention Target: Nâng tỷ lệ giữ chân sau 30 ngày (Month 1 Retention) từ 14.5% lên 24.0% nhờ hệ thống CRM Zalo ZNS và Habit Loops.
4. Unit Economics Target: Giảm chi phí thu hút khách hàng (Blended CAC) từ 135.000đ xuống dưới 80.000đ (-40% CAC); nâng LTV trung bình lên trên 450.000đ (đạt tỷ lệ LTV:CAC >= 5.5x).`,
    keyTakeaways: [
      'Tập trung tối đa vào chỉ số WCC (Số ca khám thành công).',
      'Cải thiện hiệu quả kinh tế đơn vị là kim chỉ nam cho mọi thử nghiệm.',
    ],
  },
  {
    number: '06',
    title: 'North Star Metric & KPI Tree (Kiến trúc Cây chỉ số Toán học)',
    subtitle: 'Phân rã chỉ số Bắc Đẩu thành các đòn bẩy hành vi có thể can thiệp',
    category: 'Foundation & Diagnosis',
    content: `North Star Metric (NSM) của IVIE được xác định là:
"Weekly Completed Consultations" (WCC - Số ca khám bệnh viện & tư vấn trực tuyến thành công mỗi tuần).

Phương trình phân rã toán học (KPI Tree 3 cấp):
WCC = [New Activated Consultations] + [Repeat Retained Consultations] + [Resurrected Consultations]

Trong đó:
- New Activated Consultations = New Traffic × Install Rate × Onboarding Completion Rate × Search-to-Booking CVR × Show-up Rate.
- Repeat Retained Consultations = Active Cohort Base × Retention Rate % × Consultations per Retained User.
- Resurrected Consultations = Dormant Patient Base × CRM ZNS Open Rate × Re-booking CVR.

Đòn bẩy có độ nhạy cao nhất (Highest Sensitivity Leverage):
Phân tích mô hình cho thấy việc tăng Onboarding CVR thêm 20% mang lại tác động tăng trưởng WCC gấp 2.8 lần so với việc tăng thêm 20% ngân sách quảng cáo Acquisition.`,
    keyTakeaways: [
      'WCC là chỉ số phản ánh trọn vẹn giá trị y tế cho bệnh nhân, công suất bác sĩ và doanh thu IVIE.',
      'Cây chỉ số giúp các phòng ban (Product, Marketing, Ops) cùng nhìn về một phương trình chung.',
    ],
  },
  {
    number: '07',
    title: 'Full-Funnel Growth Model & Growth Loops (Mô hình Tăng trưởng Toàn phễu)',
    subtitle: 'Chuyển hóa từ phễu tuyến tính sang các vòng lặp tự sinh động lực bền vững',
    category: 'Foundation & Diagnosis',
    content: `Để không bị phụ thuộc vào việc đốt tiền mua traffic từ Google và Meta, IVIE kiến tạo 2 vòng lặp tăng trưởng hữu cơ (Organic Growth Loops):

1. Vòng lặp 1: "Family Health Growth Loop" (Referral Loop)
- Bệnh nhân khám bệnh nhận kết quả xét nghiệm và đơn thuốc trên app.
- App gợi ý: "Mời người thân cùng theo dõi hồ sơ y tế của gia đình".
- Người thân nhận đường link Zalo xác thực → Cài đặt app và tạo hồ sơ cá nhân.
- Khi người thân phát sinh nhu cầu, họ trở thành người dùng mới không tốn chi phí CAC (K-factor = 0.38).

2. Vòng lặp 2: "Doctor-Patient Retention Loop" (Retention Loop)
- Bác sĩ kê đơn thuốc điện tử và hẹn ngày tái khám sau 14 ngày.
- Hệ thống tự động đồng bộ phác đồ vào tính năng nhắc uống thuốc hàng ngày.
- Đến ngày thứ 11, tin nhắn Zalo gửi thông báo nhắc kiểm tra tình trạng và đặt tái khám 1-chạm.
- Bệnh nhân quay lại tái khám đúng hẹn, củng cố uy tín bác sĩ và duy trì doanh thu đều đặn cho sàn.`,
    keyTakeaways: [
      'Growth Loops giúp chi phí biên thu hút người dùng mới giảm dần theo thời gian.',
      'Mỗi giao dịch khám bệnh thành công đều gieo hạt giống cho lần sử dụng tiếp theo.',
    ],
  },
  {
    number: '08',
    title: 'Funnel Drop-off Diagnostic (Chẩn đoán Phễu Chi tiết)',
    subtitle: 'Bóc tách 6 nấc phễu để khoanh vùng điểm rò rỉ chuyển đổi',
    category: 'Funnel Deep-Dive',
    content: `Phân tích dữ liệu phễu Onboarding của 10.000 người dùng mẫu (Simulated Baseline Data):

1. Bước 1 - Cài app (Installs): 10.000 users (100%)
2. Bước 2 - Mở app & Xem màn hình chào: 8.500 users (85%) — Tỷ lệ rớt: 15% (Chấp nhận được)
3. Bước 3 - Yêu cầu nhập SĐT & mã OTP: 5.100 users (51%) — Tỷ lệ rớt: 40% [ĐIỂM NGHẼN SỐ 1: Rào cản đăng ký quá sớm]
4. Bước 4 - Tìm kiếm chuyên khoa / Bác sĩ: 3.200 users (32%) — Tỷ lệ rớt: 37% [Thiếu định hướng chuyên khoa]
5. Bước 5 - Chọn khung giờ khám: 1.600 users (16%) — Tỷ lệ rớt: 50% [ĐIỂM NGHẼN SỐ 2: Lịch bác sĩ viện công kín chỗ]
6. Bước 6 - Thanh toán & Hoàn tất lịch hẹn: 720 users (7.2%) — Tỷ lệ rớt: 55% [ĐIỂM NGHẼN SỐ 3: Bắt buộc trả tiền trước]

Kết luận: Chỉ có 720 trên 10.000 người dùng ban đầu thực hiện thành công ca khám (Activation Rate = 7.2%). Giải phóng 3 điểm nghẽn tại bước 3, 5 và 6 là chìa khóa bứt phá tăng trưởng.`,
    keyTakeaways: [
      'Hai rào cản tâm lý lớn nhất: Bắt nhập OTP khi chưa thấy giá trị và Bắt thanh toán trước khi chưa gặp bác sĩ.',
      'Tập trung tối ưu hóa 3 điểm nghẽn này sẽ nâng tỷ lệ chuyển đổi cuối cùng từ 7.2% lên 14.5%.',
    ],
  },
  {
    number: '09',
    title: 'Acquisition Strategy & Channel Matrix (Chiến lược Thu hút Kênh)',
    subtitle: 'Tối ưu hóa phối thức kênh High-Intent và mô hình quầy tiếp đón O2O',
    category: 'Funnel Deep-Dive',
    content: `Tái cấu trúc danh mục kênh tiếp cận theo ma trận Intent & Scalability:

1. Kênh Cốt lõi 1: Google Search Ads & Medical SEO (High Intent)
- Tập trung vào các từ khóa giải quyết triệu chứng khẩn cấp và tên bác sĩ/bệnh viện: "khám nhi viện Bạch Mai", "bác sĩ da liễu online", "nội soi dạ dày không đau".
- Chuyển hướng 100% traffic vào các Dynamic Landing Pages chuyên biệt (Message Match) thay vì trang chủ.
- Kết quả kỳ vọng: CVR đạt 13.8%, CPA giảm 40% xuống còn 85.000đ.

2. Kênh Đột phá 2: Tiếp đón O2O tại Cổng Bệnh viện Đối tác (Physical Contextual Trigger)
- Bố trí quầy hướng dẫn IVIE và mã QR thông minh tại sảnh chờ Bệnh viện E, Bạch Mai, Việt Đức.
- Thông điệp: "Quét mã lấy số khám ưu tiên ngay - Không cần xếp hàng chờ đợi".
- Kết quả thực tế mô phỏng: Thu hút 115 bệnh nhân mới/ngày/điểm viện; CAC cực thấp chỉ 18.500đ; Month 1 Retention cao nhất toàn sàn (31.4%).

3. Cắt giảm kênh kém hiệu quả: Dừng 70% ngân sách quảng cáo tương tác chung chung trên TikTok và Facebook không mang lại chuyển đổi đặt lịch.`,
    keyTakeaways: [
      'Trong y tế, chuyển đổi chỉ diễn ra khi giải quyết đúng nhu cầu cấp bách (High Intent).',
      'Điểm chạm tiếp đón tại bệnh viện là mỏ vàng Acquisition chi phí thấp và chất lượng cao nhất của IVIE.',
    ],
  },
  {
    number: '10',
    title: 'Activation Framework & Aha Moment (Khung Kích hoạt Người dùng)',
    subtitle: 'Triển khai Progressive Profiling và rút ngắn thời gian tiếp cận giá trị (TTV)',
    category: 'Funnel Deep-Dive',
    content: `Thiết kế lại toàn bộ hành trình trải nghiệm lần đầu (FTUE - First-Time User Experience) cho IVIE:

1. Nguyên tắc Progressive Profiling (Không rào cản):
- Người dùng mới được tự do tìm kiếm triệu chứng, duyệt hồ sơ bác sĩ, xem đánh giá và chọn khung giờ khám mà KHÔNG bị chặn bởi màn hình đăng nhập.
- Yêu cầu nhập số điện thoại và xác minh OTP chỉ xuất hiện ở bước cuối cùng khi bấm "Xác nhận lịch hẹn".

2. Trải nghiệm Aha Moment:
- "Người dùng nhìn thấy phiếu hẹn khám điện tử có số thứ tự ưu tiên kèm chỉ dẫn đường đi tại viện trong vòng dưới 90 giây".
- Đối với dịch vụ trực tuyến: "Kết nối thành công cuộc gọi video với bác sĩ trong vòng dưới 5 phút".

3. Segmented Onboarding:
- Hỏi 1 câu duy nhất ở đầu: "Bạn cần khám cho ai hôm nay?" (Bản thân / Con nhỏ / Cha mẹ già).
- Tự động lọc giao diện: Nếu chọn "Con nhỏ" → Đưa thẳng vào chuyên khoa Nhi với danh sách bác sĩ trực đêm sẵn sàng.`,
    keyTakeaways: [
      'Giảm bớt ma sát thao tác giúp Activation Rate tăng vọt từ 7.2% lên 14.8%.',
      'Đưa giá trị cốt lõi đến trước mắt người dùng trước khi yêu cầu họ thực hiện thủ tục đăng ký.',
    ],
  },
  {
    number: '11',
    title: 'Retention Analysis & Cohort Strategy (Phân tích Giữ chân & Ma trận Cohort)',
    subtitle: 'Chiến lược giữ chân theo chu kỳ tự nhiên và quản lý bệnh mạn tính',
    category: 'Funnel Deep-Dive',
    content: `Đánh giá Retention Curve của IVIE theo 2 phân khúc bệnh nhân:

1. Phân khúc Khám Cấp tính (Acute Care):
- Chu kỳ tự nhiên: 2–3 lần/năm khi có ốm đau đột xuất.
- Chiến lược: Neo giữ bằng tính năng lưu trữ sổ khám sức khỏe điện tử và kết quả xét nghiệm trọn đời (Stored Value) để họ luôn nhớ tới IVIE mỗi khi phát bệnh.

2. Phân khúc Bệnh Mạn tính & Mẹ Bỉm (Chronic & Preventive Care):
- Chu kỳ tự nhiên: Hàng tuần / Hàng tháng (Tiểu đường, huyết áp, tiêm chủng, kiểm tra thai kỳ).
- Chiến lược: Xây dựng Habit Loop nhắc đo chỉ số sức khỏe tại nhà và theo dõi phác đồ thuốc.

Ma trận Cohort Heatmap:
Sau khi triển khai tính năng tự động nhắc lịch tái khám ở Tuần 4, tỷ lệ lưu giữ Month 1 của các Cohort mới đã tăng từ 12.0% lên 24.5%, đường cong retention bắt đầu đi ngang (flatten out) vững chắc ở mốc 18% sau 6 tháng.`,
    keyTakeaways: [
      'Sản phẩm y tế cần đo lường bằng Bracket Retention (M1, M3, M6) phù hợp chu kỳ bệnh.',
      'Nhóm bệnh nhân mạn tính và mẹ bỉm là động cơ chính kéo cao đường cong retention tổng thể.',
    ],
  },
  {
    number: '12',
    title: 'Engagement Strategy & Habit Loops (Chiến lược Gắn kết & Thói quen)',
    subtitle: 'Ứng dụng Hook Model để xây dựng thói quen chăm sóc sức khỏe chủ động',
    category: 'Funnel Deep-Dive',
    content: `Thiết kế vòng lặp thói quen Hook Model cho tính năng "Quản lý Bệnh Mạn tính & Đơn thuốc Thông minh":

1. External Trigger (Gợi ý bên ngoài):
- Thông báo Zalo ZNS / Push Notification gửi đúng 8h00 sáng: "Bác sĩ Hải nhắc bạn: Đã đến giờ uống thuốc huyết áp sau ăn sáng".
2. Simple Action (Hành động cực dễ):
- Bệnh nhân chạm 1 lần trên màn hình khóa hoặc mở app bấm "Đã uống thuốc".
3. Intrinsic Reward (Phần thưởng nội tại):
- Cảm giác an tâm và kiểm soát được bệnh tật: "Chuỗi 10 ngày tuân thủ thuốc hoàn hảo! Chỉ số huyết áp của bạn đang ở ngưỡng an toàn".
4. Investment (Đầu tư giá trị):
- Bệnh nhân chụp ảnh kết quả máy đo huyết áp tại nhà lưu vào hồ sơ bệnh án để bác sĩ đánh giá trong lần tái khám.

Kết quả: Chỉ số DAU/MAU Stickiness tăng từ 10.5% lên 15.2%, biến IVIE thành người bạn đồng hành sức khỏe hàng ngày thay vì ứng dụng 1 lần rồi xóa.`,
    keyTakeaways: [
      'Thói quen trong y tế phải gắn liền với sự an tâm nội tại thay vì quà tặng vật chất rẻ tiền.',
      'Mỗi dữ liệu người dùng nạp vào (Investment) làm tăng chi phí chuyển đổi (Switching Cost) sang nền tảng khác.',
    ],
  },
  {
    number: '13',
    title: 'Resurrection & Win-back CRM Engine (Hệ thống Hồi sinh Khách hàng Ngủ đông)',
    subtitle: 'Đánh thức người bệnh ngủ đông qua kênh Zalo ZNS tự động hóa theo vòng đời',
    category: 'Funnel Deep-Dive',
    content: `Xây dựng cỗ máy CRM tự động hóa (Lifecycle Marketing Automation) khai thác tệp 120.000 người dùng không tương tác trong hơn 60 ngày:

1. Kịch bản 1: Nhắc lịch Tái khám Chuyên khoa (Trigger: 30 ngày sau buổi khám da liễu/tai mũi họng)
- Kênh: Zalo Notification Service (ZNS).
- Thông điệp: "Chào bạn [Tên], Bác sĩ [Tên bác sĩ] nhắn hỏi: Tình trạng họng của bạn sau đợt thuốc vừa rồi đã thuyên giảm chưa? Bấm vào đây để gửi tin nhắn cập nhật cho bác sĩ miễn phí".
- Hiệu quả: Open Rate 68%, Re-booking CVR đạt 15.8%, CPA hồi sinh chỉ 14.500đ.

2. Kịch bản 2: Cảnh báo Dịch bệnh Mùa vụ (Trigger: Tháng giao mùa sốt xuất huyết, cúm A)
- Gửi cẩm nang chăm sóc và danh sách phòng khám Nhi trực online 24/7.

3. Kịch bản 3: Nhắc Khám Sức khỏe Định kỳ Tổng quát (Trigger: 11 tháng kể từ lần khám gần nhất)
- Tặng đặc quyền miễn phí xét nghiệm đường huyết khi đặt gói khám định kỳ.`,
    keyTakeaways: [
      'Hồi sinh khách hàng cũ rẻ hơn 5 lần so với chạy ads tìm khách hàng mới.',
      'Thông điệp Zalo xuất phát từ sự quan tâm y tế chu đáo có tỷ lệ chuyển đổi vượt trội.',
    ],
  },
  {
    number: '14',
    title: 'Monetization Analysis & Canvas (Phân tích Doanh thu & Monetization Canvas)',
    subtitle: 'Đa dạng hóa nguồn thu: Marketplace Fee, Subscription & Dịch vụ Bổ trợ',
    category: 'Strategy & Monetization',
    content: `Xây dựng mô hình Doanh thu Đa dòng tiền (Hybrid Monetization) cho IVIE:

1. Dòng tiền 1 - Marketplace Take Rate: Phí dịch vụ tiện ích trên mỗi ca đặt khám tại bệnh viện (25.000đ – 40.000đ/lượt) và hoa hồng tư vấn từ xa (20% giá ca khám video).
2. Dòng tiền 2 - Subscription B2C: Ra mắt gói hội viên "IVIE Family Care" giá 149.000đ/tháng (gồm 3 lần khám video miễn phí + ưu tiên lấy số tại viện + giảm 10% tiền thuốc), tạo dòng tiền MRR dự báo được.
3. Dòng tiền 3 - Cross-sell Dịch vụ Bổ trợ Giá trị cao:
- Xét nghiệm lấy mẫu tại nhà phối hợp cùng các bệnh viện đối tác (Biên lợi nhuận gộp 35%, hoa hồng ~120.000đ/đơn).
- Giao đơn thuốc hỏa tốc theo đơn điện tử của bác sĩ (Hoa hồng nhà thuốc 12%).
4. Dòng tiền 4 - B2B2C Corporate Health: Cung cấp gói khám sức khỏe định kỳ cho các doanh nghiệp vừa và nhỏ.

Kết quả Unit Economics dự phóng: Nâng ARPPU từ 234.000đ lên 345.000đ (+47%); nâng tỷ lệ người dùng trả phí từ 4.2% lên 7.8% MAU.`,
    keyTakeaways: [
      'Không phụ thuộc vào một nguồn thu phí khám viện công duy nhất.',
      'Mô hình gói hội viên và xét nghiệm tại nhà là đòn bẩy gia tăng giá trị trọn đời (LTV) mạnh nhất.',
    ],
  },
  {
    number: '15',
    title: 'Growth Opportunities Mapping (Bản đồ Cơ hội Tăng trưởng)',
    subtitle: 'Định vị và xếp hạng các cơ hội lớn nhất theo ma trận Reach - Impact - Feasibility',
    category: 'Strategy & Monetization',
    content: `Xếp hạng 5 cơ hội tăng trưởng chiến lược của IVIE:

1. Cơ hội 1 (Top 1): Dỡ bỏ đăng ký bắt buộc (Progressive Onboarding) & Mở cổng thanh toán tại viện
- Đánh giá: Reach Rất cao (Toàn bộ người dùng mới), Impact = 3 (Tối đa), Feasibility = Cao → Ưu tiên triển khai ngay trong Tháng 1.
2. Cơ hội 2: Mạng lưới Bác sĩ Nhi trực tuyến ca đêm (20h - 24h)
- Đánh giá: Giải quyết đúng nỗi đau sốt đêm của tệp Mẹ bỉm, Impact = 2.5, Feasibility = Trung bình (Cần tuyển mộ ca trực).
3. Cơ hội 3: Tự động hóa CRM nhắc lịch tái khám qua Zalo ZNS
- Đánh giá: Chi phí cực rẻ, ROI cao gấp 8 lần quảng cáo, Feasibility = Rất cao.
4. Cơ hội 4: Mở rộng mô hình tiếp đón QR Code O2O tại sảnh 30 bệnh viện vệ tinh
- Đánh giá: Kênh thu hút khách hàng có CAC rẻ nhất và chất lượng giữ chân cao nhất.
5. Cơ hội 5: Gói Hội viên Sức khỏe Gia đình (Family Subscription)
- Đánh giá: Đòn bẩy dòng tiền MRR dài hạn cho công ty.`,
    keyTakeaways: [
      'Ưu tiên giải quyết các cơ hội có tác động lớn đến tỷ lệ kích hoạt trước khi mở rộng quy mô.',
      'Tập trung nguồn lực vào 20% cơ hội mang lại 80% tác động kinh doanh.',
    ],
  },
  {
    number: '16',
    title: '10+ High-Impact Experiments Backlog (Danh mục Thử nghiệm Thực chiến)',
    subtitle: 'Hệ thống hóa 12 thử nghiệm mẫu phủ khắp 5 tầng phễu AARRR',
    category: 'Execution & Impact',
    content: `Chi tiết danh mục 12 Growth Experiments đã được xây dựng và tích hợp hoàn chỉnh trong phân hệ "Experiment Lab" của ứng dụng:

- EXP-01 (Activation): Progressive Onboarding dỡ bỏ sign-up wall (RICE: 10.200 | Status: Running)
- EXP-02 (Activation): Bác sĩ Nhi trực đêm phản hồi dưới 5 phút (RICE: 5.440 | Status: Prioritized)
- EXP-03 (Retention): Zalo ZNS tự động nhắc lịch tái khám theo đơn (RICE: 22.500 | Status: Validated)
- EXP-04 (Acquisition): Dynamic Landing Pages theo Khoa viện chuẩn Message Match (RICE: 18.000 | Status: Validated)
- EXP-05 (Monetization): Gói Hội viên IVIE Family Care 149k/tháng (RICE: 8.400 | Status: Running)
- EXP-06 (Monetization): Cross-sell Xét nghiệm lấy mẫu tại nhà sau tư vấn (RICE: 5.100 | Status: Prioritized)
- EXP-07 (Referral): Family Health Loop chia sẻ sổ tiêm chủng cho người thân (RICE: 7.875 | Status: Backlog)
- EXP-08 (Activation): Tùy chọn giữ chỗ trước - thanh toán tại viện (RICE: 24.000 | Status: Validated)
- EXP-09 (Activation): 3-Click Symptom Matcher gợi ý chuyên khoa (RICE: 3.850 | Status: Iterate)
- EXP-10 (Acquisition): Standee QR Code tiếp đón O2O tại sảnh bệnh viện (RICE: 35.625 | Status: Validated)
- EXP-11 (Retention): Lời nhắc uống thuốc tự động từ đơn thuốc điện tử (RICE: 4.320 | Status: Backlog)
- EXP-12 (Activation): A/B Test Thẻ bác sĩ: Uy tín học thuật + Đánh giá phụ huynh (RICE: 99.750 | Status: Completed)

Mỗi thử nghiệm đều có đầy đủ 15 trường thông số chuẩn mực, chỉ số đo lường chính, chỉ số bảo hộ và quy tắc ra quyết định.`,
    keyTakeaways: [
      'Danh mục thử nghiệm phủ kín từ Acquisition đến Monetization.',
      'Toàn bộ thử nghiệm đều gắn chặt với nghiệp vụ y tế thực tế của IVIE.',
    ],
  },
  {
    number: '17',
    title: 'Prioritization Framework (Khung Chấm điểm Ưu tiên ICE/RICE)',
    subtitle: 'Loại bỏ cảm tính chủ quan và định lượng hóa quyết định tăng trưởng',
    category: 'Execution & Impact',
    content: `Áp dụng công thức RICE Score chuẩn mực:
RICE = (Reach × Impact × Confidence %) / Effort (Tuần nhân lực)

Thang đo áp dụng tại IVIE:
- Reach: Ước lượng số bệnh nhân/người dùng tiếp xúc với thử nghiệm trong chu kỳ 30 ngày.
- Impact: 3 = Tác động đột phá (Massive); 2 = Lớn (High); 1 = Trung bình (Medium); 0.5 = Nhỏ (Low); 0.25 = Tối thiểu.
- Confidence: 100% = Có dữ liệu A/B test chứng minh; 80% = Có dữ liệu khảo sát và case study tương đồng; 50% = Giả thuyết trực giác.
- Effort: Số tuần công của 1 lập trình viên / designer (Person-weeks).

Top 3 Thử nghiệm có điểm số RICE cao nhất được đưa vào Sprint 1:
1. EXP-12: A/B Test Thẻ bác sĩ (RICE: 99.750 - Effort cực thấp chỉ 0.5 tuần).
2. EXP-10: Quầy QR Code tiếp đón bệnh viện (RICE: 35.625 - Reach và Impact cực lớn).
3. EXP-08: Tùy chọn thanh toán tại viện (RICE: 24.000 - Giải quyết điểm nghẽn rớt phễu lớn nhất).`,
    keyTakeaways: [
      'RICE giúp bảo vệ đội ngũ khỏi các ý kiến chủ quan của cấp trên (HiPPO).',
      'Ưu tiên những thử nghiệm có đòn bẩy lớn nhưng đòi hỏi nỗ lực kỹ thuật thấp trước.',
    ],
  },
  {
    number: '18',
    title: '90-Day Growth Execution Roadmap (Lộ trình Thực thi 90 Ngày)',
    subtitle: 'Kế hoạch hành động 3 giai đoạn phân kỳ theo phương pháp "Vá thùng trước khi rót nước"',
    category: 'Execution & Impact',
    content: `Lộ trình triển khai 90 ngày được chia làm 3 chặng chiến lược rõ ràng:

1. Chặng 1: Tháng 1 (Days 1–30) — "Fix the Leaky Bucket" (Vá Đáy Thùng Nước)
- Trọng tâm: Tối ưu hóa Onboarding và giải phóng các điểm nghẽn chuyển đổi.
- Thử nghiệm: EXP-01 (Progressive Onboarding), EXP-08 (Thanh toán tại viện), EXP-12 (Tối ưu thẻ bác sĩ).
- Mục tiêu số liệu: Nâng Activation Rate từ 7.2% lên 12.0%; giảm 25% tỷ lệ thoát trang.

2. Chặng 2: Tháng 2 (Days 31–60) — "Build Habit & Retention Engine" (Kiến tạo Động lực Giữ chân)
- Trọng tâm: Thiết lập hệ thống tự động hóa CRM và Habit Loops.
- Thử nghiệm: EXP-03 (CRM Zalo ZNS nhắc lịch tái khám), EXP-02 (Bác sĩ trực đêm 24/7), EXP-11 (Nhắc uống thuốc).
- Mục tiêu số liệu: Nâng Month 1 Retention từ 14.5% lên 21.0%; đạt 1.500 ca tái khám tự động qua Zalo.

3. Chặng 3: Tháng 3 (Days 61–90) — "Scale Acquisition & Monetization" (Mở rộng Quy mô & Doanh thu)
- Trọng tâm: Mở rộng ngân sách kênh hiệu quả cao và đa dạng hóa nguồn thu.
- Thử nghiệm: EXP-04 (Landing page theo viện), EXP-10 (QR Code tiếp đón 20 viện mới), EXP-05 (Gói hội viên Family Care), EXP-06 (Cross-sell xét nghiệm tại nhà).
- Mục tiêu số liệu: Đạt mốc North Star Metric 7.000 ca khám/tuần; giảm Blended CAC về 80.000đ; đạt 1.000 hội viên trả phí.`,
    keyTakeaways: [
      'Tuyệt đối không tăng ngân sách quảng cáo ở Tháng 1 khi phễu chưa được tối ưu.',
      'Mỗi tháng có một trọng tâm chiến lược rõ ràng và kết quả có thể đo đếm được.',
    ],
  },
  {
    number: '19',
    title: 'KPI Framework & Measurement System (Hệ thống Đo lường KPI)',
    subtitle: 'Thiết lập bảng theo dõi thời gian thực và quản trị chỉ số liên phòng ban',
    category: 'Execution & Impact',
    content: `Khung đo lường hiệu suất tăng trưởng được chuẩn hóa qua 3 cấp độ:

1. Cấp độ Ban Điều hành (Executive Tier):
- North Star Metric: Weekly Completed Consultations (WCC).
- Financial Health: Total Gross Revenue, Blended CAC, LTV:CAC Ratio, Monthly Burn Rate.

2. Cấp độ Đội ngũ Tăng trưởng (Growth Squad Tier):
- Acquisition: Qualified Traffic, CAC by Channel, Conversion Rate to Install.
- Activation: First-time Booking CVR, Time to Value (TTV in seconds), Onboarding Drop-off %.
- Retention: Month 1 / Month 3 Retention Rate, DAU/MAU Stickiness %, Re-booking Rate %.
- Monetization: Paid Conversion Rate %, ARPPU, Lab Test Attach Rate %.

3. Cấp độ Vận hành Y tế (Clinical Operations Tier - Guardrails):
- Doctor Response Latency (Thời gian bác sĩ nhận cuộc gọi < 5 phút).
- No-show Rate (Tỷ lệ bùng lịch tại bệnh viện <= 12%).
- Patient Satisfaction CSAT (Điểm hài lòng sau khám >= 4.8 / 5.0 sao).`,
    keyTakeaways: [
      'Gắn kết mục tiêu kỹ thuật với các chỉ số tài chính C-Level.',
      'Chỉ số bảo hộ y tế (CSAT, No-show) đảm bảo tăng trưởng không đánh đổi chất lượng dịch vụ.',
    ],
  },
  {
    number: '20',
    title: 'Expected Business Impact & Financial Projection (Dự phóng Tác động Kinh tế)',
    subtitle: 'Lượng hóa giá trị tài chính và hiệu quả sử dụng vốn của chương trình tăng trưởng',
    category: 'Execution & Impact',
    content: `Mô hình tài chính dự phóng sau khi hoàn thành lộ trình 90 ngày (Simulated Financial Model):

1. Tăng trưởng Sản lượng (Volume Lift):
- Số ca khám thành công hàng tuần tăng từ 4.200 lên 7.000 ca/tuần (+66.7%).
- Tổng số lượt khám hoàn tất trong quý đạt: 78.400 ca (tăng thêm 31.200 ca so với kịch bản không can thiệp).

2. Tối ưu hóa Chi phí (Cost Efficiency):
- Blended CAC giảm từ 135.000đ xuống còn 82.000đ (-39.2% chi phí thu hút khách hàng).
- Tiết kiệm ước tính hơn 1.6 tỷ đồng ngân sách tiếp thị nhờ kênh O2O và Referral Loops.

3. Tăng trưởng Doanh thu & Lợi nhuận (Revenue Expansion):
- Doanh thu ròng từ phí dịch vụ và hoa hồng xét nghiệm/thuốc đạt 3.85 tỷ đồng/tháng (tăng +82% so với baseline).
- Dòng tiền định kỳ MRR từ gói hội viên đạt 220 triệu đồng/tháng.
- Lợi nhuận gộp trên mỗi khách hàng (LTV) tăng từ 280.000đ lên 475.000đ, đưa tỷ lệ LTV:CAC từ 2.0x lên 5.8x (Mức cực kỳ lành mạnh và hấp dẫn đối với các quỹ đầu tư mạo hiểm).`,
    keyTakeaways: [
      'Chương trình tăng trưởng chứng minh tính khả thi kinh tế vượt trội.',
      'Tỷ lệ LTV:CAC đạt 5.8x tạo nền tảng vững chắc để gọi vốn Series A/B.',
    ],
  },
  {
    number: '21',
    title: 'Learning Plan & Executive Reflection (Kế hoạch Học hỏi & Tự bạch Cá nhân)',
    subtitle: 'Đúc rút bài học chuyển dịch vị thế từ Brand & Comms sang Growth Marketing',
    category: 'Execution & Impact',
    content: `Tự bạch cá nhân của Ngô Ngọc Lâm:

"Hành trình 30 ngày xây dựng Bản Thiết Kế Chiến Lược Tăng Trưởng cho IVIE – Bác sĩ ơi đã hoàn toàn định hình lại thế giới quan nghề nghiệp của tôi.

Từ một người làm Brand & Communication quen nhìn tiếp thị qua lăng kính của sự nhận diện, số lượt tiếp cận (Reach), lượt xem video và các chiến dịch ngắn hạn, tôi đã học được cách:
1. Nhìn doanh nghiệp như một hệ thống liên hoàn toán học, nơi mỗi bước rớt phễu đều có thể giải thích và khắc phục bằng dữ liệu khoa học.
2. Từ bỏ cảm tính chủ quan để lắng nghe tiếng nói trung thực của dữ liệu người dùng (Cohort Analysis, Event Tracking, Funnel Drop-off).
3. Coi thất bại trong thử nghiệm là một tài sản học hỏi quý giá giúp cả tổ chức tiến gần hơn tới sự thật.
4. Nhận ra rằng: Sức mạnh kể chuyện (Storytelling) và sự thấu cảm con người từ nền tảng Brand không hề mất đi, mà đã trở thành chiếc chìa khóa giúp tôi tạo ra những Giả thuyết Tăng trưởng (Growth Hypotheses) chạm đúng nỗi đau sâu kín nhất của người bệnh.

Tôi tự tin bước vào các vị trí Growth Marketing với một tư duy dữ liệu sắc bén, phương pháp luận thử nghiệm chuẩn mực và một bản Case Study thực chiến toàn diện có thể tự hào trình bày trước bất kỳ Hội đồng tuyển dụng nào."`,
    keyTakeaways: [
      'Sự chuyển dịch thành công từ Brand sang Growth là sự kết hợp giữa Tâm lý học con người và Khoa học dữ liệu.',
      'Sẵn sàng đảm nhận vai trò Growth Marketing / Performance & Growth với tư duy làm chủ kinh doanh.',
    ],
  },
];

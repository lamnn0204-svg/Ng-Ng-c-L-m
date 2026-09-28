export interface FunnelStepData {
  step: number;
  name: string;
  users: number;
  conversionFromPrevious: number;
  conversionFromStart: number;
  dropoffUsers: number;
  dropoffRate: number;
  description: string;
  isBottleneck?: boolean;
}

export const SIMULATED_FUNNEL_STEPS: FunnelStepData[] = [
  {
    step: 1,
    name: '1. App Install (Cài đặt ứng dụng)',
    users: 10000,
    conversionFromPrevious: 100,
    conversionFromStart: 100,
    dropoffUsers: 0,
    dropoffRate: 0,
    description: 'Người dùng tải app từ App Store / Google Play thông qua các chiến dịch Google Ads, Meta Ads và Quét mã QR tại bệnh viện.',
  },
  {
    step: 2,
    name: '2. App Open & Welcome (Mở ứng dụng lần đầu)',
    users: 8500,
    conversionFromPrevious: 85.0,
    conversionFromStart: 85.0,
    dropoffUsers: 1500,
    dropoffRate: 15.0,
    description: 'Người dùng hoàn tất tải về và mở app, xem các màn hình onboarding giới thiệu giá trị nền tảng.',
  },
  {
    step: 3,
    name: '3. Registration & OTP (Nhập SĐT & Mã xác minh)',
    users: 5100,
    conversionFromPrevious: 60.0,
    conversionFromStart: 51.0,
    dropoffUsers: 3400,
    dropoffRate: 40.0,
    description: 'Rào cản ma sát cao: Bắt người dùng đăng ký ngay trước khi cho họ khám phá danh sách bác sĩ.',
    isBottleneck: true,
  },
  {
    step: 4,
    name: '4. Search Doctor / Specialty (Tìm kiếm chuyên khoa)',
    users: 3200,
    conversionFromPrevious: 62.7,
    conversionFromStart: 32.0,
    dropoffUsers: 1900,
    dropoffRate: 37.3,
    description: 'Người dùng gõ tìm triệu chứng, chọn chuyên khoa (Nhi, Da liễu, Tiêu hóa...) hoặc chọn bệnh viện đối tác.',
  },
  {
    step: 5,
    name: '5. Select Time Slot (Chọn ngày & giờ khám)',
    users: 1600,
    conversionFromPrevious: 50.0,
    conversionFromStart: 16.0,
    dropoffUsers: 1600,
    dropoffRate: 50.0,
    description: 'Điểm nghẽn nguồn cung: Nhiều bác sĩ viện công kín lịch khám vào buổi sáng hoặc không có lịch trực đêm.',
    isBottleneck: true,
  },
  {
    step: 6,
    name: '6. Payment & Confirm (Xác nhận & Hoàn tất)',
    users: 720,
    conversionFromPrevious: 45.0,
    conversionFromStart: 7.2,
    dropoffUsers: 880,
    dropoffRate: 55.0,
    description: 'Điểm rớt thanh toán: Khách hàng sợ nạp tiền trước tiền viện phí khi chưa gặp bác sĩ.',
    isBottleneck: true,
  },
];

export interface CohortRowData {
  cohort: string;
  size: number;
  day0: number;
  day1: number;
  day7: number;
  day14: number;
  day30: number;
  day60: number;
}

export const SIMULATED_COHORT_DATA: CohortRowData[] = [
  { cohort: 'Tuần 1 (T8/26)', size: 1250, day0: 100, day1: 24.2, day7: 16.8, day14: 12.4, day30: 10.2, day60: 8.5 },
  { cohort: 'Tuần 2 (T8/26)', size: 1320, day0: 100, day1: 25.0, day7: 17.5, day14: 13.1, day30: 11.0, day60: 9.1 },
  { cohort: 'Tuần 3 (T8/26)', size: 1410, day0: 100, day1: 26.4, day7: 18.2, day14: 14.0, day30: 12.3, day60: 9.8 },
  { cohort: 'Tuần 4 (T8/26)*', size: 1650, day0: 100, day1: 31.8, day7: 23.5, day14: 18.9, day30: 16.2, day60: 14.1 },
  { cohort: 'Tuần 1 (T9/26)', size: 1780, day0: 100, day1: 34.5, day7: 26.1, day14: 21.4, day30: 18.5, day60: 15.6 },
  { cohort: 'Tuần 2 (T9/26)', size: 1890, day0: 100, day1: 36.2, day7: 28.4, day14: 23.2, day30: 21.0, day60: 17.8 },
  { cohort: 'Tuần 3 (T9/26)', size: 2050, day0: 100, day1: 38.0, day7: 30.5, day14: 25.8, day30: 23.4, day60: 19.5 },
  { cohort: 'Tuần 4 (T9/26)', size: 2200, day0: 100, day1: 40.5, day7: 32.8, day14: 27.5, day30: 24.8, day60: 21.2 },
];

export interface TrackingTaxonomyItem {
  eventName: string;
  funnelStage: string;
  triggerDescription: string;
  parameters: string[];
}

export const SIMULATED_TRACKING_TAXONOMY: TrackingTaxonomyItem[] = [
  {
    eventName: 'app_install_attributed',
    funnelStage: 'Acquisition',
    triggerDescription: 'Kích hoạt khi người dùng cài app lần đầu và mở lên, gán nguồn tiếp thị từ AppsFlyer/Branch.',
    parameters: ['media_source', 'campaign_id', 'adset_id', 'hospital_qr_id'],
  },
  {
    eventName: 'onboarding_step_viewed',
    funnelStage: 'Activation',
    triggerDescription: 'Kích hoạt khi người dùng xem từng màn hình trong luồng Onboarding.',
    parameters: ['step_index', 'screen_name', 'time_spent_seconds'],
  },
  {
    eventName: 'doctor_search_performed',
    funnelStage: 'Activation',
    triggerDescription: 'Kích hoạt khi người dùng gõ từ khóa tìm kiếm hoặc bấm lọc chuyên khoa.',
    parameters: ['search_query', 'specialty_filter', 'hospital_filter', 'result_count'],
  },
  {
    eventName: 'doctor_profile_viewed',
    funnelStage: 'Activation',
    triggerDescription: 'Kích hoạt khi người dùng bấm vào xem trang chi tiết của một bác sĩ cụ thể.',
    parameters: ['doctor_id', 'doctor_name', 'specialty', 'hospital_name', 'years_experience'],
  },
  {
    eventName: 'booking_flow_started',
    funnelStage: 'Activation',
    triggerDescription: 'Kích hoạt khi người dùng bấm nút "Đặt khám ngay" hoặc "Gọi video ngay".',
    parameters: ['consultation_type (clinic/video)', 'doctor_id', 'price_tier'],
  },
  {
    eventName: 'booking_confirmed',
    funnelStage: 'Activation / NSM',
    triggerDescription: 'Kích hoạt khi lịch hẹn được ghi nhận thành công trên hệ thống và cấp mã số thứ tự.',
    parameters: ['booking_id', 'booking_value', 'payment_method (online/hospital)', 'is_first_booking (boolean)'],
  },
  {
    eventName: 'consultation_completed',
    funnelStage: 'Retention & Value',
    triggerDescription: 'Bác sĩ và bệnh nhân hoàn tất buổi khám, đơn thuốc điện tử được tạo.',
    parameters: ['consultation_id', 'duration_minutes', 'has_prescription (boolean)', 'has_lab_order (boolean)'],
  },
  {
    eventName: 'medication_reminder_engaged',
    funnelStage: 'Retention',
    triggerDescription: 'Người dùng tương tác với lời nhắc uống thuốc trên app hoặc Zalo.',
    parameters: ['action_type (taken/skip/snooze)', 'prescription_id', 'streak_days'],
  },
  {
    eventName: 'rebooking_requested',
    funnelStage: 'Retention',
    triggerDescription: 'Người dùng đặt lịch tái khám theo phác đồ bác sĩ hoặc qua tin nhắn ZNS.',
    parameters: ['days_since_last_visit', 'source (crm_zns/app/push)', 'same_doctor (boolean)'],
  },
  {
    eventName: 'subscription_purchased',
    funnelStage: 'Monetization',
    triggerDescription: 'Người dùng đăng ký gói hội viên gia đình IVIE Family Care.',
    parameters: ['package_id', 'cycle (monthly/annual)', 'price_paid', 'family_members_count'],
  },
];

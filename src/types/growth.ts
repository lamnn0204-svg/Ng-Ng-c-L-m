export type PhaseId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Phase {
  id: PhaseId;
  title: string;
  subtitle: string;
  dayRange: string;
  startDay: number;
  endDay: number;
  description: string;
  milestoneOutput: string;
  careerValue: string;
  iconName: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ivieContext: string;
}

export interface DailyScheduleSlot {
  time: string;
  activity: string;
  description: string;
  type: 'warmup' | 'theory' | 'framework' | 'case' | 'quiz' | 'practice';
}

export interface DayLesson {
  day: number;
  phaseId: PhaseId;
  title: string;
  tagline: string;
  objective: string;
  schedule: DailyScheduleSlot[];
  learn: {
    coreConcept: string;
    whyItMatters: string;
    howItWorks: string;
    whenToUse: string;
    relevantMetrics: string[];
  };
  framework: {
    name: string;
    formulaOrStructure: string;
    explanation: string;
    commonMistakes: string[];
  };
  ivieApplication: {
    problemContext: string;
    applicationSteps: string[];
    simulatedExample: string;
    isSimulated: boolean;
  };
  eveningPractice: {
    task1: string;
    task2: string;
    task3: string;
    requiredOutput: string;
    submissionPrompt: string;
    hint: string;
  };
  resources: {
    title: string;
    source: string;
    difficulty: 'Cơ bản' | 'Trung cấp' | 'Nâng cao';
    estMinutes: number;
    keyTakeaway: string;
    url?: string;
  }[];
  quiz: QuizQuestion[];
}

export interface Experiment {
  id: string;
  name: string;
  status: 'Backlog' | 'Prioritized' | 'Running' | 'Completed' | 'Validated' | 'Invalidated' | 'Iterate';
  targetFunnelStage: 'Acquisition' | 'Activation' | 'Retention' | 'Monetization' | 'Referral';
  problem: string;
  insight: string;
  hypothesis: string;
  targetSegment: string;
  proposedChange: string;
  primaryMetric: string;
  secondaryMetric: string;
  guardrailMetric: string;
  expectedResult: string;
  durationWeeks: number;
  ice: {
    impact: number; // 1-10
    confidence: number; // 1-10
    ease: number; // 1-10
    score: number;
  };
  rice: {
    reach: number; // users
    impact: number; // 0.25, 0.5, 1, 2, 3
    confidence: number; // 50% to 100%
    effort: number; // person-weeks
    score: number;
  };
  decisionRule: string;
  actualResult?: string;
  learning?: string;
  nextAction?: string;
  createdAt: string;
}

export interface MetricItem {
  id: string;
  name: string;
  category: 'Acquisition' | 'Activation' | 'Retention' | 'Engagement' | 'Monetization' | 'Experiment';
  formula: string;
  definition: string;
  whenToUse: string;
  generalExample: string;
  ivieExample: string;
  commonMistakes: string;
}

export interface InterviewQuestionItem {
  id: number;
  category: 'Mindset & Fundamentals' | 'Funnel & Metrics' | 'Retention & CRM' | 'Experimentation & Data' | 'IVIE Healthcare Case' | 'Career Transition';
  question: string;
  interviewerIntent: string;
  answerFramework: string;
  sampleAnswer: string;
  ivieHealthcareAngle: string;
  pitfallsToAvoid: string[];
}

export interface UserProgress {
  currentDay: number;
  completedDays: number[];
  completedTasks: Record<string, boolean>;
  quizScores: Record<number, { score: number; total: number }>;
  reflections: Record<number, {
    learned: string;
    unclear: string;
    keyInsight: string;
    actionableStep: string;
    updatedAt: string;
  }>;
  exerciseSubmissions: Record<number, {
    content: string;
    status: 'draft' | 'submitted' | 'reviewed';
    score?: number;
    feedback?: {
      strengths: string[];
      flaws: string[];
      socraticQuestions: string[];
      improvedVersion: string;
    };
    submittedAt?: string;
  }>;
  streak: number;
  studyHours: number;
  bookmarkedDays: number[];
}

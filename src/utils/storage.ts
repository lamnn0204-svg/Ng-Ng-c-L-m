import { UserProgress, Experiment } from '../types/growth';
import { INITIAL_EXPERIMENTS } from '../data/experimentsData';

const PROGRESS_STORAGE_KEY = 'lam_growth_bootcamp_progress_v1';
const EXPERIMENTS_STORAGE_KEY = 'lam_growth_bootcamp_experiments_v1';

export const getDefaultProgress = (): UserProgress => ({
  currentDay: 1,
  completedDays: [],
  completedTasks: {},
  quizScores: {},
  reflections: {},
  exerciseSubmissions: {},
  streak: 3,
  studyHours: 8.5,
  bookmarkedDays: [1, 3, 10, 18, 28],
});

export const loadUserProgress = (): UserProgress => {
  try {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!saved) return getDefaultProgress();
    return { ...getDefaultProgress(), ...JSON.parse(saved) };
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
    return getDefaultProgress();
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
};

export const loadExperiments = (): Experiment[] => {
  try {
    const saved = localStorage.getItem(EXPERIMENTS_STORAGE_KEY);
    if (!saved) return INITIAL_EXPERIMENTS;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_EXPERIMENTS;
  } catch (e) {
    console.error('Failed to load experiments', e);
    return INITIAL_EXPERIMENTS;
  }
};

export const saveExperiments = (experiments: Experiment[]): void => {
  try {
    localStorage.setItem(EXPERIMENTS_STORAGE_KEY, JSON.stringify(experiments));
  } catch (e) {
    console.error('Failed to save experiments', e);
  }
};

import { DayLesson } from '../types/growth';
import { CURRICULUM_DAYS_1_TO_10 } from './curriculumDays1to10';
import { CURRICULUM_DAYS_11_TO_20 } from './curriculumDays11to20';
import { CURRICULUM_DAYS_21_TO_30 } from './curriculumDays21to30';

export const ALL_CURRICULUM_DAYS: DayLesson[] = [
  ...CURRICULUM_DAYS_1_TO_10,
  ...CURRICULUM_DAYS_11_TO_20,
  ...CURRICULUM_DAYS_21_TO_30,
];

export const getDayLesson = (dayNumber: number): DayLesson | undefined => {
  return ALL_CURRICULUM_DAYS.find((d) => d.day === dayNumber);
};

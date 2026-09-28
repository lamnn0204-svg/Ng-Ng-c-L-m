import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { CurriculumView } from './components/CurriculumView';
import { ExperimentLabView } from './components/ExperimentLabView';
import { AnalyticsDashboardView } from './components/AnalyticsDashboardView';
import { ExercisesView } from './components/ExercisesView';
import { IvieDeepDiveView } from './components/IvieDeepDiveView';
import { MetricsCheatSheetView } from './components/MetricsCheatSheetView';
import { PortfolioView } from './components/PortfolioView';
import { InterviewPrepView } from './components/InterviewPrepView';
import { AiMentorModal } from './components/AiMentorModal';
import { UserProgress, Experiment } from './types/growth';
import {
  loadUserProgress,
  saveUserProgress,
  loadExperiments,
  saveExperiments,
} from './utils/storage';

export default function App() {
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress);
  const [experiments, setExperiments] = useState<Experiment[]>(loadExperiments);

  // AI Mentor Modal state
  const [isAiMentorOpen, setIsAiMentorOpen] = useState(false);
  const [mentorInitialPrompt, setMentorInitialPrompt] = useState<string | undefined>();

  // Persist progress changes
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Persist experiments changes
  useEffect(() => {
    saveExperiments(experiments);
  }, [experiments]);

  const handleNavigate = (view: string, dayNumber?: number) => {
    setActiveView(view);
    if (dayNumber !== undefined) {
      setSelectedDay(dayNumber);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToDay = (day: number) => {
    setSelectedDay(day);
    setActiveView('curriculum');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCompleteDay = (day: number) => {
    setProgress((prev) => {
      const isAlreadyCompleted = prev.completedDays.includes(day);
      const newCompletedDays = isAlreadyCompleted
        ? prev.completedDays.filter((d) => d !== day)
        : [...prev.completedDays, day];

      // Auto update current day to next unfinished day
      let nextDay = prev.currentDay;
      if (!isAlreadyCompleted && day === prev.currentDay && day < 30) {
        nextDay = day + 1;
      }

      return {
        ...prev,
        completedDays: newCompletedDays,
        currentDay: nextDay,
        streak: isAlreadyCompleted ? prev.streak : prev.streak + 1,
        studyHours: isAlreadyCompleted ? prev.studyHours : Number((prev.studyHours + 2).toFixed(1)),
      };
    });
  };

  const handleSaveReflection = (day: number, data: { learned: string; unclear: string; keyInsight: string; actionableStep: string }) => {
    setProgress((prev) => ({
      ...prev,
      reflections: {
        ...prev.reflections,
        [day]: {
          ...data,
          updatedAt: new Date().toISOString(),
        },
      },
    }));
  };

  const handleSaveSubmission = (day: number, content: string, feedback?: any) => {
    setProgress((prev) => ({
      ...prev,
      exerciseSubmissions: {
        ...prev.exerciseSubmissions,
        [day]: {
          content,
          status: feedback ? 'reviewed' : 'submitted',
          feedback: feedback || prev.exerciseSubmissions[day]?.feedback,
          submittedAt: new Date().toISOString(),
        },
      },
    }));
  };

  const handleToggleBookmark = (day: number) => {
    setProgress((prev) => {
      const bookmarks = prev.bookmarkedDays || [];
      const newBookmarks = bookmarks.includes(day)
        ? bookmarks.filter((d) => d !== day)
        : [...bookmarks, day];
      return { ...prev, bookmarkedDays: newBookmarks };
    });
  };

  const handleSaveExperiment = (newOrUpdatedExp: Experiment) => {
    setExperiments((prev) => {
      const index = prev.findIndex((e) => e.id === newOrUpdatedExp.id);
      if (index >= 0) {
        const copy = [...prev];
        copy[index] = newOrUpdatedExp;
        return copy;
      }
      return [newOrUpdatedExp, ...prev];
    });
  };

  const handleOpenAiMentorWithPrompt = (prompt: string) => {
    setMentorInitialPrompt(prompt);
    setIsAiMentorOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <Header
        progress={progress}
        onOpenAiMentor={() => {
          setMentorInitialPrompt(undefined);
          setIsAiMentorOpen(true);
        }}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* Main Body with Sidebar */}
      <div className="flex-1 flex w-full">
        {/* Sidebar */}
        <Sidebar
          activeView={activeView}
          onNavigate={handleNavigate}
          progress={progress}
        />

        {/* Primary View Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto min-w-0">
          {activeView === 'dashboard' && (
            <DashboardView
              progress={progress}
              onNavigateToDay={handleNavigateToDay}
              onNavigate={handleNavigate}
            />
          )}

          {activeView === 'curriculum' && (
            <CurriculumView
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              progress={progress}
              onToggleCompleteDay={handleToggleCompleteDay}
              onSaveReflection={handleSaveReflection}
              onSaveSubmission={handleSaveSubmission}
              onToggleBookmark={handleToggleBookmark}
              onOpenAiMentorWithPrompt={handleOpenAiMentorWithPrompt}
            />
          )}

          {activeView === 'ivie-hub' && (
            <IvieDeepDiveView
              onNavigateToPortfolio={() => handleNavigate('portfolio')}
            />
          )}

          {activeView === 'experiment-lab' && (
            <ExperimentLabView
              experiments={experiments}
              onSaveExperiment={handleSaveExperiment}
              onOpenAiMentorWithPrompt={handleOpenAiMentorWithPrompt}
            />
          )}

          {activeView === 'analytics' && (
            <AnalyticsDashboardView />
          )}

          {activeView === 'exercises' && (
            <ExercisesView
              progress={progress}
              onSaveSubmission={handleSaveSubmission}
              onOpenAiMentorWithPrompt={handleOpenAiMentorWithPrompt}
            />
          )}

          {activeView === 'portfolio' && (
            <PortfolioView />
          )}

          {activeView === 'interview-prep' && (
            <InterviewPrepView />
          )}

          {activeView === 'metrics' && (
            <MetricsCheatSheetView />
          )}
        </main>
      </div>

      {/* Socratic AI Mentor Modal */}
      <AiMentorModal
        isOpen={isAiMentorOpen}
        onClose={() => setIsAiMentorOpen(false)}
        progress={progress}
        initialPrompt={mentorInitialPrompt}
      />
    </div>
  );
}

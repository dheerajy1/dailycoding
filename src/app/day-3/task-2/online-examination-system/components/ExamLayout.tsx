import { questions } from "../data";

interface ExamLayoutProps {
  currentQuestionIndex: number;
  timeRemaining: number;
  answers: Record<number, string>;
  onQuestionSelect: (index: number) => void;
  children: React.ReactNode;
}

export default function ExamLayout({
  currentQuestionIndex,
  timeRemaining,
  answers,
  onQuestionSelect,
  children,
}: ExamLayoutProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const percentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      <div className="grid lg:grid-cols-[340px_1fr]">
        <aside className="min-h-screen bg-(--bg-normal) border-r border-(--border-main) p-6">
          <div>
            <h1 className="text-3xl font-bold text-(--text-main)">
              Online Exam
            </h1>

            <p className="text-sm text-(--text-muted) mt-2">
              React Fundamentals Assessment
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-(--border-main) p-6 shadow-xl">
            <p className="text-xs uppercase tracking-wider text-(--text-muted)">
              Remaining Time
            </p>

            <p className="text-5xl font-bold mt-3 text-(--text-main)">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-(--border-main) p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-(--text-main)">Progress</h2>

              <span className="text-sm text-(--text-muted)">
                {currentQuestionIndex + 1}/{questions.length}
              </span>
            </div>

            <div className="h-3 rounded-full bg-(--bg-secondary)">
              <div
                className="h-3 rounded-full bg-(--accent-alt)"
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-(--border-main) p-6">
            <h2 className="font-semibold mb-5 text-(--text-main)">
              Question Navigator
            </h2>

            <div className="grid grid-cols-5 gap-3">
              {questions.map((question, index) => {
                const isCurrent = index === currentQuestionIndex;

                const isAnswered = !!answers[question.id];

                return (
                  <button
                    key={question.id}
                    type="button"
                    onClick={() => onQuestionSelect(index)}
                    className={`h-12 rounded-xl flex items-center justify-center font-semibold transition-all ${
                      isCurrent
                        ? "bg-(--accent-alt) text-(--text-inverse) shadow-lg"
                        : isAnswered
                          ? "border border-(--accent-alt) bg-(--bg-secondary)"
                          : "border border-(--border-main)"
                    }`}
                  >
                    {question.id}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-(--accent-alt)" />
                <span>Current</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-(--accent-alt)" />
                <span>Answered</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-(--border-main)" />
                <span>Unanswered</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import ExamLayout from "./components/ExamLayout";
import { questions } from "./data";

const EXAM_DURATION_SECONDS = 30 * 60;

const OnlineExaminationSystemIndex = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSubmitted(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const selectedAnswer = answers[currentQuestion.id];

  const score = questions.reduce((total, question) => {
    if (answers[question.id] === question.correctAnswer) {
      return total + 1;
    }

    return total;
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  const pass = percentage >= 60;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-(--bg-primary) p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-(--bg-normal) border border-(--border-main) rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-(--text-main)">
                Examination Result
              </h1>

              <p className="text-(--text-muted) mt-3">
                Assessment Completed Successfully
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <div className="border border-(--border-main) rounded-2xl p-6 text-center">
                <p className="text-sm text-(--text-muted)">Score</p>

                <p className="text-4xl font-bold mt-3">
                  {score}/{questions.length}
                </p>
              </div>

              <div className="border border-(--border-main) rounded-2xl p-6 text-center">
                <p className="text-sm text-(--text-muted)">Percentage</p>

                <p className="text-4xl font-bold mt-3">{percentage}%</p>
              </div>

              <div className="border border-(--border-main) rounded-2xl p-6 text-center">
                <p className="text-sm text-(--text-muted)">Correct</p>

                <p className="text-4xl font-bold mt-3">{score}</p>
              </div>

              <div className="border border-(--border-main) rounded-2xl p-6 text-center">
                <p className="text-sm text-(--text-muted)">Result</p>

                <p
                  className={`text-2xl font-bold mt-4 ${
                    pass ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {pass ? "PASS" : "FAIL"}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6">Question Review</h2>

              <div className="space-y-4">
                {questions.map((question, index) => {
                  const userAnswer = answers[question.id] || "Not Answered";

                  const isCorrect = userAnswer === question.correctAnswer;

                  return (
                    <div
                      key={question.id}
                      className="border border-(--border-main) rounded-2xl p-5"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-semibold">
                            Q{index + 1}. {question.question}
                          </h3>

                          <p className="mt-3">Your Answer: {userAnswer}</p>

                          <p className="mt-1">
                            Correct Answer: {question.correctAnswer}
                          </p>
                        </div>

                        <div className="font-semibold">
                          {isCorrect ? "✓" : "✗"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ExamLayout
      currentQuestionIndex={currentQuestionIndex}
      timeRemaining={timeRemaining}
      answers={answers}
      onQuestionSelect={(index) => setCurrentQuestionIndex(index)}
    >
      <div className="w-full">
        <div className="bg-(--bg-normal) border border-(--border-main) rounded-2xl p-8">
          <div className="mb-8">
            <span className="text-sm text-(--text-muted)">
              Question {currentQuestionIndex + 1}
            </span>

            <h2 className="text-3xl font-bold mt-3 text-(--text-main)">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelectAnswer(option)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
                  selectedAnswer === option
                    ? "border-(--accent-alt) bg-(--bg-secondary) shadow-xl scale-[1.01]"
                    : "border-(--border-main) hover:bg-(--bg-secondary)"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>

                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === option
                        ? "border-(--accent-alt)"
                        : "border-(--border-main)"
                    }`}
                  >
                    {selectedAnswer === option && (
                      <div className="w-3 h-3 rounded-full bg-(--accent-alt)" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 rounded-xl border border-(--border-main) disabled:opacity-40"
            >
              Previous
            </button>

            <div className="flex gap-3">
              {currentQuestionIndex === questions.length - 1 && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-xl border border-(--border-main)"
                >
                  Submit Exam
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold disabled:opacity-40"
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </ExamLayout>
  );
};

export default OnlineExaminationSystemIndex;

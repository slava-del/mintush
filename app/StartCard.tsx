"use client";

import Link from "next/link";
import { memo, useState } from "react";
import type { RefObject } from "react";
import type { StartFormat, StartFormatId, StartQuizQuestion } from "./landing-data";

type StartCardProps = {
  cardRef: RefObject<HTMLDivElement | null>;
  startFormats: StartFormat[];
  startQuestions: StartQuizQuestion[];
};

const compactTitles: Record<StartFormatId, string> = {
  education: "Обучение",
  board: "Совет",
  adviser: "Наставничество",
};

export const StartCard = memo(function StartCard({ cardRef, startFormats, startQuestions }: StartCardProps) {
  const [answers, setAnswers] = useState<StartFormatId[]>([]);

  const scores = startFormats.reduce<Record<StartFormatId, number>>(
    (accumulator, format) => {
      accumulator[format.id] = 0;
      return accumulator;
    },
    {
      education: 0,
      board: 0,
      adviser: 0,
    },
  );

  answers.forEach((formatId) => {
    scores[formatId] += 1;
  });

  const currentStep = answers.length;
  const totalSteps = startQuestions.length;
  const isComplete = currentStep >= totalSteps;
  const currentQuestion = isComplete ? null : startQuestions[currentStep];

  let leadingFormatId: StartFormatId | null = null;
  if (answers.length > 0) {
    const maxScore = Math.max(...startFormats.map((format) => scores[format.id]));
    const tiedIds = startFormats
      .filter((format) => scores[format.id] === maxScore)
      .map((format) => format.id);

    leadingFormatId =
      [...answers].reverse().find((formatId) => tiedIds.includes(formatId)) ?? tiedIds[0] ?? null;
  }

  const winningFormat = leadingFormatId
    ? startFormats.find((format) => format.id === leadingFormatId) ?? null
    : null;

  const handleAnswer = (formatId: StartFormatId) => {
    setAnswers((previous) => {
      if (previous.length >= totalSteps) return previous;
      return [...previous, formatId];
    });
  };

  const handleRestart = () => {
    setAnswers([]);
  };

  return (
    <div
      ref={cardRef}
      className="overflow-hidden rounded-[28px] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(231,210,173,0.12),transparent_34%),linear-gradient(180deg,#050505_0%,#080808_62%,#101010_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.72)]"
    >
      <div className="flex min-h-full flex-col px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10 lg:pb-6 lg:pt-6">
        <h2 className="text-center text-[34px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[44px] xl:text-[50px]">
          Не уверены, что выбрать?
        </h2>
        <p className="mx-auto mt-2 max-w-[34ch] text-center text-[16px] font-medium leading-[1.3] text-white/65 md:text-[18px] xl:text-[20px]">
          Подскажем формат, который подойдёт именно вам.
        </p>

        <div className="mt-8 lg:hidden">
          <div className="grid gap-3 sm:grid-cols-3">
            {startFormats.map((format) => {
              const isLeading = leadingFormatId === format.id;
              const isWinner = isComplete && winningFormat?.id === format.id;

              return (
                <Link
                  key={format.id}
                  href={format.href}
                  className={`group rounded-[20px] border px-4 py-3 transition-all duration-300 ${
                    isLeading
                      ? "border-[#e7d2ad]/45 bg-[#e7d2ad]/10 shadow-[0_0_0_1px_rgba(231,210,173,0.08)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`relative inline-block pb-1 text-[14px] font-extrabold leading-none tracking-[-0.02em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#e7d2ad]/70 after:transition-transform after:duration-300 group-hover:after:scale-x-100 sm:text-[16px] ${
                        isLeading ? "text-white" : "text-white/84"
                      }`}
                    >
                      {compactTitles[format.id]}
                    </span>
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px] ${
                        isLeading
                          ? "border-[#e7d2ad]/45 text-[#e7d2ad]"
                          : "border-white/10 text-white/35"
                      }`}
                    >
                      {scores[format.id]} / {totalSteps}
                    </span>
                  </div>
                  <div className="mt-3 h-[3px] rounded-full bg-white/8">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isLeading ? "bg-[#e7d2ad]" : "bg-white/16"
                      }`}
                      style={{ width: `${(scores[format.id] / totalSteps) * 100}%` }}
                    />
                  </div>
                  {isWinner ? (
                    <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e7d2ad]">
                      итоговая рекомендация
                    </div>
                  ) : null}
                </Link>
              );
            })}
          </div>

          {!isComplete && currentQuestion ? (
            <article className="mt-6 flex min-h-[340px] flex-1 flex-col rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:min-h-[380px] md:mt-8 md:min-h-[440px] md:p-8">
              <div className="flex items-center justify-end">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/32">
                  {currentStep + 1} / {totalSteps}
                </span>
              </div>

              <div className="mt-8 flex flex-1 flex-col md:mt-10">
                <h3 className="max-w-[18ch] text-[28px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-[32px] md:text-[46px]">
                  {currentQuestion.prompt}
                </h3>

                <div className="mt-8 grid gap-3 md:mt-10 md:gap-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleAnswer(option.formatId)}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-[16px] font-semibold leading-[1.3] text-white/84 transition-all duration-200 hover:border-[#e7d2ad]/45 hover:bg-[#e7d2ad]/10 hover:text-white sm:px-6 sm:py-5 sm:text-[18px] md:rounded-[999px] md:px-7 md:py-6 md:text-[22px]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <p className="mt-auto pt-8 text-[14px] leading-[1.45] text-white/34 md:text-[15px]">
                  Выберите вариант, который ближе всего к вашей текущей задаче.
                </p>
              </div>
            </article>
          ) : (
            <article className="mt-6 rounded-[28px] border border-[#e7d2ad]/30 bg-[linear-gradient(180deg,rgba(231,210,173,0.16),rgba(231,210,173,0.08))] p-6 md:mt-8 md:p-8">
              {winningFormat ? (
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">
                    Ваш результат
                  </span>
                  <h3 className="mt-4 max-w-[16ch] text-[34px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[46px]">
                    Вам подойдёт: {winningFormat.title}
                  </h3>
                  <p className="mt-6 max-w-[32ch] text-[18px] leading-[1.42] text-white/74 md:text-[22px]">
                    {winningFormat.recommendation}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={winningFormat.href}
                      className="inline-flex items-center justify-center rounded-full bg-[#e7d2ad] px-7 py-3 text-[16px] font-semibold text-black transition hover:bg-[#f3dfbd] md:text-[18px]"
                    >
                      Посмотреть формат
                    </Link>
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-[16px] font-semibold text-white/78 transition hover:border-white/22 hover:bg-white/[0.06] md:text-[18px]"
                    >
                      Пройти заново
                    </button>
                  </div>
                </div>
              ) : null}
            </article>
          )}
        </div>

        <div className="mt-5 hidden min-h-0 flex-1 gap-4 lg:grid xl:grid-cols-[0.8fr_1.2fr]">
          <div className="flex h-full flex-col gap-3">
            {startFormats.map((format) => {
              const score = scores[format.id];
              const isLeading = leadingFormatId === format.id;
              const isWinner = isComplete && winningFormat?.id === format.id;

              return (
                <Link
                  key={format.id}
                  href={format.href}
                  className={`group relative flex min-h-[112px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] border p-4 transition-all duration-300 xl:min-h-[128px] xl:p-5 ${
                    isLeading
                      ? "border-[#e7d2ad]/45 bg-[#e7d2ad]/10 shadow-[0_0_0_1px_rgba(231,210,173,0.08)] hover:border-[#e7d2ad]/65"
                      : "border-white/10 bg-white/[0.03] hover:border-white/22 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3
                        className={`relative inline-block w-fit pb-1.5 text-[22px] font-extrabold leading-[1.02] tracking-[-0.02em] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#e7d2ad]/70 after:transition-transform after:duration-300 group-hover:after:scale-x-100 xl:text-[28px] ${
                          isLeading ? "text-white" : "text-white/82"
                        }`}
                      >
                        {format.title}
                      </h3>
                      <p className="mt-2 max-w-[24ch] text-[14px] leading-[1.3] text-white/48 xl:text-[15px]">
                        {format.note}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 text-right">
                      {isWinner ? (
                        <span className="inline-flex rounded-full border border-[#e7d2ad]/45 bg-[#e7d2ad]/12 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">
                          рекомендация
                        </span>
                      ) : null}
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] ${
                          isLeading
                            ? "border-[#e7d2ad]/45 text-[#e7d2ad]"
                            : "border-white/10 text-white/35"
                        }`}
                      >
                        {score} / {totalSteps}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 h-[3px] rounded-full bg-white/8">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isLeading ? "bg-[#e7d2ad]" : "bg-white/16"
                      }`}
                      style={{ width: `${(score / totalSteps) * 100}%` }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <article className="flex h-full min-h-0 flex-col rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 xl:p-6">
            <div className="flex items-center justify-end gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/32">
                {isComplete ? `${totalSteps} / ${totalSteps}` : `${currentStep + 1} / ${totalSteps}`}
              </span>
            </div>

            {!isComplete && currentQuestion ? (
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="max-w-[18ch] text-[28px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white xl:text-[38px]">
                  {currentQuestion.prompt}
                </h3>

                <div className="mt-6 grid gap-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => handleAnswer(option.formatId)}
                      className="rounded-[999px] border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-[16px] font-semibold leading-[1.25] text-white/84 transition-all duration-200 hover:border-[#e7d2ad]/45 hover:bg-[#e7d2ad]/10 hover:text-white xl:px-6 xl:py-5 xl:text-[19px]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <p className="mt-auto pt-6 text-[13px] leading-[1.4] text-white/34 xl:text-[14px]">
                  Выберите вариант, который ближе всего к вашей текущей задаче.
                </p>
              </div>
            ) : (
              <div className="mt-6 flex flex-1 flex-col">
                {winningFormat ? (
                  <div className="flex flex-1 flex-col rounded-[24px] border border-[#e7d2ad]/30 bg-[#e7d2ad]/10 p-5 xl:p-6">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e7d2ad]">
                      Ваш результат
                    </span>
                    <h3 className="mt-3 max-w-[15ch] text-[28px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white xl:text-[38px]">
                      Вам подойдёт: {winningFormat.title}
                    </h3>
                    <p className="mt-4 max-w-[34ch] text-[16px] leading-[1.38] text-white/72 xl:text-[18px]">
                      {winningFormat.recommendation}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      <Link
                        href={winningFormat.href}
                        className="inline-flex items-center justify-center rounded-full bg-[#e7d2ad] px-6 py-2.5 text-[15px] font-semibold text-black transition hover:bg-[#f3dfbd] xl:text-[16px]"
                      >
                        Посмотреть формат
                      </Link>
                      <button
                        type="button"
                        onClick={handleRestart}
                        className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-2.5 text-[15px] font-semibold text-white/78 transition hover:border-white/22 hover:bg-white/[0.06] xl:text-[16px]"
                      >
                        Пройти заново
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
});

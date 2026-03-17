"use client"

import type { FormEvent } from "react"
import { cn } from "@/lib/utils"

export type EnrollmentFormState = {
  firstName: string
  lastName: string
  telegram: string
  email: string
}

type EnrollmentFormProps = {
  formState: EnrollmentFormState
  onFieldChange: (field: keyof EnrollmentFormState, value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  isFormValid: boolean
  isPending: boolean
  helperText: string
}

const formFields: Array<{
  key: keyof EnrollmentFormState
  label: string
  placeholder: string
  type: string
  autoComplete: string
}> = [
  { key: "firstName", label: "Имя", placeholder: "Ваше имя", type: "text", autoComplete: "given-name" },
  { key: "lastName", label: "Фамилия", placeholder: "Ваша фамилия", type: "text", autoComplete: "family-name" },
  { key: "telegram", label: "Telegram", placeholder: "@username", type: "text", autoComplete: "username" },
  { key: "email", label: "Email", placeholder: "name@company.com", type: "email", autoComplete: "email" },
]

export function EnrollmentForm({
  formState,
  onFieldChange,
  onSubmit,
  isFormValid,
  isPending,
  helperText,
}: EnrollmentFormProps) {
  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-1 flex-col">
      <div className="grid gap-2.5 md:grid-cols-2">
        {formFields.map((field) => (
          <label
            key={field.key}
            className="rounded-[16px] border border-[#d4b174]/14 bg-[linear-gradient(180deg,rgba(10,10,12,0.96),rgba(8,8,10,0.96))] px-3.5 pb-2.5 pt-2.5 transition focus-within:border-[#7d98ff]/34 focus-within:shadow-[0_0_0_1px_rgba(125,152,255,0.16),0_0_24px_rgba(86,118,255,0.1)]"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#EDEDED]/42 sm:text-[11px]">
              {field.label}
            </span>
            <input
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={formState[field.key]}
              onChange={(event) => onFieldChange(field.key, event.target.value)}
              className="mt-1.5 h-7 w-full border-0 bg-transparent text-[15px] text-[#F3F1EC] placeholder:text-[#EDEDED]/24 focus:outline-none sm:text-[16px]"
              required
            />
          </label>
        ))}
      </div>

      <div className="mt-auto pt-3.5">
        <button
          type="submit"
          disabled={!isFormValid || isPending}
          className={cn(
            "inline-flex min-h-11 w-full items-center justify-center rounded-[16px] border px-5 text-[13px] font-semibold transition sm:min-h-12 sm:text-[14px]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f8df9]/38",
            !isFormValid || isPending
              ? "cursor-not-allowed border-[#d4b174]/14 bg-[#4a3b26]/38 text-[#e7d2ad]/42"
              : "border-[#d4b174]/72 bg-[#e7d2ad] text-black hover:translate-y-[-1px] hover:bg-[#ddc394] hover:shadow-[0_18px_42px_rgba(212,177,116,0.18)]",
          )}
        >
          {isPending ? "Отправляем..." : "Перейти к оплате"}
        </button>
        <p className="mt-3 text-[12px] leading-[1.45] text-[#EDEDED]/48">{helperText}</p>
        <p className="mt-1.5 text-[10px] leading-[1.45] text-[#EDEDED]/28 sm:text-[11px]">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </p>
      </div>
    </form>
  )
}

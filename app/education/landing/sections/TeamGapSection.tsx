import type { RoleKey, RoleOption, RoleProfile } from "../types"

type TeamGapSectionProps = {
  roleOptions: RoleOption[]
  selectedRole: RoleKey
  profile: RoleProfile
  onSelectRole: (role: RoleKey) => void
}

export function TeamGapSection({ roleOptions, selectedRole, profile, onSelectRole }: TeamGapSectionProps) {
  return (
    <section data-section-id="team" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-[#030303] p-6 md:p-9">
        <h3 className="text-[32px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[46px]">
          Чего не хватает в управлении?
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {roleOptions.map((option) => {
            const active = selectedRole === option.key
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onSelectRole(option.key)}
                className={`rounded-[999px] border px-4 py-2 text-[12px] font-semibold tracking-[0.02em] transition ${
                  active
                    ? "border-[#e7d2ad] bg-[#e7d2ad] text-black"
                    : "border-white/22 text-white/75 hover:border-white/45 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/42">Не хватает:</p>
        <p className="mt-2 text-[20px] leading-[1.3] text-white/86 md:text-[25px]">{profile.gap}</p>
        <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#e7d2ad]">
          {profile.bullets.map((item) => (
            <li key={item} className="text-[17px] font-medium leading-[1.34] text-[#e7d2ad] md:text-[21px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

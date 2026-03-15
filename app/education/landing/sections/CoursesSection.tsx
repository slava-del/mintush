import Link from "next/link"
import type { Course } from "../types"

type CoursesSectionProps = {
  courses: Course[]
}

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section id="courses" data-section-id="courses" className="px-6 pb-12 md:px-10 md:pb-14">
      <div className="mx-auto max-w-5xl">
        <h3 className="text-[34px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white md:text-[50px]">
          Перечень курсов
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <article key={course.title} className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#070707] p-6 md:p-7">
              <div className="md:h-[58px] lg:h-[62px]">
                <h4
                  className={`text-[32px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white ${
                    course.title === "Управление бизнесом" ? "md:text-[36px] lg:text-[38px] md:whitespace-nowrap" : "md:text-[42px]"
                  }`}
                >
                  {course.title}
                </h4>
              </div>
              <p className="mt-1 text-[17px] leading-[1.35] text-white/68 md:h-[170px] lg:h-[156px]">{course.description}</p>

              <div className="mt-12 md:mt-5 md:h-[92px]">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad]">Включает в себя:</p>
                <div className="mt-2 grid gap-2">
                  {course.items.map((item) => (
                    <p key={item} className="text-[15px] font-medium leading-[1.25] text-white/72">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <Link
                href={course.href}
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-[14px] border border-[#e7d2ad]/45 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#e7d2ad] transition hover:bg-[#e7d2ad] hover:text-black md:mt-auto"
              >
                Посмотреть подробнее
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 ease-out group-hover:rotate-45"
                >
                  ↗
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { courses } from "@/lib/data"

export function CoursesMosaicSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Caption */}
        <p className="text-caption text-muted-foreground mb-6">Мини-курсы</p>
        <h2 className="text-h1 font-serif text-foreground mb-16 md:mb-24 text-balance">
          Мини-курсы для руководителей
        </h2>

        {/* Mosaic tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[4/5] flex flex-col justify-end"
            >
              {/* Background image */}
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent" />

              {/* Content overlay */}
              <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col gap-4">
                <span className="text-caption text-[#F5F2ED]/30">
                  {course.guides} руководств / {course.webinars} вебинаров
                </span>
                <h3 className="text-h1 font-serif text-[#F5F2ED] text-balance">
                  {course.title}
                </h3>
                <p className="text-body-lg text-[#F5F2ED]/50 max-w-sm">
                  {course.description}
                </p>
                <span className="text-small text-accent mt-2 group-hover:text-[#F5F2ED] transition-colors">
                  Смотреть программу
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

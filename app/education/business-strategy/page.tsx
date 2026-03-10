import React, { useState } from 'react';
import { ArrowRight, Target, Focus, Settings, LucideIcon } from 'lucide-react';

interface PhaseMetric {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  problem: string;
  solution: string;
  metrics: string[];
}

export default function CourseTransformation(): JSX.Element {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const phases: PhaseMetric[] = [
    {
      id: 'clarity',
      number: '01',
      title: 'ЯСНОСТЬ',
      subtitle: 'где бизнес сейчас и куда идём',
      icon: Target,
      color: 'from-orange-500 to-amber-600',
      problem: 'Туман. Непонятно где находимся.',
      solution: 'Карта местности. Точка А → Точка Б.',
      metrics: ['Текущая позиция', 'Целевое состояние', 'Разрыв']
    },
    {
      id: 'focus',
      number: '02',
      title: 'ФОКУС',
      subtitle: 'что делаем и что не делаем в этом году',
      icon: Focus,
      color: 'from-amber-500 to-yellow-600',
      problem: 'Всё сразу. Распыление. Chaos.',
      solution: 'Приоритеты. Чёткое ДА и НЕТ.',
      metrics: ['Top 3 приоритета', 'Зона отказа', 'Фокус метрика']
    },
    {
      id: 'control',
      number: '03',
      title: 'УПРАВЛЕНИЕ',
      subtitle: 'ритм, метрики, ответственность, корректировки по факту',
      icon: Settings,
      color: 'from-yellow-500 to-orange-600',
      problem: 'Хаотичная операционка. План в столе.',
      solution: 'Система регулярного контроля.',
      metrics: ['Еженедельный ритм', 'KPI dashboard', 'План/Факт']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Strategic Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Animated Corner Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-transparent blur-3xl animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-2 border border-orange-500/30 bg-orange-500/5 mb-6">
            <span className="text-orange-400 text-xs tracking-[0.3em] font-bold">
              TRANSFORMATION PROTOCOL
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            ЧТО ДАЁТ<br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              КУРС
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Три фазы трансформации: от хаоса к управляемой системе
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const isActive = activePhase === phase.id;
            
            return (
              <div
                key={phase.id}
                onMouseEnter={() => setActivePhase(phase.id)}
                onMouseLeave={() => setActivePhase(null)}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Number Badge */}
                <div className="absolute -top-6 -left-6 z-10">
                  <div className={`
                    w-20 h-20 bg-gradient-to-br ${phase.color} 
                    flex items-center justify-center font-black text-3xl
                    transform transition-all duration-500
                    ${isActive ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                  `}>
                    {phase.number}
                  </div>
                </div>

                {/* Card */}
                <div className={`
                  relative bg-zinc-900 border-2 transition-all duration-500 p-8 pt-12
                  ${isActive 
                    ? 'border-orange-500 shadow-2xl shadow-orange-500/20 -translate-y-2' 
                    : 'border-zinc-800 shadow-xl'
                  }
                `}>
                  {/* Diagonal Accent Line */}
                  <div className={`
                    absolute top-0 right-0 w-32 h-1 bg-gradient-to-r ${phase.color}
                    transition-all duration-500 origin-right
                    ${isActive ? 'scale-x-150' : 'scale-x-100'}
                  `}></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className={`
                      w-12 h-12 transition-all duration-500
                      ${isActive ? 'text-orange-400 scale-110' : 'text-zinc-600'}
                    `} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black mb-2 tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {phase.subtitle}
                  </p>

                  {/* Before/After States */}
                  <div className={`
                    transition-all duration-500 overflow-hidden
                    ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    {/* Problem State */}
                    <div className="mb-4 pb-4 border-b border-zinc-800">
                      <div className="text-xs text-red-400 mb-2 font-bold tracking-wider">
                        БЫЛО
                      </div>
                      <p className="text-sm text-gray-500 line-through">
                        {phase.problem}
                      </p>
                    </div>

                    {/* Solution State */}
                    <div className="mb-4">
                      <div className="text-xs text-green-400 mb-2 font-bold tracking-wider">
                        СТАЛО
                      </div>
                      <p className="text-sm text-white font-medium">
                        {phase.solution}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-2">
                      {phase.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`
                    mt-6 pt-4 border-t border-zinc-800 flex items-center gap-2
                    transition-all duration-300
                    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}>
                    <span className="text-xs text-orange-400 font-bold tracking-wider">
                      ДЕТАЛИ
                    </span>
                    <ArrowRight className="w-4 h-4 text-orange-400 animate-pulse" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 blur-2xl
                  transition-opacity duration-500 -z-10
                  ${isActive ? 'opacity-10' : 'opacity-0'}
                `}></div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Indicator */}
        <div className="flex items-center justify-center gap-4 mt-16 mb-8">
          {phases.map((phase, idx) => (
            <React.Fragment key={phase.id}>
              <div className={`
                px-4 py-2 bg-zinc-900 border transition-all duration-300
                ${activePhase === phase.id 
                  ? 'border-orange-500 text-orange-400' 
                  : 'border-zinc-800 text-zinc-600'
                }
              `}>
                <span className="text-xs font-bold tracking-wider">
                  {phase.title}
                </span>
              </div>
              {idx < phases.length - 1 && (
                <ArrowRight className="w-5 h-5 text-zinc-700" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-zinc-800">
          <p className="text-gray-500 text-sm mb-4 tracking-wider">
            ОТ ХАОСА К СИСТЕМЕ ЗА 12 МЕСЯЦЕВ
          </p>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 
            hover:from-orange-500 hover:to-amber-500 transition-all duration-300
            font-bold text-lg tracking-wide cursor-pointer group">
            НАЧАТЬ ТРАНСФОРМАЦИЮ
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700;900&display=swap');
        
        .font-sans {
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
        }
        
        .font-black {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-weight: 900;
          letter-spacing: 0.02em;
        }
      `}</style>
    </div>
  );
}

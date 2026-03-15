"use client";

import Link from "next/link";
import { memo, useState } from "react";

type NodeId = "goals" | "roles" | "processes" | "metrics" | "it" | "contractors";

type NodeItem = {
  id: NodeId;
  label: string;
  caption: string;
  x: number;
  y: number;
};

const DESKTOP_SCHEMA_WIDTH = 960;
const DESKTOP_SCHEMA_HEIGHT = 560;
const DESKTOP_NODE_W = 160;
const DESKTOP_NODE_H = 60;

const desktopNodes: NodeItem[] = [
  { id: "goals", label: "Цели", caption: "что именно должно измениться", x: 310, y: 150 },
  { id: "roles", label: "Роли", caption: "кто за что отвечает", x: 310, y: 280 },
  { id: "processes", label: "Процессы", caption: "как идет работа", x: 580, y: 280 },
  { id: "metrics", label: "Метрики", caption: "что контролирует результат", x: 850, y: 150 },
  { id: "it", label: "IT", caption: "на чем держится исполнение", x: 850, y: 410 },
  { id: "contractors", label: "Подрядчики", caption: "где нужна внешняя экспертиза", x: 310, y: 410 },
];

const MOBILE_SCHEMA_WIDTH = 340;
const MOBILE_SCHEMA_HEIGHT = 400;
const MOBILE_NODE_W = 116;
const MOBILE_NODE_H = 46;

const mobileNodes: NodeItem[] = [
  { id: "goals", label: "Цели", caption: "что именно должно измениться", x: 95, y: 78 },
  { id: "metrics", label: "Метрики", caption: "что контролирует результат", x: 245, y: 78 },
  { id: "roles", label: "Роли", caption: "кто за что отвечает", x: 95, y: 192 },
  { id: "processes", label: "Процессы", caption: "как идет работа", x: 245, y: 192 },
  { id: "contractors", label: "Подрядчики", caption: "где нужна внешняя экспертиза", x: 95, y: 320 },
  { id: "it", label: "IT", caption: "на чем держится исполнение", x: 245, y: 320 },
];

const grainTexture =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function rect(node: NodeItem, nodeW: number, nodeH: number) {
  return {
    left: node.x - nodeW / 2,
    right: node.x + nodeW / 2,
    top: node.y - nodeH / 2,
    bottom: node.y + nodeH / 2,
  };
}

function createSchemaGeometry(nodes: NodeItem[], nodeW: number, nodeH: number) {
  const byId = nodes.reduce((acc, node) => {
    acc[node.id] = node;
    return acc;
  }, {} as Record<NodeId, NodeItem>);

  const goalsRect = rect(byId.goals, nodeW, nodeH);
  const rolesRect = rect(byId.roles, nodeW, nodeH);
  const processesRect = rect(byId.processes, nodeW, nodeH);
  const metricsRect = rect(byId.metrics, nodeW, nodeH);
  const itRect = rect(byId.it, nodeW, nodeH);
  const contractorsRect = rect(byId.contractors, nodeW, nodeH);

  return {
    lineGoalsToRoles: `M ${byId.goals.x} ${goalsRect.bottom} V ${rolesRect.top}`,
    lineRolesToContractors: `M ${byId.roles.x} ${rolesRect.bottom} V ${contractorsRect.top}`,
    lineRolesToProcesses: `M ${rolesRect.right} ${byId.roles.y} H ${processesRect.left}`,
    lineProcessesToMetrics: `M ${processesRect.right} ${byId.processes.y} H ${byId.metrics.x} V ${metricsRect.top}`,
    lineMetricsToIt: `M ${byId.metrics.x} ${metricsRect.bottom} V ${itRect.top}`,
    lineContractorsToIt: `M ${contractorsRect.right} ${byId.contractors.y} H ${itRect.left}`,
  };
}

const desktopSchema = createSchemaGeometry(desktopNodes, DESKTOP_NODE_W, DESKTOP_NODE_H);
const mobileSchema = createSchemaGeometry(mobileNodes, MOBILE_NODE_W, MOBILE_NODE_H);

export const BusinessArchitectureCard = memo(function BusinessArchitectureCard() {
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeId | null>("processes");

  const activeNodeId = hoveredNode ?? selectedNode;

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#d7c4a5] bg-[linear-gradient(180deg,#eee6d7_0%,#e8dac1_48%,#d7ad79_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.65)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,250,242,0.62)_0%,rgba(255,250,242,0)_34%),radial-gradient(circle_at_78%_18%,rgba(0,0,0,0.07)_0%,rgba(0,0,0,0)_34%),linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_44%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-soft-light"
        style={{ backgroundImage: grainTexture, backgroundSize: "240px 240px" }}
      />

      <div className="relative flex items-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-10 lg:min-h-[760px] lg:px-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-[1540px] items-start gap-8 lg:grid-cols-[minmax(360px,500px)_minmax(620px,1fr)] lg:items-center lg:gap-10 xl:gap-16">
          <div className="max-w-[470px] px-3 sm:px-4 lg:px-0">
            <h2
              className="font-extrabold leading-[0.86] tracking-[-0.058em] text-black"
              style={{ fontSize: "clamp(30px, 11vw, 112px)" }}
            >
              Архитектура
              <br />
              бизнеса
            </h2>

            <p className="mt-5 max-w-[26ch] text-[17px] font-medium leading-[1.26] text-black/70 sm:text-[18px] lg:mt-8 lg:max-w-[390px] lg:text-[24px]">
              Цели, роли, процессы, метрики, IT и подрядчики собираем в одну управляемую систему.
            </p>

            <div className="mt-8 hidden lg:block lg:mt-10">
              <Link
                href="/consulting#form"
                className="group inline-flex h-[72px] items-center gap-3 rounded-[20px] bg-black px-6 py-4 text-white shadow-[0_20px_44px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-[1px]"
              >
                <span className="text-[17px] font-semibold leading-tight">
                  Получить консультацию
                </span>

                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-white/[0.08] text-[#ead6b0] transition duration-300 group-hover:rotate-45 group-hover:bg-white/[0.14]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 16L16 8M10 8H16V14"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[620px]">
            <div className="absolute inset-0 flex items-center justify-center lg:hidden">
              <div className="relative w-full max-w-[360px] aspect-[340/400]">
                <svg viewBox={`0 0 ${MOBILE_SCHEMA_WIDTH} ${MOBILE_SCHEMA_HEIGHT}`} className="h-full w-full">
                  <path d={mobileSchema.lineGoalsToRoles} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.7" />
                  <path d={mobileSchema.lineRolesToContractors} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.7" />
                  <path d={mobileSchema.lineRolesToProcesses} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.7" />
                  <path d={mobileSchema.lineProcessesToMetrics} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.7" />
                  <path d={mobileSchema.lineMetricsToIt} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.7" />
                  <path d={mobileSchema.lineContractorsToIt} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.7" />

                  <path className="blueprint-trace" d={mobileSchema.lineGoalsToRoles} fill="none" stroke="rgba(0,0,0,0.76)" strokeWidth="1.9" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-1" d={mobileSchema.lineRolesToContractors} fill="none" stroke="rgba(0,0,0,0.76)" strokeWidth="1.9" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-2" d={mobileSchema.lineRolesToProcesses} fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="1.9" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-3" d={mobileSchema.lineProcessesToMetrics} fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="1.9" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-4" d={mobileSchema.lineMetricsToIt} fill="none" stroke="rgba(0,0,0,0.76)" strokeWidth="1.9" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-5" d={mobileSchema.lineContractorsToIt} fill="none" stroke="rgba(0,0,0,0.76)" strokeWidth="1.9" strokeLinecap="round" pathLength="100" />
                </svg>

                {mobileNodes.map((node) => {
                  const isActive = activeNodeId === node.id;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNode((prev) => (prev === node.id ? null : node.id))}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onFocus={() => setHoveredNode(node.id)}
                      onBlur={() => setHoveredNode(null)}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${(node.x / MOBILE_SCHEMA_WIDTH) * 100}%`,
                        top: `${(node.y / MOBILE_SCHEMA_HEIGHT) * 100}%`,
                      }}
                    >
                      <span
                        className={`inline-flex h-[46px] w-[116px] items-center justify-center rounded-[14px] border px-3 py-2 text-[13px] font-semibold tracking-[-0.02em] transition-[border-color,background-color,color,box-shadow] duration-300 ${
                          isActive
                            ? "border-black/70 bg-black text-[#ead6b0] shadow-[0_10px_22px_rgba(0,0,0,0.14)]"
                            : "border-black/18 bg-[#e9ddc8] text-black/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                        }`}
                      >
                        {node.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="absolute inset-0 hidden items-center justify-end lg:flex">
              <div className="relative w-full max-w-[1080px] origin-right scale-[1.06] aspect-[960/560] xl:scale-[1.1]">
                <svg viewBox={`0 0 ${DESKTOP_SCHEMA_WIDTH} ${DESKTOP_SCHEMA_HEIGHT}`} className="h-full w-full">
                  <path d={desktopSchema.lineGoalsToRoles} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />
                  <path d={desktopSchema.lineRolesToContractors} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />
                  <path d={desktopSchema.lineRolesToProcesses} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />
                  <path d={desktopSchema.lineProcessesToMetrics} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />
                  <path d={desktopSchema.lineMetricsToIt} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />
                  <path d={desktopSchema.lineContractorsToIt} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />

                  <path className="blueprint-trace" d={desktopSchema.lineGoalsToRoles} fill="none" stroke="rgba(0,0,0,0.78)" strokeWidth="2.15" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-1" d={desktopSchema.lineRolesToContractors} fill="none" stroke="rgba(0,0,0,0.78)" strokeWidth="2.15" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-2" d={desktopSchema.lineRolesToProcesses} fill="none" stroke="rgba(0,0,0,0.82)" strokeWidth="2.15" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-3" d={desktopSchema.lineProcessesToMetrics} fill="none" stroke="rgba(0,0,0,0.82)" strokeWidth="2.15" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-4" d={desktopSchema.lineMetricsToIt} fill="none" stroke="rgba(0,0,0,0.78)" strokeWidth="2.15" strokeLinecap="round" pathLength="100" />
                  <path className="blueprint-trace blueprint-trace-delay-5" d={desktopSchema.lineContractorsToIt} fill="none" stroke="rgba(0,0,0,0.78)" strokeWidth="2.15" strokeLinecap="round" pathLength="100" />
                </svg>

                {desktopNodes.map((node) => {
                  const isActive = activeNodeId === node.id;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNode((prev) => (prev === node.id ? null : node.id))}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onFocus={() => setHoveredNode(node.id)}
                      onBlur={() => setHoveredNode(null)}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${(node.x / DESKTOP_SCHEMA_WIDTH) * 100}%`,
                        top: `${(node.y / DESKTOP_SCHEMA_HEIGHT) * 100}%`,
                      }}
                    >
                      <span
                        className={`inline-flex h-[60px] w-[160px] items-center justify-center rounded-[16px] border px-4 py-2 text-[15px] font-semibold tracking-[-0.02em] transition-[border-color,background-color,color,transform,box-shadow] duration-300 md:text-[16px] ${
                          isActive
                            ? "border-black/70 bg-black text-[#ead6b0] shadow-[0_14px_28px_rgba(0,0,0,0.16)]"
                            : "border-black/18 bg-[#e9ddc8] text-black/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-black/28 hover:bg-[#ede2cf]"
                        }`}
                      >
                        {node.label}
                      </span>

                      <span
                        className={`pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-[-0.01em] text-black/46 transition-all duration-300 md:text-[11px] ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                        }`}
                      >
                        {node.caption}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-3 flex justify-center lg:hidden">
            <Link
              href="/consulting#form"
              className="group inline-flex h-[64px] w-full max-w-[320px] items-center justify-between rounded-[18px] bg-black px-5 py-3 text-white shadow-[0_18px_38px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-[1px] sm:h-[68px] sm:max-w-[340px] sm:px-6 sm:py-4"
            >
              <span className="text-[16px] font-semibold leading-tight">
                Получить консультацию
              </span>

              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-white/[0.08] text-[#ead6b0] transition duration-300 group-hover:rotate-45 group-hover:bg-white/[0.14]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 16L16 8M10 8H16V14"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blueprint-trace {
          stroke-dasharray: 24 76;
          stroke-dashoffset: 100;
          animation: blueprintTrace 6.2s linear infinite;
        }

        .blueprint-trace-delay-1 {
          animation-delay: 0.45s;
        }

        .blueprint-trace-delay-2 {
          animation-delay: 0.9s;
        }

        .blueprint-trace-delay-3 {
          animation-delay: 1.35s;
        }

        .blueprint-trace-delay-4 {
          animation-delay: 1.8s;
        }

        .blueprint-trace-delay-5 {
          animation-delay: 2.25s;
        }

        @keyframes blueprintTrace {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
});

"use client";

import React, { useState } from "react";
import { STAGES, Stage } from "@/data/stages";
import { TIMELINE_EVENTS, TimelineEvent } from "@/data/events";
import { INFLUENCE_NODES } from "@/data/influences";

interface TimelineSectionProps {
  currentStageId: string;
  onSelectStage: (stageId: string) => void;
  onJumpToInfluence: (influenceId: string) => void;
  onOpenSource: (sourceId: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  currentStageId,
  onSelectStage,
  onJumpToInfluence,
  onOpenSource,
}) => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const currentStageIndex = STAGES.findIndex((s) => s.id === currentStageId);
  const currentStage: Stage = STAGES[currentStageIndex] || STAGES[0];

  // Các sự kiện thuộc chặng này
  const stageEvents: TimelineEvent[] = currentStage.eventIds
    .map((id) => TIMELINE_EVENTS[id])
    .filter(Boolean);

  const handlePrevStage = () => {
    if (currentStageIndex > 0) {
      onSelectStage(STAGES[currentStageIndex - 1].id);
      setSelectedEventId(null);
    }
  };

  const handleNextStage = () => {
    if (currentStageIndex < STAGES.length - 1) {
      onSelectStage(STAGES[currentStageIndex + 1].id);
      setSelectedEventId(null);
    }
  };

  return (
    <section id="timeline" className="py-16 md:py-24 border-b border-[#E2D9CC] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3 py-1 rounded-full inline-block mb-3">
            Tiến trình lịch sử tư tưởng
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-scholarly text-[#1C2024]">
            Dòng thời gian: 5 Chặng phát triển nhận thức
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-3">
            Khám phá bước phát triển tư duy, bối cảnh thực tiễn và những chuyển biến về chất của Hồ Chí Minh qua từng giai đoạn lịch sử chuẩn mực theo Giáo trình 2019.
          </p>
        </div>

        {/* Stage Selector Bar (Desktop & Mobile accessible) */}
        <div className="bg-[#F5EFEB] p-2 sm:p-3 rounded-2xl border border-[#C8BCAC] mb-8 shadow-inner">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2" role="tablist" aria-label="5 chặng lịch sử">
            {STAGES.map((st, idx) => {
              const isActive = st.id === currentStage.id;
              return (
                <button
                  key={st.id}
                  role="tab"
                  aria-selected={isActive}
                  id={`tab-${st.id}`}
                  aria-controls={`panel-${st.id}`}
                  onClick={() => {
                    onSelectStage(st.id);
                    setSelectedEventId(null);
                  }}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#8B1E1E] text-white shadow-md transform scale-[1.02]"
                      : "bg-white/80 hover:bg-white text-[#1C2024] hover:border-[#B88A44] border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={`text-xs font-bold tracking-wider ${isActive ? "text-amber-200" : "text-[#8B1E1E]"}`}>
                      Chặng {idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? "bg-white/20 text-white" : "bg-[#FAF7F2] text-[#718096]"}`}>
                      {st.shortLabel}
                    </span>
                  </div>
                  <span className="text-xs font-medium line-clamp-2 leading-tight">
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Stage Overview Card */}
        <div
          role="tabpanel"
          id={`panel-${currentStage.id}`}
          aria-labelledby={`tab-${currentStage.id}`}
          className="bg-white rounded-2xl border-2 border-[#C8BCAC] p-6 sm:p-8 shadow-lg mb-10 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E2D9CC] pb-6 mb-6">
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#B88A44]/15 text-[#9E7632] px-3 py-1 rounded-md">
                  Chặng {currentStageIndex + 1} / 5
                </span>
                <span className="text-sm font-semibold text-[#8B1E1E]">
                  Thời gian: {currentStage.exactSpan}
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold font-scholarly text-[#1C2024]">
                {currentStage.title}
              </h3>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={handlePrevStage}
                disabled={currentStageIndex === 0}
                aria-label="Chuyển về chặng trước"
                className="px-3.5 py-2 text-xs font-medium rounded-lg border border-[#C8BCAC] bg-[#FAF7F2] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
              >
                &larr; Chặng trước
              </button>
              <button
                onClick={handleNextStage}
                disabled={currentStageIndex === STAGES.length - 1}
                aria-label="Chuyển sang chặng sau"
                className="px-3.5 py-2 text-xs font-medium rounded-lg border border-[#C8BCAC] bg-[#FAF7F2] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
              >
                Chặng sau &rarr;
              </button>
            </div>
          </div>

          {/* 3 Core pillars of the Stage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8B1E1E]"></span>
                Tóm tắt bước phát triển tư duy
              </h4>
              <p className="text-[#2D3136] leading-relaxed">
                {currentStage.developmentSummary}
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4A5568]"></span>
                Bối cảnh & Vấn đề đặt ra
              </h4>
              <p className="text-[#2D3136] leading-relaxed">
                {currentStage.contextAndProblem}
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B88A44] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B88A44]"></span>
                Ý nghĩa đối với sự hình thành tư tưởng
              </h4>
              <p className="text-[#2D3136] leading-relaxed">
                {currentStage.significance}
              </p>
            </div>
          </div>

          {/* Related Influences Tags in this stage */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#E2D9CC]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-[#718096]">Cơ sở liên quan chủ đạo:</span>
              {currentStage.relatedInfluenceIds.map((infId) => {
                const inf = INFLUENCE_NODES[infId];
                if (!inf) return null;
                return (
                  <button
                    key={infId}
                    onClick={() => onJumpToInfluence(infId)}
                    title="Bấm để xem trên Bản đồ hình thành"
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F5EFEB] border border-[#C8BCAC] text-[#1C2024] hover:bg-[#8B1E1E] hover:text-white hover:border-[#8B1E1E] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{inf.shortLabel}</span>
                    <span className="text-[10px] text-[#B88A44]">&rarr; Bản đồ</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => onOpenSource(currentStage.sourceId)}
              className="text-xs font-semibold text-[#8B1E1E] hover:underline self-start sm:self-auto flex items-center gap-1 cursor-pointer"
            >
              <span>Xem vị trí sách Giáo trình 2019</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Detailed Events of the Stage (Vertical layout on mobile, interactive cards on desktop) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg sm:text-xl font-bold font-scholarly text-[#1C2024] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E1E]"></span>
              Các mốc sự kiện và bước ngoặt lịch sử trong chặng ({stageEvents.length} mốc)
            </h4>
            <span className="text-xs text-[#718096]">Bấm vào từng thẻ để đọc phân tích chi tiết</span>
          </div>

          <div className="space-y-4">
            {stageEvents.map((evt, idx) => {
              const isExpanded = selectedEventId === evt.id;
              return (
                <div
                  key={evt.id}
                  className={`bg-white rounded-xl border transition-all overflow-hidden ${
                    isExpanded
                      ? "border-[#8B1E1E] shadow-md ring-1 ring-[#8B1E1E]/20"
                      : "border-[#E2D9CC] hover:border-[#B88A44] shadow-sm"
                  }`}
                >
                  {/* Event summary header - clickable */}
                  <button
                    onClick={() => setSelectedEventId(isExpanded ? null : evt.id)}
                    aria-expanded={isExpanded}
                    className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C8BCAC] text-[#8B1E1E] font-bold text-xs flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-bold text-[#8B1E1E] bg-[#8B1E1E]/10 px-2 py-0.5 rounded">
                            {evt.dateDisplay}
                          </span>
                          <span className="text-xs font-semibold text-[#B88A44] bg-[#B88A44]/10 px-2 py-0.5 rounded">
                            {evt.tag}
                          </span>
                        </div>
                        <h5 className="text-base sm:text-lg font-bold font-scholarly text-[#1C2024]">
                          {evt.title}
                        </h5>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-[#718096] p-1">
                      <svg
                        className={`w-5 h-5 transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded detailed content */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-[#E2D9CC] bg-[#FAF7F2]/40 text-sm space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-[#E2D9CC]">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#4A5568] block mb-1">
                            Bối cảnh và vấn đề đặt ra
                          </span>
                          <p className="text-[#2D3136] leading-relaxed">
                            {evt.context}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-[#E2D9CC]">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1">
                            Diễn biến / Văn bản tiêu biểu
                          </span>
                          <p className="text-[#2D3136] leading-relaxed">
                            {evt.eventDetails}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#F5EFEB] p-4 rounded-lg border-l-4 border-[#8B1E1E]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1">
                          Ý nghĩa then chốt đối với bước phát triển tư tưởng
                        </span>
                        <p className="text-[#1C2024] font-medium leading-relaxed">
                          {evt.significance}
                        </p>
                      </div>

                      {/* Jump to Map Node Action */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E2D9CC]">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-semibold text-[#718096]">
                            Cơ sở lý luận / thực tiễn tương ứng:
                          </span>
                          {evt.relatedInfluenceIds.map((infId) => {
                            const node = INFLUENCE_NODES[infId];
                            if (!node) return null;
                            return (
                              <button
                                key={infId}
                                onClick={() => onJumpToInfluence(infId)}
                                className="text-xs font-medium px-2.5 py-1 rounded bg-white border border-[#C8BCAC] hover:bg-[#8B1E1E] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]"></span>
                                <span>{node.shortLabel}</span>
                                <span className="text-[#B88A44] font-bold">&rarr; Xem trên Bản đồ</span>
                              </button>
                            );
                          })}
                        </div>

                        <button
                          onClick={() => onOpenSource(evt.sourceId)}
                          className="text-xs font-semibold text-[#8B1E1E] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Xem nguồn</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

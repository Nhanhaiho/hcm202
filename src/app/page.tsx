"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimelineSection } from "@/components/TimelineSection";
import { StoryMapSection } from "@/components/StoryMapSection";
import { QuizSection } from "@/components/QuizSection";
import { ConclusionSection } from "@/components/ConclusionSection";
import { SourcesSection } from "@/components/SourcesSection";
import { InfluenceModal } from "@/components/Modals/InfluenceModal";
import { SourceModal } from "@/components/Modals/SourceModal";
import { InfluenceNode, INFLUENCE_NODES } from "@/data/influences";

export default function Home() {
  const [currentStageId, setCurrentStageId] = useState<string>("stage_1");
  const [highlightedInfluenceId, setHighlightedInfluenceId] = useState<string | null>(null);
  const [selectedInfluence, setSelectedInfluence] = useState<InfluenceNode | null>(null);
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);

  // Nhảy từ Timeline tới Bản đồ quan hệ và làm nổi bật nút
  const handleJumpToInfluence = (influenceId: string) => {
    setHighlightedInfluenceId(influenceId);

    // Mở luôn modal thông tin của node đó để người xem xem ngay 7 mục chi tiết
    const node = INFLUENCE_NODES[influenceId];
    if (node) {
      setSelectedInfluence(node);
    }

    // Cuộn tới Bản đồ
    const storyMapEl = document.getElementById("storymap");
    if (storyMapEl) {
      storyMapEl.scrollIntoView({ behavior: "smooth" });
    }

    // Tự động tắt highlight sau 5 giây
    setTimeout(() => {
      setHighlightedInfluenceId(null);
    }, 5000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Navigation bar */}
      <Navbar />

      {/* 1. Màn hình mở đầu */}
      <Hero />

      {/* 2. Interactive Timeline (5 chặng lịch sử) */}
      <TimelineSection
        currentStageId={currentStageId}
        onSelectStage={(stId) => setCurrentStageId(stId)}
        onJumpToInfluence={handleJumpToInfluence}
        onOpenSource={(srcId) => setActiveSourceId(srcId)}
      />

      {/* 3. Bản đồ hình thành tư tưởng (Story Map) */}
      <StoryMapSection
        highlightedInfluenceId={highlightedInfluenceId}
        onSelectInfluence={(node) => setSelectedInfluence(node)}
        onOpenSource={(srcId) => setActiveSourceId(srcId)}
      />

      {/* 4. "Thử hiểu đúng" (Interactive Quiz) */}
      <QuizSection onOpenSource={(srcId) => setActiveSourceId(srcId)} />

      {/* 5. Kết luận */}
      <ConclusionSection onOpenSource={(srcId) => setActiveSourceId(srcId)} />

      {/* 6. Nguồn & Phương pháp */}
      <SourcesSection onOpenSource={(srcId) => setActiveSourceId(srcId)} />

      {/* Modals */}
      <InfluenceModal
        influence={selectedInfluence}
        onClose={() => setSelectedInfluence(null)}
        onSelectStage={(stageId) => setCurrentStageId(stageId)}
        onOpenSource={(sourceId) => setActiveSourceId(sourceId)}
      />

      <SourceModal
        sourceId={activeSourceId}
        onClose={() => setActiveSourceId(null)}
      />
    </main>
  );
}

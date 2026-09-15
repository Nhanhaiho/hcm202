"use client";

import React, { useState } from "react";
import { INFLUENCE_NODES, InfluenceNode } from "@/data/influences";
import { MAP_RELATIONSHIPS, MAP_CENTER_INFO } from "@/data/relationships";

interface StoryMapSectionProps {
  highlightedInfluenceId: string | null;
  onSelectInfluence: (node: InfluenceNode) => void;
  onOpenSource: (sourceId: string) => void;
}

export const StoryMapSection: React.FC<StoryMapSectionProps> = ({
  highlightedInfluenceId,
  onSelectInfluence,
  onOpenSource,
}) => {
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null);

  // Phân nhóm các cơ sở
  const practicalNodes = [INFLUENCE_NODES.inf_tt_vn, INFLUENCE_NODES.inf_tt_tg];
  const theoreticalNodes = [
    INFLUENCE_NODES.inf_ll_tt,
    INFLUENCE_NODES.inf_ll_pd,
    INFLUENCE_NODES.inf_ll_pt,
    INFLUENCE_NODES.inf_ll_ml,
  ];
  const subjectiveNodes = [INFLUENCE_NODES.inf_cq_pc, INFLUENCE_NODES.inf_cq_nl];

  const activeEdge = MAP_RELATIONSHIPS.find((e) => e.id === selectedEdgeId);

  return (
    <section id="storymap" className="py-16 md:py-24 border-b border-[#E2D9CC] scroll-mt-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88A44] bg-[#B88A44]/15 px-3 py-1 rounded-full inline-block mb-3">
            Sơ đồ quan hệ biện chứng
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-scholarly text-[#1C2024]">
            Bản đồ hình thành Tư tưởng Hồ Chí Minh
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-3">
            Hệ thống 8 cơ sở chia thành 3 nhóm xoay quanh chủ thể Hồ Chí Minh. Các đường kết nối mang nhãn ngữ nghĩa giải thích bản chất tương tác, không cào bằng và không phải phép cộng cơ học.
          </p>
        </div>

        {/* Legend / Guide Notice */}
        <div className="bg-white p-4 rounded-xl border border-[#C8BCAC] mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-bold text-[#1C2024]">Phân loại nhóm:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-700"></span>
              <span className="text-[#4A5568]">Cơ sở thực tiễn (2)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#B88A44]"></span>
              <span className="text-[#4A5568]">Cơ sở lý luận (4)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#8B1E1E]"></span>
              <span className="text-[#8B1E1E] font-semibold">Chủ nghĩa Mác – Lênin (Quyết định)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-800"></span>
              <span className="text-[#4A5568]">Nhân tố chủ quan (2)</span>
            </div>
          </div>
          <div className="text-[#718096] italic">
            * Bấm vào bất kỳ nút nào để mở 7 mục phân tích học thuật chi tiết.
          </div>
        </div>

        {/* Interactive Story Map Grid / Network */}
        <div className="space-y-8">
          {/* VÙNG TRUNG TÂM NỔI BẬT */}
          <div className="bg-white rounded-2xl border-2 border-[#8B1E1E] p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1E1E]/5 rounded-bl-full pointer-events-none" />
            
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3 py-1 rounded mb-2">
                VÙNG TRUNG TÂM BIỆN CHỨNG
              </span>
              <h3 className="text-xl sm:text-3xl font-bold font-scholarly text-[#1C2024] mb-2">
                {MAP_CENTER_INFO.title}
              </h3>
              <p className="text-sm font-medium text-[#B88A44] mb-4">
                {MAP_CENTER_INFO.subtitle}
              </p>
              <p className="text-sm text-[#2D3136] max-w-2xl mx-auto italic mb-6">
                &ldquo;{MAP_CENTER_INFO.thesis}&rdquo;
              </p>

              {/* 3 Core Principles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-xs sm:text-sm">
                {MAP_CENTER_INFO.corePrinciples.map((item, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CC]">
                    <span className="font-bold text-[#8B1E1E] block mb-1">
                      {idx + 1}. {item.title}
                    </span>
                    <span className="text-[#4A5568] leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 CỤM NHÓM CƠ SỞ BAO QUANH */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Nhóm 1: Cơ sở thực tiễn */}
            <div className="bg-[#F5EFEB] rounded-2xl border border-[#C8BCAC] p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2D9CC]">
                  <span className="w-3 h-3 rounded-full bg-emerald-700"></span>
                  <h4 className="font-bold font-scholarly text-[#1C2024] text-lg">
                    I. Cơ sở thực tiễn
                  </h4>
                </div>
                <p className="text-xs text-[#4A5568] mb-4">
                  Cung cấp hoàn cảnh lịch sử, hiện thực xã hội và đặt ra những câu hỏi bức thiết của thời đại.
                </p>

                <div className="space-y-4">
                  {practicalNodes.map((node) => {
                    const isHighlighted = highlightedInfluenceId === node.id;
                    const rel = MAP_RELATIONSHIPS.find((r) => r.source === node.id);
                    return (
                      <div
                        key={node.id}
                        id={`node-${node.id}`}
                        className={`bg-white p-4 rounded-xl border transition-all ${
                          isHighlighted ? "node-highlighted border-[#8B1E1E]" : "border-[#E2D9CC] hover:border-emerald-600"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h5 className="font-bold text-[#1C2024] text-sm">
                            {node.name}
                          </h5>
                          <button
                            onClick={() => onSelectInfluence(node)}
                            className="text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded border border-emerald-200 cursor-pointer flex-shrink-0"
                          >
                            Chi tiết &rarr;
                          </button>
                        </div>
                        <p className="text-xs text-[#4A5568] line-clamp-2 mb-3">
                          {node.role}
                        </p>
                        {rel && (
                          <div
                            onClick={() => setSelectedEdgeId(selectedEdgeId === rel.id ? null : rel.id)}
                            className="bg-[#FAF7F2] p-2 rounded border border-[#E2D9CC] text-[11px] text-[#2D3136] flex items-center justify-between cursor-pointer hover:bg-emerald-50/50"
                          >
                            <span className="font-medium text-emerald-900">
                              Mối liên hệ: {rel.label}
                            </span>
                            <span className="text-[10px] text-[#718096]">ℹ</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Nhóm 2: Cơ sở lý luận (Chủ nghĩa Mác-Lênin là trọng tâm quyết định) */}
            <div className="bg-[#F5EFEB] rounded-2xl border-2 border-[#B88A44] p-5 shadow-md flex flex-col justify-between lg:-translate-y-2">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2D9CC]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#B88A44]"></span>
                    <h4 className="font-bold font-scholarly text-[#1C2024] text-lg">
                      II. Cơ sở lý luận
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold text-[#8B1E1E] bg-[#8B1E1E]/10 px-2 py-0.5 rounded">
                    Tiền đề quyết định
                  </span>
                </div>
                <p className="text-xs text-[#4A5568] mb-4">
                  Cội nguồn văn hóa, tri thức nhân loại và vũ khí lý luận khoa học dẫn đường.
                </p>

                <div className="space-y-3.5">
                  {theoreticalNodes.map((node) => {
                    const isHighlighted = highlightedInfluenceId === node.id;
                    const isDecisive = node.isDecisive;
                    const rel = MAP_RELATIONSHIPS.find((r) => r.source === node.id);

                    return (
                      <div
                        key={node.id}
                        id={`node-${node.id}`}
                        className={`p-4 rounded-xl border transition-all ${
                          isDecisive
                            ? "bg-[#FFF9F9] border-2 border-[#8B1E1E] shadow-md"
                            : "bg-white border-[#E2D9CC] hover:border-[#B88A44]"
                        } ${isHighlighted ? "node-highlighted" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            {isDecisive && (
                              <span className="inline-block text-[10px] font-bold text-[#8B1E1E] bg-[#8B1E1E]/15 px-1.5 py-0.5 rounded uppercase tracking-wider mb-1">
                                Quyết định bản chất
                              </span>
                            )}
                            <h5 className={`font-bold text-sm ${isDecisive ? "text-[#8B1E1E]" : "text-[#1C2024]"}`}>
                              {node.name}
                            </h5>
                          </div>
                          <button
                            onClick={() => onSelectInfluence(node)}
                            className={`text-xs font-semibold px-2 py-1 rounded border cursor-pointer flex-shrink-0 ${
                              isDecisive
                                ? "bg-[#8B1E1E] text-white border-[#8B1E1E] hover:bg-[#721616]"
                                : "bg-[#FAF7F2] text-[#B88A44] border-[#C8BCAC] hover:bg-[#B88A44] hover:text-white"
                            }`}
                          >
                            Chi tiết &rarr;
                          </button>
                        </div>
                        <p className="text-xs text-[#4A5568] line-clamp-2 mb-2.5">
                          {node.role}
                        </p>
                        {rel && (
                          <div
                            onClick={() => setSelectedEdgeId(selectedEdgeId === rel.id ? null : rel.id)}
                            className={`p-2 rounded border text-[11px] flex items-center justify-between cursor-pointer ${
                              isDecisive ? "bg-[#8B1E1E]/10 border-[#8B1E1E]/20 text-[#8B1E1E] font-medium" : "bg-[#FAF7F2] border-[#E2D9CC] text-[#2D3136]"
                            }`}
                          >
                            <span>Mối liên hệ: {rel.label}</span>
                            <span className="text-[10px] text-[#718096]">ℹ</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Nhóm 3: Nhân tố chủ quan */}
            <div className="bg-[#F5EFEB] rounded-2xl border border-[#C8BCAC] p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2D9CC]">
                  <span className="w-3 h-3 rounded-full bg-indigo-800"></span>
                  <h4 className="font-bold font-scholarly text-[#1C2024] text-lg">
                    III. Nhân tố chủ quan
                  </h4>
                </div>
                <p className="text-xs text-[#4A5568] mb-4">
                  Phẩm chất đạo đức, ý chí phi thường và năng lực chuyển hóa lý luận thành hiện thực sáng tạo.
                </p>

                <div className="space-y-4">
                  {subjectiveNodes.map((node) => {
                    const isHighlighted = highlightedInfluenceId === node.id;
                    const rel = MAP_RELATIONSHIPS.find((r) => r.source === node.id);

                    return (
                      <div
                        key={node.id}
                        id={`node-${node.id}`}
                        className={`bg-white p-4 rounded-xl border transition-all ${
                          isHighlighted ? "node-highlighted border-[#8B1E1E]" : "border-[#E2D9CC] hover:border-indigo-600"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h5 className="font-bold text-[#1C2024] text-sm">
                            {node.name}
                          </h5>
                          <button
                            onClick={() => onSelectInfluence(node)}
                            className="text-xs font-semibold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-2 py-1 rounded border border-indigo-200 cursor-pointer flex-shrink-0"
                          >
                            Chi tiết &rarr;
                          </button>
                        </div>
                        <p className="text-xs text-[#4A5568] line-clamp-2 mb-3">
                          {node.role}
                        </p>
                        {rel && (
                          <div
                            onClick={() => setSelectedEdgeId(selectedEdgeId === rel.id ? null : rel.id)}
                            className="bg-[#FAF7F2] p-2 rounded border border-[#E2D9CC] text-[11px] text-[#2D3136] flex items-center justify-between cursor-pointer hover:bg-indigo-50/50"
                          >
                            <span className="font-medium text-indigo-950">
                              Mối liên hệ: {rel.label}
                            </span>
                            <span className="text-[10px] text-[#718096]">ℹ</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Active Relationship detail card if clicked */}
          {activeEdge && (
            <div className="bg-white rounded-xl border-2 border-[#B88A44] p-5 shadow-lg animate-fadeIn text-sm">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88A44]">
                  Giải thích ngữ nghĩa mối liên kết
                </span>
                <button
                  onClick={() => setSelectedEdgeId(null)}
                  className="text-xs text-[#718096] hover:text-[#1C2024]"
                >
                  &times; Đóng
                </button>
              </div>
              <h5 className="font-bold text-base text-[#1C2024] mb-1">
                &ldquo;{activeEdge.label}&rdquo;
              </h5>
              <p className="text-[#2D3136] mb-3">
                {activeEdge.description}
              </p>
              <div className="text-xs text-[#718096] flex items-center gap-2 border-t border-[#E2D9CC] pt-2">
                <span className="font-semibold text-[#1C2024]">Căn cứ giáo trình:</span>
                <span>{activeEdge.academicBasis}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

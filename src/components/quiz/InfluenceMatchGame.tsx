"use client";

import React, { useState } from "react";
import { INFLUENCE_BONUS_PAIRS } from "@/data/quizQuestions";

interface RoleItem {
  id: string;
  role: string;
}

// Deterministic initial permutation so SSR and client hydration match 100%
const INITIAL_SHUFFLED_ROLES: RoleItem[] = [
  { id: INFLUENCE_BONUS_PAIRS[2].id, role: INFLUENCE_BONUS_PAIRS[2].role },
  { id: INFLUENCE_BONUS_PAIRS[4].id, role: INFLUENCE_BONUS_PAIRS[4].role },
  { id: INFLUENCE_BONUS_PAIRS[0].id, role: INFLUENCE_BONUS_PAIRS[0].role },
  { id: INFLUENCE_BONUS_PAIRS[3].id, role: INFLUENCE_BONUS_PAIRS[3].role },
  { id: INFLUENCE_BONUS_PAIRS[1].id, role: INFLUENCE_BONUS_PAIRS[1].role }
];

export const InfluenceMatchGame: React.FC = () => {
  const [shuffledRoles] = useState<RoleItem[]>(INITIAL_SHUFFLED_ROLES);
  // selectedPremiseId: currently focused premise on left
  const [selectedPremiseId, setSelectedPremiseId] = useState<string | null>(null);
  // matches: mapping premiseId -> roleId
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSelectPremise = (premiseId: string) => {
    setIsChecked(false);
    setSelectedPremiseId(premiseId === selectedPremiseId ? null : premiseId);
  };

  const handleSelectRole = (roleId: string) => {
    setIsChecked(false);
    if (!selectedPremiseId) return;

    // Check if this role is already paired to another premise, unpair it
    setMatches((prev) => {
      const next = { ...prev };
      // Remove any existing premise using this role
      Object.keys(next).forEach((key) => {
        if (next[key] === roleId) {
          delete next[key];
        }
      });
      next[selectedPremiseId] = roleId;
      return next;
    });

    setSelectedPremiseId(null);
  };

  const handleRemoveMatch = (premiseId: string) => {
    setIsChecked(false);
    setMatches((prev) => {
      const next = { ...prev };
      delete next[premiseId];
      return next;
    });
  };

  const handleReset = () => {
    setMatches({});
    setSelectedPremiseId(null);
    setIsChecked(false);
  };

  const handleCheck = () => {
    setIsChecked(true);
  };

  // Check correctness
  const matchedCount = Object.keys(matches).length;
  const correctCount = Object.entries(matches).filter(
    ([premiseId, roleId]) => premiseId === roleId
  ).length;
  const isAllCorrect = isChecked && matchedCount === 5 && correctCount === 5;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E2D9CC] p-5 sm:p-8 shadow-md">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3 py-1 rounded-full inline-block mb-2">
          Thử thách Bonus 2
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-scholarly text-[#1C2024]">
          Ghép đúng cơ sở với vai trò hình thành tư tưởng
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5568] mt-2">
          1. Bấm chọn 1 <strong className="text-[#8B1E1E]">Cơ sở</strong> ở cột bên trái &rarr; 2. Bấm chọn <strong className="text-[#B88A44]">Vai trò tương ứng</strong> ở cột bên phải để nối cặp.
        </p>
      </div>

      {/* Two columns grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
        {/* Left Column: Premises */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] pb-2 border-b border-[#E2D9CC] flex items-center justify-between">
            <span>Cột A: Cơ sở hình thành</span>
            <span className="text-[11px] text-[#718096] font-normal">5 cơ sở</span>
          </h4>

          {INFLUENCE_BONUS_PAIRS.map((item, idx) => {
            const isSelected = selectedPremiseId === item.id;
            const matchedRoleId = matches[item.id];
            const isMatched = !!matchedRoleId;
            const matchedRoleObj = INFLUENCE_BONUS_PAIRS.find((p) => p.id === matchedRoleId);
            const isCorrect = isChecked && matchedRoleId === item.id;
            const isWrong = isChecked && isMatched && matchedRoleId !== item.id;

            return (
              <div
                key={item.id}
                className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all ${
                  isChecked
                    ? isCorrect
                      ? "bg-emerald-50/80 border-emerald-500 shadow-sm"
                      : isWrong
                      ? "bg-red-50/70 border-red-400"
                      : "bg-[#FAF7F2] border-[#E2D9CC]"
                    : isSelected
                    ? "bg-[#F5EFEB] border-[#8B1E1E] shadow-sm ring-2 ring-[#8B1E1E]/30"
                    : isMatched
                    ? "bg-white border-[#B88A44]/80 shadow-xs"
                    : "bg-[#FAF7F2] border-[#E2D9CC] hover:border-[#B88A44]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleSelectPremise(item.id)}
                  className="w-full text-left flex items-start gap-3 cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-md bg-[#8B1E1E] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <span className="font-bold text-sm sm:text-base text-[#1C2024] block">
                      {item.premise}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-semibold text-[#8B1E1E] animate-pulse">
                        Đang chọn &rarr; Hãy bấm một vai trò bên phải
                      </span>
                    )}
                  </div>
                </button>

                {/* Show currently paired role */}
                {isMatched && matchedRoleObj && (
                  <div className="mt-2.5 pt-2 border-t border-[#E2D9CC]/60 flex items-center justify-between text-xs">
                    <div className="text-[#4A5568] flex items-center gap-1.5 flex-1 pr-2">
                      <span className="font-semibold text-[#B88A44]">Đã ghép:</span>
                      <span className="italic truncate">{matchedRoleObj.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {isChecked && (
                        <span className={`font-bold ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                          {isCorrect ? "✓ Đúng" : "✗ Sai"}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => handleRemoveMatch(item.id)}
                        className="text-[11px] text-[#718096] hover:text-red-600 font-semibold px-1.5 py-0.5 rounded bg-white border border-[#C8BCAC] cursor-pointer"
                        title="Hủy ghép cặp này"
                      >
                        Gỡ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Roles */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#B88A44] pb-2 border-b border-[#E2D9CC] flex items-center justify-between">
            <span>Cột B: Vai trò xác định</span>
            <span className="text-[11px] text-[#718096] font-normal">Đã xáo trộn</span>
          </h4>

          {shuffledRoles.map((roleItem, idx) => {
            // Find which premise has matched this role
            const matchedPremiseEntry = Object.entries(matches).find(
              ([, rId]) => rId === roleItem.id
            );
            const isAssigned = !!matchedPremiseEntry;
            const assignedPremise = matchedPremiseEntry
              ? INFLUENCE_BONUS_PAIRS.find((p) => p.id === matchedPremiseEntry[0])
              : null;

            return (
              <button
                key={roleItem.id}
                type="button"
                onClick={() => handleSelectRole(roleItem.id)}
                className={`w-full p-3.5 sm:p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex items-start gap-3 ${
                  selectedPremiseId
                    ? "hover:border-[#8B1E1E] hover:bg-white"
                    : ""
                } ${
                  isAssigned
                    ? "bg-white border-[#B88A44] shadow-xs"
                    : "bg-[#FAF7F2] border-[#E2D9CC]"
                }`}
              >
                <span className="w-6 h-6 rounded-md bg-[#B88A44] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-[#2D3136] leading-relaxed">
                    {roleItem.role}
                  </p>
                  {isAssigned && assignedPremise && (
                    <span className="inline-block mt-1.5 text-xs text-[#8B1E1E] font-semibold bg-[#8B1E1E]/10 px-2 py-0.5 rounded">
                      Nối với: {assignedPremise.premise}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback banner */}
      {isChecked && (
        <div
          className={`max-w-3xl mx-auto p-4 rounded-xl border mb-6 text-center animate-fadeIn ${
            isAllCorrect
              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
              : "bg-amber-50 border-amber-300 text-amber-900"
          }`}
        >
          {isAllCorrect ? (
            <div>
              <h4 className="font-bold text-base flex items-center justify-center gap-2">
                <span>🎉</span> Xuất sắc! Bạn đã ghép đúng 5/5 cơ sở với vai trò bản thể luận!
              </h4>
              <p className="text-xs sm:text-sm mt-1 text-emerald-800">
                Hiểu đúng bản chất: Chủ nghĩa Mác – Lênin là tiền đề lý luận quyết định, nhân tố chủ quan là cơ quan tiếp thu sáng tạo, các yếu tố còn lại giữ các chức năng động lực và bồi đắp tri thức.
              </p>
            </div>
          ) : (
            <div>
              <h4 className="font-bold text-sm sm:text-base">
                Bạn đã ghép đúng {correctCount}/5 cơ sở. Hãy quan sát các nhãn và điều chỉnh lại nhé!
              </h4>
            </div>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          type="button"
          onClick={handleCheck}
          disabled={matchedCount === 0}
          className="px-6 py-2.5 rounded-xl bg-[#8B1E1E] text-white text-sm font-bold hover:bg-[#721616] disabled:opacity-40 disabled:cursor-not-allowed shadow transition-all cursor-pointer flex items-center gap-2"
        >
          <span>✓</span> Kiểm tra kết quả ghép nối ({matchedCount}/5)
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2.5 rounded-xl bg-white border border-[#C8BCAC] text-[#1C2024] hover:bg-[#FAF7F2] text-sm font-semibold transition-all cursor-pointer"
        >
          <span>↺</span> Làm lại từ đầu
        </button>
      </div>
    </div>
  );
};

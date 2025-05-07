"use client";
import React from "react";

interface SeatButtonProps {
  id: string;
  number: string;
  status: "available" | "selected" | "unavailable";
  price: number;
  isSelected: boolean;
  onClick: () => void;
}

const SeatButton: React.FC<SeatButtonProps> = ({
  number,
  status,

  isSelected,
  onClick,
}) => {
  const getButtonStyles = () => {
    if (isSelected) {
      return "text-blue-600 bg-sky-100 border-[#1677FF] hover:bg-sky-200";
    }

    switch (status) {
      case "available":
        return "bg-white border-[#F0F0F0] text-neutral-800 hover:bg-gray-100 cursor-pointer";
      case "selected":
        return "text-blue-600 bg-sky-100 border-[#1677FF] hover:bg-sky-200";
      case "unavailable":
        return "opacity-50 bg-zinc-300 border-[#F0F0F0] text-neutral-400 cursor-not-allowed";
      default:
        return "bg-white border-[#F0F0F0] text-neutral-800 hover:bg-gray-100";
    }
  };

  return (
    <button
      className={`flex-1 shrink self-stretch px-4 my-auto rounded border border-solid basis-0 h-[49px] min-h-[49px] w-[49px] font-medium transition-colors duration-200 ${getButtonStyles()}`}
      onClick={onClick}
      disabled={status === "unavailable"}
    >
      {number}
    </button>
  );
};

export default SeatButton;

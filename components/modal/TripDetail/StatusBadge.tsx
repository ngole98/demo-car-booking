import React from "react";

type StatusType =
  | "completed"
  | "pending"
  | "waiting"
  | "cancelled"
  | "refunded"
  | "unpaid";

interface StatusBadgeProps {
  type: StatusType;
  text: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ type, text }) => {
  const getStatusStyles = () => {
    switch (type) {
      case "completed":
        return "text-lime-600 bg-lime-50 border-lime-200";
      case "pending":
      case "waiting":
        return "text-amber-500 bg-yellow-50 border-amber-200";
      case "cancelled":
        return "text-red-600 bg-rose-50 border-red-300";
      case "refunded":
        return "bg-transparent border-zinc-300 text-black text-opacity-90";
      case "unpaid":
        return "text-amber-500 bg-yellow-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <span
      className={`px-2 py-px text-xs font-medium rounded border border-solid ${getStatusStyles()}`}
    >
      {text}
    </span>
  );
};

export default StatusBadge;

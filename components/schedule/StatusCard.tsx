import React from "react";

interface StatusCardProps {
  title: string;
  value: string;
  bgColor: string;
  valueColor: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  bgColor,
  valueColor,
}) => {
  return (
    <div
      className={`flex items-center min-w-[240px] max-w-[320px] px-6 py-5 gap-2 rounded-lg flex-1 ${bgColor}`}
    >
      <div className="text-[#262626] text-base flex-1 font-medium">{title}</div>
      <div className={`${valueColor} text-2xl font-bold leading-none whitespace-nowrap`}>
        {value}
      </div>
    </div>
  );
};

export default StatusCard;
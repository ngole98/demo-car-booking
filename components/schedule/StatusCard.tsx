import React, { useState } from "react";
import clsx from "clsx";

interface StatusCardProps {
  title: string;
  value: string;
  bgColor: string;
  valueColor: string;
  tooltipData?: string[];
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  bgColor,
  valueColor,
  tooltipData = [],
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={clsx(
          "flex flex-col gap-1 px-4 py-3 rounded-lg min-w-[200px]",
          bgColor
        )}
      >
        <span className="text-sm text-[#1F1F1F]">{title}</span>
        <span className={clsx("text-lg font-bold", valueColor)}>{value}</span>
      </div>

      {showTooltip && tooltipData.length > 0 && (
        <div className="absolute z-50 left-0 mt-2">
          {/* Triangle */}
          <div className="relative">
            <div className="absolute -top-1 left-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200" />
          </div>
          {/* Tooltip content */}
          <div className="relative mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-2 max-h-48 overflow-y-auto">
              {tooltipData.map((plate, index) => (
                <div
                  key={index}
                  className="py-1 px-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                >
                  {plate}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusCard;

import React from "react";

const hours = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00"];
const days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

export default function WeekTimeSheet() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-white sticky left-0 z-10 w-20"></th>
            {hours.map((h) => (
              <th
                key={h}
                className="bg-white font-medium text-[#222] px-2 py-2 border-b border-[#E5E5E5] text-center"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, i) => (
            <tr key={day}>
              <td
                className={`bg-white sticky left-0 z-10 font-medium text-[#222] px-2 py-2 border-b border-[#E5E5E5] text-center ${
                  i === 2 ? "text-[#1677FF]" : ""
                }`}
              >
                {day}
              </td>
              {hours.map((h, j) => (
                <td
                  key={h}
                  className="bg-[#FAFAFA] border-b border-[#E5E5E5] px-2 py-2 min-w-[110px] h-[60px] align-top"
                >
                  {/* Cell content, có thể render TimeSlot hoặc dữ liệu khác */}
                  <div className="text-xs text-[#1677FF]">+ 0 vé</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

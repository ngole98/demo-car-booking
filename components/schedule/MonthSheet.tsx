import React from "react";

const daysOfWeek = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

// Dữ liệu mẫu cho từng ngày trong tháng
const monthData = [
  // Tuần 1
  {
    day: 31,
    prev: true,
    buses: 10,
    fullBuses: 2,
    tickets: 80,
    totalTickets: 160,
  },
  { day: 1, buses: 10, fullBuses: 2, tickets: 80, totalTickets: 160 },
  {
    day: 2,
    full: true,
    buses: 12,
    fullBuses: 3,
    tickets: 160,
    totalTickets: 160,
  },
  { day: 3, buses: 8, fullBuses: 1, tickets: 60, totalTickets: 160 },
  { day: 4, buses: 9, fullBuses: 0, tickets: 70, totalTickets: 160 },
  { day: 5, buses: 7, fullBuses: 0, tickets: 50, totalTickets: 160 },
  { day: 6, buses: 11, fullBuses: 1, tickets: 100, totalTickets: 160 },
  // Tuần 2
  { day: 7, buses: 10, fullBuses: 2, tickets: 80, totalTickets: 160 },
  { day: 8, buses: 9, fullBuses: 1, tickets: 70, totalTickets: 160 },
  { day: 9, buses: 8, fullBuses: 0, tickets: 60, totalTickets: 160 },
  { day: 10, buses: 7, fullBuses: 0, tickets: 50, totalTickets: 160 },
  { day: 11, buses: 12, fullBuses: 3, tickets: 120, totalTickets: 160 },
  { day: 12, buses: 10, fullBuses: 2, tickets: 80, totalTickets: 160 },
  { day: 13, buses: 11, fullBuses: 1, tickets: 100, totalTickets: 160 },
  // Tuần 3
  { day: 14, buses: 8, fullBuses: 0, tickets: 60, totalTickets: 160 },
  {
    day: 15,
    today: true,
    buses: 10,
    fullBuses: 2,
    tickets: 80,
    totalTickets: 160,
  },
  { day: 16, buses: 9, fullBuses: 1, tickets: 70, totalTickets: 160 },
  { day: 17, buses: 7, fullBuses: 0, tickets: 50, totalTickets: 160 },
  { day: 18, buses: 12, fullBuses: 3, tickets: 120, totalTickets: 160 },
  { day: 19, buses: 10, fullBuses: 2, tickets: 80, totalTickets: 160 },
  { day: 20, buses: 11, fullBuses: 1, tickets: 100, totalTickets: 160 },
  // Tuần 4
  {
    day: 21,
    full: true,
    buses: 12,
    fullBuses: 3,
    tickets: 160,
    totalTickets: 160,
  },
  { day: 22, buses: 10, fullBuses: 2, tickets: 80, totalTickets: 160 },
  { day: 23, buses: 9, fullBuses: 1, tickets: 70, totalTickets: 160 },
  { day: 24, buses: 8, fullBuses: 0, tickets: 60, totalTickets: 160 },
  { day: 25, buses: 7, fullBuses: 0, tickets: 50, totalTickets: 160 },
  { day: 26, buses: 12, fullBuses: 3, tickets: 120, totalTickets: 160 },
  { day: 27, buses: 10, fullBuses: 2, tickets: 80, totalTickets: 160 },
  // Tuần 5
  { day: 28, buses: 11, fullBuses: 1, tickets: 100, totalTickets: 160 },
  { day: 29, buses: 8, fullBuses: 0, tickets: 60, totalTickets: 160 },
  {
    day: 30,
    full: true,
    buses: 12,
    fullBuses: 3,
    tickets: 160,
    totalTickets: 160,
  },
  {
    day: 1,
    next: true,
    buses: 10,
    fullBuses: 2,
    tickets: 80,
    totalTickets: 160,
  },
  {
    day: 2,
    next: true,
    buses: 10,
    fullBuses: 2,
    tickets: 80,
    totalTickets: 160,
  },
  {
    day: 3,
    next: true,
    buses: 10,
    fullBuses: 2,
    tickets: 80,
    totalTickets: 160,
  },
  {
    day: 4,
    next: true,
    buses: 10,
    fullBuses: 2,
    tickets: 80,
    totalTickets: 160,
  },
];

export default function MonthSheet() {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-7 border border-[#E5E5E5] rounded-lg bg-white">
        {daysOfWeek.map((d) => (
          <div
            key={d}
            className="py-2 text-center font-medium text-[#222] border-b border-[#E5E5E5] bg-[#FAFAFA]"
          >
            {d}
          </div>
        ))}
        {monthData.map((d, i) => {
          const isOut = d.prev || d.next;
          return (
            <div
              key={i}
              className={`p-2 border-b border-r border-[#E5E5E5] flex flex-col items-start justify-start relative
                ${
                  isOut
                    ? "bg-[#FAFAFA] text-[#C4C4C4] opacity-50"
                    : d.full
                    ? "bg-[#D9F7BE]"
                    : "bg-white"
                }
                ${d.today ? "ring-2 ring-[#1677FF] ring-offset-2" : ""}
              `}
            >
              <div className=" mb-1 text-[#222]">{d.day}</div>

              <>
                <div className="flex gap-1 items-center mt-1 w-full">
                  <div className="self-stretch my-auto text-neutral-800 font-semibold">
                    {d.buses}
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/47773c5fb6609bd16cec85d1bc16136e4b57a82e?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch my-auto font-medium text-neutral-800 font-semibold">
                    +
                  </div>
                  <div className="self-stretch my-auto text-neutral-800 font-semibold">
                    {d.fullBuses}
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/5df59e01b60c1eb2e45a9f2ccd971b1870ae696c?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                </div>
                <div className="flex gap-1 items-center mt-1 w-full">
                  <div className="self-stretch my-auto text-neutral-800 font-semibold">
                    {d.tickets}/{d.totalTickets}
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/e1c4461cc7426896a41d1fbb1f7fa4694a5ce941?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                </div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

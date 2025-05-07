"use client";

import React, { useState } from "react";
import StatusCard from "@/components/schedule/StatusCard";
import TimeSlot from "@/components/schedule/TimeSlot";
import FilterBar from "@/components/schedule/FilterBar";
import WeekTimeSheet from "@/components/schedule/WeekTimeSheet";
import "./styles.css";
import MonthSheet from "@/components/schedule/MonthSheet";

const SchedulePage = () => {
  const [showZoom, setShowZoom] = useState(false);
  const [dateType, setDateType] = useState("Ngày");

  const statusCards = [
    {
      title: "Số ghế còn trống",
      value: "150/200",
      bgColor: "bg-[#D9F7BE]",
      valueColor: "text-[#389E0D]",
    },
    {
      title: "Số xe chưa điều",
      value: "15/30",
      bgColor: "bg-[#BAE0FF]",
      valueColor: "text-[#1677FF]",
    },
    {
      title: "Số xe chưa hoàn thành chuyến",
      value: "14/30",
      bgColor: "bg-[#FFF1B8]",
      valueColor: "text-[#FAAD14]",
    },
    {
      title: "Số xe hỏng",
      value: "1/30",
      bgColor: "bg-[#FFCCC7]",
      valueColor: "text-[#F5222D]",
    },
    {
      title: "Số tài xế chưa điều",
      value: "1/30",
      bgColor: "bg-[#BDF9F4]",
      valueColor: "text-[#13BEB2]",
    },
  ];

  const timeSlots = [
    {
      time: "05:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "error" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "05:30",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "06:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "06:30",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "07:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "07:30",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "08:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "08:30",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "09:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "09:30",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "10:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "15:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "16:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "17:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "32/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "18:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "19:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "20:00",
      vehicles: [
        {
          id: "29X - 12345",
          driver: "Nguyễn Văn Dũng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "20:30",
      vehicles: [
        {
          id: "29A - 24580",
          driver: "Bùi Văn Hùng",
          status: "error" as const,
          seats: "32/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "21:00",
      vehicles: [
        {
          id: "29A - 24580",
          driver: "Bùi Văn Hùng",
          status: "normal" as const,
          seats: "6/32",
          passengers: "5",
        },
      ],
    },
    {
      time: "21:30",
      vehicles: [
        {
          id: "29A - 24580",
          driver: "Bùi Văn Hùng",
          status: "normal" as const,
          seats: "32/32",
          passengers: "5",
        },
      ],
    },
  ];
  return (
    <div
      className="schedule-page p-6 max-w-[1920px] mx-auto relative"
      role="main"
    >
      {showZoom && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
          role="dialog"
        >
          <div className="bg-white rounded-[5px] border-[5px] border-white w-full h-full max-w-none max-h-none overflow-auto relative flex flex-col">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-800 z-10"
              onClick={() => setShowZoom(false)}
              aria-label="Đóng"
            >
              &times;
            </button>
            <div className="text-xl font-bold mb-2 mt-4 ml-6">
              Lịch xe phóng to
            </div>
            <div className="schedule-grid grid grid-cols-6 gap-4 flex-1 p-6">
              {timeSlots.map((slot, index) => (
                <TimeSlot key={index} {...slot} zoomed />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-between items-center gap-8 mb-8">
        <div className="flex flex-wrap min-w-[240px] gap-4 flex-1 max-w-[1400px]">
          {statusCards.map((card, index) => (
            <StatusCard key={index} {...card} />
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="schedule-auto-btn px-4 py-2 bg-[#1677FF] text-white rounded-lg">
            Điều xe tự động
          </button>
          <button className="notification-btn w-10 h-10 bg-[#E6F4FF] border border-[#1677FF] rounded-lg relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/369023bd40dae794e43bcfc5f33c37a7439c94b4?placeholderIfAbsent=true"
              alt="history"
              className="w-6 h-6 m-auto"
            />
            <span className="absolute -right-[5px] top-[2px] w-3 h-3 bg-[#F5222D] rounded-full" />
          </button>
          <button
            className="settings-btn w-10 h-10 border border-[#262626] rounded-lg"
            onClick={() => setShowZoom(true)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/e7479bfcaf6cebf97e7c467c5f808ae1ffc54a11?placeholderIfAbsent=true"
              alt="zoom"
              className="w-6 h-6 m-auto"
            />
          </button>
        </div>
      </div>

      <div className="mt-8 text-sm">
        <FilterBar dateType={dateType} setDateType={setDateType} />

        {dateType === "Tuần" ? (
          <WeekTimeSheet />
        ) : dateType === "Tháng" ? (
          <div className="w-full mt-4">
            <MonthSheet />
          </div>
        ) : (
          <div
            className="schedule-grid grid grid-cols-6 gap-6 mt-4 w-full"
            style={{ minWidth: "1200px" }}
          >
            {timeSlots.map((slot, index) => (
              <TimeSlot key={index} {...slot} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;

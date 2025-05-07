"use client";

import React, { useState, useEffect } from "react";
import StatusCard from "@/components/schedule/StatusCard";
import TimeSlot from "@/components/schedule/TimeSlot";
import FilterBar from "@/components/schedule/FilterBar";
import WeekTimeSheet from "@/components/schedule/WeekTimeSheet";
import "./styles.css";
import MonthSheet from "@/components/schedule/MonthSheet";
import { timeSlots, vehicleTypes } from "@/components/dataFake";

type TimeSlot = {
  time: string;
  vehicles: {
    id: string;
    driver: string;
    status: "error" | "normal";
    seats: string;
    passengers: string;
    totalSeat: number;
    route: number;
    runningDate: string;
  }[];
};

const SchedulePage = () => {
  const [showZoom, setShowZoom] = useState(false);
  const [filteredTimeSlots, setFilteredTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState("Tất cả xe");
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [searchLicensePlate, setSearchLicensePlate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState("day");
  const [dateType, setDateType] = useState("day");

  const handleVehicleTypeChange = (type: string) => {
    setSelectedVehicleType(type);
  };

  const handleRouteChange = (route: number) => {
    setSelectedRoute(route);
  };

  const handleLicensePlateChange = (plate: string) => {
    setSearchLicensePlate(plate);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const isDateInRange = (
    runningDate: string,
    selectedDate: string,
    timeRange: string
  ) => {
    const [day, month, year] = runningDate.split("/").map(Number);
    const runningDateObj = new Date(year, month - 1, day);

    if (timeRange === "day") {
      const [selectedYear, selectedMonth, selectedDay] = selectedDate
        .split("-")
        .map(Number);
      const selectedDateObj = new Date(
        selectedYear,
        selectedMonth - 1,
        selectedDay
      );
      return runningDateObj.getTime() === selectedDateObj.getTime();
    } else if (timeRange === "week") {
      const [startDate, endDate] = selectedDate.split(" - ");
      const [startYear, startMonth, startDay] = startDate
        .split("-")
        .map(Number);
      const [endYear, endMonth, endDay] = endDate.split("-").map(Number);

      const startDateObj = new Date(startYear, startMonth - 1, startDay);
      const endDateObj = new Date(endYear, endMonth - 1, endDay);

      return runningDateObj >= startDateObj && runningDateObj <= endDateObj;
    } else if (timeRange === "month") {
      const [selectedYear, selectedMonth] = selectedDate.split("-").map(Number);
      return (
        runningDateObj.getFullYear() === selectedYear &&
        runningDateObj.getMonth() === selectedMonth - 1
      );
    }
    return true;
  };

  useEffect(() => {
    if (!selectedDate) return; // Không filter nếu chưa có ngày được chọn

    const filtered = timeSlots
      .map((slot) => ({
        ...slot,
        vehicles: slot.vehicles.filter((vehicle) => {
          const selectedType = vehicleTypes.find(
            (vt) => vt.title === selectedVehicleType
          );

          // Kiểm tra điều kiện về loại xe
          const matchesVehicleType =
            selectedType &&
            (selectedType.value === 0 ||
              vehicle.totalSeat === selectedType.value);

          // Kiểm tra điều kiện về route
          const matchesRoute =
            selectedRoute === 0 || vehicle.route === selectedRoute;

          // Kiểm tra điều kiện về biển số xe
          const matchesLicensePlate =
            searchLicensePlate === "" ||
            vehicle.id.toLowerCase().includes(searchLicensePlate.toLowerCase());

          // Kiểm tra điều kiện về ngày chạy
          const matchesDate = isDateInRange(
            vehicle.runningDate,
            selectedDate,
            selectedTimeRange
          );

          return (
            matchesVehicleType &&
            matchesRoute &&
            matchesLicensePlate &&
            matchesDate
          );
        }),
      }))
      .filter((slot) => slot.vehicles.length > 0) as TimeSlot[];

    setFilteredTimeSlots(filtered);
  }, [
    selectedVehicleType,
    selectedRoute,
    searchLicensePlate,
    selectedDate,
    selectedTimeRange,
  ]);

  const statusCards = [
    {
      title: "Số ghế còn trống",
      value: "150/200",
      bgColor: "bg-[#D9F7BE]",
      valueColor: "text-[#389E0D]",
      tooltipData: timeSlots
        .flatMap((slot: TimeSlot) => slot.vehicles)
        .slice(0, 10)
        .map((vehicle) => vehicle.id),
    },
    {
      title: "Số xe chưa điều",
      value: "15/30",
      bgColor: "bg-[#BAE0FF]",
      valueColor: "text-[#1677FF]",
      tooltipData: timeSlots
        .flatMap((slot: TimeSlot) => slot.vehicles)
        .slice(0, 10)
        .map((vehicle) => vehicle.id),
    },
    {
      title: "Số xe chưa hoàn thành chuyến",
      value: "14/30",
      bgColor: "bg-[#FFF1B8]",
      valueColor: "text-[#FAAD14]",
      tooltipData: timeSlots
        .flatMap((slot: TimeSlot) => slot.vehicles)
        .slice(0, 10)
        .map((vehicle) => vehicle.id),
    },
    {
      title: "Số xe hỏng",
      value: "1/30",
      bgColor: "bg-[#FFCCC7]",
      valueColor: "text-[#F5222D]",
      tooltipData: timeSlots
        .flatMap((slot: TimeSlot) => slot.vehicles)
        .slice(0, 10)
        .map((vehicle) => vehicle.id),
    },
    {
      title: "Số tài xế chưa điều",
      value: "1/30",
      bgColor: "bg-[#BDF9F4]",
      valueColor: "text-[#13BEB2]",
      tooltipData: timeSlots
        .flatMap((slot: TimeSlot) => slot.vehicles)
        .slice(0, 10)
        .map((vehicle) => vehicle.id),
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
              {filteredTimeSlots.map((slot, index) => (
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
        <FilterBar
          setDateType={setDateType}
          onVehicleTypeChange={handleVehicleTypeChange}
          onRouteChange={handleRouteChange}
          onLicensePlateChange={handleLicensePlateChange}
          onDateChange={handleDateChange}
          onTimeRangeChange={(range: string) => setSelectedTimeRange(range)}
        />

        {dateType === "week" ? (
          <WeekTimeSheet />
        ) : dateType === "month" ? (
          <div className="w-full mt-4">
            <MonthSheet />
          </div>
        ) : (
          <div
            className="schedule-grid grid grid-cols-6 gap-6 mt-4 w-full"
            style={{ minWidth: "1200px" }}
          >
            {filteredTimeSlots.map((slot, index) => (
              <TimeSlot key={index} {...slot} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;

import React, { useState, useEffect } from "react";
import { routes, timeRanges, vehicleTypes } from "../dataFake";
import clsx from "clsx";

interface FilterBarProps {
  onVehicleTypeChange: (type: string) => void;
  onRouteChange: (route: number) => void;
  onLicensePlateChange: (plate: string) => void;
  onDateChange: (date: string) => void;
  onTimeRangeChange: (range: string) => void;
  setDateType: (type: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onVehicleTypeChange,
  onRouteChange,
  onLicensePlateChange,
  onDateChange,
  onTimeRangeChange,
  setDateType,
}) => {
  const [route, setRoute] = useState(1);
  const [vehicleType, setVehicleType] = useState("Xe 16 chỗ");
  const [licensePlate, setLicensePlate] = useState(""); // Khi đổi loại dateType

  // Lấy ngày hôm nay
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  const [selectedDate, setSelectedDate] = useState(formattedToday);
  const [selectedTimeRange, setSelectedTimeRange] = useState("day");
  const [weekRange, setWeekRange] = useState({ start: "", end: "" });

  // Khởi tạo weekRange và thông báo cho parent component về ngày mặc định
  useEffect(() => {
    updateWeekRange(today);
    onTimeRangeChange("day");
    onDateChange(formattedToday);
  }, []);

  const handleVehicleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setVehicleType(newType);
    onVehicleTypeChange(newType);
  };

  const handleRouteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRoute = Number(e.target.value);
    setRoute(newRoute);
    onRouteChange(newRoute);
  };

  const handleLicensePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlate = e.target.value;
    setLicensePlate(newPlate);
    onLicensePlateChange(newPlate);
  };

  const handleTodayClick = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    // Reset về chế độ chọn ngày
    setSelectedTimeRange("day");
    setSelectedDate(formattedDate);
    updateWeekRange(today);
    onTimeRangeChange("day");
    onDateChange(formattedDate);
  };

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRange = e.target.value;
    setSelectedTimeRange(newRange);
    onTimeRangeChange(newRange);
    setDateType(newRange);

    const today = new Date();
    if (newRange === "week") {
      updateWeekRange(today);
    } else if (newRange === "month") {
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const formattedDate = `${year}-${month}`;
      setSelectedDate(formattedDate);
      onDateChange(formattedDate);
    } else {
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      setSelectedDate(formattedDate);
      onDateChange(formattedDate);
    }
  };

  const updateWeekRange = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const formatDate = (d: Date) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const start = formatDate(startOfWeek);
    const end = formatDate(endOfWeek);
    setWeekRange({ start, end });
    onDateChange(`${start} - ${end}`);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    onDateChange(newDate);

    if (selectedTimeRange === "week") {
      updateWeekRange(new Date(newDate));
    }
  };

  return (
    <div className="filter-bar flex flex-wrap justify-between items-center gap-8 mb-6">
      <div className="flex flex-wrap min-w-[240px] gap-4 text-[#BFBFBF] lg:flex-1 lg:max-w-[800px]">
        <div className="route-select w-[250px] relative">
          <select
            className="appearance-none flex items-center gap-2 px-4 h-11 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg hover:border-[#1677FF] transition-all duration-200 cursor-pointer w-full text-[#1F1F1F] pr-10"
            value={route}
            onChange={handleRouteChange}
          >
            {routes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M6 8L10 12L14 8"
                stroke="#BFBFBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="vehicle-select w-[200px]">
          <div className="flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg hover:border-[#1677FF] transition-all duration-200 cursor-pointer w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/a6f84cdaa71d11072d3e8ccd2280ed4ab91db076?placeholderIfAbsent=true"
              alt="search"
              className="w-4 h-4"
            />
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-[#1F1F1F]"
              placeholder="Biển số xe"
              value={licensePlate}
              onChange={handleLicensePlateChange}
            />
          </div>
        </div>

        <div className="type-select w-[150px] relative">
          <select
            className="appearance-none flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg hover:border-[#1677FF] transition-all duration-200 cursor-pointer w-full text-[#1F1F1F] pr-8"
            value={vehicleType}
            onChange={handleVehicleTypeChange}
          >
            {vehicleTypes.map((type) => (
              <option key={type.title} value={type.title}>
                {type.title}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path
                d="M6 8L10 12L14 8"
                stroke="#BFBFBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 text-[#262626]">
        <div className="flex items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
            <div className="w-3.5 h-3.5 rounded-full border border-[#D9D9D9] bg-[#F5222D]" />
            <span>Xe hỏng</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full border border-[#D9D9D9] bg-[#FAAD14]" />
            <span>Xe chưa hoàn thành chuyến</span>
          </div>
        </div>

        <div className="w-px h-6 bg-[#8C8C8C]" />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full border border-[#D9D9D9] bg-white" />
            <span>Còn vé</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full border border-[#D9D9D9] bg-[#D9F7BE]" />
            <span>Hết vé</span>
          </div>
        </div>

        <div className="w-px h-6 bg-[#8C8C8C]" />

        <div className="flex items-center gap-6 text-[#1F1F1F]">
          <button
            className="px-6 h-11 border border-[#262626] rounded-lg text-[#262626] font-medium hover:bg-[#262626] hover:text-white transition-all duration-200"
            onClick={handleTodayClick}
          >
            Hôm nay
          </button>

          <div className="date-select">
            <div className="flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg relative">
              <select
                className="appearance-none bg-transparent outline-none text-[#1F1F1F] pr-8 cursor-pointer"
                value={selectedTimeRange}
                onChange={handleTimeRangeChange}
              >
                {timeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6 8L10 12L14 8"
                    stroke="#BFBFBF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/717674d8b9d3c9d92672cb543632319fbc44757f?placeholderIfAbsent=true"
              alt=""
              className="w-6 h-6"
            />
            <div
              className={clsx(
                "date-picker w-[150px]",
                selectedTimeRange === "week" && "w-[200px]"
              )}
            >
              <div className="flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg">
                {selectedTimeRange === "week" ? (
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="date"
                      className="bg-transparent outline-none text-[#1F1F1F] w-full"
                      value={weekRange.start}
                      onChange={handleDateChange}
                      style={{ minWidth: 0 }}
                    />
                    <span className="text-[#1F1F1F]">-</span>
                    <input
                      type="date"
                      className="bg-transparent outline-none text-[#1F1F1F] w-full"
                      value={weekRange.end}
                      readOnly
                      style={{ minWidth: 0 }}
                    />
                  </div>
                ) : (
                  <input
                    type={selectedTimeRange === "month" ? "month" : "date"}
                    className="bg-transparent outline-none text-[#1F1F1F] w-full"
                    value={selectedDate}
                    onChange={handleDateChange}
                    style={{ minWidth: 0 }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

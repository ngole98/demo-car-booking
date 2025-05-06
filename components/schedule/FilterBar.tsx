import React, { useState } from "react";

const FilterBar = () => {
  const [route, setRoute] = useState("Phủ Lý - Hà Đông");
  const routes = [
    "Phủ Lý - Hà Đông",
    "Hà Đông - Phủ Lý",
    "Hà Nội - Hải Phòng",
    "Hà Nội - Nam Định",
    "Hà Nội - Ninh Bình",
    "Hà Nội - Thái Bình",
  ];
  const [vehicleType, setVehicleType] = useState("Xe 16 chỗ");
  const vehicleTypes = [
    "Xe 16 chỗ",
    "Xe 29 chỗ",
    "Xe 35 chỗ",
    "Xe 45 chỗ",
    "Limousine",
  ];
  const [licensePlate, setLicensePlate] = useState("");
  const [selectedDate, setSelectedDate] = useState("2025-04-28");
  return (
    <div className="filter-bar flex flex-wrap justify-between items-center gap-8 mb-6">
      <div className="flex flex-wrap min-w-[240px] gap-4 text-[#BFBFBF] lg:flex-1 lg:max-w-[800px]">
        <div className="route-select w-[250px] relative">
          <select
            className="appearance-none flex items-center gap-2 px-4 h-11 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg hover:border-[#1677FF] transition-all duration-200 cursor-pointer w-full text-[#1F1F1F] pr-10"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          >
            {routes.map((r) => (
              <option key={r} value={r}>
                {r}
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
              onChange={(e) => setLicensePlate(e.target.value)}
            />
          </div>
        </div>

        <div className="type-select w-[150px] relative">
          <select
            className="appearance-none flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg hover:border-[#1677FF] transition-all duration-200 cursor-pointer w-full text-[#1F1F1F] pr-8"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
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
          <button className="px-6 h-11 border border-[#262626] rounded-lg text-[#262626] font-medium hover:bg-[#262626] hover:text-white transition-all duration-200">
            Hôm nay
          </button>

          <div className="date-select">
            <div className="flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg">
              <span className="text-[#1F1F1F]">Ngày</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/d0071a9f8eda83da5a214ced4eb7dab9ac1a2043?placeholderIfAbsent=true"
                alt=""
                className="w-3.5 h-3.5"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/717674d8b9d3c9d92672cb543632319fbc44757f?placeholderIfAbsent=true"
              alt=""
              className="w-6 h-6"
            />
            <div className="date-picker w-[150px]">
              <div className="flex items-center gap-2 px-3 h-10 bg-[#FCFCFC] border border-[#D9D9D9] rounded-lg">
                <input
                  type="date"
                  className="bg-transparent outline-none text-[#1F1F1F] w-full"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{ minWidth: 0 }}
                />
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/9a444387ab95ff235195ab85f932073647709b00?placeholderIfAbsent=true"
              alt=""
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

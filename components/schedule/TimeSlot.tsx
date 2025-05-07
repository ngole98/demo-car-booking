import React from "react";

interface Vehicle {
  id: string;
  driver: string;
  status: "error" | "warning" | "normal";
  seats: string; // dạng "6/32"ccc
  passengers: string;
}

interface TimeSlotProps {
  time: string; // "HH:mm"
  vehicles: Vehicle[];
  zoomed?: boolean;
}

function isFullSeats(seats: string) {
  const [current, total] = seats.split("/").map(Number);
  return current === total;
}

function isPastTime(time: string) {
  const now = new Date();
  const [h, m] = time.split(":").map(Number);
  const slot = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
  return slot < now;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, vehicles, zoomed }) => {
  // Kiểm tra tất cả xe đều full seats
  const allFull =
    vehicles.length > 0 && vehicles.every((v) => isFullSeats(v.seats));
  // Kiểm tra đã qua giờ chưa
  const past = isPastTime(time);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "error":
        return "text-[#F5222D]";
      case "warning":
        return "text-[#FEA628]";
      default:
        return "text-[#262626]";
    }
  };

  return (
    <div
      className={`time-slot border-r border-b border-[#F0F0F0] p-3 flex-1 transition-colors duration-200 hover:bg-opacity-95
        ${allFull ? "bg-[#D9F7BE]" : "bg-white"}
        ${past ? "opacity-50 text-gray-400" : ""}
        ${
          zoomed
            ? "text-base min-h-[160px] min-w-[220px] p-5"
            : "text-sm min-h-[90px] min-w-[160px]"
        }
      `}
    >
      <div className={`mb-1 font-medium ${!past ? "text-[#262626]" : ""}`}>
        {time}
      </div>

      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="vehicle-info flex items-center gap-1 text-sm leading-7 hover:bg-black/[0.02] rounded px-1 transition-colors duration-200"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/68e766d706dc60b78148e64de7265dda77ffb7aa?placeholderIfAbsent=true"
            alt=""
            className="w-4 h-4"
          />
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <span className={getStatusColor(vehicle.status)}>{vehicle.id}</span>
            <div className="h-4 w-px bg-[#D9D9D9] mx-1" />
            <span
              className={`flex-1 ${
                !past ? "text-[#262626]" : ""
              } whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {vehicle.driver}
            </span>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-2 text-[#1677FF] gap-2">
        <div className="flex items-center gap-1 bg-[#E6F4FF] rounded-md px-2 py-1 hover:bg-[#1677FF]/10 transition-colors duration-200">
          <div className="w-[16px] h-[16px]" />
          <span className="text-xs">{vehicles[0].seats}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/3a28cc8d103ca494029b787a67cebb6a01c1bfc2?placeholderIfAbsent=true"
            alt=""
            className="w-4 h-4"
          />
        </div>

        <div className="flex items-center gap-1 bg-[#E6F4FF] rounded px-1">
          <div className="w-[16px] h-[16px]" />
          <span className="text-xs">{vehicles[0].passengers}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/ca1f79f57796dde637c37d44e75daf656cee2e10?placeholderIfAbsent=true"
            alt=""
            className="w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;

import React from "react";

const TripInfo: React.FC = () => {
  return (
    <section className="flex items-center justify-between px-6 py-4 bg-sky-100 max-md:p-3 max-sm:p-2">
      <div className="flex gap-2 items-center mr-4">
        <span className="text-base text-neutral-800">Tuyến đường:</span>
        <span className="text-base font-bold text-neutral-800">
          Phú Lý - Hà Đông
        </span>
      </div>
      <div className="flex gap-2 items-center mr-4">
        <span className="text-base text-neutral-800">Thời gian:</span>
        <span className="text-base font-bold text-neutral-800">
          09:00 06/05/2025
        </span>
      </div>
      <button className="h-10 text-base font-medium text-blue-600 rounded-lg border border-blue-600 border-solid w-[180px] flex items-center justify-center max-md:w-full max-sm:w-full">
        Tăng cường chuyến
      </button>
    </section>
  );
};

export default TripInfo;

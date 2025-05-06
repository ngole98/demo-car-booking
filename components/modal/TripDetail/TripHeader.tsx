import React from "react";

const TripHeader: React.FC = () => {
  return (
    <header className="flex sticky top-0 z-50 justify-between items-center px-6 py-5 border-b border-solid border-b-slate-200 max-md:p-4 max-sm:p-3">
      <h1 className="flex-1 text-2xl font-bold text-gray-800 -tracking-wide max-md:text-xl max-sm:text-lg">
        Chi tiết chuyến đi
      </h1>
      <button className="inline-flex justify-center items-center p-2 rounded-lg transition-all cursor-pointer duration-[0.2s] text-slate-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
            fill="currentColor"
          />
        </svg>
      </button>
    </header>
  );
};

export default TripHeader;

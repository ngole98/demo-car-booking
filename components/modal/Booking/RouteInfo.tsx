"use client";
import React from "react";

interface RouteData {
  from: string;
  to: string;
  departureTime: string;
  departureDate: string;
}

interface RouteInfoProps {
  routeData: RouteData;
}

const RouteInfo: React.FC<RouteInfoProps> = ({ routeData }) => {
  return (
    <section className="flex flex-wrap gap-4 items-start px-6 py-4 w-full text-base bg-sky-100 text-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center min-w-60">
        <div className="flex gap-2 items-center">
          <p className="self-stretch my-auto text-neutral-800">Tuyến đường:</p>
          <p className="self-stretch my-auto font-bold text-neutral-800 w-[268px]">
            {routeData.from} - {routeData.to}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center font-bold min-w-60">
        <div className="flex gap-2 items-center">
          <p className="self-stretch my-auto text-neutral-800">Thời gian:</p>
          <p className="self-stretch my-auto text-neutral-800">
            {routeData.departureTime}
          </p>
          <p className="self-stretch my-auto text-neutral-800 w-[268px]">
            {routeData.departureDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RouteInfo;

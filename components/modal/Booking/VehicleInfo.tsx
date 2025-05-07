"use client";
import React, { useState, useEffect } from "react";
import SeatButton from "./SeatButton";

interface SeatData {
  id: string;
  number: string;
  status: "available" | "selected" | "unavailable";
  price: number;
}

interface VehicleData {
  id: string;
  licensePlate: string;
  type: string;
  driverName: string;
  driverPhone: string;
  seats: SeatData[];
}

interface VehicleInfoProps {
  vehicleData: VehicleData;
  onSeatSelect?: (selectedSeats: string[]) => void;
  initialSelectedSeats?: string[]; // Thêm prop để nhận danh sách ghế đã chọn ban đầu
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({
  vehicleData,
  onSeatSelect,
  initialSelectedSeats = [], // Giá trị mặc định là mảng rỗng
}) => {
  // State để lưu trữ các ghế đã chọn
  const [selectedSeats, setSelectedSeats] =
    useState<string[]>(initialSelectedSeats);

  // Cập nhật selectedSeats khi initialSelectedSeats thay đổi
  useEffect(() => {
    setSelectedSeats(initialSelectedSeats);
  }, [initialSelectedSeats]);

  // Nhóm ghế thành các hàng để hiển thị
  const groupedSeats = [
    vehicleData.seats.slice(0, 4), // Hàng 1: ghế 1-4
    vehicleData.seats.slice(4, 8), // Hàng 2: ghế 5-8
    vehicleData.seats.slice(8, 12), // Hàng 3: ghế 9-12
    vehicleData.seats.slice(12, 16), // Hàng 4: ghế 13-16
  ];

  // Hàm xử lý khi người dùng chọn ghế
  const handleSeatClick = (seatId: string) => {
    setSelectedSeats((prev) => {
      // Nếu ghế đã được chọn, bỏ chọn nó
      if (prev.includes(seatId)) {
        const newSelected = prev.filter((id) => id !== seatId);
        // Thông báo cho component cha về thay đổi (nếu có)
        if (onSeatSelect) onSeatSelect(newSelected);
        return newSelected;
      }
      // Nếu ghế chưa được chọn, thêm vào danh sách
      else {
        const newSelected = [...prev, seatId];
        // Thông báo cho component cha về thay đổi (nếu có)
        if (onSeatSelect) onSeatSelect(newSelected);
        return newSelected;
      }
    });
  };

  return (
    <article className="p-4 text-sm rounded-lg bg-neutral-100 min-w-60 text-neutral-800 w-[250px]">
      <div className="flex flex-col justify-center max-w-full w-[184px]">
        <h2 className="text-base font-bold text-neutral-800">Thông tin xe</h2>
        <div className="flex gap-2 items-center mt-2 w-full leading-loose">
          <p className="self-stretch my-auto text-neutral-800">Tài xế</p>
          <p className="flex-1 shrink self-stretch my-auto font-medium basis-0 text-neutral-800">
            {vehicleData.driverName}
          </p>
        </div>
        <div className="flex gap-2 items-center mt-2 w-full font-medium leading-loose">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/a87302f99a42d782b1fc58c416c91d9b907aa143?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Phone icon"
          />
          <p className="flex-1 shrink self-stretch my-auto basis-0 text-neutral-800">
            {vehicleData.driverPhone}
          </p>
        </div>
      </div>

      {groupedSeats.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={`flex gap-2 items-center mt-4 w-full font-medium leading-loose whitespace-nowrap ${
            rowIndex === 1
              ? "text-blue-600"
              : rowIndex % 2 === 0
              ? "text-neutral-400"
              : ""
          }`}
        >
          {row.map((seat) => (
            <SeatButton
              key={seat.id}
              id={seat.id}
              number={seat.number}
              status={seat.status}
              price={seat.price}
              isSelected={selectedSeats.includes(seat.id)}
              onClick={() =>
                seat.status === "available" && handleSeatClick(seat.id)
              }
            />
          ))}
        </div>
      ))}
    </article>
  );
};

export default VehicleInfo;

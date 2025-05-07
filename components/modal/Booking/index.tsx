"use client";
import React, { useState } from "react";

import RouteInfo from "./RouteInfo";
import VehicleInfo from "./VehicleInfo";
import CustomerForm from "./CustomerForm";
import PaymentSection from "./PaymentSection";
import ModalFooter from "./ModalFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

// Định nghĩa các interface cho dữ liệu
interface RouteData {
  from: string;
  to: string;
  departureTime: string;
  departureDate: string;
}

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

interface CustomerData {
  fullName: string;
  phone: string;
  pickupPoint: string;
  dropoffPoint: string;
  ticketCount: number;
}

interface BookingModalProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onOpenChange,
  trigger,
}) => {
  // Mock data
  const routeData: RouteData = {
    from: "Phú Lý",
    to: "Hà Đông",
    departureTime: "09:00",
    departureDate: "06/05/2025",
  };

  const vehicles: VehicleData[] = [
    {
      id: "vehicle1",
      licensePlate: "29X - 12345",
      type: "Giường nằm",
      driverName: "Nguyễn Văn Dũng",
      driverPhone: "0912 345 896",
      seats: [
        { id: "seat1", number: "1", status: "unavailable", price: 200000 },
        { id: "seat2", number: "2", status: "unavailable", price: 200000 },
        { id: "seat3", number: "3", status: "unavailable", price: 200000 },
        { id: "seat4", number: "4", status: "unavailable", price: 200000 },
        { id: "seat5", number: "5", status: "available", price: 200000 },
        { id: "seat6", number: "6", status: "available", price: 200000 },
        { id: "seat7", number: "7", status: "available", price: 200000 },
        { id: "seat8", number: "8", status: "available", price: 200000 },
        { id: "seat9", number: "9", status: "available", price: 200000 },
        { id: "seat10", number: "10", status: "unavailable", price: 200000 },
        { id: "seat11", number: "11", status: "available", price: 200000 },
        { id: "seat12", number: "12", status: "available", price: 200000 },
        { id: "seat13", number: "13", status: "unavailable", price: 200000 },
        { id: "seat14", number: "14", status: "available", price: 200000 },
        { id: "seat15", number: "15", status: "unavailable", price: 200000 },
        { id: "seat16", number: "16", status: "unavailable", price: 200000 },
      ],
    },
    {
      id: "vehicle2",
      licensePlate: "29A - 24580",
      type: "Giường nằm",
      driverName: "Trần Văn Bình",
      driverPhone: "0987 654 321",
      seats: [
        { id: "seat1", number: "1", status: "available", price: 200000 },
        { id: "seat2", number: "2", status: "available", price: 200000 },
        { id: "seat3", number: "3", status: "available", price: 200000 },
        { id: "seat4", number: "4", status: "available", price: 200000 },
        { id: "seat5", number: "5", status: "available", price: 200000 },
        { id: "seat6", number: "6", status: "available", price: 200000 },
        { id: "seat7", number: "7", status: "available", price: 200000 },
        { id: "seat8", number: "8", status: "available", price: 200000 },
        { id: "seat9", number: "9", status: "available", price: 200000 },
        { id: "seat10", number: "10", status: "available", price: 200000 },
        { id: "seat11", number: "11", status: "available", price: 200000 },
        { id: "seat12", number: "12", status: "available", price: 200000 },
        { id: "seat13", number: "13", status: "available", price: 200000 },
        { id: "seat14", number: "14", status: "available", price: 200000 },
        { id: "seat15", number: "15", status: "available", price: 200000 },
        { id: "seat16", number: "16", status: "available", price: 200000 },
      ],
    },
  ];

  const customerData: CustomerData = {
    fullName: "Nguyễn Ngọc Đan Vy",
    phone: "0935 478 999",
    pickupPoint: "Điểm đón",
    dropoffPoint: "Tại văn phòng",
    ticketCount: 3,
  };

  // State để theo dõi xe đang được chọn
  const [selectedVehicle, setSelectedVehicle] = useState<string>(
    vehicles[0].id
  );

  // State để lưu trữ các ghế đã chọn cho mỗi xe
  const [selectedSeatsMap, setSelectedSeatsMap] = useState<
    Record<string, string[]>
  >({
    [vehicles[0].id]: [],
    [vehicles[1].id]: [],
  });

  // Hàm để lấy thông tin xe đang được chọn
  const getSelectedVehicle = () => {
    return vehicles.find((v) => v.id === selectedVehicle) || vehicles[0];
  };

  // Hàm xử lý khi người dùng chọn ghế
  const handleSeatSelect = (vehicleId: string, selectedSeats: string[]) => {
    setSelectedSeatsMap((prev) => ({
      ...prev,
      [vehicleId]: selectedSeats,
    }));
  };

  // Tính tổng tiền dựa trên ghế đã chọn
  const calculateTotal = () => {
    const currentVehicle = getSelectedVehicle();
    const selectedSeats = selectedSeatsMap[selectedVehicle] || [];

    return selectedSeats.reduce((total, seatId) => {
      const seat = currentVehicle.seats.find((s) => s.id === seatId);
      return total + (seat ? seat.price : 0);
    }, 0);
  };

  // Cập nhật dữ liệu thanh toán dựa trên ghế đã chọn
  const paymentData = {
    price: calculateTotal(),
    discount: 20000,
    total:
      calculateTotal() > 200000 ? calculateTotal() - 20000 : calculateTotal(),
    paymentMethod: "driver", // "driver", "bank", "none"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-[1240px] p-0 border-none max-h-[90vh] overflow-y-auto">
        <section className="flex flex-col bg-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] w-full">
          <DialogHeader className="p-0 text-left  bg-white z-10">
            <div className="flex justify-between items-center px-6 pt-4 pb-2 h-16">
              <DialogTitle className="text-xl font-bold">Đặt vé</DialogTitle>
              <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto text-base text-right basis-0 min-w-60 max-md:max-w-full">
                <p className="flex-1 shrink self-stretch my-auto basis-0 text-neutral-800 max-md:max-w-full">
                  Thời gian còn lại
                </p>
                <p className="self-stretch my-auto font-bold text-blue-600">
                  05:43
                </p>
                <DialogClose className="rounded-full p-1 hover:bg-slate-100">
                  <X className="h-5 w-5" />
                </DialogClose>
              </div>
            </div>
          </DialogHeader>

          <RouteInfo routeData={routeData} />

          <div className="mx-6 mt-4 mb-6">
            <Tabs
              defaultValue={vehicles[0].id}
              className="w-full"
              onValueChange={setSelectedVehicle}
            >
              <TabsList className="flex justify-start border-b border-solid border-b-zinc-300 w-full h-auto bg-transparent rounded-none p-0">
                {vehicles.map((vehicle) => (
                  <TabsTrigger
                    key={vehicle.id}
                    value={vehicle.id}
                    className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
                  >
                    {vehicle.licensePlate}
                  </TabsTrigger>
                ))}
              </TabsList>

              {vehicles.map((vehicle) => (
                <TabsContent
                  key={vehicle.id}
                  value={vehicle.id}
                  className="flex z-0 flex-wrap gap-2 items-start mt-4 w-full max-md:max-w-full"
                >
                  <VehicleInfo
                    vehicleData={vehicle}
                    onSeatSelect={(selectedSeats) =>
                      handleSeatSelect(vehicle.id, selectedSeats)
                    }
                    initialSelectedSeats={selectedSeatsMap[vehicle.id] || []}
                  />
                  <CustomerForm customerData={customerData} />
                  <PaymentSection paymentData={paymentData} />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <ModalFooter />
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

"use client";
import React from "react";
import StatusBadge from "./StatusBadge";

interface Passenger {
  id: number;
  name: string;
  phone: string;
  ticketCount: number;
  pickupPoint: string;
  dropoffPoint: string;
  transferStatus: {
    type: "completed" | "pending" | "waiting" | "cancelled";
    text: string;
  };
  boardingStatus: {
    type: "completed" | "pending" | "waiting" | "cancelled";
    text: string;
  };
  paymentStatus: {
    type:
      | "completed"
      | "pending"
      | "waiting"
      | "cancelled"
      | "refunded"
      | "unpaid";
    text: string;
  };
  isCancelled?: boolean;
}

const passengers: Passenger[] = [
  {
    id: 1,
    name: "Kristin Watson",
    phone: "(704) 555-0127",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "completed", text: "Đã đón" },
    boardingStatus: { type: "completed", text: "Đã lên" },
    paymentStatus: { type: "completed", text: "Đã thanh toán" },
  },
  {
    id: 2,
    name: "Albert Flores",
    phone: "(480) 555-0103",
    ticketCount: 3,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "cancelled", text: "Đã hủy" },
    boardingStatus: { type: "cancelled", text: "Đã hủy" },
    paymentStatus: { type: "refunded", text: "Đã hoàn tiền" },
    isCancelled: true,
  },
  {
    id: 3,
    name: "Robert Fox",
    phone: "(219) 555-0114",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "waiting", text: "Chưa điều" },
    boardingStatus: { type: "waiting", text: "Chưa lên" },
    paymentStatus: { type: "completed", text: "Đã thanh toán" },
  },
  {
    id: 4,
    name: "Eleanor Pena",
    phone: "(229) 555-0109",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "pending", text: "Đã điều" },
    boardingStatus: { type: "waiting", text: "Chưa lên" },
    paymentStatus: { type: "completed", text: "Đã thanh toán" },
  },
  {
    id: 5,
    name: "Jerome Bell",
    phone: "(201) 555-0124",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "completed", text: "Đã đón" },
    boardingStatus: { type: "completed", text: "Đã lên" },
    paymentStatus: { type: "unpaid", text: "Chưa thanh toán" },
  },
  {
    id: 6,
    name: "Darlene Robertson",
    phone: "(217) 555-0113",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "completed", text: "Đã đón" },
    boardingStatus: { type: "completed", text: "Đã lên" },
    paymentStatus: { type: "completed", text: "Đã thanh toán" },
  },
  {
    id: 7,
    name: "Arlene McCoy",
    phone: "(252) 555-0126",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "completed", text: "Đã đón" },
    boardingStatus: { type: "completed", text: "Đã lên" },
    paymentStatus: { type: "completed", text: "Đã thanh toán" },
  },
  {
    id: 8,
    name: "Savannah Nguyen",
    phone: "(239) 555-0108",
    ticketCount: 1,
    pickupPoint: "29 Phủ Lý",
    dropoffPoint: "Tại văn phòng",
    transferStatus: { type: "completed", text: "Đã đón" },
    boardingStatus: { type: "completed", text: "Đã lên" },
    paymentStatus: { type: "completed", text: "Đã thanh toán" },
  },
];

const PassengerList: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50">
            <th className="px-4 py-3 text-sm text-left text-black font-bold">
              Tên khách hàng
            </th>
            <th className="px-4 py-3 text-sm text-left text-black font-bold">
              Số điện thoại
            </th>
            <th className="px-4 py-3 text-sm text-center text-black font-bold">
              Số lượng vé (10)
            </th>
            <th className="px-4 py-3 text-sm text-left text-black font-bold">
              Điểm đón
            </th>
            <th className="px-4 py-3 text-sm text-left text-black font-bold">
              Điểm trả
            </th>
            <th className="px-4 py-3 text-sm text-center text-black font-bold">
              Trạng thái trung chuyển
            </th>
            <th className="px-4 py-3 text-sm text-center text-black font-bold">
              Trạng thái lên xe
            </th>
            <th className="px-4 py-3 text-sm text-center text-black font-bold">
              Thanh toán
            </th>
            <th className="px-4 py-3 text-sm text-center text-black font-bold"></th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr
              key={passenger.id}
              className={`border-b border-slate-200 ${
                passenger.isCancelled ? "bg-red-50" : ""
              }`}
            >
              <td className="px-4 py-3 text-sm font-medium text-slate-900">
                {passenger.name}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {passenger.phone}
              </td>
              <td className="px-4 py-3 text-sm text-center text-slate-900">
                {passenger.ticketCount}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {passenger.pickupPoint}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {passenger.dropoffPoint}
              </td>
              <td className="px-4 py-3 text-sm text-center">
                {passenger.transferStatus.text && (
                  <StatusBadge
                    type={passenger.transferStatus.type}
                    text={passenger.transferStatus.text}
                  />
                )}
              </td>
              <td className="px-4 py-3 text-sm text-center">
                <StatusBadge
                  type={passenger.boardingStatus.type}
                  text={passenger.boardingStatus.text}
                />
              </td>
              <td className="px-4 py-3 text-sm text-center">
                <StatusBadge
                  type={passenger.paymentStatus.type}
                  text={passenger.paymentStatus.text}
                />
              </td>
              <td className="px-4 py-3 text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <button aria-label="Edit passenger">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0504 3.00002L4.20878 10.2417C3.95045 10.5167 3.70045 11.0584 3.65045 11.4334L3.34211 14.1334C3.23378 15.1084 3.93378 15.775 4.90045 15.6084L7.58378 15.15C7.95878 15.0834 8.48378 14.8084 8.74211 14.525L15.5838 7.28335C16.7671 6.03335 17.3004 4.60835 15.4588 2.86668C13.6254 1.14168 12.2338 1.75002 11.0504 3.00002Z"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9.9082 4.20837C10.2665 6.50837 12.1332 8.26671 14.4499 8.50004"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M2.5 18.3334H17.5"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button aria-label="Delete passenger">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.08301 4.14163L7.26634 3.04996C7.39967 2.25829 7.49967 1.66663 8.90801 1.66663H11.0913C12.4997 1.66663 12.608 2.29163 12.733 3.05829L12.9163 4.14163"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.7087 7.6167L15.167 16.0084C15.0753 17.3167 15.0003 18.3334 12.6753 18.3334H7.32533C5.00033 18.3334 4.92533 17.3167 4.83366 16.0084L4.29199 7.6167"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.6084 13.75H11.3834"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.91699 10.4166H12.0837"
                        stroke="#818181"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengerList;

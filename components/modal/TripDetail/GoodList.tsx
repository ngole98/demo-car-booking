"use client";
import React from "react";
import StatusBadge from "./StatusBadge";
interface Good {
  id: number;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  weight: string;
  type: string;
  pickupPoint: string;
  deliveryPoint: string;
  status: "completed" | "pending";
  isCancelled?: boolean;
  statusText: string;
}

const goods: Good[] = [
  {
    id: 1,
    senderName: "Arlene McCoy",
    senderPhone: "(704) 555-0127",
    receiverName: "Leslie Alexander",
    receiverPhone: "(308) 555-0121",
    weight: "2 kg",
    type: "Thực phẩm",
    pickupPoint: "Tại văn phòng",
    deliveryPoint: "Tại văn phòng",
    status: "completed",
    statusText: "Đã thanh toán",
  },
  {
    id: 2,
    senderName: "Wade Warren",
    senderPhone: "(704) 555-0127",
    receiverName: "Jacob Jones",
    receiverPhone: "(225) 555-0118",
    weight: "2 kg",
    type: "Thực phẩm",
    pickupPoint: "Tại văn phòng",
    deliveryPoint: "Tại văn phòng",
    status: "completed",
    statusText: "Đã thanh toán",
  },
  {
    id: 3,
    senderName: "Darlene Robertson",
    senderPhone: "(704) 555-0127",
    receiverName: "Jenny Wilson",
    receiverPhone: "(205) 555-0100",
    weight: "2 kg",
    type: "Thực phẩm",
    pickupPoint: "Tại văn phòng",
    deliveryPoint: "Tại văn phòng",
    status: "completed",
    statusText: "Đã thanh toán",
  },
  {
    id: 4,
    senderName: "Esther Howard",
    senderPhone: "(704) 555-0127",
    receiverName: "Darlene Robertson",
    receiverPhone: "(252) 555-0126",
    weight: "2 kg",
    type: "Thực phẩm",
    pickupPoint: "Tại văn phòng",
    deliveryPoint: "Tại văn phòng",
    status: "completed",
    statusText: "Đã thanh toán",
  },
  {
    id: 5,
    senderName: "Albert Flores",
    senderPhone: "(704) 555-0127",
    receiverName: "Marvin McKinney",
    receiverPhone: "(208) 555-0112",
    weight: "2 kg",
    type: "Thực phẩm",
    pickupPoint: "Tại văn phòng",
    deliveryPoint: "Tại văn phòng",
    status: "completed",
    statusText: "Đã thanh toán",
  },
];

const GoodList: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50">
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Tên người gửi
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Sđt người gửi
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Tên người nhận
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Sđt người nhận
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-center ">
              Trọng lượng
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Loại hàng hóa
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Địa chỉ lấy hàng
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-left ">
              Địa chỉ giao hàng
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-center ">
              Trạng thái
            </th>
            <th className="px-4 py-3 text-sm font-bold text-black text-center "></th>
          </tr>
        </thead>
        <tbody>
          {goods.map((good) => (
            <tr
              key={good.id}
              className={`border-b border-slate-200 ${
                good.isCancelled ? "bg-red-50" : ""
              }`}
            >
              <td className="px-4 py-3 text-sm font-medium text-slate-900">
                {good.senderName}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {good.senderPhone}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-slate-900">
                {good.receiverName}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {good.receiverPhone}
              </td>
              <td className="px-4 py-3 text-sm text-center text-slate-900">
                {good.weight}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">{good.type}</td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {good.pickupPoint}
              </td>
              <td className="px-4 py-3 text-sm text-slate-900">
                {good.deliveryPoint}
              </td>
              <td className="px-4 py-3 text-sm text-center">
                <div className="w-full">
                  <StatusBadge type={good.status} text={good.statusText} />
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <button aria-label="Edit good">
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
                  <button aria-label="Delete good">
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

export default GoodList;

"use client";
import React from "react";
import TripHeader from "./TripHeader";
import TripInfo from "./TripInfo";
import DriverInfo from "./DriverInfo";
import PassengerList from "./PassengerList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TripDetailsModal: React.FC = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="flex flex-col bg-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] w-[1240px] max-md:p-4 max-md:w-full max-sm:p-3">
        <TripHeader />
        <TripInfo />
        <div className="mx-6 mt-4 mb-6">
          <Tabs defaultValue="vehicle1" className="w-full">
            <TabsList className="flex justify-start border-b border-solid border-b-zinc-300 w-full h-auto bg-transparent rounded-none p-0">
              <TabsTrigger
                value="vehicle1"
                className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
              >
                29X - 12345
              </TabsTrigger>
              <TabsTrigger
                value="vehicle2"
                className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
              >
                29A - 24580
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vehicle1" className="mt-0">
              <DriverInfo />
              <Tabs defaultValue="passengers" className="w-full">
                <TabsList className="flex justify-start border-b border-solid border-b-zinc-300 w-full h-auto bg-transparent rounded-none p-0 max-md:p-0 max-sm:p-0">
                  <TabsTrigger
                    value="passengers"
                    className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
                  >
                    Danh sách khách hàng (10)
                  </TabsTrigger>
                  <TabsTrigger
                    value="goods"
                    className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
                  >
                    Danh sách hàng hóa (5)
                  </TabsTrigger>
                </TabsList>

                <button className="my-4 flex gap-2 justify-center items-center h-10 text-base font-medium text-white bg-blue-600 rounded-lg w-[100px] max-md:p-3 max-md:w-full max-sm:p-2 max-sm:w-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 9H13.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9 13.5V4.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Đặt vé</span>
                </button>

                <TabsContent value="passengers" className="mt-0">
                  <PassengerList />
                </TabsContent>
                <TabsContent value="goods" className="mt-0">
                  <div className="p-4">Nội dung danh sách hàng hóa</div>
                </TabsContent>
              </Tabs>
            </TabsContent>
            <TabsContent value="vehicle2" className="mt-0">
              {/* Nội dung cho xe 29A - 24580 */}
              <DriverInfo />
              <Tabs defaultValue="passengers" className="w-full">
                <TabsList className="flex justify-start border-b border-solid border-b-zinc-300 w-full h-auto bg-transparent rounded-none p-0 max-md:p-0 max-sm:p-0">
                  <TabsTrigger
                    value="passengers"
                    className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
                  >
                    Danh sách khách hàng (8)
                  </TabsTrigger>
                  <TabsTrigger
                    value="goods"
                    className="px-4 py-3 text-base font-bold text-left data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=inactive]:text-stone-900 rounded-none focus:outline-none border-0 shadow-none"
                  >
                    Danh sách hàng hóa (3)
                  </TabsTrigger>
                </TabsList>

                <button className="my-4 flex gap-2 justify-center items-center h-10 text-base font-medium text-white bg-blue-600 rounded-lg w-[100px] max-md:p-3 max-md:w-full max-sm:p-2 max-sm:w-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 9H13.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9 13.5V4.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Đặt vé</span>
                </button>

                <TabsContent value="passengers" className="mt-0">
                  <PassengerList />
                </TabsContent>
                <TabsContent value="goods" className="mt-0">
                  <div className="p-4">Nội dung danh sách hàng hóa</div>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;

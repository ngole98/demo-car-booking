"use client";
import React from "react";

import TripInfo from "./TripInfo";
import DriverInfo from "./DriverInfo";
import PassengerList from "./PassengerList";
import GoodList from "./GoodList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TripDetailsModalProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const TripDetailsModal: React.FC<TripDetailsModalProps> = ({
  isOpen,
  onOpenChange,
  trigger,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-[1240px] p-0 border-none max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col bg-white rounded-lg shadow-[0px_6px_16px_rgba(0,0,0,0.08),0px_3px_6px_-4px_rgba(0,0,0,0.12),0px_9px_28px_8px_rgba(0,0,0,0.05)] w-full">
          <DialogHeader className="p-0 text-left  bg-white z-10">
            <div className="flex justify-between items-center px-6 pt-4 pb-2 h-16">
              <DialogTitle className="text-xl font-bold">
                Chi tiết chuyến đi
              </DialogTitle>
              <DialogClose className="rounded-full p-1 hover:bg-slate-100">
                <X className="h-5 w-5" />
              </DialogClose>
            </div>
          </DialogHeader>

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
                    <GoodList />
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
                    <GoodList />
                  </TabsContent>
                </Tabs>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TripDetailsModal;

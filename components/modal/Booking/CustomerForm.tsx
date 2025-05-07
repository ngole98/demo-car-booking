"use client";
import React from "react";
import InputField from "./InputField";
import CheckboxOption from "./CheckboxOption";
import AccompanyingCustomer from "./AccompanyingCustomer";

interface CustomerData {
  fullName: string;
  phone: string;
  pickupPoint: string;
  dropoffPoint: string;
  ticketCount: number;
}

interface CustomerFormProps {
  customerData: CustomerData;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customerData }) => {
  return (
    <section className="flex flex-col flex-1 shrink p-4 rounded-lg basis-0 bg-neutral-100 min-w-60 max-md:max-w-full">
      <h2 className="text-base font-bold text-neutral-800 max-md:max-w-full">
        Thông tin khách hàng
      </h2>

      <div className="flex flex-wrap gap-4 items-end mt-4 w-full text-sm leading-loose max-md:max-w-full">
        <div className="w-[217px]">
          <InputField
            label="Số điện thoại"
            placeholder="0935 478 999"
            required
            value={customerData.phone}
          />
        </div>
        <div className="flex-1 shrink basis-0 min-w-60 text-neutral-800">
          <div className="flex gap-4 items-center w-full">
            <div className="flex flex-col justify-center self-stretch my-auto min-w-60">
              <div className="flex gap-2 items-center">
                <p className="self-stretch my-auto text-neutral-800">
                  Tên khách hàng
                </p>
                <p className="self-stretch my-auto font-bold text-neutral-800">
                  {customerData.fullName}
                </p>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/35d62e939e74083e379901a8cad3e303b7cacd63?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt="Customer info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-start mt-4 w-full text-sm leading-loose max-md:max-w-full">
        <InputField
          label="Số lượng vé"
          placeholder={customerData.ticketCount.toString()}
          required
          value={customerData.ticketCount.toString()}
          disabled
          className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full"
        />
      </div>

      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-end w-full max-md:max-w-full">
          <InputField
            label="Điểm đón"
            placeholder="Điểm đón"
            required
            value={customerData.pickupPoint}
            className="flex-1 shrink text-sm leading-loose basis-0 min-w-60 max-md:max-w-full"
          />
          <CheckboxOption label="Đón tại văn phòng" />
        </div>

        <div className="flex flex-wrap gap-4 items-end mt-4 w-full text-sm leading-loose max-md:max-w-full">
          <InputField
            label="Điểm trả"
            placeholder="Tại văn phòng"
            required
            disabled
            value={customerData.dropoffPoint}
            className="grow shrink min-w-60 w-[454px] max-md:max-w-full"
          />
          <CheckboxOption
            label="Trả tại văn phòng"
            customIcon="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/a7163dfabb8c3b067c5448e9d9eda2cf67ff4124?placeholderIfAbsent=true"
          />
        </div>
      </div>

      <AccompanyingCustomer index={1} />
      <AccompanyingCustomer index={2} />

      <button className="flex gap-2 items-center self-start mt-4">
        <div className="flex gap-2.5 justify-center items-center self-stretch px-1 my-auto w-6 h-6 border border-dashed border-[#1677FF] rounded-[50px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/611a5a8a49694346fc3cea2cc6bf12f85c8dcf16?placeholderIfAbsent=true"
            className="object-contain self-stretch my-auto w-4 aspect-square"
            alt="Add customer"
          />
        </div>
        <span className="self-stretch my-auto text-sm font-medium leading-loose text-blue-600">
          Thêm khách hàng đi kèm
        </span>
      </button>
    </section>
  );
};

export default CustomerForm;

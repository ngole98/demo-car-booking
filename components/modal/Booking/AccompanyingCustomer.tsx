"use client";
import React from "react";
import InputField from "./InputField";

interface AccompanyingCustomerProps {
  index: number;
}

const AccompanyingCustomer: React.FC<AccompanyingCustomerProps> = ({
  index,
}) => {
  return (
    <div className="flex relative gap-4 items-start p-4 mt-4 w-full bg-white rounded-lg max-md:max-w-full">
      <InputField
        label={`Tên khách đi kèm ${index}`}
        placeholder={`Tên khách đi kèm ${index}`}
        required
        className="z-0 flex-1 shrink text-sm leading-loose basis-0 min-w-60"
      />
      <InputField
        label="Năm sinh"
        placeholder="Năm sinh"
        className="z-0 flex-1 shrink text-sm leading-loose basis-0 min-w-60"
      />
      <div className="flex absolute right-0 -top-2 z-0 gap-2.5 justify-center items-center px-1 w-6 h-6 bg-red-200 rounded-[150px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/81f024e5acfaeb296fc51c5678a36942bedf387a?placeholderIfAbsent=true"
          className="object-contain self-stretch my-auto w-4 aspect-square"
          alt="Remove customer"
        />
      </div>
    </div>
  );
};

export default AccompanyingCustomer;

"use client";
import React from "react";
import RadioOption from "./RadioOption";

interface PaymentData {
  price: number;
  discount: number;
  total: number;
  paymentMethod: string;
}

interface PaymentSectionProps {
  paymentData: PaymentData;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ paymentData }) => {
  const formatPrice = (price: number) => {
    return `${price.toLocaleString()}₫`;
  };

  return (
    <aside className="flex flex-col justify-center min-w-60 w-[252px]">
      <section className="flex flex-col items-start p-4 w-full rounded-lg bg-neutral-100 max-w-[252px]">
        <h2 className="self-stretch w-full text-base font-bold text-neutral-800">
          Hình thức thanh toán
        </h2>

        <RadioOption
          label="Tài xế thu tiền"
          customIcon="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/580f6621e5ecc9ee1f227f354136dd061bc31fa6?placeholderIfAbsent=true"
          checked={paymentData.paymentMethod === "driver"}
        />
        <RadioOption
          label="Chuyển khoản ngân hàng"
          checked={paymentData.paymentMethod === "bank"}
        />
        <RadioOption
          label="Không thu tiền"
          checked={paymentData.paymentMethod === "none"}
        />
      </section>

      <section className="p-4 mt-2 w-full rounded-lg bg-neutral-100 max-w-[252px] text-neutral-800">
        <div className="flex gap-4 items-center w-full">
          <p className="flex-1 shrink self-stretch my-auto text-sm leading-loose basis-0 text-neutral-800">
            Giá tiền
          </p>
          <p className="flex-1 shrink self-stretch my-auto text-base font-medium text-right basis-0 text-neutral-800">
            {formatPrice(paymentData.price)}
          </p>
        </div>

        <div className="flex gap-4 items-center mt-2 w-full">
          <p className="flex-1 shrink self-stretch my-auto text-sm leading-loose basis-0 text-neutral-800">
            Giảm giá
          </p>
          <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto text-base font-medium text-right whitespace-nowrap basis-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/03df1760e09f531d5ec955d39814f18021ecb44e?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Discount"
            />
            <p className="self-stretch my-auto text-neutral-800">
              {formatPrice(paymentData.discount)}
            </p>
          </div>
        </div>

        <div className="mt-2 w-full border border-solid bg-zinc-300 border-zinc-300 min-h-px" />

        <div className="flex gap-4 items-end pt-2 mt-2 w-full font-bold">
          <p className="flex-1 shrink text-sm leading-loose basis-0 text-neutral-800">
            Thành tiền
          </p>
          <p className="flex-1 shrink text-lg leading-none text-right basis-0 text-neutral-800">
            {formatPrice(paymentData.total)}
          </p>
        </div>
      </section>
    </aside>
  );
};

export default PaymentSection;

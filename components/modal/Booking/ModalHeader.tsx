"use client";
import React from "react";

const ModalHeader: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-[#D9D9D9] max-md:px-5 max-md:max-w-full">
      <h1 className="flex-1 shrink self-stretch my-auto text-xl font-bold leading-snug text-black basis-0 max-md:max-w-full">
        Đặt vé
      </h1>
      <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto text-base text-right basis-0 min-w-60 max-md:max-w-full">
        <p className="flex-1 shrink self-stretch my-auto basis-0 text-neutral-800 max-md:max-w-full">
          Thời gian còn lại
        </p>
        <p className="self-stretch my-auto font-bold text-blue-600">05:43</p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c865954047fb4362ae8782a306aa88ab/e54d952f183eaaa113c97701ceedb68519af114b?placeholderIfAbsent=true"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt="Close icon"
      />
    </header>
  );
};

export default ModalHeader;

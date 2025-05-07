"use client";
import React from "react";

const ModalFooter: React.FC = () => {
  return (
    <footer className="mb-6 flex flex-wrap gap-4 items-center justify-end w-full text-base font-medium text-center whitespace-nowrap max-md:px-5 max-md:max-w-full">
      <button className="flex flex-col justify-center items-center self-stretch px-4 my-auto rounded-lg border border-solid border-[#D9D9D9] min-h-10 min-w-[100px] text-stone-900 w-[150px]">
        <span className="rounded text-stone-900">Cancel</span>
      </button>
      <button className="flex flex-col justify-center items-center self-stretch px-4 my-auto text-white bg-blue-600 rounded-lg min-h-10 min-w-[100px] w-[150px]">
        <span className="text-white rounded">Save</span>
      </button>
    </footer>
  );
};

export default ModalFooter;

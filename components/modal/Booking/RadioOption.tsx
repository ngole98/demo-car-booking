"use client";
import React from "react";

interface RadioOptionProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
  customIcon?: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  label,
  checked = false,
  onChange,
  customIcon,
}) => {
  return (
    <div className="flex gap-2 items-center mt-2">
      {customIcon ? (
        <img
          src={customIcon}
          className="object-contain shrink-0 self-stretch my-auto w-4 rounded aspect-square"
          alt="Radio button"
        />
      ) : (
        <div className="self-stretch my-auto w-4 rounded">
          <div className="flex shrink-0 w-4 h-4 bg-white rounded-full border border-solid border-[#D9D9D9]" />
        </div>
      )}
      <label className="self-stretch my-auto text-sm leading-loose text-stone-900">
        {label}
      </label>
    </div>
  );
};

export default RadioOption;

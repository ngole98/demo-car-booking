"use client";
import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  required = false,
  value,
  disabled = false,
  className = "",
}) => {
  const bgColor = disabled ? "bg-zinc-100" : "bg-zinc-50";

  return (
    <div className={`${className}`}>
      <div className="flex gap-1 items-center w-full">
        <label className="self-stretch my-auto text-stone-900">{label}</label>
        {required && (
          <span className="self-stretch my-auto text-red-600">*</span>
        )}
      </div>
      <div
        className={`flex gap-2 items-center px-3 mt-1 w-full rounded-lg border border-solid border-[#D9D9D9] min-h-10 ${bgColor}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 text-ellipsis bg-transparent outline-none ${
            value ? "text-stone-900" : "text-stone-300"
          }`}
        />
      </div>
    </div>
  );
};

export default InputField;

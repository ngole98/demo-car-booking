"use client";

import React, { useState } from "react";

const menuItems = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/1eb5ac5f5c0fb60aee7b92ce9ebd27575381257c?placeholderIfAbsent=true",
    label: "Menu",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/7e6654abcbd2ebedfb5f933ba9303916a3b13d33?placeholderIfAbsent=true",
    label: "Schedule",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/9b1451d347b01cb1eb44703fcdcf904c95a5e186?placeholderIfAbsent=true",
    label: "Car",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/18b9a0c1b9f1df2a624a19f305256808d204a2aa?placeholderIfAbsent=true",
    label: "Calendar",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/bab68335c5991099b124f85392497c7ee06f5167?placeholderIfAbsent=true",
    label: "Settings",
  },
];

export default function LeftMenu() {
  const [active, setActive] = useState(0);
  return (
    <aside className="h-full py-6 px-2 bg-white rounded-2xl shadow flex flex-col items-center w-20 min-w-[80px]">
      {/* Line ngăn cách */}
      <div className="h-8" />
      <div className="w-8 h-0.5 bg-[#E5E5E5] mb-4" />
      {/* Menu icons */}
      <div className="flex flex-col gap-2 w-full items-center">
        {menuItems.map((item, idx) => (
          <button
            key={item.label}
            onClick={() => setActive(idx)}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all
              ${
                active === idx
                  ? "bg-[#E6F7FF] border border-[#1677FF] shadow"
                  : "border border-transparent hover:bg-[#F0F9FF]"
              }
            `}
            aria-label={item.label}
          >
            <img
              src={item.src}
              alt={item.label}
              className={`w-7 h-7 object-contain transition-all
                ${
                  active === idx
                    ? "filter-[brightness(0)_saturate(100%)_invert(36%)_sepia(99%)_saturate(749%)_hue-rotate(183deg)_brightness(99%)_contrast(101%)]"
                    : "filter-none"
                }
                ${active === idx ? "text-[#1677FF]" : "text-[#222]"}
                group-hover:text-[#1677FF] group-hover:filter-[brightness(0)_saturate(100%)_invert(36%)_sepia(99%)_saturate(749%)_hue-rotate(183deg)_brightness(99%)_contrast(101%)]`}
            />
          </button>
        ))}
      </div>
    </aside>
  );
}

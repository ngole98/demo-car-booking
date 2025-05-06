"use client";

import React, { useState } from "react";

export interface NavigationItemProps {
  iconSrc: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface MenuLeftProps {
  onNavigationClick?: (index: number) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  iconSrc,
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-2 justify-center items-center pt-0 pb-24 mt-2 w-full h-10 rounded-lg min-h-10 cursor-pointer
        ${isSelected ? "bg-sky-100" : "bg-white"}`}
    >
      <div className="flex gap-2.5 items-center self-stretch my-auto w-4">
        <img
          src={iconSrc}
          className="object-contain self-stretch my-auto w-4 aspect-square"
          alt=""
        />
      </div>
    </div>
  );
};

const LeftMenu: React.FC<MenuLeftProps> = ({ onNavigationClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onNavigationClick?.(index);
  };

  const navigationItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/1eb5ac5f5c0fb60aee7b92ce9ebd27575381257c?placeholderIfAbsent=true",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/7e6654abcbd2ebedfb5f933ba9303916a3b13d33?placeholderIfAbsent=true",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/9b1451d347b01cb1eb44703fcdcf904c95a5e186?placeholderIfAbsent=true",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/18b9a0c1b9f1df2a624a19f305256808d204a2aa?placeholderIfAbsent=true",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/bab68335c5991099b124f85392497c7ee06f5167?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col px-2 pt-4 bg-white border-r border-solid border-r-[color:var(--Neutral-3,#F5F5F5)] max-w-[60px] pb-[880px]">
      <div className="flex gap-2.5 justify-center items-center self-center px-2 w-full h-8 bg-sky-100 rounded-lg border border-solid border-[color:var(--Primary-colorPrimary,#1677FF)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/95f33c95e5724b838c79f61a50cc437d/ba0e830cf332b3988c7f4467ada55728ad9bd667?placeholderIfAbsent=true"
          className="object-contain self-stretch my-auto w-4 aspect-square"
          alt=""
        />
      </div>

      <div className="mt-4 w-full">
        <div className="flex gap-1 items-center pr-2 w-full">
          <div className="flex-1 shrink self-stretch my-auto w-full border border-solid basis-0 bg-zinc-100 border-zinc-100 min-h-px" />
        </div>

        {navigationItems.map((item, index) => (
          <NavigationItem
            key={index}
            iconSrc={item.src}
            isSelected={selectedIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftMenu;

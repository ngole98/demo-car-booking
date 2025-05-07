import React from "react";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-8 bg-white border-b border-[#E5E5E5]">
      {/* Logo */}
      <div className="flex items-center gap-2 min-w-[120px]">
        <span className="font-bold text-2xl text-black">LOGO</span>
      </div>
      {/* Search + Right icons */}
      <div className="flex items-center gap-4 flex-1 justify-end min-w-0">
        {/* Search */}
        <div className="relative w-full max-w-[400px] min-w-[220px]">
          <input
            type="text"
            placeholder="Tìm kiếm theo SĐT/Mã đặt vé/Khách hàng"
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] text-[#888] placeholder-[#C4C4C4] focus:outline-none focus:border-[#1677FF]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4]">
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
              <circle cx="9" cy="9" r="7" stroke="#C4C4C4" strokeWidth="2" />
              <path
                d="M15 15L18 18"
                stroke="#C4C4C4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        {/* Notification */}
        <div className="relative">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#E5E5E5]">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2Zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 1 0-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 5 19h14a1 1 0 0 0 .71-1.71L18 16Z"
                fill="#BFBFBF"
              />
            </svg>
          </button>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#F5222D] rounded-full border-2 border-white"></span>
        </div>
        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#FFE58F] flex items-center justify-center">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="7" r="4" fill="#FAAD14" />
              <path d="M2 18c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="#FAAD14" />
            </svg>
          </div>
          <span className="text-[#595959] font-medium">User name</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Thay bằng <img src="/logo.svg" ... /> nếu có logo */}
          <span className="font-bold text-lg text-gray-700">Logo</span>
        </div>
      </div>
      {/* Tên hệ thống */}
      <div className="text-2xl font-bold text-gray-900 tracking-wide">
        Hệ thống đặt xe
      </div>
      {/* Các nút/phím chức năng */}
      <div className="flex items-center gap-4">
        {/* Ví dụ nút đăng nhập */}
        <button className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Đăng nhập
        </button>
        {/* Thêm các nút khác nếu cần */}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-green-600 shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://www.gtn.co.jp/wp-content/uploads/2020/04/default-user-image.jpg" alt="Logo" className="h-10 w-10 rounded-full mr-3" />
          <h1 className="text-white text-xl font-semibold">Attendance App</h1>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;

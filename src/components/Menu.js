import React, { useEffect } from 'react';

const Menu = () => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.has-dropdown');

    function handleDropdown(event) {
      event.stopPropagation();
      this.classList.toggle('is-open');
    }

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', handleDropdown);
    });

    document.addEventListener('click', () => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('is-open');
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('click', handleDropdown);
      });
    };
  }, []);

  return (
    <nav>
      <ul className="flex items-center justify-between py-2">
        <li className="relative has-dropdown">
          <a href="#" className="text-white px-4 py-2 hover:bg-green-500">Products</a>
          <div className="dropdown-menu absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible transform scale-95 transition-all duration-300">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 1</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 2</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 3</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Category 4</a>
          </div>
        </li>
        <li>
          <a href="#" className="text-white px-4 py-2 hover:bg-green-500">How It Works</a>
        </li>
        <li>
          <a href="#" className="text-white px-4 py-2 hover:bg-green-500">Pricing</a>
        </li>
        <li>
          <a href="#" className="text-white px-4 py-2 hover:bg-green-500">Blog</a>
        </li>
        <li>
          <a href="#" className="text-white px-4 py-2 hover:bg-green-500">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

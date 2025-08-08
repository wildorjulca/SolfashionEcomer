// components/ShopWithSidebar/SidebarClient.tsx
"use client";
import React, { useState, useEffect } from "react";
import CategoryDropdown from "@/components/ShopWithSidebar/CategoryDropdown";
import GenderDropdown from "@/components/ShopWithSidebar/GenderDropdown";
import SizeDropdown from "@/components/ShopWithSidebar/SizeDropdown";
import ColorsDropdwon from "@/components/ShopWithSidebar/ColorsDropdwon";
import PriceDropdown from "@/components/ShopWithSidebar/PriceDropdown";

const Sidebar = () => {
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const categories = [
    { name: "Desktop", products: 10, isRefined: true },
    { name: "Laptop", products: 12, isRefined: false },
    { name: "Monitor", products: 30, isRefined: false },
    { name: "UPS", products: 23, isRefined: false },
    { name: "Phone", products: 10, isRefined: false },
    { name: "Watch", products: 13, isRefined: false },
  ];

  const genders = [
    { name: "Men", products: 10 },
    { name: "Women", products: 23 },
    { name: "Unisex", products: 8 },
  ];

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    function handleClickOutside(event: MouseEvent) {
      if (!event.target || !(event.target instanceof Element)) return;
      if (!event.target.closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, [productSidebar]);

  return (
    <div
      className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
        productSidebar ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto" : "-translate-x-full"
      }`}
    >
      <button
        onClick={() => setProductSidebar(!productSidebar)}
        aria-label="Botón para alternar la barra lateral de productos"
        className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
          stickyMenu ? "lg:top-20 sm:top-34.5 top-35" : "lg:top-24 sm:top-39 top-37"
        }`}
      >
        <svg
          className="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z"
            fill=""
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z"
            fill=""
          />
        </svg>
      </button>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-1 rounded-lg py-4 px-5">
            <div className="flex items-center justify-between">
              <p>Filtros:</p>
              <button className="text-blue">Limpiar todo</button>
            </div>
          </div>
          <CategoryDropdown categories={categories} />
          <GenderDropdown genders={genders} />
          <SizeDropdown />
          <ColorsDropdwon />
          <PriceDropdown />
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
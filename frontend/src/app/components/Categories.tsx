import React from "react";
import styles from "@/app/styles/Categories.module.css";

const categories = [
  { name: "Thermometer", image: "/images/thermometer.jpg" },
  { name: "Surgical Masks", image: "/images/mask.jpg" },
  { name: "Stethoscope", image: "/images/stethoscope.jpg" },
  { name: "Blood Pressure Monitor", image: "/images/bp-monitor.jpg" },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-center">
        <img
          src="/images/category1.png"
          alt="Category 1"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 font-bold">Category 1</p>
      </div>
      <div className="text-center">
        <img
          src="/images/category2.png"
          alt="Category 2"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 font-bold">Category 2</p>
      </div>
      <div className="text-center">
        <img
          src="/images/category3.png"
          alt="Category 3"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 font-bold">Category 3</p>
      </div>
      <div className="text-center">
        <img
          src="/images/category4.png"
          alt="Category 4"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 font-bold">Category 4</p>
      </div>
    </div>
  );
};

export default Categories;

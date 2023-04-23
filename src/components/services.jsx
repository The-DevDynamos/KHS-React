import React, { useRef } from "react";


function Services() {
  const items = [
    "Our Services",
    "Heating & Ducts",
    "Plumbing",
    "Electrical",
    "Water Heaters",
    "Kitchen Appliances",
    "Garbage Disposal",
    "Whirlpool Tub",
    "Plumbing Stoppage",
    "Garage Opener",
    "Exhaust Fans",
    "Ceiling Fans",
    "AC (optional)",
    "Refrigerator (optional)",
    "Washer/Dryer (optional)",
    "Pool & Spa (optional)",
    "Central Vacuum (optional)",
    "Well Pump (optional)",
    "Roof Leaks (optional)",
    "Sump Pump (optional)",
    "Septic System (optional)",
    "Extra Fridge/Freezer (optional)"
  ];

  const servicesRef = useRef(null);

  const handleMouseLeave = () => {
    servicesRef.current.scrollTop = 0;
  };

  return (
    <div className="services" onMouseLeave={handleMouseLeave} ref={servicesRef}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

import React from "react";
import PhoneCard from "./PhoneCard";

const PhonesContainer = ({ phones }) => {
  console.log(phones);
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone}></PhoneCard>
      ))}
    </div>
  );
};

export default PhonesContainer;

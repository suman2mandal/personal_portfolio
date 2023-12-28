import React from "react";
import Image from "next/image";
import CursoreAnimate from "@/components/CursoreAnimate";

function Banner() {
  return (
    <>
      <div className="p-6 pt-28 flex flex-col justify-center" id="About">
        <CursoreAnimate/>
      </div>
    </>
  );
}

export default Banner;
